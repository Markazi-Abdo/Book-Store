//Server file
import express from 'express'
import { PORT, DATABASE_URL } from './config.js';
import Books from './model/books.js';
import connectDb from './database/connect.js';
import mongoose from 'mongoose';
import routes from './routes/BooksRoutes.js';
const app = express();
connectDb(DATABASE_URL);

//Middleware for parsing request bodies
//This is mandatory for the transparency of our object that we're prividing....
app.use(express.json())
app.use('/store', routes);

app.get('/', (req, res)=>{
   return res.status(200).send('hello')
})


app.listen(PORT, ()=>console.log("Server running "));