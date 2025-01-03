import express from 'express'
import Books from '../model/books.js'
const routes = express.Router();
//Books Routers
//For inserting a new book
routes.post('/book', async (req, res)=>{
    try {
       if(!req.body.title || !req.body.author || !req.body.year){
          return res.status(400).send({error: "BAD REQUEST WAS NOT UNDERSTOOD......"})
       }
       
       const book = {
          title: req.body.title,
          author: req.body.author,
          year: req.body.year
       }
 
       const newBook = await Books.create(book);
       console.log(newBook);
       return res.status(200).send(newBook);
 
    } catch (error) {
       console.log(error.message)
       res.status(500).send({error: error.message})
    }
    
 })
 
 //Getting all books from database....
 routes.get('/books', async (req, res)=>{
    try {
       const books = await Books.find();
       console.log(books);
       return res.status(200).json({ data: books, count: books.length });
 
    } catch (error) {
       console.log(error.message);
       res.status(500).send({ error: error.message });
    }
 })
 
 //Getting a book by id
 routes.get('/books/:id', async(req, res)=>{
    try {
       const { id } = req.params;
       const book = await Books.findById(id, { _id: 0});
       console.log(book)
       return res.status(200).json({ foundBook: book, foundId: id });
 
    } catch (error) {
       console.log(error);
       res.status(500).send(error);
    }
 })
 
 //To update a book
 routes.put('/books/:id', async (req, res)=>{
    try {
       if(!req.body.title || !req.body.author || !req.body.year){
          return res.status(400).send("Bad request")
       }
 
       const { id } = req.params;
       const result = await Books.findByIdAndUpdate(id, req.body);
       !result 
       ? res.status(404).send({ message: "Couldn't Update :(.."})
       : res.status(200).json({ message: "Item Updated successfully"});
 
    } catch (error) {
       console.log(error);
       return res.status(500).send(error);
    }
 })
 
 routes.delete('/books/:id', async (req, res)=>{
    try {
       const { id } = req.params;
       const result = await Books.findByIdAndDelete(id);
       !result 
       ? res.status(404).send({ message: "Couldn't Delete :(.."})
       : res.status(200).json({ message: "Item Deleted successfully"});
 
    } catch (error) {
       console.log(error)
       return res.status(500).send({ message: error });
    }
 })

 export default routes