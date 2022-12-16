import http from '../http-common';

class ServicesWeb {
    // Login Data
    login(data) {
        return http.post(`/account/login`, data);
    }

    // Register Data
    register(data) {
        return http.post(`/account/insert`, data)
    }

    // validate email
    validate(email) {
        return http.get(`/account/valid/${email}`)
    }

    // Insert KK
    registerKK(data) {
        console.log(data)
        return http.post(`/datakk/insert`, data)
    }

    // Update KK
    updateKK(id, data) {
        return http.put(`/datakk/update/${id}`, data);
    }

    // deleteKK
    deleteKK(id) {
        return http.delete(`/datakk/delete/${id}`);
    }

    // validate KK
    validateKK(nokk) {
        return http.get(`/datakk/valid/${nokk}`)
    }

    // get data kk
    getDataKK(){
        return http.get(`/datakk/getAll`)
    }
    // batas

    // Insert Anggota
    registerAnggota(data) {
        console.log(data)
        return http.post(`/anggota/insert`, data)
    }

    // Update Anggota
    updateAnggota(id, data) {
        return http.put(`/anggota/update/${id}`, data);
    }

    // deleteAnggota
    deleteAnggota(id) {
        return http.delete(`/anggota/delete/${id}`);
    }

    // validate Anggota
    validateAnggota(nonik) {
        return http.get(`/anggota/valid/${nonik}`)
    }

    // get data Anggota
    getDataAnggota(){
        return http.get(`/anggota/getAll`)
    }

    getAllDataAnggota(nokk){

        return http.get(`anggota/angot/${nokk}`)
    }

    validateKepalaKeluarga(nokk){
        return http.get(`anggota/validatekk/${nokk}`)
    }



}

export default new ServicesWeb();