// edit not happening
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner.jsx" ;

const EditBook = () => {

const [loading, setLoading] = useState(false);
const {id} = useParams();
const [book, setBook] = useState([])
const [Author, setAuthor] = useState("");
const [Name, setName] = useState("");
const [PublishYear, setPublishYear] = useState("");

useEffect(()=>{
setLoading(true);
axios.get(`http://localhost:5000/book/bookById/${id}`)
.then((response)=>{
setBook(response.data);
setAuthor(response.data.Author);
setName(response.data.Name);
setPublishYear(response.data.PublishYear);
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
  Name,
  Author,
  PublishYear
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
      value={Author}
      onChange = { (e)=> setAuthor(e.target.value)}
      />
    </div>
    <div>
      <label >
    Name
      </label>
      <input 
      type="text"
      value={Name}
      onChange = { (e)=> setName(e.target.value)}
      />
    </div>
    <div>
      <label >
    Publish Year 
      </label>
      <input 
      type="text"
      value= {PublishYear}
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