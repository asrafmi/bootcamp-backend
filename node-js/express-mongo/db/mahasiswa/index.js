const fs = require('fs')
const path = require('path')
const dbPath = path.resolve(__dirname, './mahasiswa.json')

function getDataDB() {
    let data = fs.readFileSync(dbPath)
    data = data.toString('utf-8')
    return JSON.parse(data)
}

function writeData(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data), {encoding:'utf-8'})
}

function fetch() {
    let data = getDataDB()
    return data
}

function create(bodyData) {
    const data = getDataDB()
    data.push(bodyData)
    fs.writeFileSync(dbPath, JSON.stringify(data), {encoding:'utf-8'})
    return bodyData
}

function getOne(id) {
    let data = getDataDB()
    return data.find((d) => d.id == id)
}

function remove(id) {
    let data = fetch()
    data = data.filter((d) => d.id !== id)
    writeData(data)
}

function update(bodyData, id) {
    let data = getOne(id)
    console.log('dataa',data);
    let allData = fetch()
    console.log('all dataa',allData);
    
    data = {...data, ...bodyData}
    
    console.log('dataa setelah ditimpaa',data);
    
    const index = allData.findIndex((d) => d.id == id )
    console.log('indexxx',index);
    console.log('data',data);
    // if (!index || !data) {
    //     throw Error('ID tidak ditemukan!')
    // }
    allData[index] = data
    writeData(allData)
    return data
}

module.exports = {
    fetch,
    create,
    getOne,
    update,
    remove
}