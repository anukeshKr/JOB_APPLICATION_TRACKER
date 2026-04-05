import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;


if (!MONGODB_URI) {
    throw new Error("Please Define MongoDb_URI")
}

// Global cached connection for hot reloads
let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI!).then((mongoose) => mongoose);
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;

