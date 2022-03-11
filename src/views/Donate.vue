<template>
    <form class="container-payment" @submit.prevent="sendEmail">
        <h1>Payment Information</h1>
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
                <input type= "text" placeholder="Last Name" name="lname" required/>
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
                <input min="1" type= "number" placeholder="Donate Amount" name="donate-amount" required/>
            </div>
            <div class="icons">
                <i class="fab fa-cc-visa" id="visa"></i>
                <i class="fab fa-cc-amex" id="amex"></i>
                <i class="fab fa-cc-mastercard" id="master"></i>
            </div>
            <div class="donate-buton">
                <button type="submit">Donate</button>
            </div>
        </div>
        <router-view/>
    </form>
</template>


<script>
  import navDonate from '../components/donationNav.vue'
  import emailjs from 'emailjs-com';
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
                 charities:[{key:0,value:'Border Collie Rescue'},{key:1,value:'Women Against Rape'},{key:2,value:'Hope SA'}
                 ,{key:3,value:'Saartjie Baartman Centre for women and childeren'}, {key:4,value:'Jones Safe House'}, {key:5,value:'Mercy Corps'},
                 {key:6,value:'Save the childeren'},{key:7,value:'SCI Foundation'},{key:8,value:'Acres of Love'},{key:9,value:'Ethelbert Childeren\'s Home'},
                 {key:10,value:'Woodrock Animal Rescue'},{key:11,value:'Womens Shelter Movement'}],
            }
        },
        methods: {
            sendEmail(e) {
            try {
                emailjs.sendForm('service_ff3ffiu', 'template_bh2swso', e.target, 'user_kig9hwNSt8MhkuitTcb50', {
                email: this.email,
                to_name: this.to_name,
                charity: this.charity,
                
            })
                this.toggleModal();
            console.log("Success")

            } catch(error) {
                console.log({error})
            }
            // Reset form field
                this.email = ''
            },
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
        width: 100%;
        font-size: 32px;
        background-color:#002043;
        color: white;
        font-weight: 700;
        bottom: 0;
        border-radius: 10px;
    }
    
    .payment{
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 70%;
        height: 82%;
        border-radius: 10px;
        background-color: whitesmoke;
        margin-bottom: 100px;
    }

    label{
        min-width: 101px;
        padding-bottom: 2%;
        padding-right: 1%;
        margin-left: 1%;
        margin-top:30px;
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

     i{
        padding: 2%;
        font-size: 70px;
    }
    .icons{
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
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
        display: block;
        width: 100%;
        bottom: 0;
    }

    .charity-choose{
        text-align: center;
        width: 45%;
        height: 40px;
        margin-top: 20px;
        margin-bottom: 50px;
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

</style>