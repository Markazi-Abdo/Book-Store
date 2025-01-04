import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import BackButton from '../pages/BackButton'
import { useSnackbar } from 'notistack'
import Spinner from '../pages/Spinner'

export default function DeleteBook() {
  const [ loading, setLoading ] = useState(false);
  const [ book, setBook ] = useState({});
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:8000/store/books/${ id }`)
    .then((r)=>{
      setBook(r.data.book);
      setLoading(false);
      console.log('Data retrieved')
    })
    .catch((e)=>{
      alert('Couldn t get data');
      console.log(e.message)
      setLoading(false);
    })

  }, [])

  const deleteBook = ()=>{
    setLoading(true);
    axios.delete(`http://localhost:8000/store/books/${id}`)
    .then(()=>{
      setLoading(false)
      enqueueSnackbar("Data deleted successfully", { variant: 'success', hideIconVariant: 1000})
      alert('Book deleted')
      navigate('/');
    })
    .catch((e)=>{
      console.log(e.message)
      alert("Error occured while deletion")
      enqueueSnackbar("Data couldn't deleetd", { variant: 'error', hideIconVariant: 1000})
      setLoading(false);
    })
  }
  return (
    <div>
      <div className='py-4 text-center'>
        <BackButton />
        <h1 className='text-2xl font-bold font-mono'>Delete your Book</h1>
      </div>
      <div className='border-8 border-red-500 border- w-[500px] my-5 p-5 mx-auto rounded-md'>
        <h2 className='text-center font-mono font-bold'>Are you sure you want to delete this book..</h2>
        <p className='text-center font-mono font-bold text-red-900 mt-5 mb-0 text-2xl'>{book.title}</p>
        <p className='text-center font-mono font-bold text-red-900 mt-5 mb-0'>Made by {book.author}</p>
        <button className='w-full bg-red-500 text-white rounde mt-11 rounded-md p-2' onClick={deleteBook}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </div>
  )
}
