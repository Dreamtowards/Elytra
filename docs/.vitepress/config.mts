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
            ]
          },
          { 
            text: 'Misc', 
            collapsed: true,
            items: [
              { text: 'Networking', link: '/voxel/render/lod' },
              { text: 'Teardown Study', link: '/voxel/render/lod' },
              { text: 'Douglas\'s Voxel Study', link: '/voxel/render/culling-chunks' },
              { text: 'Gore\'s Voxel Study', link: '/voxel/render/culling-chunks' },
              { text: 'Minecraft Performance Mods Analysis', link: '/voxel/misc/minecraft-perf' },
              { text: 'Massive Terrain Rendering', link: '/voxel/render/lod' },
              { text: 'Profiling GPU & CPU', link: '/voxel/misc/profiling-gpu' },
              
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
          { text: 'Modern Graphics APIs', link: '/graphics/vulkan' },
          {
            text: 'GFX',
            collapsed: true,
            items: [
              { text: 'The Acid Matrix of Inception', link: '/graphics/gfx/inception-acid' },
            ]
          },
          {
            text: 'Misc',
            collapsed: true,
            items: [
              { text: 'Atmosphere', link: '/graphics/gfx/atmosphere' },
              { text: 'Anti Aliasing', link: '/graphics/anti-aliasing' },
              { text: 'Work Graph', link: '/graphics/work-graph' },
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
            ]
          },
          {
            text: 'Constraint Solver',
            collapsed: true,
            items: [
              { text: 'Sequential Impulse Solver', link: '/physics/constraint-solver' },
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
              { text: 'Time Management', link: '/misc/about/time-management' },
              { text: 'Autonomous Learning', link: '/misc/about/autonomous-learning' },
              { text: 'Writing Workflow', link: '/misc/about/writing-workflow' },
            ]
          },
          { text: 'Legacy Projects', link: '/misc/legacy-projects' },
          { 
            text: 'Study', 
            collapsed: true,
            items: [
              { text: 'Flood Fill', link: '/misc/about' },
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
    lineNumbers: true
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
