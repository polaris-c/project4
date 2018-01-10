<template>
  <div id="app2">
      <!-- App.vue -->
      <!-- <img src="./assets/logo.png"> -->
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app2'
}
</script>

<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  height:100% ; 
  width:100%; 
  position:absolute;
  display: flex;
  min-height: 100vh;
}
</style>
