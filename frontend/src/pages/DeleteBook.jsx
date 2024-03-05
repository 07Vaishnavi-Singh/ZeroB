
import React, {useState} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import Spinner from '../components/Spinner.jsx';
import BackButton from '../components/BackButton.jsx';

const DeleteBook = () => {

    const [loading, setLoading] = useState(false);
const {id} = useParams();
    const  handleDelete = async(request,response)=>{

        setLoading(true);
        console.log("Inside Handle Delete Book Function");
     await   axios.delete(`http://localhost:5000/book/deleteBook/${id}`)
        .then((response)=>{
            setLoading(false);
            console.log("Book Deleted Successfully");
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
        
        }

  return (
<>

<div><BackButton/></div>
<h1>Delete Book</h1>
{ loading ? (Spinner) : (

<div>

<label>Enter the book Id to be Deleted </label>
<input type="text" />

<button onClick={handleDelete}></button>

</div>


)



}

</>
    )
}

export default DeleteBook
