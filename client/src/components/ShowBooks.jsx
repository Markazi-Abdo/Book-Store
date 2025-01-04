import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BackButton from "../pages/BackButton"
import axios from "axios"
import Spinner from "../pages/Spinner";
import { div } from "framer-motion/client";

export default function ShowBooks() {
  const [ loading, setLoading ] = useState([]);
  const [ book, setBook ] = useState({});
  const { id } = useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:8000/store/books/${id}`)
    .then((r)=>{
      setBook(r.data.book);
      setLoading(false);
    })
    .catch((e)=>{
      console.error(e.message);
      setLoading(false);
    })

  }, [ id ]);

  return (
    <div>
      {
        loading ? (
          <Spinner />
        ) : (
          <div className="py-4 text-center border-2 border-blue-400">
            <BackButton/>
            <h1 className="text-lime-600 text-center">Title: {book.title}</h1>
            <h1 className="text-lime-600 text-center">Author: {book.author}</h1>
            <h1 className="text-lime-600 text-center"> Publishing Year: {book.year}</h1>
            <h1 className="text-lime-600 text-center">Found Id: {id}</h1>
          </div>
        )
      }
    </div>
  )
}
