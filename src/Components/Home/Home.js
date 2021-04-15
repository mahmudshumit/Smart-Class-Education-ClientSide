import React, { useEffect, useState } from 'react';
import AddService from '../AddService/AddService';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Header from '../Shared/Header/Header';


const Home = () => {
    const [services,setService] = useState([]);
    useEffect(() =>{
       fetch('http://localhost:5055/services')
       .then(res=> res.json())
       .then(data =>setService(data))
    },[])
    return (
        <div className="row">
           
            <Banner></Banner>

            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Program We Provide</h2>
            </div>

            {
                services.map(service=><Service service={service}></Service>)
            }
            
            
        </div>
    );
};

export default Home;