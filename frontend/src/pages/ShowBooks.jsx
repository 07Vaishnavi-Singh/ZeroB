//not showing books
import React, {useState, useEffect} from 'react'
import axios from "axios"
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
// import Spinner 
import Spinner from "../components/Spinner.jsx";
import BackButton from "../components/BackButton.jsx";
import {Link} from "react-router-dom";

const ShowBooks = () => {

const [loading, setLoading] = useState(false);
const [books, setBooks] = useState([]);
const [showType, setShowType] = useState('table');

useEffect(()=>{
setLoading(true);
    axios.get("http://localhost:5000/book/books")
    .then((response)=>{
    setBooks(response.data);
    console.log(books);
    setLoading(false);
    })
    .catch((error)=>{
        console.log(error);
        setLoading(false);
    })
},[])

  return (
    
<div>

<div>
  <button onClick={()=>{setShowType('table')}}>Table</button>
  <button onClick={()=>{setShowType('card')}} >Card</button>
</div>

<div >
        <h1 >Books List</h1>
        <Link to='/book/CreateBook'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>


</div>

  )
}

export default ShowBooks