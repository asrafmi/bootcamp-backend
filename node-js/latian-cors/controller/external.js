const axios = require('axios')

async function fetchMasIlham(r,w) {
    try {
        const data = await axios.get("https://84c7-118-99-87-45.ap.ngrok.io/api/v2/cache-content")
        let tampung = []
        for (let i = 0; i < data.data.length; i++) {
            tampung.push({title: data.data[i].title, body: data.data[i].body})
        }
        w.send(tampung)
    } catch(err) {
        console.log(err);
    }
}

async function postMasIlham(r,w) {
    try {
        const body = r.body
        console.log("bodyyyyy",body);
        const data = await axios.post("https://84c7-118-99-87-45.ap.ngrok.io/api/v2/post-content")
        console.log(data.data);
        w.send(data.data)
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    fetchMasIlham,
    postMasIlham
}