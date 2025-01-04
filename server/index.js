//Server file
import express from 'express'
import { PORT, DATABASE_URL } from './config.js';
import Books from './model/books.js';
import connectDb from './database/connect.js';
import mongoose from 'mongoose';
import routes from './routes/BooksRoutes.js';
import cors from 'cors'
const app = express();
connectDb(DATABASE_URL);

//Middleware for parsing request bodies
//This is mandatory for the transparency of our object that we're prividing....
app.use(express.json())
//Middleware for cors policy
app.use(cors());
app.use('/store', routes);

app.get('/', (req, res)=>{
   return res.status(200).send('hello')
})


app.listen(PORT, ()=>console.log("Server running "));