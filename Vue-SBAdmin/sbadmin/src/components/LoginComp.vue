<template>
  <center><div class="gff d-flex flex-column align-items-center justify-content-center" style="height: 100vh;">

    <div class="p-5 border m-5 col-10 col-xl-5 col-lg-10 rounded shadow justify-content-center" style="background-color: white;">
          <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
          </div>
          <form @submit.prevent="LoginFunc" class="user">
            <div class="form-group">
              <input
                v-model="dataLogin.email"
                @input="lostView"
                type="email"
                class="form-control form-control-user"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter Email Address..."
              />
            </div>
            <div class="form-group">
              <input
                v-model="dataLogin.password"
                @input="lostView"
                type="password"
                class="form-control form-control-user"
                id="exampleInputPassword"
                placeholder="Password"
              />
            </div>
            <p v-show="passwordValid" class="text-danger">Email / Password anda salah</p>
            <div class="form-group">
              <div class="custom-control custom-checkbox small">
                <input
                  v-model="checkinp"
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck"
                />
                <label class="custom-control-label" for="customCheck"
                  >Remember Me</label
                >
              </div>
            </div>
            <button
              class="btn btn-primary btn-user btn-block"
            >
              Login
            </button>
            <hr />
            
          </form>
          <hr />
          <div class="text-center">
            <router-link to="/register">
              <a class="small" href="register.html"
                >Create an Account!</a
              >
            </router-link>
          </div>
        </div>
  </div></center>
</template>

<script>
import ServicesWeb from '@/services/ServicesWeb';

export default {
  name: "LoginS",
  data(){
    return {
      dataLogin : {
        email : null,
        password : null,
      },
      checkinp : null,
      passwordValid : false,
    }
  },
  methods : {
    LoginFunc(){
      let data = this.dataLogin
      let data1 = this.checkinp
      console.log(data)
      ServicesWeb.login(data)
        .then(response => {
          console.log(response.data);
          console.log(data1)
          this.$session.start();
          this.$session.set("jwt", response.data);
          this.$router.push("/");
          this.success = true;
        })
        .catch(e => {
          console.log(e);
          this.passwordValid = true;
        });
    },
    lostView(){
      this.passwordValid = false;
    }
  }
};
</script>

<style>
.gff{
  background-image: url(https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=740&t=st=1671085868~exp=1671086468~hmac=eb67cda82a249f399559ef25e5aa8d9ed621b37b73797790f725cf0f2d409c95);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>