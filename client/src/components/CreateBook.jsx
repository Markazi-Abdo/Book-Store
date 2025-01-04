import { useState } from 'react'
import axios from 'axios'
import Spinner from '../pages/Spinner'
import BackButton from '../pages/BackButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

export default function CreateBook() {
  const [ title, setTitle ] = useState(null);
  const [ author, setAuthor ] = useState(null);
  const [ year, setYear ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const { enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();

  const saveBook = ()=>{
    const data = {
      title: title,
      author: author,
      year: year
    }

    setLoading(true),
    axios.post('http://localhost:8000/store/book', data)
    .then(()=>{
      setLoading(false);
      enqueueSnackbar('Data created succesfully', { variant: "success", autoHideDuration: 1000});
      navigate('/');
    })
    .catch((err)=>{
      setLoading(false);
      enqueueSnackbar('Posting Failed', { variant: "error" });
      alert("Error Occured when saving the book");
    })
  }
  return (
    <div>
      <div className='py-4 text-center'>
        <i className='text-white text-2xl'><BackButton/></i>
        <h1 className='text-2xl mt-4'>Add a new book</h1>
      </div>
      {
        loading ? (
          <Spinner />
        ) : (
          <div className='border-2 border-sky-600 w-[600px] p-4 mx-auto'>
              <div className='my-4'>
                  <label htmlFor="title" className='text-2xl border-gray-500 mt-3 '>Title</label>
                  <input 
                  type="text" 
                  placeholder='Enter the title of the book'
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  className='border-2 border-gray-500 w-full my-5 p-2 rounded-md'
                  />
              </div>
              <div className=''>
                  <label htmlFor="author" className='text-2xl border-gray-500 '>Author</label>
                  <input 
                  type="text" 
                  placeholder='Enter the author of the book'
                  value={author}
                  onChange={(e)=>setAuthor(e.target.value)}
                  className='border-2 border-gray-500 w-full my-5 p-2 rounded-md'
                  />
              </div>
              <div className=''>
                  <label htmlFor="title" className='text-2xl border-gray-500 '>Publishing Year</label>
                  <input 
                  type="text" 
                  placeholder='When was the book published'
                  value={year}
                  onChange={(e)=>setYear(e.target.value)}
                  className='border-2 border-gray-500 w-full my-5 p-2 rounded-md'
                  />
              </div>
              <button className='w-full bg-lime-600 h-8' onClick={saveBook}><FontAwesomeIcon icon={faSquarePlus} /></button>
          </div>
        )
      }
    </div>
  )
}
