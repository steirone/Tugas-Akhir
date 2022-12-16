<template>
<ul class="nav nav-tabs justify-content-center m-3 pt-3 px-3" style="background-color: deepskyblue;">
  <li class="nav-item">
    <a @click.prevent="NyobaFunc(1)" class="nav-link" :class="{ active: isActive }" href="">Tambah Anggota</a>
  </li>
  <li class="nav-item">
    <a @click.prevent="NyobaFunc(2)" class="nav-link" :class="{ active: !isActive }" href="">Lihat Anggota</a>
  </li>
  <li class="nav-item">
    <a v-on:click.prevent="PindahPage" class="nav-link" href="">Back</a>
  </li>
</ul>
</template>

<script>
export default {
  data(){
    return{
      isActive : true
    }
  },
  methods : {
    PindahPage(){
      this.$router.push("/")
      this.$session.remove('anggota')
    },
    NyobaFunc(n){
      this.$emit('TestEmit',n)
      if (n==1) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    }
  }
}
</script>

<style>

 </style>