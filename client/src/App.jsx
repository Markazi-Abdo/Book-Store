import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import ShowBooks from "./components/ShowBooks"
import CreateBook from "./components/CreateBook"
import UpdateBook from "./components/UpdateBook"
import DeleteBook from "./components/DeleteBook"

export default function App() {
  return (
    <div>
      <Routes>
          {/* My compoenents routes */}

          <Route path="/" element={<Home/>} />
          <Route path="/book/create" element={<CreateBook />} />
          <Route path="/books/details/:id" element={<ShowBooks />} />
          <Route path="/books/update/:id" element={<UpdateBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </div>
  )
}
