
# Physics Engine Dev

编写一个物理引擎

在开始之前，或许我们该了解，物理引擎有哪些种类。

- PhysX
- Jolt
- Bullet
- Havok
- Avian (formally bevyXPBD)
- OGE


## 框架

```rust
fn step_simulation(self, f32 delta) {

    predict_unconstrainted_motion(self, delta);



}

fn predict_unconstrainted_motion(self, f32 delta) {
    
}
```