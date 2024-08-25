
# SSBO. Shader Storage Buffer Object.

SSBO, 可用于shader之间传输(读/写)大量数据, 也可用于CPU和shader之间传输大量数据。

## Features

SSBO与UBO很相似，它们都是Buffer，且在 Shader (GLSL Interface Block) 中的定义方式几乎相同 (binding points). 除了这几点区别:

1. **大量数据传输**：SSBO的存储容量要比UBO大得多，OpenGL规范[保证](https://www.khronos.org/opengl/wiki/Shader_Storage_Buffer_Object#:~:text=The%20OpenGL%20spec%20guarantees%20that,can%20be%20up%20to%20128MB.)
SSBO可以支持最大128MB的存储空间 (实际可能更大 取决于具体设备和实现; 实践上 SSBO可以分配所有可用GPU的所有可用内存) 而UBO 规范保证至少支持16KB.

2. **可写性 & 原子操作**: shader可以对SSBO中的数据进行读写操作。包括用于 GPU 核心之间数据同步的atomic原子读+写操作。这与UBO不同，UBO通常只能在着色器中读取，无法修改。
3. **可变存储 无需编译时确定size**: SSBO可在运行期确定size 可存储长度可变的数组；而UBO必须在编译期就确定好大小，不支持运行时的动态调整。
4. **SSBO访问速度更慢**: 由于SSBO的灵活性和写入功能，其访问速度相对较慢。SSBO的读写操作类似于访问 buffer textures (GPU global memory)，需要处理无序内存访问，因此需要适当的内存屏障来确保数据一致性。
UBO的数据访问通过内部shader-accessible内存来读 (GPU constant memory)，通常访问速度较快。显卡对常量内存的访问速度比全局内存快得多。UBO最差的情况下也不会比SSBO慢。

<!-- ### SSBO vs UBO
1. Uniform Buffer 对于 GPU 是只读的，而 SSBO 是可读可写的。包括用于 GPU 核心之间数据同步的atomic原子读+写操作。
2. SSBO 可分配的内存比 uniform buffers 要大得多, in practice up to the total size of all available GPU memory can be allocated for use.
3. Shader storage buffers have access to the std430 layout in GLSL which is an improvement over the old std140 layout.
4. Inside of a shader written in GLSL, an SSBO can be specified with variable length instead of having to know ahead of time what the size will be.
.
5. The spec warns that speed of accessing data in an SSBO may be lower than for a uniform buffer.
- VBO（Vertex Buffer Object）：主要用于存储顶点数据，通常只能在顶点着色器中访问。 -->

### Use cases

- 存储复杂的场景数据：如光照计算中使用的光源数组、物理计算中使用的粒子系统数据等。
- 计算着色器：在计算着色器中，SSBO常用于存储需要大量并行处理的数据。
- 实例化绘制：在绘制大量实例化对象时，SSBO可以存储每个实例的变换矩阵等数据。

## Creating and using a SSBO

For this example, let’s say we are performing instanced drawing using `glDrawArraysInstanced` and we want to pass in all of the model matrices for each instance as a shader storage buffer.

```cpp
GLuint ssbo;
glCreateBuffers(1, &ssbo);

// using DSA
glNamedBufferStorage(ssbo, 
                     sizeof(glm::mat4) * instancedModelMatrices.size(), 
                     (const void *)instancedModelMatrices.data(), 
                     GL_DYNAMIC_STORAGE_BIT);
```
> It is important to keep in mind that once glNamedBufferStorage has been used, the size of the GPU memory region for the buffer is fixed for the rest of the ssbo's life span. 
We are allowed to dynamically read and write data into that region (via glBufferSubData), but we can’t resize it.

由于我们使用 GL_DYNAMIC_STORAGE_BIT 作为 usage flag，我们可以在之后使用 glBufferSubData 来修改数据 (但不能resize). 更多, 见: [ktstephano](https://ktstephano.github.io/rendering/opengl/ssbos#:~:text=The%20last%20parameter%20to%20glNamedBufferStorage%20is%20the%20usage%20flag.%20The%20following%20are%20the%20available%20options%3A), [KHR](https://registry.khronos.org/OpenGL-Refpages/gl4/html/glBufferStorage.xhtml)

In order to use the buffer for instanced rendering in the vertex shader, we will set it up like this:

```glsl{11,18}
#version 460 core

// Passed in like normal using a vertex array object
layout (location = 0) in vec3 position;
layout (location = 1) in vec2 texCoords;

uniform mat4 projection;
uniform mat4 view;

// SSBO containing the instanced model matrices
layout(binding = 2, std430) readonly buffer ssbo1 {
    mat4 modelMatrices[];
};

smooth out vec2 fsTexCoords;

void main() {
    gl_Position = projection * view * modelMatrices[gl_InstanceID] * vec4(position, 1.0);
    fsTexCoords = texCoords;
}
```

Here we are specifying the ssbo1 shader storage buffer binding point. We mark it as readonly so that the shader is not allowed to write to it.
如果我们省略`readonly`，so that it read `layout(binding = 2, std430) buffer ssbo1`，则着色器将能够读取和写入缓冲区（有关更多信息，请参阅下文）。

We set the binding point to 2 so that when we get around to binding the buffer in C++ code, we will bind it to location 2.

We set the packing layout to std430 which determines how data is laid out in memory (see below for more information)

Finally, notice that modelMatrices[] is specified without an exact size. This is intentional since SSBOs do not require us to tell the shader the size of the array ahead of time. This means that an array of any length can be bound to binding point 2.

这里要注意的主要事情是，我们通过 gl_InstanceID 内置着色器变量对 modelMatrices 进行索引。
当使用像glDrawArraysInstanced这样的命令时，gl_InstanceID 将始终是当前的绘制实例的index，or will be 0 if a non-instanced draw command was used.

::: tip Memory Qualifiers
- `buffer`: Shader can both read and write to the buffer memory
- `readonly buffer`: Shader can only read from the buffer memory
- `writeonly buffer`: Shader can only write from the buffer memory
For a full list of qualifiers, [see this page](https://www.khronos.org/opengl/wiki/Shader_Storage_Buffer_Object).
:::

::: tip std430 packing layout rules

[see](std430 packing layout rules)
:::


## Binding and Drawing

```cpp
// Bind the storage buffer
// Note the 2 matches our binding = 2 in the vertex shader
glBindBufferBase(GL_SHADER_STORAGE_BUFFER, 2, modelMatricesBuffer);

// Bind our shader program
glUseProgram(shader);

// Set up matrices
glUniformMatrix4fv(
    glGetUniformLocation(shader, "projection"), 1, GL_FALSE, projectionMat
);
glUniformMatrix4fv(
    glGetUniformLocation(shader, "view"), 1, GL_FALSE, viewMat
);

// Bind VAO for positions and uv coordinates
glBindVertexArray(vao);

// Perform instanced drawing
glDrawArraysInstanced(
    GL_TRIANGLES, 0, numVertices, instancedModelMatrices.size()
);

glBindVertexArray(0);
glUseProgram(0);

// Uncomment if you want to explicitly unbind the resouce
//glBindBufferBase(GL_SHADER_STORAGE_BUFFER, 2, 0);
```

### Unbinding? Using with multiple shaders?

使用 `glBindBufferBase` 之后通常不需要显式 unbind buffer。
您可以随时通过使用相同的 binding index 但使用不同的 SSBO 再次调用该函数来覆盖现有绑定。

如果您希望多个 shader 使用相同的 SSBO，只需在每个着色器中指定完全相同的着色器存储绑定即可。
Then you can call `glBindBufferBase` once with the index and proceed to use it with multiple shader programs in a row.

## Resources

- https://www.khronos.org/opengl/wiki/Shader_Storage_Buffer_Object
- https://ktstephano.github.io/rendering/opengl/ssbos
- https://www.khronos.org/opengl/wiki/Shader_Storage_Buffer_Object
- https://juejin.cn/post/7186535791093350461
- https://developer.huawei.com/consumer/cn/forum/topic/0204393528146900119