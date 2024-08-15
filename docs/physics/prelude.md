
# Prelude


## Famous Physics Engines


Name | Features                            | Used by | License 
--- |-------------------------------------| --- | --- 
[PhysX](https://github.com/NVIDIA-Omniverse/PhysX)<sup>by NVIDIA</sup> | 性能: GPU 加速; 多线程加速; <br>功能: 流体 布料 粒子 | Unity, Unreal, Godot | 开源 BSD3<br>免费使用
[JoltPhysics](https://github.com/jrouwe/JoltPhysics)<sup>by Jorrit Rouwe</sup> | 性能: 激进多线程加速<br>新秀 | [Horizon Forbidden West](https://en.wikipedia.org/wiki/Horizon_Forbidden_West).<sup>Sony IE.</sup> [Hazel](https://hazelengine.com/) | MIT
[BulletPhysics](https://github.com/bulletphysics/bullet3)<sup>by Erwin Coumans</sup> | 性能: 没有Jolt或PhysX快<br>老牌 机器人拟真 | GTA-V, Maya, [ETS-II](https://en.wikipedia.org/wiki/Euro_Truck_Simulator_2) | MIT
[Avian (BevyXPBD)](https://github.com/Jondolf/avian)<sup>by Joona Aalto</sup> | ECS | Bevy | MIT
[Box2d](https://box2d.org/documentation/hello.html)<sup>by Erin Catto</sup> | Seqential Impulse 求解器 | Angry Birds, Limbo, Crayon Physics Deluxe | MIT
[Havok](https://en.wikipedia.org/wiki/Havok_(software)) | | The Elder Scrolls V: Skyrim, Assassin’s Creed| 


## Physics Engine Features: 


- RigidBody
- SoftBody: cloth.
- Fluid: simulates liquids as well as the flow of fire and explosions through the air.
- Particle
- Cloth & Rope
- Destruction
- Islands
- CCD

### Position-based (XPBD) vs Velocity-based


### Continuous vs Discrete (CCD vs DCD)

#### Continuous Collision Detection

目标: 连续碰撞检测的目标是确保在物体运动过程中，即使是在两个离散时间步之间，也能准确检测到所有可能的碰撞，防止物体穿透其他物体。

应用场景: 适用于高速移动的物体，例如子弹、快速旋转的物体、车辆等，特别是在物体之间可能存在大相对速度的情况下。

#### Time of Impact, TOI


#### CCD - 

[Tunneling (CCD vs DCD)](https://www.youtube.com/watch?v=hKAYDg9Rswk)

- https://digitalrune.github.io/DigitalRune-Documentation/html/138fc8fe-c536-40e0-af6b-0fb7e8eb9623.htm


### Integrator

Semi-implicit Euler

## Physics Engine Lifecycle

### 0. 初始化 (Initialization)

数据结构: 初始化存储物理对象、碰撞体、约束和世界状态的必要数据结构。
配置参数: 设定引擎参数，如时间步长、重力、物理精度、最大迭代次数等。

### 1. 物理对象的更新 (Object Update)

- 力与速度的更新: 根据外力（如重力、风力、用户输入）更新每个物体的线速度和角速度。
- 物体状态更新: 更新物体的位置、旋转以及相关的状态信息。

### 2. 碰撞检测 (Collision Detection)

#### Broadphase

- 对所有物体进行初步的碰撞检测，将可能相互碰撞的物体对筛选出来，减少后续计算的工作量。
- 常用的算法包括网格划分、AABB（轴对齐边界框）、BVH（包围体层次结构）等。

#### Narrowphase

- 对在宽相位中筛选出的物体对进行更精确的碰撞检测，计算出碰撞点、法线、渗透深度等详细信息。
- 使用的技术包括GJK（Gilbert-Johnson-Keerthi）算法、SAT（分离轴定理）等。

### 3. Collision Response

碰撞处理: 根据碰撞检测的结果计算物体的响应，包括反弹、摩擦、冲量等。

位置和速度修正: 修正物体的位置和速度，以避免物体间的穿透，并确保物体在物理上是合理的。

### 4. 求解约束 (Constraint Solving)

位置约束 (Position Constraints): 调整物体的位置，以满足指定的几何约束（如关节、铰链）。

速度约束 (Velocity Constraints): 调整物体的速度，以满足运动学约束（如速度限制、动力学条件）。

XPBD等算法: 使用扩展投影约束法（XPBD）等算法处理复杂的约束求解，以确保系统的稳定性和一致性。

### 5. 物理模拟的时间步 (Time Stepping)

固定时间步长 (Fixed Time Step): 使用固定的时间步长来更新物理状态，确保模拟的稳定性。

多步模拟 (Sub-Stepping): 对某些高速场景或极端情况下，使用多次细化的时间步长来提高模拟精度。

### 6. 对象的生命周期管理 (Lifecycle Management)

对象创建与销毁: 管理物理对象的动态创建与销毁，保证物理引擎内存的高效使用。

睡眠与唤醒: 对静止的物体进行睡眠处理，以节省计算资源。当外力或碰撞影响时，重新唤醒物体。


::: code-group

```cpp [C++]

void StepSimulation() {

    PredictUnconstraintedMotion();

    PerformDiscreteCollisionDetection();

    CalculateSimulationIslands();

    SolveConstraints(delta);

    IntegrateTransforms(delta);

    UpdateActivationState(delta);
}
```

```rust [Rust]

fn step_simulation(self, f32 delta) {

    predict_unconstrainted_motion(self, delta);

    perform_discrete_collision_detection(self);

    // calculate_simulation_islands();

    solve_constraints(delta);

    integrate_transforms(delta);

    // update_activation_state(delta);
}

fn predict_unconstrainted_motion(self, f32 delta) {
    
    for body in self.objects {

        body.apply_force(self.gravity * body.mass);

        body.refresh_inertia_tensor_world();  // update invInertiaTensorWorld. used in subsequent calculations.
        
        body.integrate_velocities(delta);

        body.perform_damping(delta);

        body.clear_forces();
    }
}

fn perform_discrete_collision_detection(self) {

    update_aabbs();

    self.broadphase.calculate_overlapping_pairs();

    self.collision_manifolds = self.narrowphase.detect_collisions(broadphase.get_overlapping_pairs());
}

fn solve_constraints(self) {

    constraint_solver.solve_group(self.objects, self.collision_manifolds, delta);
}

fn integrate_transforms(self) {
    
    for body in self.objects {
        body.transform.integrate(body.linear_velocity, body.angular_velocity, delta);
    }
}
```
:::