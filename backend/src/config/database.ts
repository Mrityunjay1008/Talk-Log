import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
        throw new Error("MONGODB_URI environment variable is not defined");
        }
        const connect = await mongoose.connect(mongoUri);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Database connection error: {\n${error}\n} `);
        process.exit(1);
    }
}