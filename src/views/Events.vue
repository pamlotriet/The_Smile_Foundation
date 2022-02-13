<template>
    <form>
        <div class="head">
            <h1>Upcomming Charity events you can attend</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat felis, imperdiet finibus mi at, pulvinar faucibus quam. Nullam in rutrum urna. Ut commodo a felis ut pellentesque. Fusce imperdiet justo sapien, et consequat diam vulputate sit amet. Etiam a diam sagittis, gravida dolor convallis, eleifend lacus. Quisque malesuada, mauris vitae interdum congue, turpis quam facilisis ipsum, vel malesuada odio diam non tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin lacinia lacus quis fermentum laoreet. Proin interdum molestie elementum. Vivamus cursus sem non eros consequat mollis.
            Nam nisi arcu, auctor quis tellus vitae, tincidunt vulputate leo. Mauris semper urna diam, sed imperdiet turpis aliquam in. In auctor facilisis maximus. Phasellus sit amet purus magna. Donec porttitor turpis venenatis ipsum eleifend, sed varius augue mollis. Nulla imperdiet est lorem, ut aliquam leo vehicula vel. Ut quis sodales lectus. Nunc quis justo dictum, ultricies magna ut, imperdiet ex. Sed ornare fringilla porta. Vestibulum sed eros feugiat, aliquet est eu, ornare libero. Vivamus blandit velit eros, at eleifend urna ullamcorper eget.</p>
        </div>
        <div class="filetrBoxes">
            <select>
                <option>Select Date</option>
                <option  v-for="date in dates" :key="date.id">{{date}}</option>
            </select>
            <select>
                <option>Select Location</option>
                <option  v-for="location in locations" :key="location.id">{{location}}</option>
            </select>
            <select>
                <option>Select Fee</option>
                <option  v-for="fees in fee" :key="fees.id">R {{fees}}</option>
            </select>
        </div>
        <div class="eventTable">
            <table class="eventsTable">
                <thead class="eventsHead">
                    <tr>
                        <th>Event Name</th>
                        <th>Event Description</th>
                        <th>Event Date</th>
                        <th>Event Start</th>
                        <th>Event End</th>
                        <th>Event Location</th>
                        <th>Event Fee</th>
                    </tr>
                </thead>
                <tbody class="eventsBody">
                    <tr v-for="event in events" :key="event.id">
                        <td>{{event.eventName}}</td>
                        <td>{{event.eventDescription}}</td>
                        <td>{{event.eventDate}}</td>
                        <td>{{event.eventStartTime}}</td>
                        <td>{{event.eventEndTime}}</td>
                        <td>{{event.eventLocation}}</td>
                        <td>R {{event.eventFee}}</td>
                        <a href = "mailto:pamela.lotriet@gmail.com?subject= RSVP for event&body=Name of event:%0dNumber of people:%0dDate of event:"><td><i class="fas fa-calendar-check" id="facebook"></i><button>Book Now </button></td></a>
                    </tr>
                </tbody>
            </table>
        </div>
    </form>
</template>

<script>
//import variables from './variables.js'
import axios from 'axios'

    export default({
        data(){
            return{     
                events:[],
                dates:[],
                locations:[],
                fee:[],
            }
        }, 
        components:{

        },
        methods:{
            refreshData(){
                axios.get("https://localhost:7259/api/CharityEventsTables")
                .then((response)=>{
                    this.events=response.data;
                    //filter by unique dates
                    this.dates = this.events.map(item => item.eventDate).filter((value, index, self)=> self.indexOf(value)===index);
                    console.log(this.dates)
                    //filter by unique locations
                    this.locations = this.events.map(item => item.eventLocation).filter((value, index, self)=> self.indexOf(value)===index);
                    console.log(this.locations)
                    //filter by unique event fees
                    this.fee = this.events.map(item => item.eventFee).filter((value, index, self)=> self.indexOf(value)===index);
                    console.log(this.fee)
                });
            }
        },
        mounted:function(){
            this.refreshData();
        }
    })
</script>

<style>
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
</style>
