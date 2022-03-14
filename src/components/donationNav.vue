<template>
    <div class="donatenav">
        <router-link to="/donate">Donate</router-link> 
        <router-link to="/donateAnon">Donate Anonymously</router-link> 
    </div>
</template>

<script>
    export default {
        name: 'navDonate',
    }
</script>

<style>
    .container-payment{
        display: block;
        width: 100vw;
        height: 110vh;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
    }

    .payment{
        margin-top: 60px;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 60%;
        height: 90%;
        border-radius: 10px;
        background-color: whitesmoke;
    }

    .donatenav a:hover{
      color:#566D7E ;
    }

   .donatenav a.active{
       color:#F4D06A;
       font-weight: 900;
    }

  .donatenav{
      background-color:#2A5379;
      overflow: hidden;
      width: 100%;
      border-radius: 10px;
    }

  .donatenav a{
      overflow: hidden;
      float: left;
      font-size: 22px;
      padding-top: 1%;
      padding-bottom: 1%;
      color: white;
      text-align: center;
      text-decoration: none;
      margin-top: 0%;
      width: 25%;
    }

    .donatenav a.router-link-exact-active {
        color:  #F4D06A;
        font-weight: 900;
    }
</style>
 