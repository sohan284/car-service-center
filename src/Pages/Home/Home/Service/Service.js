import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = ({service}) => {
    const {name,img,price,description,id} =service;
    const navigate = useNavigate()
    const navigateService = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
           <div> 
            <img className='w-w-100' src={img} alt="" />
            <h1>{name}</h1>
            <p>Price : {price}</p>
            <p>{description}</p>
            <button onClick={() =>{navigateService(id)}}>book{name}</button>
            </div>
        </div>
    );
};

export default Service;