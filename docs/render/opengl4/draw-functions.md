
# All Draw Functions in OpenGL 4.6

截止目前最新的 OpenGL 4.6，共有这些DrawCall函数:
![img.png](res/gl46-all-drawfuncs.png)

总的来说可以被分为 Direct (数据来自CPU) 和 Indirect (数据来自GPU)。

## Direct

### (Basic) Draw

```cpp
// Draw (Non-Indexed)
void glDrawArrays( GLenum mode, 
                   GLint first, 
                   GLsizei count );  // since GL 2.0
glDrawArrays(GL_TRIANGLES, 0, 6);

// Draw Indexed
void glDrawElements( GLenum mode, 
                     GLsizei count, 
                     GLenum type, 
                     const void * indices );  // since GL 2.0
glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);  

```

### Multi Draw

```cpp
void glMultiDrawArrays(	GLenum mode,
                        const GLint * first,
                        const GLsizei * count,
                        GLsizei drawcount);  // since GL 2.0
void glMultiDrawElements(   GLenum mode,
                            const GLsizei * count,
                            GLenum type,
                            const void * const * indices,
                            GLsizei drawcount);
                        
                        
// 相当于
void glMultiDrawArrays(...) {
    for (int i = 0; i < drawcount; ++i) {
        if (count[i] > 0)
            glDrawArrays(mode, fisrt[i], count[i]);
    }       
}
void glMultiDrawElements(...) {
    for (int i = 0; i < drawcount; ++i) {
        if (count[i] > 0)
            glDrawArrays(mode, count[i], type, indices[i]);
    }       
}
```
MultiDraw中所有物体渲染使用相同的 ShaderProgram


## Indirect



### Resources

> https://www.bilibili.com/read/cv1823723/