<template>
  <center>
       
    <div style="margin-bottom: 80px;" class="col-9 justify-content-center">
      <!-- <button type="submit" class="btn btn-primary mx-3">Keluar</button> -->
      <div v-show="!success" class="border border-primary p-4 m-4 rounded">
          <!-- Button -->
          <h3 class="text-center mr-5 mb-5">Tambah Data</h3>
          <div>
      <!-- Form -->
      <form v-show="!success" @submit.prevent="RegistKKFunc">
        <div class="form-row">
          <div class="form-group col-md-6 d-flex justify-content-between">
            <label for="name">Masukkan NO KK</label>
            <input
              v-model="dataKK.nokk"
              v-bind:readonly="isReadOnly"
              type="number"
              class="form-control col-8"
              id="name"
              placeholder="Masukkan No KK"
              required
            />
          </div>
          <div class="form-group col-md-6 d-flex justify-content-between">
            <label for="nik">NIK</label>
            <input
            v-model="dataKK.nonik"
              type="number"
              class="form-control col-8"
              id="nik"
              placeholder="Masukkan No NIK"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6 d-flex justify-content-between">
            <label for="name">Nama Lengkap</label>
            <input
            v-model="dataKK.nama"
              type="text"
              class="form-control col-8"
              id="name"
              required
              placeholder="Masukkan Nama Lengkap"
            />
          </div>
          <div class="form-group col-md-6 d-flex justify-content-between">
            <label for="nik">Status Perkawinan</label>
            <input
            v-model="dataKK.status"
              type="text"
              class="form-control col-8"
              id="nik"
              required
              placeholder="Masukkan Status"
            />
          </div>
        </div>
    
        <div class="form-row">
          <div class="form-group col-md-6 d-flex justify-content-between">
            <label for="jenis_kelamin">Jenis Kelamin</label>
            <select v-model="dataKK.kelamin" id="jenis_kelamin" class="form-control col-8">
              <option selected>Choose...</option>
              <option value="Laki Laki">Laki - Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div class="form-group col-md-6 d-flex justify-content-between">
            <label for="agama">Agama</label>
            <select v-model="dataKK.agama" id="agama" class="form-control col-8">
              <option selected>Choose...</option>
              <option>Islam</option>
              <option>Kristem</option>
              <option>Hindu</option>
              <option>Budha</option>
              <option>Konghuchu</option>
              <option>Atheis</option>
            </select>
          </div>
        </div>
    
        <div class="form-row">
          <div class="form-group col-md-6 d-flex justify-content-between">
            <label for="jenis_pekerjaan">Jenis Pekerjaan</label>
            <input v-model="dataKK.pekerjaan" type="text" class="form-control col-8" id="jenis_pekerjaan" />
          </div>
          <div class="form-group col-md-6 d-flex justify-content-between">
            <label for="inputZip">Golongan Darah</label>
            <select v-model="dataKK.goldar" id="inputState" class="form-control col-8">
              <option selected>Choose...</option>
              <option>A</option>
              <option>AB</option>
              <option>B</option>
              <option>O</option>
            </select>
          </div>
        </div>
    
        <div class="form-row">
          <div class="form-group col-md-6 d-flex justify-content-between">
            <label for="tempat_lahir">Tempat Lahir dan Tanggal Lahir</label>
            <input v-model="dataKK.tempat_lahir" type="text" class="form-control col-8" style="height: 50px;" id="tempat_lahir" />
          </div>
          <div class="form-group col-md-6 d-flex justify-content-between">
            <label for="inputAddress">Alamat</label>
            <input
              v-model="dataKK.alamat"
              type="text"
              class="form-control col-8"
              style="height: 50px;"
              id="inputAddress"
              required
              placeholder="Masukkan Alamat Lengkap"
            />
          </div>
        </div>
    
        <p v-show="emailValid" class="text-danger text-center">No KK sudah Ada</p>
        <p v-show="emailValid1" class="text-danger text-center">No NIK sudah Ada</p>
        <button class="btn btn-primary">Tambah Data</button>
      </form>
    </div>
    </div>
    <SuccesFormVue v-show="success"></SuccesFormVue>
    </div>
  </center>
  
</template>

<script>
import ServicesWeb from '@/services/ServicesWeb';
import SuccesFormVue from './SuccesForm.vue';

export default {
  data () {
    return {
      isActive : 'none',
      dataKK : {
        nokk : null,
        nonik : null,
        nama : null,
        status : null,
        tempat_lahir : null,
        agama : null,
        kelamin : null,
        pekerjaan : null,
        goldar : null,
        alamat : null,
      },
      emailValid : false,
      emailValid1 : false,
      success : false,
      isReadOnly : false,
    }
  },
  components : {
    SuccesFormVue
  },
  methods :{
    RegistKKFunc(){
      let data = this.dataKK
      console.log(data)
      if (this.$route.fullPath == '/') {
        ServicesWeb.validateKK(data.nokk)
          .then(response => {
            console.log(response.data);
            this.emailValid = true;
          })
          .catch(e => {
            console.log(e);
            ServicesWeb.registerKK(data)
              .then(response => {
                console.log(response.data);
                this.success = true;
                this.dataKK.kepala_keluarga = "Yes"
                ServicesWeb.registerAnggota(data)
                  .then(response1 => {
                    console.log(response1.data)
                  })
                  .catch(e1 => {
                    console.log(e1)
                  })
              })
              .catch(e => {
                console.log(e);
              });
          }); 
      } else {
        ServicesWeb.validateAnggota(data.nonik,data.nokk)
          .then(response => {
              console.log(response.data);
              this.emailValid1 = true;
            })
            .catch(e => {
              console.log(e);
              this.dataKK.kepala_keluarga = "No"
              ServicesWeb.registerAnggota(data)
                .then(response => {
                  console.log(response.data);
                  this.success = true;
                })
                .catch(e => {
                  console.log(e);
                });
            }); 
      }
    },
  },
  created(){
    if (this.$route.fullPath !== '/') {
      this.isReadOnly = true
      this.dataKK.nokk = this.$route.params.ih
    }
  }
};
</script>

<style>
</style>