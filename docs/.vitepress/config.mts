import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Elytra",
  description: "Elytra",
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', href: '/assets/logo-bl.png' }],
  ],
  themeConfig: {
    logo: { 
        light: "/assets/logo-bl.png",
        dark: "/assets/logo-wt.png",
        alt: ""
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Voxel',
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
                text: 'Mesh Generation', 
                collapsed: true,
                items: [
                  { 
                    text: 'Isosurface Algorithms', 
                    collapsed: true,
                    items: [
                      { text: 'Marching Cubes & Transvoxel', link: '/voxel/render/lod' },
                      { text: 'Surface Nets & Dual Contouring', link: '/voxel/render/lod' },
                    ]
                  },
                ]
              },
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
            ]
          },
        ]
      },
      {
        text: 'Rendering',
        items: [
          { text: 'Overview', link: '/markdown-examples' },
          { 
            text: 'Postmodern OpenGL 4', 
            collapsed: true,
            items: [
              { text: 'MultiDraw Indirect. MDI', link: '/voxel/render/lod' },
              { text: 'Compute Shader', link: '/voxel/render/culling-chunks' },
            ]
          },
          { text: 'Vulkan Hell', link: '/markdown-examples' },
        ]
      },
      {
        text: 'Physics',
        items: [
          { text: 'Overview', link: '/markdown-examples' },
        ]
      },
      {
        text: 'Ragdoll',
        items: [
          { text: 'Overview', link: '/markdown-examples' },
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
        items: [
          { text: 'About', link: '/misc/about' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
