import mongoose from "mongoose";

// Replace the uri string with your connection string.
const uri = process.env.DB_URL;
// const client = new MongoClient(uri);
const connectionOptions = {
    dbName: "test"
}

let connection

export const InitDB = async function InitDB() {
    // Send a ping to confirm a successful connection
    console.log("running db init")
    try {
        await mongoose.connect(uri);
        // await connection.db("admin").command({ ping: 1 });
        mongoose.connection.on('error', err => {
            console.log(err);
        });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error)
    }

}

export const ShutdownDB = async function ShutdownDB() {
    await mongoose.connection.close()
}
