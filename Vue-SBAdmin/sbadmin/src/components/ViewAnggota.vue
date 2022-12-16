<template>
    <div>
      <center>
        <table v-show="success" class="table table-bordered table-hover mb-5 m-4 justify-content-center" style="width: 90%;">
        <thead>
          <tr>
            <th style="width: 60px;" scope="col">ID</th>
            <th scope="col">Nama</th>
            <th scope="col">No NIk</th>
            <th style="width: 200px;" scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="dataKK == null">
            <th colspan="4" scope="row" class="text-center">Data Kosong</th>
          </tr>
          <tr v-else v-for="item in dataKK" :key="item.id">
            <th scope="row">{{item.id}}</th>
            <td>{{item.nama}}</td>
            <td>{{item.nonik}}</td>
            <td>
              <button @click.prevent="Tester(item.nonik)" class="btn btn-primary mr-3">Modifikasi</button>
            </td>
          </tr>
        </tbody>
      </table>
      </center>
    <UpdateCompVue  @TestEmit="NyobaEmit" v-show="!success"></UpdateCompVue>
  </div>
</template>

<script>
import ServicesWeb from '@/services/ServicesWeb';
import UpdateCompVue from './UpdateComp.vue';
export default {
  data(){
    return{
      dataKK : null,
      success : true
    }
  },
  components : {
    UpdateCompVue
  },
  methods : {
    ViewAnggota(){
      let data = this.$route.params.ih
      ServicesWeb.getAllDataAnggota(data)
      .then(response => {
          console.log(response.data);
          this.dataKK = response.data;
        })
        .catch(e => {
          console.log(e);
          this.passwordValid = true;
        });

    },
    NyobaEmit : function(){
      this.success = true
    },
    Tester(nonik){
      this.success = false
      this.$session.set("anggota", nonik);
      console.log(nonik)
    }
  },
  mounted(){
    this.ViewAnggota()
  }
};
</script>