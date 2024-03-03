import React, {useState} from 'react'
import axios from "axios"

const ShowBookById = () => {

const [loading, setLoading] = useState(false);
const [bookId, setBookId] = useState("");
const [book, setBook] = useState([]);

const handleSubmit=()=>{

setLoading(true);
console.log(loading);
axios.get(`http://localhost:5000/book/bookById/${setBookId}`)
.then((response)=>{
    setBook(response.data);
    console.log(response.data);

    setLoading(false);
    console.log(book);
})
.catch((error)=>{
    console.log(error);
    setLoading(false);
})

}

    const handleChange = (e) => {
        setBookId(e.target.value);
      };
    
  return (

<>

<form onSubmit={handleSubmit}>
      <label>
        Enter Book ID:
        <input
          type="text"
          value={bookId}
          onChange={handleChange}
          placeholder="Enter book ID"
        />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form></>

  )
}

export default ShowBookById