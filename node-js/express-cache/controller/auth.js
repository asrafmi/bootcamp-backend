const crypto = require('crypto')
const algorithm = 'abcdef'
const key = 'IniSuperRahasiaa'
const dbMahasiswa = require('../db/mahasiswa/index')

function giveAuthorizeAPIKey (r,w) {
    const username = r.body.username
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipheriv(algorithm, key, iv)
    const result = Buffer.concat([iv, cipher.update(username), cipher.final()])
    const _key = result.toString('hex')
    w.send({ apiKey: _key})
}

function authorizeAPIKey (r,w) {
    const apiKey = r.header('x-api-key')
    if(!apiKey || apiKey == '') {
        w.status(403)
    }
    const iv = apiKey.slice(0,16)
    apiKey = apiKey.slice(16)
    const decipher = crypto.createCipheriv(algorithm, key, iv)
    const result = Buffer.concat([iv, decipher.update(apiKey), cipher.final()])
    const mahasiswa = dbMahasiswa.fetch()
    w.send(mahasiswa)
}

module.exports = {
    giveAuthorizeAPIKey,
    authorizeAPIKey
}