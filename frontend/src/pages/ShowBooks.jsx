// books coming in console
import React, {useState, useEffect} from 'react'
import axios from "axios"
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
// import Spinner 
import Spinner from "../components/Spinner.jsx";
import BackButton from "../components/BackButton.jsx";
import {Link} from "react-router-dom";

const ShowBooks = () => {

const [loading, setLoading] = useState(false);
const [books, setBooks] = useState({});
const [showType, setShowType] = useState('table');

useEffect(()=>{
setLoading(true);
console.log("getting inside useEffect");
    axios.get("http://localhost:5000/book/books")
    .then((response)=>{
    setBooks(response.data);
    console.log(response.data);
    setLoading(false);
    })
    .catch((error)=>{
        console.log(error);
        setLoading(false);
    })
},[])

  return (
    <></>
  )
}

export default ShowBooks