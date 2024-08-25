
# Programmable Vertex Pulling with SSBOs

使用 OpenGL 的旧方法，需要以驱动程序可以理解和使用的格式发送 pos, uv, normal 等数据。这意味着要使用 VBO 和 VAO 等。  
通过 Programmable Vertex Pulling，我们将完全摆脱 VBO 和 VAO，并使用我们自己的数据格式，并在着色器中手动解包数据。  
这为我们如何构建数据提供了很大的灵活性，并且在未来讨论其他高级技术的文章中将非常有用。


## Old Method

让我们首先看一个示例，了解如何使用旧方法 pack up the vertices to send to the GPU in a stream

```cpp
// Data is laid out as 3 positions, 2 uvs, 3 normals, repeat
std::vector<float> vertices;
// ... code to fill vertices with vertex data ...

GLuint vbo;
glGenBuffers(1, &vbo);

// Bind and upload data
glBindBuffer(GL_ARRAY_BUFFER, vbo);  
glBufferData(GL_ARRAY_BUFFER, vertices.size(), (const void *)vertices.data(), GL_STATIC_DRAW);

// Tell OpenGL how to interpret the data and where it should be linked to

// Positions
glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)0);
glEnableVertexAttribArray(0);

// UVs
glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)(3 * sizeof(float)));
glEnableVertexAttribArray(1);

// Normals
glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)(5 * sizeof(float)));
glEnableVertexAttribArray(2);

// Bind program and draw
glUseProgram(program);

glDrawArrays(GL_TRIANGLES, 0, vertices.size());

// Unbind
glUseProgram(0);
glBindBuffer(GL_ARRAY_BUFFER, 0);
```

```glsl
#version 330 core

layout (location = 0) in vec3 position;
layout (location = 1) in vec2 uv;
layout (location = 2) in vec3 normal;

uniform mat4 projection;
uniform mat4 view;

out vec2 fsUv;
out vec3 fsNormal;

void main()
{
    gl_Position = projection * view * vec4(position, 1.0);

    fsUv = uv;
    fsNormal = normal;
}
```


## New Method - Programmable Vertex Pulling with SSBOs

This will work for both indexed and non-indexed drawing and can be extended to further support multi-draw indirect commands.   
In the above example we put all the data into a vector of floats, then sent it to an OpenGL array buffer and told OpenGL how it was supposed to 
interpret the data and which locations it was supposed to send it to.   
With programmable vertex pulling we do away with that and instead manually unpack our data in the shader.

这样做的好处是，在解释数据时，我们可以摆脱 OpenGL 的干扰，而是直接编写代码来处理数据，就像我们使用 C++ 所做的那样，但现在是在 GLSL 中。
这为我们提供了很大的灵活性，无论是顶点数据还是其他数据，这些数据将在未来的文章中讨论。

```cpp
// We use arrays of floats since they will be tightly packed with the
// layout std430 qualifier
struct VertexData {
    float position[3];
    float uv[2];
    float normal[3];
};

// (inside either main or a different function)
std::vector<VertexData> vertices;
... populate vertices with either hardcoded data or data you load from a file ...

// Create and fill the mesh data buffer
GLuint vertexDataBuffer;
glCreateBuffers(1, &vertexDataBuffer);

glNamedBufferStorage(vertexDataBuffer, 
                     sizeof(VertexData) * vertices.size(),
                     (const void *)vertices.data(), 
                     GL_DYNAMIC_STORAGE_BIT);

// Bind the buffer to location 0 - matches (binding = 0) for ssbo1 in the
// vertex shader listed below
glBindBufferBase(GL_SHADER_STORAGE_BUFFER, 0, vertexDataBuffer);

// Bind program and draw
glUseProgram(program);

glDrawArrays(GL_TRIANGLES, 0, vertices.size());

glUseProgram(0);

// Uncomment if you want to explicitly unbind the resouce
//glBindBufferBase(GL_SHADER_STORAGE_BUFFER, 0, 0);
```

在顶点着色器内部，我们将使用名为`gl_VertexID`的内置输入。
当使用 non-indexed drawing（例如`glDrawArrays`时, `gl_VertexID` 将等于当前 vertex index。当使用 indexed drawing（例如`glDrawElements`时， `gl_VertexID` 将等于 element array buffer 中的当前索引。

```glsl
#version 460 core

// This matches the C++ definition
struct VertexData {
    float position[3];
    float uv[2];
    float normal[3];
};

// readonly SSBO containing the data
layout(binding = 0, std430) readonly buffer ssbo1 {
    VertexData data[];
};

uniform mat4 projection;
uniform mat4 view;

// Helper functions to manually unpack the data into vectors given an index
vec3 getPosition(int index) {
    return vec3(
        data[index].position[0], 
        data[index].position[1], 
        data[index].position[2]
    );
}

vec2 getUV(int index) {
    return vec2(
        data[index].uv[0], 
        data[index].uv[1]
    );
}

vec3 getNormal(int index) {
    return vec3(
        data[index].normal[0], 
        data[index].normal[1], 
        data[index].normal[2]
    );
}

out vec2 fsUv;
out vec3 fsNormal;

void main()
{
    gl_Position = projection * view * vec4(getPosition(gl_VertexID), 1.0);

    fsUv = getUV(gl_VertexID);
    fsNormal = getNormal(gl_VertexID);
}
```

No more VBOs or VAOs. Nice!