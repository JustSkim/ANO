<template>
  <nav-bar />
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
*{
  font-family: 'Microsoft YaHei',Courier,'Courier New',monospace;
  text-decoration: none;
}
body{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
@import "./assets/homeContent.css";
/*vue中引入公共CSS，只需在一个组件中引入即可，会作用到全局 */
</style>
