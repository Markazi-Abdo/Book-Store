//Server file
import express from 'express'
import { PORT, DATABASE_URL } from './config.js';
import Books from './model/books.js';
import connectDb from './database/connect.js';
const app = express();
connectDb(DATABASE_URL);

app.get('/', (req, res)=>{
   return res.status(200).send('hello')
})

app.listen(PORT, ()=>console.log("Server running "));