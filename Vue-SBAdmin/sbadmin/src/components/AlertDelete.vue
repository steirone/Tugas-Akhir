<template>
    <div class="card-body border border-danger">
        <h5 class="card-title">Success!</h5>
        <p class="card-text" >Your Data Has Been Deleted!</p>
        <button v-if="this.$route.params.ih" @click.prevent="RefreshFunc" class="btn bg-primary text-light">Back</button>
        <router-link to="/" v-else><button class="btn bg-primary text-light">Back</button></router-link>
        
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
                if (this.$route.params.id > 0) {
                   this.$router.push('/') 
                } else {
                    location.reload();
                }
            },
        },
    }
</script>