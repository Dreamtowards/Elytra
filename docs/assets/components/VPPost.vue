<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'

defineProps<{
  title: string
  desc?: string
  link?: string
  cover_url?: string
  date: string
  tags?: string
}>()
</script>

<template>
  <div class="et-post"  :style="cover_url ? 'color: #EEE' : ''"
    :href="link">  
    <div class="bg-img" :style="'background-image: url(' + cover_url + ');'"></div>
    <span class="title" v-html="title" :style="cover_url ? 'color: #fff' : ''"></span>
    <span class="desc" v-html="desc"></span>
    <span style="font-size: 12px; display: block;">
      {{ date }} &nbsp;
      <span v-if="tags" v-for="tag in tags.split(';')" style="font-size: 10px; background: #eee; border-radius: 4px; padding: 1px 6px; margin-right: 3px; color: #57606a;">{{ tag }}</span>
    </span>
  </div>
</template>

<style scoped>
.et-post {
  position: relative; overflow: hidden; flex: 0 0 330px;

  /* background: #ffffffff; */
  /* background: #00000030; */
  border: #e0e7ee 1px solid;
  border-radius: 6px;
  padding: 16px;
  display: inline-block;
  /* width: 380px; */
  width: 330px;
  margin-bottom: 8px;
  margin-right: 8px;
  vertical-align: top;
  color: #57606a;
}

.et-post .bg-img {
  /* background-image: url(https://elytra.dev/~pris/res/bg21.png); */
  filter: blur(4px) brightness(80%);
  z-index: -1;
  margin: -10px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.et-post .title {
  color: #24292f;
  font-size: 14.2px;
  display: block;
  font-weight: 600;
}

.et-post .desc {
  font-size: 12.5px;
  line-height: 1.3;
  margin: 4px 0;
  display: block;
  opacity: 0.95;
}

</style>
