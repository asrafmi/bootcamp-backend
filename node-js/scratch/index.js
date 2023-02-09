const axios = require('axios')

// let hasil = axios.get('https://swapi.dev/api/people').then((data) => {
//     for (let i = 0; i < data.data.results.length; i++) {
//         console.log(data.data.results[i].name);
//     }
// })
// console.log(4);
// console.log(5);
// console.log(6);

async function getData() {
    let hasil = await axios.get('https://swapi.dev/api/people')
    return hasil
}

async function main() {
    console.log('start');
    getData().then((data) => {
        for (let i = 0; i < data.data.results.length; i++) {
        console.log(data.data.results[i].name);
        }
    })
    console.log('end');
}

main()