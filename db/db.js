import { MongoClient } from "mongodb";

// Replace the uri string with your connection string.
const uri = process.env.DB_URL;
const client = new MongoClient(uri);

export const InitDB = async function InitDB() {
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

export const ShutdownDB = async function ShutdownDB() {
    await client.close();
}
