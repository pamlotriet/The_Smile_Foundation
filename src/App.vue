<template>
  <form>
    <div class="logo">
      <img src="./assets/Pam_Logo.png">
    </div>
    <div class="nav">
      <navbar/>
    </div>
     <router-view/>
     
    <div class="foot">
      <foot/>
    </div>
   
  </form>
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
  @import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');

  *{
    font-family: 'Karla', sans-serif;
  }

  .logo{
    background-color: #2A5379;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .foot{
    position: static;
  }

  .nav a.router-link-exact-active {
    color: #F4D06A;
    font-weight: 900;
  }

  body {
    background: linear-gradient(-45deg, #F4D06A, #5AA3BA, #ffffff,#F4D06A, #5AA3BA, #ffffff);
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
  
</style>
