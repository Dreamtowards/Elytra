
# Extendable Id System

目的：
<!-- 1. agnostic insert new block id without cause id conflict. -->
1. (Mod作者)插入新方块(id) 且不造成冲突
2. 意义上非数字id 



## Naive

```cpp
using BlockId = uint16_t;

namespace blocks {
    BlockId AIR = 0,
            STONE = 1,
            DIRT = 2,
            GRASS = 3,
            SAND = 4;
}

class Chunk {
    BlockId m_Voxels[16*16*16];
    ...
}
```
#### 优点：
简单高效
#### 缺点：
不可扩展，如果其他多个mod作者要插入新id，很可能造成id冲突


## StrId at Defination and NumId at Runtime.

```cpp
using StrId = const char*;

namespace blocks {
    StrId AIR = nullptr,
          STONE = "stone",
          DIRT = "dirt",
          GRASS = "grass",
          SAND = "sand";
    
    Registry<Block> REGISTRY;
}

void init() {
    REGISTRY.Regist(AIR, STONE, DIRT, ...);
    REGISTRY.BuildNumIds();
}




```
