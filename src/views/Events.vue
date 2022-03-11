<template>
    <form class="home">
        <div class="head">
            <h1>Upcomming Charity events you can attend</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat felis, imperdiet finibus mi at, pulvinar faucibus quam. Nullam in rutrum urna. Ut commodo a felis ut pellentesque. Fusce imperdiet justo sapien, et consequat diam vulputate sit amet. Etiam a diam sagittis, gravida dolor convallis, eleifend lacus. Quisque malesuada, mauris vitae interdum congue, turpis quam facilisis ipsum, vel malesuada odio diam non tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin lacinia lacus quis fermentum laoreet. Proin interdum molestie elementum. Vivamus cursus sem non eros consequat mollis.
            Nam nisi arcu, auctor quis tellus vitae, tincidunt vulputate leo. Mauris semper urna diam, sed imperdiet turpis aliquam in. In auctor facilisis maximus. Phasellus sit amet purus magna. Donec porttitor turpis venenatis ipsum eleifend, sed varius augue mollis. Nulla imperdiet est lorem, ut aliquam leo vehicula vel. Ut quis sodales lectus. Nunc quis justo dictum, ultricies magna ut, imperdiet ex. Sed ornare fringilla porta. Vestibulum sed eros feugiat, aliquet est eu, ornare libero. Vivamus blandit velit eros, at eleifend urna ullamcorper eget.</p>
        </div>
        <modal @close ="toggleModal" id="modal" :ModalActive = "ModalActive" :eventName="eventName" :eventFee="eventFee">
                <div class="modalView">
                    <h2 class="bookingTitle">Making a booking for {{eventName}}</h2>
                    <div class="inputinit">
                        <label for="fname">First Name</label>
                        <input v-model="to_name" type= "text" placeholder="First Name" name="to_name" required/>
                    </div>
                    <div class="input">
                        <label for="lname">Last Name</label>
                        <input type= "text" placeholder="Last Name" name="lname" required/>
                    </div>
                    <div class="input">
                        <label for="email">Email Address</label>
                        <input v-model="toMail" type= "text" placeholder="Email Address" name="toMail" required/>
                    </div>
                    <div class="input">
                        <label for="phone">Phone</label>
                        <input type= "number" placeholder="Phone" name="phone" required/>
                          <label for="cardnum">Card Number</label>
                        <input type= "number" placeholder="Card Number" name="cardnum" required/>
                    </div>
                    <div class="input">
                        <label for="csv">Card CSV</label>
                        <input type= "number" placeholder="CSV" class = "csv" name="csv" required/>
                        <label for="expiration-date">Expiration Date</label>
                        <input type= "month" min="2022-03" placeholder="Expiration Date" class = "date" name="expiration-date" required/>
                         <label for="csv">People</label>
                        <input v-model="numPeople" min="1" type= "number" placeholder="Amount of people" class = "people" name="people" required/>
                    </div>
                    <label class="Total">Total: R{{numPeople * eventFee}}</label>
                    <div class="icons">
                        <i class="fab fa-cc-visa" id="visa"></i>
                        <i class="fab fa-cc-amex" id="amex"></i>
                        <i class="fab fa-cc-mastercard" id="master"></i>
                    </div>
                    
                    <div class="bookButton">
                        <button class="bookNow" type="button" @click = "toggleModal(),sendEmail()">Book Now</button>
                    </div>     
        </div>
        </modal>
        <div class="filetrBoxes">
            <select v-on:change="filterDate">
                <option value="Select Date">Select Date</option>
                <option  v-for="date in dates" :key="date.id">{{date}}</option>
                <option value="All">All</option>
            </select>
            <select v-on:change="filterLocation">
                <option>Select Location</option>
                <option  v-for="location in locations" :key="location.id">{{location}}</option>
                <option value="All">All</option>
            </select>
        </div>
        <div class="eventTable">
            <div class="flip-card" v-for="event in events" :key="event.id">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <label>{{event.eventName}}</label>
                    <label>{{event.eventDate}}</label>
                    <label>{{event.eventStartTime}}</label>
                    <label>{{event.eventEndTime}}</label>
                    <label>{{event.eventLocation}}</label>
                    <label>{{event.eventFee}}</label>
                </div>
                <div class="flip-card-back">
                    <label>{{event.eventDescription}}</label>
                    <i class="fas fa-calendar-check" id="facebook"></i><button type="button" @click = "toggleModal(),getEventDetails(event.eventName, event.eventFee)">Book Now</button>
                </div>    
           </div>
        </div>
        </div>
    </form>
</template>

<script>
//import variables from './variables.js'
import axios from 'axios'
import modal from '@/components/Modal.vue'
import {ref} from 'vue'

    export default({
        data(){
            return{     
                events:[],
                dates:[],
                locations:[],
                fee:[],
                filterEvents:[],
                noFilterEvents:[],
                eventName: '',
                eventFee: 0,
                numPeople: 0,
                toMail: '',
                to_name:'',
            }
        }, 
        components:{
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
        methods:{
            refreshData(){
                axios.get("https://localhost:7259/api/CharityEventsTables")
                .then((response)=>{
                    this.events = response.data;
                    this.filterEvents = response.data;
                    this.noFilterEvents = response.data;
                    //filter by unique dates
                    this.dates = this.events.map(item => item.eventDate).filter((value, index, self)=> self.indexOf(value)===index);
                    console.log(this.dates)
                    //filter by unique locations
                    this.locations = this.events.map(item => item.eventLocation).filter((value, index, self)=> self.indexOf(value)===index);
                    console.log(this.locations)
                    //filter by unique event fees
                    this.fee = this.events.map(item => item.eventFee).filter((value, index, self)=> self.indexOf(value)===index);
                    console.log(this.fee)
                    //console.log(this.noFilterEvents)
                });
            },
            filterDate: function(evt){
                var filterDate = evt.target.value;
                if(filterDate == 'All'){
                    
                    this.refreshData();
                }else{
                    this.events = this.filterEvents.filter(function(e){
                        return e.eventDate == filterDate
                    });
            }},
            filterLocation: function(evt){
                var filterLocation = evt.target.value;
                if(filterLocation == 'All'){
                    
                    this.refreshData();
                }else{
                    this.events = this.filterEvents.filter(function(e){
                        return e.eventLocation == filterLocation 

                    });
            }},
            getEventDetails: function(eventname, eventPrice){
                //var eventName = eventname
                this.eventFee = eventPrice
                this.eventName = eventname
            },
            sendEmail(){
                const subject = "Booking Confirmation";
                const body = 'Hi '+ this.to_name + ', thank you for booking an event at the smile foundation';

                axios.post("https://localhost:7259/api/Mail/send",
                {
                    ToEmail: this.toMail,
                    Subject : subject,
                    Body : body
                }).then((response)=> {
                    console.log(response);
                })

                console.log(this.toMail);
                console.log(subject);
                console.log(body);
            }
        },
        mounted:function(){
            this.refreshData()
        }
    })
</script>

<style scoped>

    .home{
        position: relative;
        z-index: 1;
        align-items: center;
        justify-content: center;
    }

    table{
        width: 90%;
        height: 100%;
        text-align: center;
        border: 4px solid #002043;
        margin-top: 20px;
        background-color: whitesmoke; 
        margin-left: auto;
        margin-right: auto;
    }

    th,td{
        text-align: center;
        border: 2px solid #002043;
        font-size: 16px;
        padding: 1%;
        font-family: Arial, Helvetica, sans-serif;
    }

    .head{
        text-align: center;
    }

    .filterBox{
        display: flex;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
    }

    select{
        width: 30%;
        height: 40px;
        text-align: center;
        margin-left: 1%;
        margin-right: 1%;
        margin-top: 2%;
    }

    .filetrBoxes{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
    .modalView{
        display: block;
        position: relative;
        z-index: 50;
        background-color: aliceblue;
        width: 70%;
        height: 95vh;
        margin-left: auto;
        margin-right: auto;
    }

    .input{
        display: flex;
        align-content: center;
        justify-content: center;
    }

    .icons{
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 0%;
        margin: 0%;
    }

     label{
        display: block;
        min-width: 150px;
        padding: 2%;
        padding-right: 0;
        margin-top:10px;
        font-size: 20px;
        color: black;
        margin-left: 5px;
    }

    input{
        display: block;
        align-self: center;
        height: 30px;
        border-radius: 25px;
        width: 90%;
        font-size: 14px;
        margin: 2%;
    }

    .inputinit{
        display: flex;
        align-content: center;
        justify-content: center;
        margin-top: 5%;
    }

    #visa{
        color: 	#0047AB;
        font-size: 62px;
    }

    #master{
        color: #D22B2B;
        font-size: 62px;
    }

    #amex{
        color: #cba135;
        font-size: 62px;
    }

    .bookNow{
        position: absolute;
        padding: 20px 30px ;
        border: none;
        font-size: 16px;
        background-color: #42b983;;
        color: #ffffff;
        cursor: pointer;
        z-index: 50;
        bottom: 2%;
    }

    .Total{
        padding: 0%;
        margin: 0%;
        text-align: center;
    }

    .bookButton{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .bookingTitle{
        text-align: center;
        font-weight: 700;
        font-size: 26px;
        padding-top: 3%;
    }

   .flip-card {
        background-color: transparent;
        border: 1px solid #f1f1f1;
        perspective: 1000px;
        height: 10cm;
        width: 100%;
        margin: 0%;
        margin-right: 1cm;
        margin-left: 1cm;
        align-content: center;
        text-decoration: none;
         z-index: 1;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
         z-index: 1;
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
         z-index: 1;
    }

    .flip-card-front {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        color: black;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
    }

    .flip-card-back {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        color: #000000;
        transform: rotateY(180deg);
        border-radius: 10px;
        justify-content: center;
        align-items: center;
    }

    .eventTable{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20%,20%));
        gap: 5%;
        margin-top: 5%;
        margin-bottom: 150px;
    }
</style>
