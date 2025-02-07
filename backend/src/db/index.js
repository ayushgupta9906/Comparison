import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnect = async() =>{
    try {
        const connectionInstance = await mongoose.connect('mongodb+srv://arush:fym2KKFFiFG8GdDG@insta.hsmer.mongodb.net/?retryWrites=true&w=majority&appName=Insta');
        console.log(`MongoDB connected !! DB_HOST is ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("ERROR: ",error);
        process.exit(1);
    }
}

export default dbConnect;


