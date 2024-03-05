// working fine
import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import BackButton from "../components/BackButton.jsx";
import Spinner from '../components/Spinner.jsx';

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

<div>
<BackButton/>
</div>
{ loading ? (
  <Spinner/>
) : (
<div>
<div>
  <span>Id</span>
  <span>{book._Id}</span>
</div>
<div>
  <span>Book Name</span>
  <span>{book.Name}</span>
</div>
<div>
  <span>Publish Year </span>
  <span>{book.PublishYear}</span>
</div>
<div>
  <span>Author </span>
  <span>{book.Author}</span>
</div>

</div>

)

};


</>
  )
}

export default ShowBookById