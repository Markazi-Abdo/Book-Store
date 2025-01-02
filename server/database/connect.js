import mongoose from "mongoose";

const connectDb = async (url)=>{
    try {
        await mongoose.connect(url);
        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;