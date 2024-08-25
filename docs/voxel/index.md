
# Voxel

<!-- 欢迎来到这个体素系列， -->

<!-- ::: details 这家伙是谁? 
我是沙盒体素游戏 Ethertia 的开发者，从13岁开始接触 Minecraft 一发不可收拾。
::: -->


## Overview

<!-- 以下是文章结构、以便您找到感兴趣或需要的。无太多依赖关系，如果有 也会指出依赖哪些。 -->

### I. Storage

1. [**Runtime Store**](storage/runtime-store) (Memory)  
运行时 体素内存方案, 包括 Chunks<sup>(UniformGrid)</sup>, SVO<sup>(Pointerless)</sup>, SDF
2. [**Persistent Store**](storage/persistent-store) (Disk)  
存盘时 体素存储方案，包括Palette, RLE, NBitArray，KeyValueDB, IO Region.
3. [**Extendable Id System**](storage/id-system)  
高扩展&性能良好的ID系统, 可肆意插入新id 不造成冲突且数字id紧密有序排列。结合StrId永久全局ID和NumId运行时临时Id。
4. **Unaligned Voxel Systems** (Multi, Dynamics Support)  
非轴对齐的体素系统，可缩放旋转 实现精细雕塑、建筑，甚至体素生物。6DOF动力学物理碰撞支持。

### II. Rendering

1. **LoD**  
降采样生成Mesh、空间划分八叉树、缓存LoD与更新、网络同步方案。
2. **Culling**  
Chunks连通性剔除、
3. **Ray Marching**  
64叉树加速结构 DDA加速RayBoxTest&遍历 GPU内存精简 
4. **Isosurface**  
平滑表面生成；SurfaceNets, Dual Contouring, Marching Cubes, Transvoxel 算法
3. **Voxel Global Illumination**  
针对体素的全局光照方案

### III. Simulating

1. **Flooding**  
液体流淌 MC基本款，或Noita窍门款，或John Lin的水压款。
2. **Lighting**  
包含像MC那样的天光、点光源传播方法。
3. **Connectivity**  
断裂检测
4. **Fire Spread**  
火焰传播
5. **Explosion**   
爆炸类型 强度与形状
6. **Voxel Collision Detection**  
体素碰撞检测。包含最基本的MC-like 轴对齐体素vs轴对齐盒位置挤出，  
到Teardown的非对齐6DOF动力学 MTV全碰撞信息碰撞检测 预处理角边面特征检测优化。
6. *PhysX Integration* (番外)  
自定义体素碰撞检测，集成到 PhysX 物理引擎，以提高性能和准确性。


### IV. Procedural WorldGen

1. **Noise**  
多种噪声类型的特点 (Perlin, Simplex, Value, Celluar)，组合噪声。
2. **Biomes**  
根据温度湿度确立的Biomes，边缘过渡
3. **L-system**  
L-system在建筑生成的用法与原理，结合表达式定义生产过程。参考 Miguel Cepero 的生成方法。
4. **Wave Function Collapse, WFC**  
WFC生成建筑
5. *Minecraft 地形生成分析* (番外)  
刨析Minecraft地形生成过程 老方法与新方法


### Misc

- Rendering Massive Voxel Terrain. 大规模体素地形渲染
- Minecraft 性能优化模组分析 (Sodium, OptiFine)
- Teardown 技术分析
- Dauglas Voxel 技术分析
- Gore Voxel 技术分析
- Xima Voxel 技术分析