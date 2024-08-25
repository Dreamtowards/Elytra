---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 
  text: "Elytra <sup style='font-size: 16px;'>Dreamtowards's DB</sup>" #"<img src='/assets/elytra-corp.png' style='height: 64px; '>"
  tagline: Concentrate, Passionate, Meditation # Meditation Transcendent # <small>we living in a twilight world, there are no friends at dusk huh</small> # Ignite Passionate, Elevate Soaring<small> · 点燃热情 助力翱翔</small>
  
  actions:
    - theme: brand
      text: Voxel
      link: /voxel/
    - theme: alt
      text: Graphics
      link: /graphics/
    - theme: alt
      text: PL
      link: /langdev/
    - theme: alt
      text: Physics
      link: /physics/
    - theme: alt
      text: About
      link: /misc/about
features:
  - title: Ethertia · 以太效應
    details: A Voxel Sandbox Survival Game
    link: https://ethertia.com/showcase
    linkText: ethertia.com
  - title: Minecraft 設計思想 · <small>Thinking in Minecraft</small>
    details: History, Ideology and Algorithms
    link: https://elytra.dev/thinking-in-minecraft
    linkText: Webdoc
#  - title: The Elytra Programming Language
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#    link: https://elytra.dev/elytra-lang
#    linkText: Documentation
---

<br>


### Voxel

***I. Storage:***     
    1. Runtime Store,   
    2. Persistent Store,   
    3. Extendable Id System,   
    4. Unaligned Voxel Systems  

***II. Rendering:***   
    1. LoD,   
    2. Culling,   
    3. RayMarching,   
    4. Isosurface,   
    5. Voxel GI.  

***3. Simulating:***   
   Flooding,  
   Lighting,  
   Connectivity,  
   Fire Spread,  
   Explosion,  
   Voxel Collision Detection,  
   PhysX Integration.  

***IV. Procedural WorldGen:***  
    1. Noises,   
    2. Biomes,   
    3. WFC,   
    4. L-system.    

***Misc:*** 
    1. Teardown of (Minecraft Perf / WorldGen, Teardown, Gore, Dauglas, xima)  

### Graphics

***I. Postmodern OpenGL 4:***  
    1. All Draw Functions  
    2. SSBO  
    3. Compute Shader,  
    4. Programmable Vertex Pulling,   
    5. Bindless Texture,   
    6. MultiDraw Indirect MDI,   
    7. Tessellation Shader,   
    8. DSA.   
***II. Modern Graphics APIs:***  


### Physics

### Programming Language


<!-- # Projects -->

<!-- <div class="VPFeatures VPHomeFeatures VPFeatures vp-raw" style="margin: 14px 0">
  <div class="project-items">
    <VPProject 
      title="Ethertia · 以太效應" 
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      link="https://ethertia.com/showcase"
      linkText="ethertia.com"/>
    <VPProject 
      title="Minecraft 設計思想 · <small>Thinking in Minecraft</small>" 
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      link="https://elytra.dev/thinking-in-minecraft"
      linkText="Webdoc"/>
    <VPProject 
      title="The Elytra Programming Language" 
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      link="https://elytra.dev/lang"
      linkText="Documentation"/>
  </div>
</div> -->

<!-- # Playlists -->

<!-- <p>Ethertia Devlog</p> -->
<!-- <div>
  <EtVideo
    title="温度湿度等参数 生物群系设计 E1 | Ethertia 23u02"
    desc="Jan 12, 2023 · 02:44"
    link="https://www.bilibili.com/video/BV1YY4y1f77G"
    cover_url="https://elytra.dev/~pris/res/vp/bio1.png"/>
  <EtVideo
    title="温度湿度等参数 生物群系设计 E1 | Ethertia 23u02"
    desc="Jan 12, 2023 · 02:44"
    link="https://www.bilibili.com/video/BV1YY4y1f77G"
    cover_url="https://elytra.dev/~pris/res/vp/bio1.png"/>
</div> -->

<!-- # Blogs -->

<!-- <div>
  <EtPost
    title="Dive into Minecraft Terrain Generation"
    desc="Atmosphere always is Spherical due to Gravity Theory."
    link="https://www.bilibili.com/video/BV1YY4y1f77G"
    date="2022-12-03"
    cover_url="https://elytra.dev/~pris/res/bg21.png"
    tags="Agood;Abcs"/>
    
  <EtPost
    title="Flat Atmosphere Rendering"
    desc="Atmosphere always is Spherical due to Gravity Theory."
    link="https://www.bilibili.com/video/BV1YY4y1f77G"
    date="2022-12-03"
    cover_url="https://elytra.dev/~pris/res/bg2.png"/>

  <EtPost
    title="Raymarching World-Ray Generation"
    desc="Ray, ClipSpace to WorldSpace with MVP Transformations."
    link="https://www.bilibili.com/video/BV1YY4y1f77G"
    date="2022-12-03"/>
  <EtPost
    title="Naive SurfaceNets Implmentation"
    desc="Conversion of Ray from ClipSpace to WorldSpace with MVP"
    link="https://www.bilibili.com/video/BV1YY4y1f77G"
    date="2022-12-03"/>
</div> -->


<!-- # Articles · Papers · Publications 

# Gallery

# About -->





<!-- <VPTeamMembers size="small" :members="members" /> -->


<!-- <style>

.vp-doc h1 {
  font-size: 30px;
  font-weight: 200;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin: 42px 0 18px 0;
}


.project-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  gap: 12px
}

</style> -->

<!--script setup>

import VPProject from '/components/VPProject.vue'

import EtVideo from '/components/VPVideo.vue'
import EtPost from '/components/VPPost.vue'

import { VPTeamMembers } from 'vitepress/theme';
const members = [
  {
    avatar: 'https://www.github.com/Dreamtowards.png',
    name: 'Dreamtowards',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Dreamtowards' },
      { icon: 'twitter', link: 'https://twitter.com/Dreamtowards' }
    ],
    // sponsor: "sth",
    // actionText: "Action"
  },
  {
    avatar: 'https://www.github.com/thaumstrial.png',
    name: 'Thaumstrial',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/thaumstrial' },
      { icon: 'twitter', link: 'https://twitter.com/thaumstrial' }
    ]
  },
  {
    avatar: 'https://www.github.com/okkmnone.png',
    name: 'Master Foo',
    title: 'Technical Adviser',
    links: [
      { icon: 'github', link: 'https://github.com/thaumstrial' },
      { icon: 'twitter', link: 'https://twitter.com/thaumstrial' }
    ]
  },
]
</script-->

