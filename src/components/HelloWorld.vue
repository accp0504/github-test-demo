<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <FirstPage></FirstPage>
  </div>
</template>

<script>
import FirstPage from '../pages/FirstPage'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld'
    }
  },
  components: {
    FirstPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
