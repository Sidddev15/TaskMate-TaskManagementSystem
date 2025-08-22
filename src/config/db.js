import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDB() {
    mongoose.set("strictQuery", true);

    mongoose.connection.on("connected", () => {
        console.log("%c✅ [MONGO] Connected", "color: green; font-weight: bold;");
    });

    mongoose.connection.on("error", (err) => {
        console.error("❌ [MONGO] Error", err);
    });

    mongoose.connection.on("disconnected", () => {
        console.warn("[MONGO] Disconnected");
    });

    return mongoose.connect(env.MONGO_URI, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 10000,
    });
}
