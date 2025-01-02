import mongoose from "mongoose";

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
        type: Date,
        required: true
    }
})

const Books = mongoose.model("books", bookSchema);

export default Books;