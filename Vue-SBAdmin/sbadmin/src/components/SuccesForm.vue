<template>
    <div class="card-body border border-danger rounded shadow bg-light flex-column align-items-center">
        <h5 class="card-title">Success!</h5>
        <p class="card-text" >Your Data Has Been Submitted</p>
        <router-link v-if="this.$route.fullPath == '/register'" to="/login"><button class="btn bg-primary text-light">Login</button></router-link>
        <button v-else @click.prevent="RefreshFunc" class="btn bg-primary text-light">Back</button>
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