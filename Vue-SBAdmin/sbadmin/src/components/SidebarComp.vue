<template>
  <div class="bg-dark" style="width: 190px;">
    <ul
      class="navbar-nav sidebar sidebar-dark accordion" style="width:180px !important; "
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="mx-3">E-KTP</div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li @click.prevent="NyobaFunc(1)" class="nav-item" >
        <a href="" class="nav-link1" :class="{ active1: isActive1 }" >
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Overview</span>
        </a>
      </li>

      

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Data KK</div>


      <!-- Nav Item - Charts -->
      <li @click.prevent="NyobaFunc(2)" class="nav-item" >
        <a class="nav-link1" :class="{ active1: isActive2 }" href="">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Tambah Data </span></a
        >
      </li>

      <!-- Nav Item - Tables -->
      <li @click.prevent="NyobaFunc(3)" class="nav-item" >
        <a href="" class="nav-link1" :class="{ active1: isActive3 }">
          <i class="fas fa-fw fa-table"></i>
          <span>Lihat Data</span></a
        >
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />

     

      
    </ul>
  </div>

</template>

<script>

export default {
  name: "SidebarS",
  data(){
    return{
      isActive1 : false,
      isActive2 : false,
      isActive3 : false,
    }
  },
  methods: {
    NyobaFunc(n){
      this.$emit('TestEmit',n)
      if (n==1) {
        this.isActive1 = true,
        this.isActive2 = false,
        this.isActive3 = false
      } else if (n==2) {
        this.isActive1 = false,
        this.isActive2 = true,
        this.isActive3 = false
      } else {
        this.isActive1 = false,
        this.isActive2 = false,
        this.isActive3 = true
      }
    }
  },
  created(){
    let data = this.$session.get("page")
    if (data == 1) {
      this.isActive1 = true
    } else if (data == 2) {
      this.isActive2 = true
    } else {
      this.isActive3 = true
    }
  }
};
</script>

<style>
.nav-link1{
  display: block;
  font-size: 0.85rem;
  /* color: rgb(0, 0, 0); */
  padding: 0.25rem 0.5rem;
  margin: 0.25rem 0.5rem;
  text-decoration: none;
  text-align: center;
}
.active1{
  border-radius: 2px;
  background-color: white;
}
a {
    color: black;
    text-decoration: none !important;
}

a:hover {
    color:black; 
    text-decoration:none !important; 
    cursor:pointer;  
}

.sidebar-dark .nav-item .nav-link1 {
    color: rgba(0, 0, 0, 0.8);
}


</style>