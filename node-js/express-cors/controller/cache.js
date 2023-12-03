const axios = require('axios')
const dbMahasiswa = require('../db/mahasiswa/index')

async function fetchProvinsi (r,w) {
    try {
        const urlProvinsi = 'https://dev.farizdotid.com/api/daerahindonesia/provinsi'
        let tampungProvinsi = []
        await axios.get(urlProvinsi).then((res) => {
            tampungProvinsi = res.data
        })
        w.json(tampungProvinsi)
    } catch (error) {
        console.log(error);
    }
}

async function fetchKota (r,w) {
    let id_provinsi = r.params.id_provinsi
    const urlKota = `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id_provinsi}`
    console.log(urlKota);
    let tampungKota = []
    try {
        await axios.get(urlKota).then((res) => {
            tampungKota = res.data
        })
        w.json(tampungKota)
    } catch (error) {
        console.log(error);
    }
}

async function fetchKelurahan (r,w) {
    let id_kecamatan = r.params.id_kecamatan
    const urlKota = `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${id_kecamatan}`
    console.log(urlKota);
    let tampungKelurahan = []
    try {
        await axios.get(urlKota).then((res) => {
            tampungKelurahan = res.data
        })
        w.json(tampungKelurahan)
    } catch (error) {
        console.log(error);
    }
}

async function cacheContent (r,w) {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await axios.get(url)
        w.send(response.data)
    } catch (error) {
        console.log(error);
        w.status(500).send(error)
    }
}

function noCache(r,w) {
    w.set('Cache-Control', 'no-store')
    w.send({message: 'gabakal ada cachenya bro!', timestamp : new Date().getTime()})
}

function twoMinutesCache(r,w) {
    w.set('Cache-Control', `public, max-age= ${60 * 2}`)
    w.send({message: 'cachenya', timestamp : new Date().getTime()})
}

function cachePeople(r,w) {
    const data = dbMahasiswa.fetch()
    w.set('Cache-Control', `public, max-age= ${60 * 2}`)
    w.send({message: 'cachenya', timestamp : new Date().getTime()})
}

async function fetchMasIlham(r,w) {
    try {
        const data = await axios.get("https://84c7-118-99-87-45.ap.ngrok.io/cache-content")
        console.log(data);
        w.send(data.data)
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    noCache,
    twoMinutesCache,
    fetchProvinsi,
    cacheContent,
    fetchKota,
    fetchKelurahan,
    fetchMasIlham
}