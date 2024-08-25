
# Extendable Id System

目的:
1. 扩展性：可肆意Agnostic插入新Voxel-ID 且不造成ID冲突，
2. 高性能：永久ID使用StrId 对内部使用即时生成的NumId

方案：
1. **结合StrId和NumId**: 使用 *StrId* (e.g. `minecraft:stone`) 作为永久ID/宇宙唯一/面向人类，而使用 *NumId* (e.g. 9) 作为运行时ID/运行时动态生成/面向程序内部。
2. **同一批StrId对应的NumId总是不变**: 有助于缓存(Atlases/Baked), IdSystem Hash.




## StrId at Defination and NumId at Runtime.

1. 使用


```rust

struct RegEntry<T> {
    str_id: &str,
    num_id: u32,
    entry: T,
}

struct Registry<T> {
    reg: Vec<RegEntry<T>>,
    cache_str2num: HashMap<&str, usize>,
}

impl Registry<T> {

    fn regist(&mut self, str_id: &str, entry: T) {
        self.reg.insert(str_id, entry);
    }

    fn build(&mut self) {
        self.reg.sort();
        cache_str2num.clear();
        cache_str2num.insert_all(self.reg);
    }

    fn entry(&self, num_id: usize) -> &RegEntry<T> {
        self.reg[num_id]
    }

    fn at(&self, num_id: usize) -> &T {
        self.entry(num_id).val
    }

    fn num_id(&self, str_id: &str) -> usize {
        self.cache_str2num[str_id]
    }

    fn get(&self, str_id: &str) -> &T {
        self.at(self.num_id(str_id))
    }


}


fn main() {



}

```



::: details Naive Method

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
- 优点：简单高效
- 缺点：不可扩展，如果其他多个mod作者要插入新id，很可能造成id冲突

:::