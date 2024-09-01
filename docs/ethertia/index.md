
# Project Ethertia


### Goal

1. 3D, Highend Graphics & Physics simulation. (mainly in PC or Desktop platforms.)
2. Voxel (Building, Demolish)
3. Lightweight & Simplicity
4. Networking


## Solution

### Commercial Engines?
使用现有大型商业引擎吗？(Unity, Unreal, Godot)

不。可以用他们做Prototype测试，但最终还是想自己写 控制核心结构 + 使用现有库和中间件。  
即使使用他们可以在短期内获得巨大增益和效率 使用现有工具链。因为我们目标之一 也是对工程力的追求。

- Unity: 界面&概念友好 直觉 易上手。
- Unreal: 性能强 视觉效果强
- Godot: 开源免费自由


### 魔改引擎?


### 自写引擎?

- C++
- Rust + Bevy
- C# call C++, C, Rust
- JVM(Kotlin) call C++, C, Rust




### Choosing Game Engine?

- Self
    - C++ & Vulkan
    - Rust & Wgpu
    - C#
- Third
    - Bevy
- Commercial
  - Unity
  - Unreal
  - Godot


### Choosing Graphics API?

- OpenGL (3 or 4)
- Vulkan
- Wgpu
- DirectX
- Metal

#### UI

- ImGui

### Choosing Physics Engine?

- PhysX
- Jolt
- Bullet

### Core, Math

- glm
- eastl


### ECS?

- EnTT
- BevyECS

### Networking?

- GRPC
- ENet

### Audio?

- OpenAL
- Wwise

### Scripting?

- Lua
- Angel Script
- Rhai

### Storage

- json
- bindary
- KeyValue: LevelDB


### Misc

- XR
- File Dialog
- Assets Loader: (image, mesh, sound, font, )
- Debug (Optick Profiler, )
- Window: 






::: details Name Origin

"Ethertia · 以太效應" 名字由来：Aether + Aria

在我15岁时 痴迷于 Minecraft 1.7, 当时我有一些神奇的幻觉 发生在清醒时或睡梦中或是介于两者的冥冥之中. 我想实现那些幻想 via Ethertia. 

或许一些信息和念想来自于*阿卡系记录/零点场/以太*，如果使用某种方法 能够连接以太 或许就可以进入对应世界

然而零点场/以太的力量也是空前巨大的 它是虚空的 不可见的 神秘莫测的 但又是极为强大的。就如 Ethernet 以太网 名字一样。
可能会引发真空衰变坍缩

:::
