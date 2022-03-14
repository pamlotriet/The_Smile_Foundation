<template>
    <form class="container-payment">
        <p class="heading">Payment Information</p>
        <modal @close ="toggleModal" class="modal" id="modal" :ModalActive = "ModalActive" >
             <div class="modalView">
                <p>Thank you for your generous donation</p>
                <i class="fas fa-hand-holding-usd" id="finalDonation"></i>
                <p>To The Smile Foundation</p>
             </div>
        </modal>
        <div class="payment">
            <navDonate/>
            <div class="rows">
                <i class="fas fa-info-circle" id="infoIcon"></i>
                <p class="infoP">Please note that donations made in this way will not go to a specific charity, but will be used and distributed as the The smile Foundation deem necessary</p>
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
                <input v-model="amount" type= "text" placeholder="Donate Amount" min="1" name="amount" required/>
            </div>
            <div class="icon">
                <i class="fab fa-cc-visa" id="visa"></i>
                <i class="fab fa-cc-amex" id="amex"></i>
                <i class="fab fa-cc-mastercard" id="master"></i>
            </div>
            <div class="donate-buton" >
                <button type="button" @click="sendEmail()">Donate</button>
            </div>
        </div>
        <router-view/>
    </form>
</template>

<script>
  import navDonate from '../components/donationNav.vue';
  import axios from 'axios'
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
            amount:0,
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
         sendEmail(){
                const subject = "The Smile Foundation";
                const body = 'Hi anonymous donar thank you for your generous donation of R '+
                this.amount + ' to The Smile Foundation';

                axios.post("https://localhost:7259/api/Mail/send",
                {
                    ToEmail: this.email,
                    Subject : subject,
                    Body : body
                }).then((response)=> {
                    console.log(response);
                })

               this.toggleModal();
            }
    }
    }
</script>

<style scoped>

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
        width: 80%;
        height: 82%;
        border-radius: 10px;
        background-color: whitesmoke;
        margin-bottom: 100px;
        border-radius: 10px;
    }

    .infoP{
         padding: 15px;
         margin: 0px;
    }

    label{
        min-width: 101px;
        padding-right: 1%;
        margin-left: 1%;
        font-size:18px;
        color: black;
        text-align: center;
    }

    input{
        text-align: center;
        height: 30px;
        border-radius: 25px;
        width: 80%;
        font-size: 14px;
        margin-bottom: 50px;
    }

       button{
        text-align: center;
        height: 50px;
        width: 80%;
        border: none;
        font-size: 32px;
        background-color:#5AA3BA;
        color: white;
        font-weight: 700;
        border-radius: 10px;
        margin-left: auto;
        margin-right: auto;
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
        display: flex;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 50px;
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
        background-color:#F4D06A;
        width: 400px;
        height: auto;
        margin-top: auto;
        margin-bottom: auto;
    }

      .modalView p{
        font-size: 18px;
        color: #2A5379;
        text-align: center;
        padding: 2px;
        font-weight: 700;
    }

    .modal{
        display: flex;
        justify-content: center;
    }

    #infoIcon{
        font-size: 32px;
        color: #2A5379;
        padding: 10px;
    }

    .heading{
        font-size: 32px;
        color: #2A5379;
        font-weight: 900;
        padding-top: 20px;
        font-family: Avenir next condensed;
    }

       #finalDonation{
        color: #2A5379;
    }
</style>