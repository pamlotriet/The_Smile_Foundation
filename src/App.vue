<template>
  <div class="logo">
      <img src="./assets/logoSmile.png">
  </div>
  <div class="nav">
    <navbar/>
  </div>
  <router-view/>
  <div class="foot">
    <foot/>
  </div>
</template>

<script>
  import navbar from './components/navbar.vue'
  import foot from './components/foot.vue'

  export default{
    components:{
      navbar,
      foot
    }
  }
</script>

<style>
.logo{
  background-color: #002043;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.foot{
  position: static;
}
.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
