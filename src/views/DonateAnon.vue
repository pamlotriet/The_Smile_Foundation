<template>
    <form class="container-payment" @submit.prevent="sendEmail">
        
        <h1>Payment Information</h1>
        <div class="payment">
            <navDonate/>
             <div class="input">
                <label for="email">Email Address</label>
                <input v-model="email" type= "text" placeholder="Email Address" name="email" required/>
            </div>
             <div class="input">
                <label for="phone">Phone</label>
                <input type= "text" placeholder="Phone" name="phone" required/>
            </div>
             <div class="input">
                <label for="cardnum">Card Number</label>
                <input type= "text" placeholder="Card Number" name="cardnum" required/>
            </div>
             <div class="input">
                <label for="csv">Card CSV</label>
                <input type= "text" placeholder="CSV" name="csv"/>
                </div>
             <div class="input">
                <label for="expiration-date">Expiration Date</label>
                <input type= "text" placeholder="Expiration Date" name="expiration-date" required/>
            </div>
            <div class="input">
                <label for="donate-amount">Donate Amount</label>
                <input type= "text" placeholder="Donate Amount" name="donate-amount" required/>
            </div>
            <div class="donate-buton" >
                <button type="submit">Donate</button>
            </div>
            <div class="icons">
                <i class="fab fa-cc-visa" id="visa"></i>
                <i class="fab fa-cc-amex" id="amex"></i>
                <i class="fab fa-cc-mastercard" id="master"></i>
            </div>
        </div>
        <router-view/>
    </form>
</template>

<script>
  import navDonate from '../components/donationNav.vue';
  import emailjs from 'emailjs-com';


  export default {
    name: 'DonateAnon',
    components: {
        navDonate,
      },
    data() {
        return {
            email:'',
        }
    },
    methods: {
        sendEmail(e) {
        try {
            emailjs.sendForm('service_ff3ffiu', 'template_l7o9usn', e.target, 'user_kig9hwNSt8MhkuitTcb50', {
           email: this.email
           })

            console.log("Success")

        } catch(error) {
            console.log({error})
        }
        // Reset form field
            this.email = ''
            this.message = ''
        },
    }
    }
</script>

<style>
    .container-payment{
        display: block;
        width: 100vw;
        height: 130vh;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
    }

    .payment{
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 40%;
        height: 80%;
        border-style: solid;
        border-color: white;
        border-width: 10px;
        background-color: whitesmoke;
    }

    label{
        display: block;
        min-width: 150px;
        padding: 2%;
        margin-top:10px;
        font-size: 20px;
        color: black;
        margin-left: 10px;
    }

    input{
        display: block;
        align-self: center;
        height: 30px;
        border-radius: 25px;
        margin-left: 10px;
        width: 90%;
        font-size: 14px;
    }

    button{
        margin-top: 20px;
        text-align: center;
        height: 50px;
        width: 100%;
        font-size: 32px;
        background-color:#002043;
        color: white;
        font-weight: 700;
    }

     i{
        padding: 2%;
        font-size: 60px;
    }
    .icons{
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
    }

    #visa{
        color: 	#0047AB;
    }

    #master{
        color: #D22B2B;
    }

    #amex{
        color: #cba135;
    }

</style>