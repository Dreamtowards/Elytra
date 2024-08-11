import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Elytra",
  titleTemplate: ':title - Elytra', 
  description: "Elytra",
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', href: '/assets/logo-bl.png' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=TAG_ID' }],
    ['script', {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'TAG_ID');`]
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
          { text: "Time Management", link: 'misc/time-management' },
          { text: "Autonomous Learning", link: 'misc/autonomous-learning' },
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
              { text: 'LoD', link: '/voxel/render/lod' },
              { text: 'Culling Chunks', link: '/voxel/render/culling-chunks' },
              { text: 'Ray Marching', link: '/voxel/render/raymarching' },
              { text: 'VXGI', link: '/voxel/render/raymarching' },
              { 
                text: 'Isosurface', 
                collapsed: true,
                items: [
                  { text: 'Marching Cubes & Transvoxel', link: '/voxel/render/lod' },
                  { text: 'Surface Nets & Dual Contouring', link: '/voxel/render/lod' },
                ]
              },
              { text: 'Massive Terrain Rendering', link: '/voxel/render/lod' },
            ]
          },
          { 
            text: 'Procedual WorldGen', 
            collapsed: true,
            items: [
              { text: 'Noises, Voronoi', link: '/voxel/render/lod' },
              { text: 'Biomes', link: '/voxel/render/culling-chunks' },
            ]
          },
          { 
            text: 'Simulating', 
            collapsed: true,
            items: [
              { text: 'Liquid Flooding', link: '/voxel/render/lod' },
              { text: 'Lighting', link: '/voxel/render/culling-chunks' },
              { text: 'Connectivity', link: '/voxel/render/culling-chunks' },
              { text: 'Explosion', link: '/voxel/render/culling-chunks' },
              { text: 'Fire Spread', link: '/voxel/render/culling-chunks' },
              { text: 'PhysX Integration', link: '/voxel/render/culling-chunks' },
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
              
            ]
          },
        ]
      },
      {
        text: 'Rendering',
        items: [
          { text: 'Prelude', link: '/render/' },
          { 
            text: 'Postmodern OpenGL 4',
            link: '/render/opengl4/',
            collapsed: true,
            items: [
              { text: 'All Draw Functions', link: '/render/opengl4/draw-functions' },
              { text: 'Direct State Access. DSA', link: '/render/opengl4/dsa' },
              { text: 'SSBOs', link: '/render/opengl4/ssbo' },
              { text: 'Vertex Pulling', link: '/render/opengl4/vertex-pulling' },
              { text: 'Compute Shader', link: '/render/opengl4/compute-shader' },
              { text: 'MultiDraw Indirect. MDI', link: '/render/opengl4/multidraw-indirect' },
              { text: 'Bindless Texture', link: '/render/opengl4/indexed-vertices' },
              { text: 'Indexed Compression', link: '/render/opengl4/indexed-vertices' },
            ]
          },
          { text: 'Vulkan Hell', link: '/markdown-examples' },
          { text: 'Atmosphere', link: '/render/atmosphere' },
          { text: 'The Acid Matrix of Inception', link: '/render/atmosphere' },
        ]
      },
      {
        text: 'Physics',
        items: [
          { text: 'Overview', link: '/physics/' },
          { text: 'Ragdoll', link: '/markdown-examples' },
        ]
      },
      {
        text: 'Programming Language',
        items: [
          { text: 'Overview', link: '/markdown-examples' },
        ]
      },
      {
        text: 'Misc',
        collapsed: false,
        items: [
          { text: 'About', link: '/misc/about' },
          { text: 'Time Management', link: '/misc/time-management' },
          { text: 'Autonomous Learning', link: '/misc/autonomous-learning' },
          { text: 'Writing Workflow', link: '/misc/writing-workflow' },
          { text: 'Legacy Projects', link: '/misc/legacy-projects' },
          { 
            text: 'Algorithms', 
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
