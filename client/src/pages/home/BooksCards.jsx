import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faSquarePen, faSquareMinus } from "@fortawesome/free-solid-svg-icons"


export default function BooksCards({ books }) {
  return (
    <table className="w-full border-separate border-spacing-2">
        <thead>
            <tr>
                <th className="border border-slate-600 rounded-md">N°</th>
                <th className="border border-slate-600 rounded-md">Name</th>
                <th className="border border-slate-600 rounded-md">Author</th>
                <th className="border border-slate-600 rounded-md">Year</th>
                <th className="border border-slate-600 rounded-md">Actions</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book, index)=>{
                return (
                <tr key={book._id}>
                    <td className="border border-slate-600 rounded-md text-center p-1">{index + 1}</td>
                    <td className="border border-slate-600 rounded-md text-center p-1">{book.title}</td>
                    <td className="border border-slate-600 rounded-md text-center p-1">{book.author}</td>
                    <td className="border border-slate-600 rounded-md text-center p-1">{book.year}</td>
                    <td className="border border-slate-600 rounded-md text-center p-1">
                    <div>
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
                    </td>
                </tr>
                )
            })}
        </tbody>
    </table>
  )
}
