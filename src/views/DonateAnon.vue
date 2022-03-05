<template>
    <form class="container-payment" @submit.prevent="sendEmail">
        <h1>Payment Information</h1>
        <modal @close ="toggleModal" class="modal" id="modal" :ModalActive = "ModalActive" >
             <div class="modalView">
                <p>Thank you for your generous doantion</p>
                <i class="fas fa-hand-holding-usd" id="finalDonation"></i>
             </div>
        </modal>
        <div class="payment">
            <navDonate/>
            <div class="rows">
                <i class="fas fa-info-circle" id="infoIcon"></i>
                <p>Please note that donations made in this way will not go to a specific charity, but will be used and distributed as the The smile Foundation deem necessary</p>
            </div>
             <div class="rows">
                <label for="email">Email Address</label>
                <input v-model="email" type= "text" placeholder="Email Address" name="email" required/>
                <label for="phone">Phone</label>
                <input type= "text" placeholder="Phone" name="phone" required/>
            </div>
             <div class="rows">
                <label for="cardnum">Card Number</label>
                <input type= "text" placeholder="Card Number" name="cardnum" required/>
                <label for="csv">Card CSV</label>
                <input type= "text" placeholder="CSV" name="csv"/>
            </div>
             <div class="rows">
                <label for="expiration-date">Expiration Date</label>
                <input type= "month"  placeholder="Expiration Date" name="expiration-date" required/>
                <label for="donate-amount">Donate Amount</label>
                <input type= "text" placeholder="Donate Amount" min="1" name="donate-amount" required/>
            </div>
            <div class="icon">
                <i class="fab fa-cc-visa" id="visa"></i>
                <i class="fab fa-cc-amex" id="amex"></i>
                <i class="fab fa-cc-mastercard" id="master"></i>
            </div>
            <div class="donate-buton" >
                <button type="submit">Donate</button>
            </div>
        </div>
        <router-view/>
    </form>
</template>

<script>
  import navDonate from '../components/donationNav.vue';
  import emailjs from 'emailjs-com';
  import modal from '../components/Modal.vue'
  import {ref} from 'vue'

  export default {
    name: 'DonateAnon',
    components: {
        navDonate,
        modal,
      },
    data() {
        return {
            email:'',
        }
    },  
    setup(){
            const ModalActive = ref(false)
            const toggleModal= () =>{
                ModalActive.value = !ModalActive.value;
            }
            return{
                ModalActive,
                toggleModal,
            };
        },
    methods: {
        sendEmail(e) {
        try {
            emailjs.sendForm('service_ff3ffiu', 'template_l7o9usn', e.target, 'user_kig9hwNSt8MhkuitTcb50', {
           email: this.email
           })
            this.toggleModal();

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
        height: 100%;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
    }

  .payment{
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 70%;
        height: 82%;
        border-style: solid;
        border-color: white;
        border-width: 10px;
        background-color: whitesmoke;
        margin-bottom: 100px;
    }

     label{
        min-width: 101px;
        padding-bottom: 2%;
        padding-right: 1%;
        margin-left: 1%;
        margin-top:20px;
        font-size: 20px;
        color: black;
        text-align: center;
    }

    input{
        text-align: center;
        height: 50px;
        border-radius: 25px;
        width: 90%;
        font-size: 14px;
    }

    button{
        text-align: center;
        height: 50px;
        width: 100%;
        font-size: 32px;
        background-color:#002043;
        color: white;
        font-weight: 700;
        bottom: 0;
    }

     i{
        padding: 2%;
        font-size: 70px;
    }
    .icon{
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        bottom: 0;
        display: block;
        text-align: center;
        margin-bottom: 108px;
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

    .donate-buton{
        display: block;
        width: 100%;
        bottom: 0;
    }

    .rows{
        display: flex;
        padding: 0%;
        margin-top: 40px;
        margin-right: 30px;
        margin-left: 30px;
    }

    .dontaionDetail{
        width: 50%;
        background-color: #ffffff;
        color: #000000;
        margin-top: 20px;
    }

    .donationDetails{
        display: block;
        justify-content: center;
        text-align: center;
    }

     .modalView{
        display: block;
        position: relative;
        justify-content: center;
        text-align: center;
        z-index: 50;
        background-color: aliceblue;
        width: 400px;
        height: 200px;
        margin-top: auto;
        margin-bottom: auto;
        border: solid;
        border-color: #002043;
    }

      .modalView p{
        font-size: 18px;
        color: #000000;
        text-align: center;
        padding: 2px;
        font-weight: 700;
    }

    .modal{
        display: flex;
        justify-content: center;
    }

    #infoIcon{
        font-size: 48px;
        color: #002043;
        padding: 10px;
    }
</style>