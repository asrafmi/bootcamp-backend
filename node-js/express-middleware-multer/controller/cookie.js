function cookieReader (r,w) {
    console.log(r.cookies);
    w.send(r.cookies)
}

function cookieSaver (r,w) {
    const data = r.query
    console.log(data);
    w.cookie('bootcamp_data', data,{ expire: 360000 + Date.now() })
    w.send(data)
}

function sessionSaver (r,w) {
    const data = r.query
    r.session.bootcamp_data = data
    w.send(data)
}

module.exports = { cookieReader, cookieSaver, sessionSaver }