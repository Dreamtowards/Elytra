
# Continuous Collision Detection, CCD


## Concept

目标: 连续碰撞检测的目标是确保在物体运动过程中，即使是在两个离散时间步之间，也能准确检测到所有可能的碰撞，防止物体穿透其他物体。

应用场景: 适用于高速移动的物体，例如子弹、快速旋转的物体、车辆等，特别是在物体之间可能存在大相对速度的情况下。

## Methods

### 1. Time of Impact, TOI (时间步进法)

- 通过在两个时间步之间插值物体的位置，找到碰撞可能发生的最早时间点（即冲突时间，Time of Impact）。
- 通过计算物体在某个时间点是否相交，找到首次发生碰撞的时间，然后调整物体的位置和速度以避免穿透。

实现步骤：
1. 预测碰撞: 计算物体的运动轨迹，并预测两物体之间的最近距离。
2. 计算 TOI: 通过二分法或其他数值方法精确找到碰撞的发生时间。
3. 响应碰撞: 在计算出的碰撞时间点对物体进行碰撞响应。

优点: 能够在时间步内准确检测并处理碰撞，避免穿透。

缺点: 计算复杂度较高，特别是在多物体的场景中。


### 2. Swept Volume or Ray-Casting Method 连续扫描法

- 将物体的运动视为一个连续的体积（例如，将一个移动的球体在时间步内的运动轨迹视为一个胶囊体）。通过检查这个体积与其他物体是否相交，判断是否发生碰撞。
- 对于多边形物体，通常将运动轨迹表示为一个几何形状（如凸包），并对其进行碰撞检测。

实现步骤:
1. 生成扫过体积: 通过物体的初始位置和最终位置生成一个扫过的体积（如胶囊、平行六面体等）。
2. 检测体积相交: 通过计算这个体积与其他物体的几何形状是否发生碰撞。
3. 调整位置: 如果检测到碰撞，调整物体的位置和速度，确保碰撞被正确处理。

优点: 可以有效检测高速运动物体的碰撞。

缺点: 计算开销较大，尤其是对于复杂几何形状的物体。


### 3. Sub-Stepping or Temporal Coherence  运动学近似法

- 通过将时间步划分为多个更小的时间步（子步），在每个子步上进行离散碰撞检测，以减少物体“跳过”碰撞的风险。
- 这种方法依赖于离散检测，但通过增加时间步的频率来提高精度。

实现步骤:

1. 划分时间步: 将原本的时间步分割成多个子时间步。
2. 子步检测: 在每个子步中执行离散碰撞检测。
3. 处理碰撞: 在每个子步中处理检测到的碰撞事件。

优点: 实现简单，计算开销相对较小。

缺点: 即使细分时间步，仍然可能在极端情况下未检测到碰撞，并且增加时间步数会降低整体模拟的性能。


### 4. GJK + EPA + TOI (Gilbert-Johnson-Keerthi Algorithm + Expanding Polytope Algorithm + Time of Impact)


- GJK 用于检测两个凸形状是否发生碰撞。
- EPA 用于在检测到碰撞后，进一步计算两个形状之间的最近距离。
- TOI 计算首次碰撞的时间点。

实现步骤:
1. 使用 GJK 判断两物体是否碰撞。
2. 若碰撞，使用 EPA 精确计算最近距离和碰撞点。
3. 使用 TOI 计算冲突时间点。

优点: 精确性高，适用于复杂几何形状。

缺点: 计算复杂度较高，特别是 EPA 和 TOI 阶段。



## Resources

- [ErinCatto Box2d: CCD GDC2013](https://box2d.org/files/ErinCatto_ContinuousCollision_GDC2013.pdf)
- [ACRL: CCD](https://zhuanlan.zhihu.com/p/380532960)
- [Unity Docs: CCD api](https://docs.unity3d.com/2023.1/Documentation/Manual/ContinuousCollisionDetection.html)
- [DigitalRune Docs: CCD](https://digitalrune.github.io/DigitalRune-Documentation/html/138fc8fe-c536-40e0-af6b-0fb7e8eb9623.htm#Solutions)