<template>
  <div class="gff p-5 section" style="height: 100vh">
    <center v-show="!success"><div class="col-12 border rounded bg-light" style="background-color: white;">
  
      <div class="p-5">
        <div class="text-center">
          <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
        </div>
        <form @submit.prevent="RegistAccount" class="user">
          <div class="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <input
                v-model="dataLogin.name"
                type="text"
                class="form-control form-control-user"
                id="exampleFirstName"
                placeholder="Name"
              />
            </div>
            <div class="col-sm-6">
              <input
                v-model="dataLogin.username"
                type="text"
                class="form-control form-control-user"
                id="exampleLastName"
                placeholder="Username"
              />
            </div>
          </div>
          <div class="">
            <input
              v-model="dataLogin.email"
              type="email"
              @input="lostViewE"
              class="form-control form-control-user"
              id="exampleInputEmail"
              placeholder="Email Address"
            />
          </div>
          <p v-show="emailValid" class="text-danger">Email Sudah Ada</p>
          <div class="row mt-3">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <input
                v-model="dataLogin.password"
                @input="lostViewP"
                type="password"
                class="form-control form-control-user"
                id="exampleInputPassword"
                placeholder="Password"
              />
            </div>
            <div class="col-sm-6">
              <input
                v-model="verifPass"
                @input="lostViewP"
                type="password"
                class="form-control form-control-user"
                id="exampleRepeatPassword"
                placeholder="Repeat Password"
              />
            </div>
          </div>
          <p v-show="passValid" class="text-danger">Password Tidak Sama</p>
          <button class="btn btn-primary btn-user btn-block mt-3">
            Register Account
          </button>
          <hr />
        </form>
        <hr />
        <!-- <div class="text-center">
          <a class="small" href="forgot-password.html"
            >Forgot Password?</a
          >
        </div> -->
        <div class="text-center">
          <router-link to="/login"><a class="small"
            >Already have an account? Login!</a
          ></router-link>
        </div>
      </div>
    </div></center>
    <div>
      <SuccesFormVue style="width: 100vh;" v-show="success"></SuccesFormVue>
    </div>
  </div>
</template>

<script>
import ServicesWeb from '@/services/ServicesWeb'
import SuccesFormVue from './SuccesForm.vue'

export default {
  data(){
    return{
      dataLogin : {
        "name" : null,
        "username" : null,
        "email" : null,
        "password" : null
      },
      verifPass : null,
      emailValid : false,
      passValid : false,
      success : false,
    }
  },
  methods : {
    RegistAccount(){
      let email = false
      let password = false
      let data = this.dataLogin
      if (this.verifPass !== data.password) {
        this.passValid = true
        password = true
      }

      ServicesWeb.validate(data.email)
        .then(response => {
          if (response.status == 200) {
            this.emailValid = true
            email = true
          }
        })
        .catch(e =>{
          console.log(e)
        })

      if (email == false && password == false) {
        // console.log("asdasdsadsa")
        ServicesWeb.register(data)
          .then(response => {
            console.log(response.data);
            this.success = true;
          })
          .catch(e => {
            console.log(e);
          });
      }

      // console.log(this.dataLogin)
      // if (this.dataLogin.password == this.verifPass) {
      //   let data = this.dataLogin
      //   ServicesWeb.validate(data.email)
      //     .then(response => {
      //       console.log(response.data);
      //       this.emailValid = true;
      //     })
      //     .catch(e => {
      //       console.log(e);
      //       ServicesWeb.register(data)
      //         .then(response => {
      //           console.log(response.data);
      //           this.success = true;
      //         })
      //         .catch(e => {
      //           console.log(e);
      //         });
      //     });
      // } else {
      //   this.passValid = true
      // }
    },
    lostViewP(){
      this.passValid = false
    },
    lostViewE(){
      this.emailValid = false;
    }
  },
  components : {
    SuccesFormVue
  },
}
</script>

<style>
.gff{
  background-image: url(https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=740&t=st=1671085868~exp=1671086468~hmac=eb67cda82a249f399559ef25e5aa8d9ed621b37b73797790f725cf0f2d409c95);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.section {
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
</style>