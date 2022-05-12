import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import doctor2 from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import MainButton from '../Shared/Navbar/MainButton';

const Doctor = () => {
    return (
        <div className="hero lg:min-h-screen lg:px-20" style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor2} className="lg:max-w-xl  mt-[-200px] hidden lg:block" />
                <div className='text-white'>
                    <h1 className='text-xl text-secondary mb-5 font-bold'>Appointment</h1>
                    <h1 className="text-3xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <MainButton>Get Started</MainButton>
                </div>
            </div>
        </div>
    );
};

export default Doctor;