
# Persistent Store


## Palette compress 

```
BlockState[16^3] voxels;
```
``` 
u16[16^3] local_ids = ;
Set<BlockState> local_table = Unique(voxels); 
```

使用一个Local LookupTable (通常较小), 再由这个Table指向Global-LookupTable (可能很大)

### RLE Run-Length encoding


`AAAAABBBCCCC` -> `5A3B4C`

对于16^3的Palette local-ids, 单次最大连续个数 16 (u4) 应该即可，

因此你可以用2个 NBitArray 来存: 一个 RLE-counts, 另一个是 Ids

### N-Bit Array

```rust
fn number_bits(i: usize) -> usize {
    ceil(log2(i))
}

let arr = NBitArray::new(element_bits: number_bits(max_id));
```

通常一个 16^3 区块的Palette长度 很少超过100个不同的元素。因此一个 u8(最大值255) 作为local-id 往往足够了。  
然而理论上 Palette local-id 可以远超过256个 (16^3=4096)，也可以只有很少几个 (如果只有4个的话 那u2就够存了 相比u8可以节省 3/4 的内存)

<!-- - 当Palette里只有4个不同元素，那么这种情况下 最好使用 'u2' (ceil(log2(4))) 而不是 u8 作为id类型 - 相比之下可以节省 3/4 的内存！ -->
<!-- - 当Palette里只有多达 4096 (边界情况 如极端测试), 那么你最好用 'u12' 或更大的 id类型 而不是用 u8，否则就存不下了。 -->

因此你可以使用 N-Bit Array. 来动态根据max-local-id来定 Element BitWidth。




## Paging

如果你每个区块存一个单独的文件，那么你将产生非常多文件


## LZMA Compression