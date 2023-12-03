const { MongoClient, ObjectId } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'pabrik';

async function fetchMobil() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = await db.collection('car').find({}).toArray()

    return collection
}

async function getOneMobil(id) {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = await db.collection('car').findOne({_id: new ObjectId(id)})

    return collection
}

async function createMobil(data) {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = await db.collection('car').insertOne({...data, _id: new ObjectId(new Date().getTime())})

    return collection
}

async function updateMobil(data, id) {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = await db.collection('car').updateOne({_id: new ObjectId(id)}, {$set: data})

    return collection
}

async function deleteMobil(id) {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = await db.collection('car').deleteOne({_id: new ObjectId(id)})

    return collection
}

module.exports = {
    fetchMobil,
    getOneMobil,
    createMobil,
    updateMobil,
    deleteMobil
}