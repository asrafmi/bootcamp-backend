// core module
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

const dataPath = './data/employee.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

// ambil data pegawai
const loadEmployee = () => {
    const file = fs.readFileSync('data/employee.json', 'utf-8')
    const employes = JSON.parse(file)
    return employes
}

// ambil pegawai berdasarkan nama
const findEmployeeByName = (nama) => {
    const employes = loadEmployee()
    const employee = employes.find((employee) => employee.nama === nama)
    return employee
}

// ambil pegawai berdasarkan id
const findEmployeeById = (id) => {
    const employes = loadEmployee()
    const employee = employes.find((employee) => employee.id === id)
    return employee
}

// menimpa file json dengan yang baru
const saveEmployee = (employes) => {
    fs.writeFileSync('data/employee.json', JSON.stringify(employes))
}

// tambah pegawai
const addEmployee = (employee) => {
    console.log("employeeFF",employee);
    const employes = loadEmployee()
    let uuid = uuidv4()
    employee.id = uuid
    employes.push(employee)
    saveEmployee(employes)
}

// cek duplikasi hari
const cekDuplikatHari = (hari) => {
    const employes = loadEmployee()
    return employes.find((employee) => employee.hari === hari)
}

// hapus pegawai menggunakan nama
const deleteEmployeeByName = (nama) => {
    const employes = loadEmployee()
    const newemployes = employes.filter((employee) => employee.nama !== nama)
    saveEmployee(newemployes)
}

// hapus pegawai
const deleteEmployeeById = (id) => {
    const employes = loadEmployee()
    const newemployes = employes.filter((employee) => employee.id !== id)
    saveEmployee(newemployes)
}

// ubah pegawai
const updateEmployee = (pegawaiBaru) => {
    const employes = loadEmployee()
    // ngilangin pegawai lama yang namanya sama dengan old nama
    const newemployes = employes.filter((employee) => employee.nama !== pegawaiBaru.oldNama)
    delete pegawaiBaru.oldNama
    newemployes.push(pegawaiBaru)
    saveEmployee(newemployes)
}

const updateEmployeeById = (pegawaiBaru, id) => {
    let employes = loadEmployee()
    let data = findEmployeeById(id)
    data = {...data, ...pegawaiBaru}
    const index = employes.findIndex((d => d.id))
    employes[index] = data
    saveEmployee(employes)
}

module.exports = { loadEmployee, findEmployeeByName, findEmployeeById, deleteEmployeeById, deleteEmployeeByName, addEmployee, cekDuplikatHari, updateEmployee, updateEmployeeById }