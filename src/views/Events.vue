<template>
    <form>
        <div class="eventTable">
            <table>
                <thead>
                    <th>Event Name</th>
                    <th>Event Description</th>
                    <th>Event Date</th>
                    <th>Event Time</th>
                    <th>Event Location</th>
                </thead>
                <tbody>
                    <tr v-for="event in events" :key="event.id">
                        <td>{{event.eventName}}</td>
                        <td>{{event.eventDescription}}</td>
                        <td>{{event.eventDate}}</td>
                        <td>{{event.eventTime}}</td>
                        <td>{{event.eventLocation}}</td>
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
            }
        }, 
        components:{

        },
        methods:{
            refreshData(){
                axios.get("https://localhost:7259/api/CharityEventsTables")
                .then((response)=>{
                    this.events=response.data;
                });
            }
        },
        mounted:function(){
            this.refreshData();
        }
    })
</script>

