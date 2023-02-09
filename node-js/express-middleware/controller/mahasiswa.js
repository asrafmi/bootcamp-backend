const mahasiswa = [
    {
        id : 1, 
        nama : 'asraf',
        email : 'asraf.muhammad07@gmail.com',
        nilai : 95
    },
    {
        id : 2, 
        nama : 'ahmad',
        email : 'ahmad.muhammad07@gmail.com',
        nilai : 90
    },
    {
        id : 3, 
        nama : 'radhan',
        email : 'radhan.muhammad07@gmail.com',
        nilai : 85
    }
]

function fetch(r,w) {
    const qs = r.query
    w.send(qs)
}

function get(r,w) {
    const mhs = r.params.id
    const nilai = r.params.nilai
    const selectedMhs = mahasiswa.find((d) => d.id == mhs && d.nilai == nilai) 
    console.log(selectedMhs);
    console.log(r.params.id);
    
    let data = {},
    response = 200

    if(selectedMhs) {
        data = selectedMhs
    } else {
        data = { message : "mahasiswa hilang cuy"}
        response = 404
    }
    w.status(response).send(data)
}

function create(r,w) {
    const body = r.body
    console.log(body);
    w.send(body)
}

module.exports = {
    fetch,
    get,
    create
}