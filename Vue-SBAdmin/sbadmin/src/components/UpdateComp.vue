<template>
    <div class="flex-column align-items-center justify-content-center" style="margin-bottom: 80px;">
      <!-- <button type="submit" class="btn btn-primary mx-3">Keluar</button> -->
      <div v-show="!success" class="col-8 border border-primary p-4 m-4 rounded">
          <!-- Button -->
          <div>
            <router-link v-if="this.$route.params.id > 0" to="/">
              <button type="submit" class="btn btn-primary my-3 mr-4">Back</button>
            </router-link>
            <button v-else @click.prevent="NyobaFunc" type="submit" class="btn btn-primary my-3 mr-4">Back</button>
            <button type="submit" @click.prevent="TestRead" class="btn btn-primary my-3 mr-4">Update</button>
            <button type="submit" @click.prevent="DeleteFunc(dataKK.id)" class="btn btn-danger my-3">Delete</button>
          </div>
          <h3 class="text-center mr-5 mb-5">Tambah Data</h3>
          <div>
      <!-- Form -->
      <form v-show="!success" @submit.prevent="RegistKKFunc">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="name">Masukkan NO KK</label>
            <input
              v-model="dataKK.nokk"
              v-bind:readonly="isReadOnly"
              type="number"
              class="form-control"
              id="name"
              placeholder="Masukkan No KK"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="nik">NIK</label>
            <input
            v-model="dataKK.nonik"
            v-bind:readonly="isReadOnly"
              type="number"
              class="form-control"
              id="nik"
              placeholder="Masukkan No NIK"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="name">Nama Lengkap</label>
            <input
            v-model="dataKK.nama"
            v-bind:readonly="isReadOnly"
              type="text"
              class="form-control"
              id="name"
              placeholder="Masukkan Nama Lengkap"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="nik">Status Perkawinan</label>
            <input
            v-model="dataKK.status"
            v-bind:readonly="isReadOnly"
              type="text"
              class="form-control"
              id="nik"
              placeholder="Masukkan Status"
            />
          </div>
        </div>
    
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="tempat_lahir">Tempat Lahir dan Tanggal Lahir</label>
            <input v-bind:readonly="isReadOnly" v-model="dataKK.tempat_lahir" type="text" class="form-control" id="tempat_lahir" />
          </div>
          <div class="form-group col-md-4">
            <label for="agama">Agama</label>
            <select v-bind:disabled="isReadOnly" v-model="dataKK.agama" id="agama" class="form-control">
              <option selected>Choose...</option>
              <option>Islam</option>
              <option>Kristem</option>
              <option>Hindu</option>
              <option>Budha</option>
              <option>Konghuchu</option>
              <option>Atheis</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="jenis_kelamin">Jenis Kelamin</label>
            <select v-bind:disabled="isReadOnly" v-model="dataKK.kelamin" id="jenis_kelamin" class="form-control">
              <option selected>Choose...</option>
              <option value="Laki Laki">Laki - Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
        </div>
    
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="jenis_pekerjaan">Jenis Pekerjaan</label>
            <input v-bind:readonly="isReadOnly" v-model="dataKK.pekerjaan" type="text" class="form-control" id="jenis_pekerjaan" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputZip">Golongan Darah</label>
            <select v-bind:disabled="isReadOnly" v-model="dataKK.goldar" id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>A</option>
              <option>AB</option>
              <option>B</option>
              <option>O</option>
            </select>
          </div>
        </div>
        <div v-if="this.$route.params.id > 0">
          <div class="form-group">
            <label for="inputAddress">Alamat</label>
            <input
              v-model="dataKK.alamat" v-bind:readonly="isReadOnly"
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Masukkan Alamat Lengkap"
            />
          </div>
        </div>
        
        <div v-else class="form-row">
          <div class="form-group col-md-6">
            <label for="inputAddress">Alamat</label>
            <input
              v-model="dataKK.alamat" v-bind:readonly="isReadOnly"
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Masukkan Alamat Lengkap"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputZip">Kepala Keluarga</label>
            <select v-bind:disabled="isReadOnly1" v-model="dataKK.kepala_keluarga" id="inputState" class="form-control">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          
        </div>
        <p v-show="emailValid" class="text-danger text-center">No NIK sudah Ada</p>
        <button class="btn btn-primary " v-bind:disabled="isReadOnly" :class="{cursornoni : isReadOnly}">Update Data</button>
      </form>
    </div>
    </div>
    <SuccesFormVue class="col-6" v-show="success"></SuccesFormVue>
    </div>
      
    </template>
    
    <script>
    import ServicesWeb from '@/services/ServicesWeb';
    import SuccesFormVue from './AlertUpdate.vue';
    
    export default {
      data () {
        return {
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
            kepala_keluarga : null
          },
          emailValid : false,
          success : false,
          isReadOnly : true,
          isReadOnly1 : true,
          dataNOKK : null,
          dataNONIk : null
        }
      },
      components : {
        SuccesFormVue
      },
      methods :{
        TestRead(){
          if (this.isReadOnly == false) {
            this.isReadOnly = true
          } else {
            this.isReadOnly = false
            if (this.$route.params.id > 0) {
              ServicesWeb.validateKK(this.$route.params.id)
                .then(response => {
                  console.log(response.data);
                  this.dataKK = response.data;
                })
                .catch(e => {
                  console.log(e);
                });
            } else {
              let data = this.$session.get("anggota");
              ServicesWeb.validateAnggota(data)
              .then(response => {
                  console.log(response.data);
                  this.dataKK = response.data;
                })
                .catch(e => {
                  console.log(e);
                });
                ServicesWeb.validateKepalaKeluarga(this.$route.params.ih)
                  .then(response => {
                    console.log(response.data);
                    if (this.dataKK.kepala_keluarga == "Yes") {
                    this.isReadOnly1 = false
                  } else {
                    this.isReadOnly1 = true
                    this.dataKK.kepala_keluarga ="No"
                  }
                  })
                  .catch(e => {
                    console.log(e);
                    this.isReadOnly1 = false
                  });
            }
          }
        },
        NyobaFunc(){
          this.$emit('TestEmit')
          this.isReadOnly = true
          this.isReadOnly1 = true
          this.dataKK = ""
        },
        RegistKKFunc(){
            let data = this.dataKK
            this.dataNOKK = data.nokk
            this.dataNONIk = data.nonik
            console.log(data)
            if (this.$route.params.id > 0) {
              if (this.dataNOKK == data.nokk) {
                ServicesWeb.updateKK(data.id,data)
                .then(response => {
                        console.log(response.data);
                        this.success = true;
                      })
                      .catch(e => {
                        console.log(e);
                      });
              } else {
                ServicesWeb.validateKK(data.nokk)
                  .then(response => {
                    console.log(response.data);
                    this.emailValid = true;
                  })
                  .catch(e => {
                    console.log(e);
                    ServicesWeb.updateKK(data.id,data)
                      .then(response => {
                        console.log(response.data);
                        this.success = true;
                      })
                      .catch(e => {
                        console.log(e);
                      });
                    });
                
              }
                // ini pindahan
                } else {
                  if (this.dataNONIk == data.nonik) {
                    ServicesWeb.updateAnggota(data.id,data)
                      .then(response => {
                        console.log(response.data);
                        this.success = true;
                      })
                      .catch(e => {
                        console.log(e);
                      });
                  } else {
                  ServicesWeb.validateAnggota(data.nonik)
                    .then(response => {
                      console.log(response.data);
                      this.emailValid = true;
                    })
                    .catch(e => {
                      console.log(e);
                      ServicesWeb.updateAnggota(data.id,data)
                        .then(response => {
                          console.log(response.data);
                          this.success = true;
                        })
                        .catch(e => {
                          console.log(e);
                        });
                    });
                }
              
            }
        },
        DeleteFunc(id) {
          if (confirm("Anda yakin ingin menghapus ?")) {
            if (this.$route.params.ih > 0) {
              ServicesWeb.deleteAnggota(id)
                .then((response) => {
                  console.log(response.data);
                  this.success = true;
                })
                .catch((e) => {
                  console.log(e);
                });
            } else {
              ServicesWeb.deleteKK(id)
                .then((response) => {
                  console.log(response.data);
                  this.success = true;
                })
                .catch((e) => {
                  console.log(e);
                });
            }
          } else {
            alert("Hapus Dibatalkan");
          }
        },
        GetStudent(){
          ServicesWeb.validateKK(this.$route.params.id)
          .then(response => {
            console.log(response.data);
            this.dataKK = response.data;
          })
          .catch(e => {
            console.log(e);
          });
          

        },
        validateKepala(){
          ServicesWeb.validateKepalaKeluarga(this.$route.params.ih)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
            this.isReadOnly1 = false
          });
        }
    
      },
      created(){
        if (this.$session.get('anggota') == 1) {
            this.dataKK.nokk = this.$route.params.ih
            this.isReadOnly = true
        }
        // this.validateKepala()
        
      },
      mounted(){
        // this.GetStudent()
        
      }
    };
    </script>
    
    <style>
    .kakak{
      cursor: not-allowed;
      pointer-events: none;
    }
    .cursornoni{
      cursor: not-allowed;
    }

    </style>