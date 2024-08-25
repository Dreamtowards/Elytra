
# DX12 Work Graphs

Work Graphs is a new feature in Direct3D 12 API that allows the GPU to
generate work for itself on the fly. This aids GPU-driven rendering, allowing
for more autonomy for the GPU without relying on going back and forth
between the CPU and GPU.

Supported GPUs: Only RTX 30-series and 40-series on the NVIDIA side, and RDNA 3 cards
on the AMD side support this feature. Latest drivers are required.

> 这是一个很有意义的开始，也是多年来图形开发人员的夙愿。突破了自通用计算以来不能动态调度的限制，
> 可以自由的以 work item 调度 work item\grid，形成 Graph 结构，即在 GPU thread 中 launch 新的 thread，
> 并且执行新的 shader 逻辑。实际上这个能力在 GPU 中已经存在：HW Ray Tracing，但只能在 HWRT 上特定使用，且配置复杂。
> 目前开放出来作为通用机制，这对于所有基于 GPU Driven 的机制将会有很大改变，
> 可以以更加优雅的方式实现，更充分利用计算资源，甚至会更有创意的玩法出现。 - 丛越  
> 这有点像在metal kernel shader中encode cmd buffer，再动态派发 - 往昔


## Resources

- https://devblogs.microsoft.com/directx/d3d12-work-graphs/
- [Work Graphs API: First Look At Performance Of DirectX 12's Latest Feature](https://www.youtube.com/watch?v=sE7Xuk5aTnE)
- [AMDGPUOpen - Microsoft DirectX ® 12中的GPU Work Graph](https://zhuanlan.zhihu.com/p/647958703)
- https://www.zhihu.com/question/608461646/answer/3199883646
- https://interplayoflight.wordpress.com/2024/06/29/a-quick-introduction-to-workgraphs/