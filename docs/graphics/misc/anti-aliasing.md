
# Anti Aliasing

## MSAA. Multisample Anti-Aliasing 多重采样抗锯齿


## FXAA, Fast Approximate Anti-Aliasing 快速近似抗锯齿

## MSRAA, Multisample Resolution Anti-Aliasing 多重分辨率抗锯齿

## SSAA. Supersampling Anti-Aliasing 超采样抗锯齿

## TAA. Temporal Anti-Aliasing 时域抗锯齿

TAA算法的主要原理如下：
- 移动抗锯齿（Motion Anti-Aliasing）： TAA算法利用相机和物体的运动信息，通过在连续帧之间对像素进行采样来减少锯齿。通过追踪物体的运动，TAA可以补偿像素的位置变化，从而平滑边缘并减少锯齿的出现。
- 时域重投影（Temporal Reprojection）： TAA算法使用当前帧和之前的帧之间的像素信息来进行重投影。它将当前帧的像素与之前的帧进行比较，通过插值和融合来生成平滑的结果。这种重投影可以减少锯齿并提高图像质量。
- 运动模糊（Motion Blur）： TAA算法还可以结合运动模糊来进一步减少锯齿和闪烁。通过在渲染过程中模拟相机或物体的运动模糊效果，TAA可以模糊锯齿边缘，使其更加平滑。

TAA算法的实现可以结合其他技术和算法，如深度信息、颜色采样和空间过滤等。通过在多帧之间进行信息的融合和插值，TAA能够提供较高质量的抗锯齿效果，并减少锯齿和闪烁问题的出现。

需要注意的是，TAA算法可能会对性能产生一定的影响，因为它需要对多帧进行处理和融合。因此，在选择使用TAA时，需要综合考虑图像质量和性能之间的平衡。


## Resources

- https://www.bilibili.com/video/BV13z4y1K7CC/  https://phu004.github.io/aa_tutorial/
- http://filmicworlds.com/blog/visibility-taa-and-upsampling-with-subsample-history/
- https://blog.csdn.net/u013467442/article/details/40628121
- https://xyuxf.com/archives/2246
- https://zhuanlan.zhihu.com/p/639277565