import Home from "./pages/HomePage.vue"
import Login from "./pages/LoginPage.vue"
import Register from "./pages/RegisterPage.vue"
import Data from "./pages/DataPage.vue"
import Anggota from "./pages/AnggotaPage.vue"

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/data/:id',
        component: Data
    },
    {
        path: '/anggota/:ih',
        component: Anggota
    },

]