<template>
    <form>
        <div class="topnav">
            <router-link to="/">Home</router-link>
            <router-link to="/involved">Get Involved</router-link>
            <router-link to="/donate">Donate</router-link>
            <router-link to="/events">Events</router-link>
            <router-link to="/stories">Stories</router-link>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'navbar',
    }
</script>


<style >
  .topnav a.active{
      background-color: #566D7E;
  }
  .topnav{
      background-color:#2A5379;
      overflow: hidden;
      width: 100%;
  }
  .topnav a{
 
      float: left;
      font-size: 22px;
      padding-top: 1%;
      padding-bottom: 1%;
      color: white;
      text-align: center;
      text-decoration: none;
      margin-top: 0%;
      width: 20%;
  }
  body{
      display: block;
      margin: 0%;
      padding: 0%; 
      background-color: whitesmoke;
  }
  .topnav a:hover{
      color:#F4D06A ;
  }
</style>