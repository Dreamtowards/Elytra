import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Elytra",
  titleTemplate: ':title - Elytra', 
  description: "Elytra",
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', href: '/assets/logo-bl.png' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-CSR36R1EGY' }],
    ['script', {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-CSR36R1EGY');`],
    ['script', {}, "console.log('Test Web Init')"]
    // ['script', { async: '', src: '//clustrmaps.com/map_v2.js?d=CjkjO_lbXjEDHs5kmXfnU4xsNf-CgStYgdHc7uoUTcg&cl=ffffff&w=a' }]
  ],
  cleanUrls: true,  // no .html suffix
  metaChunk: true,  // more Cache?
  themeConfig: {
    logo: { 
        light: "/assets/logo-bl.png",
        dark: "/assets/logo-wt.png",
        alt: ""
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'About',
        items: [
          { text: "me Dreamtowrds", link: 'misc/about' },
          { text: "Time Management", link: 'misc/about/time-management' },
          { text: "Autonomous Learning", link: 'misc/about/autonomous-learning' },
        ]
      },
    ],

    sidebar: [
      {
        text: 'Voxel',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/voxel/' },
          { 
            text: 'Storage', 
            collapsed: true,
            items: [
              { text: 'Runtime Store', link: '/voxel/storage/runtime-store' },
              { text: 'Persistent Store', link: '/voxel/storage/persistent-store' },
              { text: 'Extendable Id System', link: '/voxel/storage/id-system' },
              { text: 'Unaligned Voxel Systems', link: '/voxel/storage/unaligned-voxel-systems' },
            ]
          },
          { 
            text: 'Rendering',
            collapsed: true,
            items: [
              { text: 'LoD', link: '/voxel/rendering/lod' },
              { text: 'Culling Chunks', link: '/voxel/rendering/culling-chunks' },
              { text: 'Ray Marching', link: '/voxel/rendering/raymarching' },
              { text: 'Voxel Global Illumination', link: '/voxel/rendering/voxel-global-illumination' },
              { 
                text: 'Isosurface', 
                collapsed: true,
                items: [
                  { text: 'Marching Cubes & Transvoxel', link: '/voxel/meshgen/marching-cubes' },
                  { text: 'Surface Nets & Dual Contouring', link: '/voxel/meshgen/surface-nets' },
                ]
              },
            ]
          },
          { 
            text: 'Simulating', 
            collapsed: true,
            items: [
              { text: 'Liquid Flooding', link: '/voxel/sim/liquid' },
              { text: 'Lighting', link: '/voxel/sim/lighting' },
              { text: 'Connectivity', link: '/voxel/sim/connectivity' },
              { text: 'Fire Spread', link: '/voxel/sim/fire-spread' },
              { text: 'Explosion', link: '/voxel/sim/explosion' },
              { text: 'PhysX Integration', link: '/voxel/sim/physx-integration' },
            ]
          },
          { 
            text: 'Procedural WorldGen', 
            collapsed: true,
            items: [
              { text: 'Noises', link: '/voxel/worldgen/noises' },
              { text: 'Biomes', link: '/voxel/worldgen/biomes' },
              { text: 'Wave Function Collapse', link: '/voxel/worldgen/wfc' },
              { text: 'L-system', link: '/voxel/worldgen/l-system' },
            ]
          },
          { 
            text: 'Misc', 
            collapsed: true,
            items: [
              { text: 'Networking', link: '/voxel/render/lod' },
              { text: 'Massive Terrain Rendering', link: '/voxel/render/lod' },
              
            ]
          },
        ]
      },
      {
        text: 'Graphics',
        items: [
          { text: 'Overview', link: '/graphics/' },
          { 
            text: 'Postmodern OpenGL 4',
            // link: '/graphics/opengl4/',
            collapsed: true,
            items: [
              { text: 'All Draw Functions', link: '/graphics/opengl4/draw-functions' },
              { text: 'Direct State Access. DSA', link: '/graphics/opengl4/dsa' },
              { text: 'SSBOs', link: '/graphics/opengl4/ssbo' },
              { text: 'Vertex Pulling', link: '/graphics/opengl4/vertex-pulling' },
              { text: 'Compute Shader', link: '/graphics/opengl4/compute-shader' },
              { text: 'MultiDraw Indirect. MDI', link: '/graphics/opengl4/multidraw-indirect' },
              { text: 'Bindless Texture', link: '/graphics/opengl4/indexed-vertices' },
              { text: 'Indexed Compression', link: '/graphics/opengl4/indexed-vertices' },
            ]
          },
          { 
            text: 'Modern Graphics APIs',
            collapsed: true,
            items: [
              { text: 'Vulkan Review', link: '/graphics/modern/vulkan-quicklook' },
              { text: 'DirectX 12 Review', link: '/graphics/modern/vulkan-quicklook' },
              { text: 'Wgpu Review', link: '/graphics/modern/dx12-taskgraph' },
              { text: 'Comparison', link: '/graphics/modern/comparison-graphics-apis' },

              { text: 'Vulkan Dynamic Rendering', link: '/graphics/modern/vulkan-dynamic-rendering' },
              { text: 'DirectX 12 WorkGraph', link: '/graphics/modern/dx12-workgraph' },
            ]
          },
          {
            text: 'GFX',
            collapsed: true,
            items: [
              {
                text: 'Atmosphere',
                collapsed: true,
                items: [
                  { text: 'Rayleigh Scattering', link: '/graphics/gfx/atmosphere-rayleigh-scattering' },
                  { text: 'Volumetric Fog & Light', link: '/graphics/gfx/volumetric-fog-light' },
                  { text: 'Volumetric Cloud', link: '/graphics/gfx/volumetric-cloud' },
                ]
              },
              { text: 'Rectilinear Texture Warping Shadow Mapping', link: '/graphics/gfx/rtwsm' },
              { text: 'The Acid Matrix of Inception', link: '/graphics/gfx/inception-acid' },
            ]
          },
          {
            text: 'Ray Tracing',
            collapsed: true,
            items: [
              { text: 'Acceleration Struectures', link: '/graphics/ray-tracing/acceleration-struectures' },
              { text: 'NVIDIA RTX RayTracing', link: '/graphics/modern/rtx-raytracing' },
            ]
          },
          {
            text: 'Misc',
            collapsed: true,
            items: [
              { text: 'Anti Aliasing', link: '/graphics/misc/anti-aliasing' },
              { text: 'Texture Filtering', link: '/graphics/misc/texture-filtering' },
              { text: 'GPU Debugging', link: '/graphics/misc/gpu-debugging' },
              { text: 'Virtual Texture', link: '/graphics/misc/virtual-texture' },
              { text: 'Render Graph', link: '/graphics/misc/render-graph' },
            ]
          },
        ]
      },
      {
        text: 'Physics',
        items: [
          { text: 'Overview', link: '/physics/' },
          {
            text: 'Prelude',
            link: '/physics/prelude'
          },
          {
            text: 'Collection Detection',
            collapsed: true,
            items: [
              {
                text: 'Broadphase',
                collapsed: true,
                items: [
                  { text: 'DBVT', link: '/physics/collision-detection/broadphase/dbvt' },
                  { text: 'Sweep and Prune', link: '/physics/collision-detection/broadphase/sweep-and-prune' },
                ]
              },
              { text: 'GJK & EPA', link: '/physics/collision-detection/gjk-epa' },
              { text: 'Primitives', link: '/physics/collision-detection/gjk-epa' },
              { text: 'Continuous CCD', link: '/physics/continuous-collision-detection' },
            ]
          },
          {
            text: 'Constraint Solver',
            collapsed: true,
            items: [
              { text: 'Sequential Impulse Solver', link: '/physics/constraint-solver/sequential-impulse-solver' },
              { text: 'Jacobian Matrix', link: '/physics/constraint-solver/jacobian-matrix' },
            ]
          },
          { text: 'Ragdoll & IK', link: '/physics/ragdoll' },
        ]
      },
      {
        text: 'Programming Language',
        items: [
          { text: 'Overview', link: '/langdev' },
          { text: 'Lexical & Semantical', link: '/langdev' },
          { text: 'LLVM CodeGen', link: '/langdev' },
          { text: 'Virtual Machine', link: '/langdev' },
        ]
      },
      {
        text: 'Misc',
        // collapsed: false,
        items: [
          {
            text: 'About',
            link: '/misc/about/',
            collapsed: true,
            items: [
              { text: 'Legacy Projects', link: '/misc/legacy-projects' },
              { text: 'Time Management', link: '/misc/about/time-management' },
              { text: 'Learning Method', link: '/misc/about/autonomous-learning' },
              { text: 'Writing Workflow', link: '/misc/about/writing-workflow' },
            ]
          },
          { 
            text: 'Teardown', 
            collapsed: true,
            items: [
              { text: 'Teardown', link: '/misc/teardown/tuxedo-teardown' },
              { text: 'Douglas\'s Voxel', link: '/misc/teardown/douglas-voxel' },
              { text: 'Gore\'s Voxel', link: '/misc/teardown/gore-voxel' },
              { text: 'Minecraft Perf Mods', link: '/misc/teardown/minecraft-perf' },
            ]
          },
          { 
            text: 'Algorithms', 
            collapsed: true,
            items: [
              { 
                text: 'Metaheuristic', 
                collapsed: true,
                items: [
                  { text: 'Path Finding: A*, JPS', link: '/misc/algorithms/pathfinding' },
                  { text: 'Hill Climbing', link: '/misc/algorithms/hill-climbing' },
                  { text: 'Simulated Annealing', link: '/misc/algorithms/simulated-annealing' },
                  { text: 'Tabu Search', link: '/misc/algorithms/tabu-search' },
                  { text: 'Genetic Algorithms', link: '/misc/algorithms/genetic-algorithms' },
                ]
              },    
              { text: 'Flood Fill', link: '/misc/algorithms/flood-fill' },
              { text: 'DFS & BFS', link: '/misc/algorithms/dfs-bfs' },
              { text: 'Hash Map', link: '/misc/algorithms/hashmap' },
              { text: 'Basic Data Struectures', link: '/misc/algorithms/basic-data-structures' },
            ]
          },
          { 
            text: 'Gameplay Design', 
            collapsed: true,
            items: [
              { text: 'Inventory', link: '/misc/gameplay/inventory' },
            ]
          },
          { 
            text: 'Skills', 
            collapsed: true,
            items: [
              { text: 'Profiling GPU & CPU', link: '/misc/skill/profiling-gpu' },
              { text: 'Cloudflare CDN & Email', link: '/misc/skill/cloudflare-cdn-email' },
            ]
          },
          { 
            text: 'Life', 
            collapsed: true,
            items: [
              { text: 'Profiling GPU & CPU', link: '/misc/skill/profiling-gpu' },
            ]
          },
        ]
      }
    ],

    aside: true,
    outline: {
      level: [2, 3],
      label: "On this page"
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dreamtowards/Ethertum' },
      { icon: 'discord', link: 'https://discord.gg/k7ssbPJQnp', ariaLabel: 'cool link' },
      { icon: 'youtube', link: 'https://www.youtube.com/@dreamtowards' },
      { icon: 'youtube', link: 'https://space.bilibili.com/19483166' },
    ],
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: {
    }
  },
  markdown: {
    lineNumbers: true,
    math: true,
  },

  // https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-enhanced-readabilities/
  vite: { 
    optimizeDeps: { 
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
      ], 
    }, 
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here.
        // '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/*',
      ], 
    }, 
  }, 
})
