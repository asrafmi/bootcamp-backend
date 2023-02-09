const urlMod = require('url')

function index(r, w) {
    const method = r.method
    r.write(
        JSON.stringify({
            message: `welcome to about ${url[2]}, `
        })
    )
}