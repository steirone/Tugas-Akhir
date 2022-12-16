<template>
    <div class="m-3">
        <h2 class="shadow p-3 bg-white rounded">Homepage</h2>
        <div class="d-flex justify-content-around col-6 m-3">
            <div class="rounded col-6 p-3 mr-2" style="background-color: aqua; ">
                <p class="font-weight-bold">Jumlah Kartu Keluarga</p>
                <h3 v-if="dataKK == null" class="font-weight-bold">0</h3>
                <h3 v-else class="font-weight-bold">{{dataKK.length}}</h3>
            </div>
            <div class="rounded col-6 p-3 text-light" style="background-color: darkorange;">
                <p class="font-weight-bold">Jumlah Warga</p>
                <h3 v-if="dataanggota == null" class="font-weight-bold">0</h3>
                <h3 v-else class="font-weight-bold">{{dataanggota.length}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import ServicesWeb from '@/services/ServicesWeb';

export default {
    data(){
        return{
            dataKK : null,
            dataanggota : null
        }
    },
    methods :{
        getDataKK(){
            ServicesWeb.getDataKK()
            .then((response) => {
                console.log(response.data);
                this.dataKK = response.data;
            })
            .catch((e) => {
                console.log(e);
            });
        },
        getDataAnggota(){
            ServicesWeb.getDataAnggota()
            .then((response) => {
                console.log(response.data);
                this.dataanggota = response.data;
            })
            .catch((e) => {
                console.log(e);
            });
        }
    },
    mounted(){
        this.getDataKK()
        this.getDataAnggota()
    }
}
</script>

<style>

</style>