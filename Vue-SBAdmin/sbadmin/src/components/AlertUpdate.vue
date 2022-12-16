<template>
    <div class="card-body border border-danger">
        <h5 class="card-title">Success!</h5>
        <p class="card-text" >Your Data Has Been Updated</p>
        <button @click.prevent="RefreshFunc" class="btn bg-primary text-light">Back</button>
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