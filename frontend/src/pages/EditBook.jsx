// edit not happening

import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner.jsx" ;


const EditBook = () => {

const [loading, setLoading] = useState(false);
const {id} = useParams();
const [book, setBook] = useState([])
const [author, setAuthor] = useState("");
const [name, setName] = useState("");
const [publishYear, setPublishYear] = useState("");

useEffect(()=>{
setLoading(true);
axios.get(`http://localhost:5000/book/bookById/${id}`)
.then((response)=>{
  setBook(response.data);
setAuthor(response.data.Author);
setAuthor(response.data.Name);
setAuthor(response.data.PublishYear);


  setLoading(false);
})
.catch((error)=>{
console.log(error);
setLoading(false);
})

},[]);


const handleSubmit =()=>{
setLoading(true);
const data = {
  name,
  author,
  publishYear
}
axios.put(`http://localhost:5000/book/updateBook/${id}`,data)
.then((response)=>{
  setLoading(false);
  setBook(book);
  console.log(book);
  console.log(" Book Changed");
})
.catch((error)=>{
console.log(error);
setLoading(false);
})


}

  return (
    <>
   {loading ? 
   ( <Spinner/> ) :( 
    <div>
    <div>
      <label >
    Author
      </label>
      <input 
      type="text"
      value={author}
      onChange = { (e)=> setAuthor(e.target.value)}
      />
    </div>
    <div>
      <label >
    Name
      </label>
      <input 
      type="text"
      value={name}
      onChange = { (e)=> setName(e.target.value)}
      />
    </div>
    <div>
      <label >
    Publish Year 
      </label>
      <input 
      type="text"
      value= {publishYear}
      onChange = { (e)=> setPublishYear(e.target.value)}
      />
    </div>
    <button onClick={handleSubmit}>Save</button>
    </div>
)}
    </>
  )
}

export default EditBook