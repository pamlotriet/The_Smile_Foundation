<template>
    <form class="container-payment">
        <p class="heading">Payment Information</p>
        <modal @close ="toggleModal" class="modal" id="modal" :ModalActive = "ModalActive" >
             <div class="modalView">
                <p>Thank you for your generous doantion</p>
                <i class="fas fa-hand-holding-usd" id="finalDonation"></i>
                <p>to {{this.charity}}</p>
             </div>
        </modal>
        <div class="payment">
            <navDonate/>
             <div class="charity-select">
                <label for="charity-choose">Select Charity</label>
                <select class="charity-choose" v-model="charity" name="charity">
                    <option>Select Charity</option>
                    <option v-for="char in charities" :key="char.key">{{char.value}}</option>
                </select>
            </div>
            <div class="row">
                <label for="fname">First Name</label>
                <input v-model="to_name" type= "text" placeholder="First Name" name="to_name" required/>
                <label for="lname">Last Name</label>
                <input v-model="to_lastname" type= "text" placeholder="Last Name" name="to_lastname" required/>
            </div>
             <div class="row">
                <label for="email">Email Address</label>
                <input v-model="email" type= "text" placeholder="Email Address" name="email" required/>
                <label for="phone">Phone</label>
                <input type= "text" placeholder="Phone" name="phone" required/>
            </div>
             <div class="row">
                <label for="cardnum">Card Number</label>
                <input type= "number" placeholder="Card Number" name="cardnum" required/>
                <label for="csv">Card CSV</label>
                <input type= "number" placeholder="CSV" name="csv" required/>
            </div>
            <div class="row">
                <label for="expiration-date">Expiration Date</label>
                <input type= "month"  placeholder="Expiration Date" name="expiration-date" required/>
                <label for="donate-amount">Donate Amount</label>
                <input v-model="amount" min="1" type= "number" placeholder="Donate Amount" name="amount" required/>
            </div>
            <div class="icons">
                <i class="fab fa-cc-visa" id="visa"></i>
                <i class="fab fa-cc-amex" id="amex"></i>
                <i class="fab fa-cc-mastercard" id="master"></i>
            </div>
            <div class="donate-buton">
                <button type="button" @click="sendEmail()">Donate</button>
            </div>
        </div>
        <router-view/>
    </form>
</template>


<script>
  import navDonate from '../components/donationNav.vue'
  import axios from 'axios'
  import modal from '../components/Modal.vue'
  import {ref} from 'vue'

   export default {
        name: 'DonateAnon',
       
        components: {
            navDonate,
            modal,
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
        data() {
            return {
                to_name:'',
                charity:'',
                email:'',
                to_lastname:'',
                amount:0,

                 charities:[{key:0,value:'Border Collie Rescue'},{key:1,value:'Women Against Rape'},{key:2,value:'Hope SA'}
                 ,{key:3,value:'Saartjie Baartman Centre for women and childeren'}, {key:4,value:'Jones Safe House'}, {key:5,value:'Mercy Corps'},
                 {key:6,value:'Save the childeren'},{key:7,value:'SCI Foundation'},{key:8,value:'Acres of Love'},{key:9,value:'Ethelbert Childeren\'s Home'},
                 {key:10,value:'Woodrock Animal Rescue'},{key:11,value:'Womens Shelter Movement'}],
            }
        },
        methods: {
            sendEmail(){
                const subject = "The Smile Foundation";
                const body = 'Hi '+ this.to_name + ' '+  this.to_lastname +
                ', thank you for your generous donation of R '+this.amount + ' to the '+ this.charity;

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
        },   
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

     i{
        padding: 2%;
        font-size: 70px;
    }
    .icons{
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
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

    .chrity-selection{
        margin-left: auto;
        margin-right: auto;
        height: 30px;
        border-radius: 25px;
        width: 100%;
        font-size: 14px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .row{
        display: flex;
        padding: 0%;
        margin: 0%;
        margin-right: 30px;
        margin-left: 30px;
    }

    .donate-buton{
        display: flex;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 50px;
    }

    .charity-choose{
        text-align: center;
        width: 45%;
        height: 40px;
        margin-top: 20px;
        margin-bottom: 50px;
        border-radius: 25px;
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