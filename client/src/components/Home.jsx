import { useState, useEffect } from "react"
import axios from 'axios'
import Spinner from "../pages/Spinner"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircleInfo, faSquarePen, faSquareMinus, faBook, faTable, faList } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import BooksCards from "../pages/home/BooksCards";
import BooksList from "../pages/home/BooksList";

export default function Home() {
  const [ books, setBooks ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ showType, setShowType ] = useState('table')

  //Retrieving data from my server that i created.....
  useEffect(()=>{
    setLoading(true);
    axios.get("http://localhost:8000/store/books")
    .then((r)=>{
        setBooks(r.data.data)
        setLoading(false);
    })
    .catch((err)=>{
        console.log(err);
        setLoading(false)
    })

  }, [])

  return (
    <div className="p-4">
        <h1 className="text-center text-4xl text-lime-600 mr-7"><FontAwesomeIcon icon={faBook} /></h1>
        <div className="flex justify-center mt-4 items-center gap-x-4 mr-7">
            <button className="bg-lime-300 hover:bg-lime-600 p-2 rounded-md" onClick={()=>setShowType('table')}>
              <FontAwesomeIcon icon={faTable} />
            </button>
            <button className="bg-lime-300 hover:bg-lime-600 p-2 rounded-md" onClick={()=>setShowType('List')}>
              <FontAwesomeIcon icon={faList} />
            </button>
        </div>
        <div className="flex justify-between items-center mx-5">
            <h1 className="text-3xl my-8">Books List</h1>
            <Link to="/book/create">
                <i className="text-lime-600 text-2xl"><FontAwesomeIcon icon={ faPlus } /></i>
            </Link>
        </div>

            {
              loading ? (
                  <Spinner />
                  
              ) : (
                showType === 'table' ? <BooksCards books={books} /> : <BooksList books={books} />
              )
            }
    </div>
  )
}
