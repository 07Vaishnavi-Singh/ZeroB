import React from 'react'
import {Link} from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = '/book/ShowBooks' }) => {
    return (
    <div>
<Link to={destination} >
<BsArrowLeft/>
</Link>
    </div>
  )
}

export default BackButton
