import React, {useState} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"

const DeleteBook = () => {

    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(()=>{

        setLoading(true);
        console.log(loading);
        axios.get(`http://localhost:5000/book/deleteBook/${id}`)
        .then((response)=>{
            setLoading(false);
            console.log("deleted");
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
        
        },[])

  return (
<>

<button>Delete</button>

</>
    )
}

export default DeleteBook
