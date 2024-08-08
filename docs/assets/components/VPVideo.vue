<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'

defineProps<{
  title: string
  desc?: string
  link?: string
  cover_url: string
}>()
</script>

<template>
  <a class="et-vid"  
    :href="link">  
    <div class="poster" :style="'background-image: url(' + cover_url + ')'"></div>
    <span class="title" v-html="title"></span>
    <span class="desc" v-html="desc"></span>
  </a>
</template>

<style scoped>
.et-vid {
  display: inline-block;
  margin-right: 4px;
  vertical-align: top;
  text-decoration: none;

}

.et-vid .poster {
  width: 210px;
  height: 118px;
  background-size: cover;
  background-position: center;
  /* border: 3px solid #fff; */
  border-radius: 3px;
  box-shadow: 0 0 2px #00000040;
  transition: .2s ease-out;
}

.et-vid .title {
  width: 186px;
  display: inline-block;
  color: #030303;
  /* margin: 12px 0 6px; */
  margin: 8px 0 6px;
  /* margin: 8px 0; */
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.et-vid .desc {
  font-size: 12px;
  color: #606060;
  display: block;
}

</style>
