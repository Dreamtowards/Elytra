
# Physics Engine Dev

编写一个物理引擎

在开始之前，或许我们该了解，物理引擎有哪些种类。

- [PhysX](https://github.com/NVIDIA-Omniverse/PhysX) NVIDIA 开发的物理引擎，Unity Unreal 的默认物理引擎。
- [JoltPhysics](https://github.com/jrouwe/JoltPhysics) 新秀，已被商业游戏"Horizon Forbidden West"使用，多线程，部分性能测试甚至高过PhysX
- [BulletPhysics](https://github.com/bulletphysics/bullet3)
- [Avian (formally bevyXPBD)](https://github.com/Jondolf/avian) Made with Bevy & Rust & ECS.
- [Havok]()


## 框架


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