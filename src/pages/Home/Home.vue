<template>
  <div>
    <!--<nav-bar @nav_change="change_nav_exit" />-->
    <side-bar  />
  </div>
</template>

<script>
import SideBar from './SideBar.vue'

export default{
  name: 'Home',
  components:{
    SideBar,
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
