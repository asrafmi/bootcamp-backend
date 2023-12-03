const mobilModel = require('../models/mobil')

async function fetch(r,w) {
    const data = await mobilModel.fetchMobil()
    w.send(data)
}

async function getOne(r,w) {
    const mobilID = r.params.id
    const data = await mobilModel.getOneMobil(mobilID)
    w.send(data)
}

async function create(r,w) {
    const body = r.body
    const data = await mobilModel.createMobil(body)
    w.send(data)
}

async function update(r,w) {
    const mobilID = r.params.id
    const body = r.body
    const data = await mobilModel.updateMobil(body, mobilID)
    w.send(data)
}

async function destroy(r,w) {
    const mobilID = r.params.id
    const data = await mobilModel.deleteMobil(mobilID)
    w.send(data)
}

module.exports = {
    fetch,
    getOne,
    create,
    update,
    destroy
}