import React, {useState} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"

const ShowBookById = () => {

const [loading, setLoading] = useState(false);
const [book, setBook] = useState([]);
const {id} = useParams();

useEffect(()=>{

setLoading(true);
console.log(loading);
axios.get(`http://localhost:5000/book/bookById/${id}`)
.then((response)=>{
    setBook(response.data);
    setLoading(false);
    console.log(book);
})
.catch((error)=>{
    console.log(error);
    setLoading(false);
})
},[]);

  return (
<>
<button >Get Book</button>
</>
  )
}

export default ShowBookById