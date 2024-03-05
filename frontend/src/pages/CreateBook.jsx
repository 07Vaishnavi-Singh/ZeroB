// some fo the elemts of the book are not gettng created
import React, {useState} from 'react'
import Spinner from "../components/Spinner.jsx";
import BackButton from "../components/BackButton.jsx";
import axios from "axios";

const CreateBook = () => {

const [author, setAuthor] = useState("");
const [name, setName] = useState("");
const [publishYear, setPublishYear] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = ()=>{
  const data = {
    name,
    author,
    publishYear
  }
setLoading(true);
console.log(data);
axios.post("http://localhost:5000/book/postBook",data)
.then((response)=>{
  setLoading(false);
  console.log(" Book Successfully Added");
})
.catch((error)=>{
  console.log(error);
  setLoading(false);
})

  }

  return (
    <div>
      <div><BackButton/></div>
    {loading ? <Spinner /> : ''}

    <h1>CREATE BOOK</h1>

<div>
  <label > Author</label>
  <input type="text" 
  value={author}
  onChange = {(e)=> setAuthor(e.target.value)}
  />
</div>

<div>
  <label > Name</label>
  <input type="text" 
  value={name}
  onChange = {(e)=> setName(e.target.value)}
  />
</div>

<div>
  <label > Publish Year </label>
  <input type="text" 
  value={publishYear}
  onChange = {(e)=> setPublishYear(e.target.value)}
  />
</div>

<button onClick={handleSubmit}>Submit</button>

     </div>
  )
}

export default CreateBook