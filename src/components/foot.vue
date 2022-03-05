<template>
    <div class="foot">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
        <div class="contact-cap">
            <p>Contact Us</p>
            <p>+(27)60 501 7253</p>
        </div>
        <div class="contact-img">
            <a href="https://www.facebook.com/groups/509237244127757"><i class="fab fa-facebook-messenger" id="facebook"> </i></a>
            <a href = "mailto:pamela.lotriet@gmail.com"><i class="fas fa-envelope" id="email"></i></a>
            <a href="https://www.instagram.com/"><i class="fab fa-instagram" id="instagram"></i></a>
        </div>
    </div>
</template>

<style >
    .foot{
        background-color: #002043;
        width: 100%;
        height: 100%;
        bottom: 0;
        position: sticky;
        margin-top: 15px;
        text-align: center;
    }
    .foot p{
        font-size: 24px;
        color: white;
        padding-top: 1%;
    }


    i{
        padding: 2%;
        font-size: 48px;
    }
    .contact-img{
        width: 80vw;
        display: inline-flex;  
        justify-content: center;
        margin: auto;
    }

    .contact-img a{
        text-align: center;
        padding: 3%;
    }

    #facebook{
    color: #5E4BE3 ;
    }

    #instagram{
        color: #FF00B5 ;
    }

    #email{
        color:red ;
    }

</style>

<script>
    export default {
        name: 'foot'
    }
</script>