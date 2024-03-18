import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Add = () => {
    const [book,setBook] = useState({
      title:"",
      dest:"",
      price:null,
      cover:"",
    });

    const handleChange = e =>{
      setBook((prev) =>({...prev, [e.target.name]: e.target.value}));
    };

    const navigate = useNavigate();

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/books", book);
            navigate("/");
        }catch(err){
            console.log(err)
        }
    }

    console.log(book);

    return( 
    <div className = "form">
        <h1>Add New Book</h1>
            <input type = "text" placeholder = "title" onChange = {handleChange} name = "title" />
            <input type = "text" placeholder = "desc" onChange = {handleChange} name = "dest" />
            <input type = "number" placeholder = "price" onChange = {handleChange} name = "price"/>
            <input type = "text" placeholder = "cover" onChange = {handleChange} name = "cover" />

            <button className = "formButton" onClick = {handleClick}>Add</button>
    </div>
    );
    
};

export default Add