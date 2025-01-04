import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faBook, faUser } from "@fortawesome/free-solid-svg-icons"

export default function BookModal({ book, onClose }) {
  return (
    <div className='fixed bg-black bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center z-50 items-center' onClick={onClose}>
        <div onClick={(e)=>e.stopPropagation()} className='w-[600px] max-w-full h-[400px] bg-white rounded-md flex flex-col relative'>
            <FontAwesomeIcon icon={faClose} className="absolute top-5 right-6 text-3xl" onClick={onClose}/>
            <div className='flex justify-center items-center gap-2 text-2xl'>
                <FontAwesomeIcon icon={faBook} />{book.title}
            </div>
            <div className='flex justify-center items-center gap-2'>
                <FontAwesomeIcon icon={faBook} />{book.year}
            </div>
            <div className='flex justify-center items-center gap-2'>
                <FontAwesomeIcon icon={faUser} />{book.author}
            </div>
        </div>
    </div>
  )
}
