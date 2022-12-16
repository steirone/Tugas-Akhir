<template>
    <div>
        <NavbarAnggota @TestEmit="NyobaEmit"></NavbarAnggota>
        <AddCompVue v-show="success"></AddCompVue>
        <UpdateCompVue v-show="!success"></UpdateCompVue>

    </div>
</template>

<script>
import NavbarAnggota from '@/components/NavbarAnggota.vue';
import AddCompVue from '@/components/AddComp.vue';
import UpdateCompVue from '@/components/ViewAnggota.vue';
export default {
    data(){
        return{
            success : true,
        }
    },
    components : {
        AddCompVue,
        NavbarAnggota,
        UpdateCompVue
    },
    methods : {
        NyobaEmit : function(n){
            if (n == 1) {
                console.log('1')
                this.success = true;

            } else {
                console.log('2')
                this.success = false;
            }
        }
    },
    created() {
        this.$session.remove("anggota")
        if (!this.$session.has('jwt')) {
            this.$router.push('/login')
        }
    },
}
</script>

<style>

</style>