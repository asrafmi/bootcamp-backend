module.exports = (r,w,n) => {
    const auth = r.header('Authorization')
    if (auth) {
        n()
    } else {
        w.status(403).send({message:'forbidden coyy'})
    }
}