<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        vercel-nuxt-example
      </h1>
      <ul>
        <li v-for="content in contents">{{ content.slice(0, 100) }}</li>
      </ul>

      <pre>
        {{ time }}
        {{ server }}
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({ contents: [] as string[] }),
  asyncData() {
    return { time: Date.now(), server: process.server }
  },
  async mounted() {
    this.contents = await Promise.all([
      fetch('/api/hello').then((res) => res.text()),
      fetch('/api/hello.ts').then((res) => res.text()),
      fetch('/api/contents/[id].ts').then((res) => res.text()),
      fetch('/api/contents/haha').then((res) => res.text()),
    ])
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
