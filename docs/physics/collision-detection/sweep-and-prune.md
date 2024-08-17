
# Sweep and Prune. SAP

这是一个 Broadphase 广相碰撞检测，bulletphysics 里的实现是 `btAxisSweep3.h`。

## SAT. Separating Axis Theorem.

SAP 的核心思想之一是 [Separating Axis Theorem](https://personal.math.vt.edu/mrlugo/sat.html) 分离轴理论。  
即，如果2个物体 在某个轴没有重叠，那他们就没有碰撞。

为了理解这一点，可以想想AABB测试 - 检查每个轴上是否重叠, 如果都重叠 那么两个AABB相交,  
反言之，**只要有一条轴不重叠 那就不相交**。
(就如这 `&&` 运算符的[短路](https://en.wikipedia.org/wiki/Short-circuit_evaluation)特性, 如果任何一项为false，则整个&&表达式会被立刻返回false。)

```rust
fn intersects_2d(obj1: AABB, obj2: AABB) {
  return obj1.min.x < obj2.max.x
      && obj1.max.x > obj2.min.x
      && obj1.min.y < obj2.max.y
      && obj1.max.y > obj2.min.y;
}
```


## Sorting

> "If a ≤ b and b ≤ c, then a ≤ c".   
> - transitive property of inequality

[A Visualize Demo by Leanrada](https://leanrada.com/notes/sweep-and-prune/#comparisons:~:text=Finally%2C%20here%E2%80%99s%20a%20demo%3A)

```rust
// O(n log n)
sort_by_min(balls);

// O(n + m)
for i in 0..balls.len() {
  let ball1 = balls[i];
  // O(1) at best; O(m/n) on average; O(n) at worst
  for j in (i+1)..balls.len() {
    let ball2 = balls[j];
    if (ball2.left > ball1.right) break;
    if (intersects(ball1, ball2)) {
      bounce(ball1, ball2);
    }
  }
}
```

可以使用 Insertion Sort 而不是 QuickSort/MegaSort 

[A Visualize Demo by Leanrada](https://leanrada.com/notes/sweep-and-prune-2/#:~:text=Let%E2%80%99s%20look%20at%20the%20sort%20step%2C%20which%20is%20the%20bottleneck)


## Resources

- https://leanrada.com/notes/sweep-and-prune/
- https://leanrada.com/notes/sweep-and-prune-2/
- https://www.reddit.com/r/IndieDev/comments/15lgys0/comparison_of_sweepandprune_vs_naive_collision/


- https://nvidia-omniverse.github.io/PhysX/physx/5.1.3/_build/physx/latest/struct_px_broad_phase_type.html#_CPPv4N16PxBroadPhaseType4EnumE