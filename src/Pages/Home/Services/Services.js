import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
       <div id='services'>
            <h1>Our Services</h1>
            <div className='service-container'>
            {
                services.map(service=> <Service key={service.id}
                service={service}></Service>)
            }
        </div>
       </div>
    );
};

export default Services;