import React, {useState} from 'react'
import axios from "axios"

const ShowBooks = () => {

const [loading, setLoading] = useState(false);
const [books, setBooks] = useState([]);

const handleSubmit = async()=>{
setLoading(true);
    axios.get("http://localhost:5000/book/books")
    .then((response)=>{
    setBooks(response.data);
    setLoading(false);
    })
    .catch((error)=>{
        console.log(error);
        setLoading(false);
    })
}

  return (
    

<button onClick={handleSubmit}>
    Get Books
</button>


  )
}

export default ShowBooks