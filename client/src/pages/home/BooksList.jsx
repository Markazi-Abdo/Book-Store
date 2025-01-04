import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircleInfo, faSquarePen, faSquareMinus, faBook, faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import BookModal from './BookModal';
import { useState } from 'react';

export default function BooksList({ books }) {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {
        books.map((book)=>{
            return(
                <div key={book._id} className='border-8 border-sky-500 hover:-translate-y-2'>
                    <div className='flex justify-center items-center gap-2 text-2xl'>
                        <FontAwesomeIcon icon={faBook} />{book.title}
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faBook} />{book.year}
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faUser} />{book.author}
                    </div>
                    <div className='flex justify-center items-center gap-x-2 mt-4'>
                        <FontAwesomeIcon icon={faPlus} className='text-3xl text-blue-500' onClick={()=>setShowModal(true)}/>
                        <Link to={`/books/details/${book._id}`}>
                        <i className="text-lime-600 mr-2 text-2xl"><FontAwesomeIcon icon={faCircleInfo} /></i>
                        </Link>
                        <Link to={`/books/update/${book._id}`}>
                        <i className="text-blue-600 mr-2 text-2xl"><FontAwesomeIcon icon={faSquarePen} /></i>
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                        <i className="text-red-600 mr-2 text-2xl"><FontAwesomeIcon icon={faSquareMinus} /></i>
                        </Link>
                    </div>
                    {
                        showModal && <BookModal book={book} onClose={()=>setShowModal(false)}/>
                    }
                </div>
            )
        })
        }
    </div>
  )
}
