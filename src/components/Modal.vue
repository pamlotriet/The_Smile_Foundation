<template>
    <transition name="modal-popup">
        <div  v-show="ModalActive" class="modal">
            <transition name="modal-popup-inner">
                <div class="modal-inner">
                    <i @click="close" class="fas fa-times"></i>
                    <!-- Modal Content -->
                    <slot/>
                    <button type="button">Book Now</button>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>

    export default ({
        props:['ModalActive'],
        setup(props, {emit}){
            const close = () =>{
                emit('close')
            };
            return{
                close
            }
        }
    });

</script>

<style scoped>

    i{
        position: fixed;
        top: 15px;
        right: 15px;
        font-size: 20px;
        color: black;
        cursor: pointer;
        z-index: 55;
        right: 14%;
        top: 5%;
    }

    i :hover{
        color: crimson;
    }

    .modal{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.7);
    }

     .modal-inner{
        position: fixed;
        z-index: 55;
        width: 100vw;
        height: 100vh
    }

    button{
        position: fixed;
        padding: 20px 30px ;
        border: none;
        font-size: 16px;
        background-color: crimson;
        color: white;
        cursor: pointer;
        z-index: 50;
        right: 45%;
        bottom: 1%;
    }

</style>