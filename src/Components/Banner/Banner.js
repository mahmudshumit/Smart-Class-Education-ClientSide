import React from 'react';

import Study from '../../images/Study.jpg'


const Banner = () => {
    return (
        <main  style={{height:'600px'}} className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Ask , Learn & Lead It   <br /> </h1>
                 <p className="text-secondary">With Better Score , Better Career & Ultimately by Building Better Nation With the power of Knowledge</p>
                 {/* <button className="btn btn-primary">Get Appointment</button> */}
            </div>
            <div className="col-md-6">
                <img src={Study} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default Banner;