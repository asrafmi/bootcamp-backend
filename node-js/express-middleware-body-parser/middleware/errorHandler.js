module.exports = (err,r,w,n) => {
    console.log(err.message);
    w.status(500).send({message: 'oopss ada error!'})
}