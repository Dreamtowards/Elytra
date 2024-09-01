
# Graphics

## Overview

### I. Postmodern OpenGL 4 Series <sup>后现代OpenGL4系列</sup>  <!-- style="font-weight: 500" -->

虽然 OpenGL 在现代 Vulkan, DX12, Wgpu 大行其道势如破竹的时候，可能有些过时了。但它仍然是趁手的，对个体开发者有生产力的。  
本系列讲介绍 GL4 高级特性。可能需具备 GL3 基础。 

1. [**All Draw Functions**](opengl4/draw-functions)  
所有 Draw 函数，从基本的 glDrawArrays/Elements，到 MultiDraw, Instancing, Indirect, MultiDraw Indirect MDI, Transform Feedback..
2. [**Shader Storage Buffer Objects. SSBOs**  ](opengl4/ssbo)  
SSBO 可用于shader之间传输(读/写)大量数据, 也可用于CPU和shader之间传输大量数据。
3. [**Programmable Vertex Pulling with SSBOs**](opengl4/programmable-vertex-pulling)  
摆脱 VBO, VAO, etc. 使用特制的数据格式，在着色器中手动解包数据
4. [**Bindless Texture**](opengl4/bindless-texture)  
Bindless texture 允许 shader 直接通过 integer handle, (从SSBOs中)访问大量 textures, 而无需 bind texture unit.
5. [**Compute Shader**](opengl4/compute-shader)  
Compute Shader 独立于渲染管线，可用于并行计算。本文介绍了 Compute Space (WorkGroups, LocalSizes), Invocations, Barriers, Dispatch 等基本概念
6. **MultiDraw Indirect. MDI**  
MultiDraw 与 Indirect. Command 录制 & 多帧复用，实例。
7. **Tessellation Shader**  
细分曲面
8. **Direct State Access. DSA**  
性能对比，简要概述总结，和一些示例

::: details Resoueces
- [Khronos OpenGL4.6 Quick Reference Card](https://www.khronos.org/files/opengl46-quick-reference-card.pdf)
- [Guide-to-Modern-OpenGL-Functions by fendevel](https://github.com/fendevel/Guide-to-Modern-OpenGL-Functions)
- [GL Wrapper by Luna](https://github.com/Luna5ama/gl-wrapper/blob/main/shared/src/main/kotlin/dev/luna5ama/glwrapper/objects/FramebufferObject.kt)
- https://github.com/PacktPublishing/3D-Graphics-Rendering-Cookbook
- https://juandiegomontoya.github.io/modern_opengl.html
- https://blog.mecheye.net/2020/06/modern-graphics-apis-1-intro/
- https://alain.xyz/blog/a-review-of-shader-languages
- https://alain.xyz/blog/unreal-engine-architecture
- https://alain.xyz/blog/game-engine-architecture
- https://alain.xyz/blog/realtime-renderer-architectures
- [Vertex Pooling Voxels](https://nickmcd.me/2021/04/04/high-performance-voxel-engine/)
:::

### II. Modern Graphics APIs

1. **Vulkan Review**  
快速过一遍Vulkan 1000行的Hello Triangle
2. **OpenGL4 Review**  
100行 OpenGL 4.6, Hello Triangle. GLFW+GLAD+Cpp20
3. **Wgpu Review**  
快速过一遍Wgpu 200 行的 Hello Triangle。对比和 OpenGL, Vulkan 的性能。
4. **DirectX 12 Review**
5. **DirectX 9 Review**
6. **Comparison**
---

1. **Vulkan 1.3 Dynamic Rendering**  
使用DynamicRendering特性化繁为简，去除针对Tiling GPU的依赖，去除RenderPass Framebuffer
2. **DirectX 12 Task Graph**  
DX12 TaskGraph 分析。

---

1. **Virtual Textures**  
2. **Render Graph**
2. **Virtual Geometry**<sup>(Nanite/Meshlet)</sup>

### III. GFX

1. **Atmosphere (Rayleigh Scattering)**  
大气Rayleigh散射渲染
2. **Volumetric Fog & Light**    
体积雾
3. **Rectilinear Texture Warping Shadow Mapping. RTWSM**  
结合EyeFish扭曲矫正，对比CSM联级阴影
4. **Volumetric Clouds**  
体积云
5. Isosurface + ComputeShader  
CS GPU端即时生成 Isosurface Mesh
6. ComputeShader + Instancing Massive Stars Rendering [nbodysim](https://github.com/timokoesters/nbodysim)  
大量小行星渲染&积分
6. RayMarching Voxels  
7. Skeleton Animation


::: details Lighting Model
https://alain.xyz/blog/advances-in-material-models#lambertian
- Lambertian [Heinrich Lambert 1982]
- Phong [Tuong Phong 1975]
- Blinn-Phong [F. Blinn 1977]
- Schlick [Schlick 1994]
- GGX [Walter et al. 2007] [Karis 2013]
- Disney [Burley 2012]
- Smith Microfacet [Heitz et al. 2016]


- https://github.com/diharaw/volumetric-fog
- https://bartwronski.com/wp-content/uploads/2014/08/bwronski_volumetric_fog_siggraph2014.pdf
- https://github.com/JuanDiegoMontoya/GLest-Rendererer/blob/5d15c65af3090dd23762a5f9ec49c911fef9812d/glRenderer/Resources/Shaders/volumetric.fs
- https://developer.nvidia.com/gpugems/gpugems3/part-ii-light-and-shadows/chapter-13-volumetric-light-scattering-post-process

- https://alain.xyz/blog/ray-tracing-denoising
- https://alain.xyz/blog/raw-opengl
- https://alain.xyz/blog/raw-directx12
- https://alain.xyz/blog/raw-webgpu
- https://alain.xyz/blog/raw-vulkan
- https://alain.xyz/blog/ray-tracing-filtering
- https://alain.xyz/blog/noise-generation-survey


- Bokeh: https://www.scratchapixel.com/lessons/digital-imaging/simple-image-manipulations/bookeh-effect.html
:::