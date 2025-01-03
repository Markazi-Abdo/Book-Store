import mongoose from "mongoose";
//Structure of my collection......
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    }
})

const Books = mongoose.model("books", bookSchema);
export default Books;