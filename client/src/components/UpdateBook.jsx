import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../pages/Spinner'
import BackButton from '../pages/BackButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faPen } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Title } from 'chart.js'
import { useSnackbar } from 'notistack'

export default function UpdateBook() {
  const [ title, setTitle ] = useState(null);
  const [ author, setAuthor ] = useState(null);
  const [ year, setYear ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const { id } = useParams();
  const { enqueueSnackbar} = useSnackbar();

  const navigate = useNavigate();

  const saveBook = ()=>{
    const data = {
      title: title,
      author: author,
      year: year
    }

    setLoading(true),
    axios.put(`http://localhost:8000/store/books/${id}`, data)
    .then(()=>{
      setLoading(false);
      enqueueSnackbar("Data modified succcesfully successfully", { variant: 'success', hideIconVariant: 1000})
      navigate('/');
    })
    .catch((err)=>{
      setLoading(false);
      enqueueSnackbar("Data couldn't be updated", { variant: 'error', hideIconVariant: 1000})
      alert("Error Occured when updating the book");
    })
  }

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:8000/store/books/${id}`)
    .then((r)=>{
      setTitle(r.data.book.title);
      setAuthor(r.data.book.author);
      setYear(r.data.book.year);
      
      setLoading(false);
    })
    .catch((e)=>{
      alert('Couldnt find book');
      console.log(e);
      setLoading(false);
    })
  }, [])
  return (
    <div>
      <div className='py-4 text-center'>
        <i className='text-white text-2xl'><BackButton/></i>
        <h1 className='text-2xl mt-4'>{`Modify ${title} book`}</h1>
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
              <button className='w-full bg-lime-600 h-8' onClick={saveBook}><FontAwesomeIcon icon={faPen} /></button>
          </div>
        )
      }
    </div>
  )
}
