<template>
    <div class="card-body border border-danger">
        <h5 class="card-title">Success!</h5>
        <p class="card-text" >Your Data Has Been Deleted!</p>
        <button v-if="this.$route.params.ih" @click.prevent="RefreshFunc" class="btn bg-primary text-light">Back</button>
        <router-link to="/"><button class="btn bg-primary text-light">Back</button></router-link>
        
    </div>
</template>
<script>
    export default {
        data(){
            return{
            }
        },
        methods :{
            RefreshFunc() {
                location.reload();
            },
        },
    }
</script>