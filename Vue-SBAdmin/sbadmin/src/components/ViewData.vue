<template>
    <div>

      <table class="table table-bordered table-hover mb-5" style="width: 1050px;">
      <thead>
        <tr>
          <th style="width: 60px;" scope="col">ID</th>
          <th scope="col">Nama</th>
          <th scope="col" style="width: 305px;">No KK</th>
          <th style="width: 305px;" scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-if="dataKK.length == 0">
        <tr>
          <th colspan="4" scope="row" class="text-center">Data Kosong</th>
        </tr>
        
      </tbody>
      <tbody v-else v-for="item in dataKK" :key="item.id">
        <tr class="" v-b-toggle="'collapse-' + item.id">
          <th scope="row">{{item.id}}</th>
          <td>{{item.nama}}</td>
          <td>{{item.nokk}}</td>
          <td class="d-flex justify-content-around">
            <router-link :to="{ path: '/data/' + item.nokk }">
              <button class="btn btn-primary mr-3">Modifikasi</button>
            </router-link>
            <router-link :to="{ path: '/anggota/' + item.nokk }">
              <button class="btn btn-primary ml-3">Tambah Anggota</button>
            </router-link>
          </td>
        </tr>
        <!-- <tr >
          <b-collapse v-bind:id="'collapse-'+ item.id" colspan="4">
            vaaaa
          </b-collapse>
        </tr> -->
        <tr class="hiddenRow">
          <td colspan="4" class="anjir b-nonee">
            <b-collapse v-bind:id="'collapse-'+ item.id">
              <table class="table table-striped b-nonee anjir">
                <thead >
                  <tr>
                    <th class="b-noner">NO NIK</th>
                    <th class="b-noner">Agama</th>
                    <th class="b-noner">Kelamin</th>
                    <th class="b-noner">Tempat Lahir</th>
                    <th class="b-noner">Pekerjaan</th>
                    <th class="b-noner">Status</th>
                    <th class="b-noner">Goldar</th>
                    <th class="b-noner">Alamat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td class="b-nonee">{{item.nonik}}</td>
                    <td class="b-nonee">{{item.agama}}</td>
                    <td class="b-nonee">{{item.kelamin}}</td>
                    <td class="b-nonee">{{item.tempat_lahir}}</td>
                    <td class="b-nonee">{{item.pekerjaan}}</td>
                    <td class="b-nonee">{{item.status}}</td>
                    <td class="b-nonee">{{item.goldar}}</td>
                    <td class="b-nonee">{{item.alamat}}</td>
                  </tr>
                  <tr>
                    
                  </tr>
                </tbody>
              </table>
            </b-collapse>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <div>
      <div v-for="item in dataKK" :key="item.id">
        <b-button v-b-toggle="'collapse-' + item.id" variant="primary">Toggle Collapse</b-button>
        <b-collapse v-bind:id="'collapse-' + item.id" class="mt-2">
          <b-card>
            <p class="card-text">Collapse contents Here</p>
          </b-card>
        </b-collapse>
      </div>
    </div> -->
    </div>
</template>

<script>
import ServicesWeb from '@/services/ServicesWeb';
export default {
  data(){
    return{
      dataKK : null,
    }
  },
  methods : {
    ViewData(){
      ServicesWeb.getDataKK()
      .then(response => {
          console.log(response.data);
          this.dataKK = response.data;
        })
        .catch(e => {
          console.log(e);
          this.passwordValid = true;
        });
    },
    
  },
  mounted(){
    this.ViewData()
  }
};
</script>

<style>
.anjir{
  padding: 0 !important;
  margin: 0 !important;
  margin-bottom: 0 !important;
}
.b-nonee{
  border: none !important;
}
.b-noner{
  border-top:none ;
  border-bottom:none ;
}
</style>