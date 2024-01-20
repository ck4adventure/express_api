// let mongoServer;
// const opts = { useMongoClient: true }; // remove this option if you use mongoose 5 and above

// before(async () => {
//   mongoServer = await MongoMemoryServer.create();
//   const mongoUri = mongoServer.getUri();
//   await mongoose.connect(mongoUri, opts);
// });

// after(async () => {
//   await mongoose.disconnect();
//   await mongoServer.stop();
// });

// fixtures.cjs
// const { InitDB, ShutdownDB } = require('../db/auth')
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer
// can be async or not
export async function mochaGlobalSetup() {
  mongoServer = await MongoMemoryServer.create();
  console.log(`connecting to db inMemTest`)
    mongoose.set('strictQuery', true);
  await mongoose.connect(mongoServer.getUri(), {
    dbName: `inMemTest`,
  });

};

// can be async or not
export async function mochaGlobalTeardown() {
  try {
    await mongoose.disconnect();
    console.log('mongoose disconnected')
    if (mongoServer) {
      console.log('closing db inMemTest')
      await mongoServer.stop();
    }
    console.log('everything should be shut down now');
  } catch (error) {
    console.log(error)
  }
};