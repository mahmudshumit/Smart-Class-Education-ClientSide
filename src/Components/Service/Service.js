import React from 'react';

const Service = ({service}) => {
    return (

        
        <div className="col-md-4">
            <img style={{height:'200px'}} src={service.imageURL} alt=""/>
            <h5>Name : {service.name}</h5>
            <h5>Price : {service.price}</h5>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eos! Modi qui repudiandae recusandae iste.</small>
            <button type="button" class="btn btn-success">Get The Course </button>
           
        </div>
    );
};

export default Service;