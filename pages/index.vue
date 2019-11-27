<template>
  <div>
    <h1>Hello nuxt!</h1>
    <h2>This is {{page}}</h2>
  </div>
</template>
<script>
export default {
  data () {
    return {
      page: 'ssr'
    }
  }
}
</script>