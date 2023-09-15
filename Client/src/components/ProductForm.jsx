import React from "react";
import { useState } from "react";
import axios from "axios"

const productManager = () =>{
    
    const [title,setTitle] =useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const onSubmitHandler =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product',{
            title,
            price,
            description,
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
        .catch(err =>console.log(err))

    }

    return(
        <>
        <form  onSubmit={onSubmitHandler}>
            <label>Title : </label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <br/>
            <label>Price : </label>
            <input type="number"onChange={(e) => setPrice(e.target.value)} />
            <br/>
            <label>Description</label>
            <input type="textarea" onChange={(e) => setDescription(e.target.value)} />
<br />  
            <button type="Submit">Create Product</button>
        </form>
        </>
    )
}

export default productManager;