const http = require('http')
const fs = require('fs')
const aboutCtrl = require('./controller/about')
const productCtrl = require('./controller/product')
const port = 3000

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data)=> {
        if(err){
            res.writeHead(404)
            res.write('file ga ketemu')
        } else {
            res.write(data)
        }
        res.end()
    })
}

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type':'application/json' })
    // const data = [
    //     {
    //        message: 'home'
    //     },
    //     {
    //         message: 'about'
    //     },
    //     {
    //         message: 'faq'
    //      }
    // ]
    const method = req.method
    const url = req.url.split('/')

    switch (url[1].split('?'[0])) {
        case 'about':
            aboutCtrl.index(r, q)
            break;
        case 'contact':
            aboutCtrl.index(r, q)
            break;
        default:
            renderHTML('./pages/index.html', res)
            break;
    }

    // const url = req.url

    // if (url === '/home') {
    //     res.write(JSON.stringify(data[0]))
    // } else if (url === '/about') {
    //     res.write(JSON.stringify(data[1]))
    // } else if (url === '/faq') {
    //     res.write(JSON.stringify(data[2]))
    // }
}) 

// const server = http.createServer((req,res) => {
//     res.writeHead(200, {
//         'Content-Type':'text/html',
//     })
//     const url = req.url.split('/')
//     switch (url[1]) {
//         case '/about':
//             renderHTML('./pages/about.html', res)
//             break;
//         case '/contact':
//             renderHTML('./pages/contact.html', res)
//             break;
//         default:
//             renderHTML('./pages/index.html', res)
//             break;
//     }
// })
server.listen(port, () => {
    console.log(`server amann di http://localhost:${port}`);
})
