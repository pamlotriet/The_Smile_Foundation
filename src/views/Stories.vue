<template>
    <form class="stories">
        <modal @close ="toggleModal" class="modal" id="modal" :ModalActive = "ModalActive" >
             <div class="modalView">
                 <div class="headerStory">
                    <h3>Write your own story about your experience with The Smile Foundation</h3>
                 </div>
                 <label class="forLable" for="title">Title</label>
                 <input v-model="title" class="title" name="title" type="text" required/>
                 <label class="forLable" for="name">Name</label>
                 <input v-model="name" class="name"  name="name" type="text" required/>
                 <label class="forLable" for="surname">Surname</label>
                 <input v-model="surname" class="surname" name="surname" type="text" required/>
                 <label class="forLable" for="story">Story</label>
                 <textarea v-model="story" class="story" name="story" type="text" maxlength="3500" required/>
                 <div class="addStory">
                    <button type="submit" @click="addStory" class="addStoryBtn">Post Story</button>
                 </div>
             </div>
        </modal>
        <div class="addStory">
            <button type="button" class="addStoryBtn" @click="toggleModal">Write a Story</button>
        </div>
        <div class="storyCard" v-for="story in stories" :key="story.Id">
            <label class="storTitle">{{story.title}}</label>
            <label class="storyDisplay">{{story.story}}</label>
            <label class="author">{{story.name}} {{story.surname}}</label>
        </div>
    </form>
</template>

<script>

import axios from 'axios'
import modal from '../components/Modal.vue'
import {ref} from 'vue'

export default ({
    components: {
            modal,
        },
    setup() {
         const ModalActive = ref(false)
            const toggleModal= () =>{
                ModalActive.value = !ModalActive.value;
            }
            return{
                ModalActive,
                toggleModal,
            };
    },
    data(){
        return{
            stories:[],
            title: '',
            name:'',
            surname:'',
            story:''
        }
    },
    methods:{
        refreshData(){
        axios.get("https://localhost:7259/api/Stories").then((response) =>{
            this.stories = response.data
        })
        },
        addStory(){
          
            axios.post('https://localhost:7259/api/Stories',
            {
                Name: this.name,
                Surname: this.surname,
                story: this.story,
                Title: this.title})
            .then(this.toggleModal())
        }
    },
    mounted:function(){
        this.refreshData();
    }
})
</script>

<style scoped>

.storyCard{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 80%;
    background: aliceblue;
    margin-left: auto;
    margin-right: auto;
    color: #000000;
    text-align: center;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
}

.addStory{
    width: 100%;
    justify-content: center;
    text-align: center;
    padding-top: 20px;
    padding-right: 300px;
}

.addStoryBtn{
    width: 200px;
    height: 40px;
    border-radius: 25px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
    background-color: #B6D0E2;
    font-size: 14px;
    font-weight: 700;
    border: none;
    z-index: 0;
}

.addStoryBtn:hover{
    box-shadow: none;
}

 .modalView{
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 50;
    background-color: aliceblue;
    width: 70%;
    height: 90%;
    margin-top: auto;
    margin-bottom: auto;
    border: solid;
    border-color: #002043;
    justify-content: center;
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

.forLable{
    text-align: left;
    margin-left: auto;
    margin-right: auto;
}

.title, .name, .surname{
    height: 30px;
    border-radius: 25px;
    width: 80%;
    font-size: 14px;
    margin: 5px;
    margin-left: auto;
    margin-right: auto;
}

.story{
    height: 250px;
    border-radius: 25px;
    width: 80%;
    font-size: 14px;
    margin: 5px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    resize: none;
}
</style>
