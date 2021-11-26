import React from 'react';
import doctor from '../../Images/Wellcome/doctor.PNG';
import './Welcome.css';

const Welcome = () => {
    return (
<div>
    <h2 className='fw-bold mt-5 mb-5'><u>Welcome to our DM Medicare</u></h2>
<div className='welcome row mt-5 mb-5 responsive'>
            <div className="col-lg-6">
                <img  src={doctor} alt="" />
            </div>
                <div className='text-center p-1 welcome-container col-lg-6' >
                <h1 className='background'>Request Appointment</h1>
                <h1 className='background'>Find Doctor</h1>
                <h1 className='background'>Find Location</h1>
                <h1 className='background'>Emergency Contact</h1>
                </div>  
        </div>
</div>
    );
};

export default Welcome;