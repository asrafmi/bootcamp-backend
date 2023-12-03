const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mahasiswa';

async function main() {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);

        return db
    } catch (error) {
        console.log(error);
    } finally {
        client.close()
    }
  return 'done.';
}

module.exports = main