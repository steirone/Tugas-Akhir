<template>
<AddCompVue></AddCompVue>
</template>

<script>
import AddCompVue from '@/components/UpdateComp.vue';
export default {
    components :{
        AddCompVue
    },
    created(){
        if (!this.$session.has('jwt')) {
            this.$router.push('/login')
        }
    }
}
</script>

<style>

</style>