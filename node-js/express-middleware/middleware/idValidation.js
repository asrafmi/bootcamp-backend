module.exports = (r,w,n) => {
    if (isNaN(r.params.id)) {
        w.status(400).send({message: 'id must a number'})
    } else {
        console.log(`id: ${r.params.id}`);
        n()
    }
}