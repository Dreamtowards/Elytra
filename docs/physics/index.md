
# Physics Engine Development

## Overview

### Prelude

1. Famous Physics Engines
2. XPBD vs Velocity-based.
3. CCD vs DCD.
4. General Framework & Lifetime

### I. Collision Detection

#### Broadphase

1. DBVT. Dynamic Bounding Volume Tree (BSP)

2. SAP. Sweep and Prune.

3. Parallel Spatial Subdivision

#### Narrowphase

3. GJK & EPA

4. Primitives

5. Ray Casting

### II. Constraint Solver

1. Sequential Impulse Solver


### Misc

1. Ragdoll & IK
2. Verlet
3. ConvexHull
4. Concave vs Concave 6-DOF




https://vec3.ca/gjk/implementation/


https://box2d.org/files/ErinCatto_ModelingAndSolvingConstraints_GDC2009.pdf
https://allenchou.net/2013/12/game-physics-constraints-sequential-impulse/
https://github.com/IainWinter/IwEngine/blob/6f94a946a90db989412ff29320a0baeca7a5f8cb/IwEngine/src/physics/Dynamics/ImpulseSolver.cpp#L26


https://web.archive.org/web/20190311161021/https://wildbunny.co.uk/blog/2011/04/06/physics-engines-for-dummies/
https://web.archive.org/web/20120218224456/http://www.gamasutra.com/resource_guide/20030121/jacobson_01.shtml
https://web.archive.org/web/20150314235326/http://gafferongames.com/game-physics/fix-your-timestep/
https://web.archive.org/web/20150310151641/http://gafferongames.com/game-physics/physics-in-3d/
https://web.archive.org/web/20150310204415/http://gafferongames.com/game-physics/integration-basics/
https://web.archive.org/web/20150314235350/http://gafferongames.com/game-physics/spring-physics/