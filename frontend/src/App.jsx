import React from 'react'
import {Routes,Route} from "react-router-dom";
import  DeleteBook  from './pages/DeleteBook.jsx';
import EditBook from './pages/EditBook.jsx';
import ShowBookById from './pages/ShowBookById.jsx';
import ShowBooks from './pages/ShowBooks.jsx';

const App = () => {
  return (

<Routes>

<Route path='/book/deleteBook' element={<DeleteBook/>}/>
<Route path='/book/EditBook' element={<EditBook/>} />
<Route path='/book/ShowBookById/:id' element={<ShowBookById/>} />
<Route path='/book/ShowBooks' element={<ShowBooks/>} />
<Route path='/book/CreateBook' element={<CreateBook/>} />

</Routes>

  )
}

export default App