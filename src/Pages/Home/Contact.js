import React from 'react';
import background from '../../assets/images/appointment.png'
import MainButton from '../Shared/Navbar/MainButton';

const Contact = () => {
    return (
        <div className='text-center py-20 my-10' style={{ backgroundImage: `url(${background})` }}>
            <h4 className='text-secondary font-bold text-xl'>Contact Us</h4>
            <h1 className='text-3xl text-white mt-2'>Stay connected with us</h1>
            <div className='mt-10'>
                <input className='input input-bordered mb-5 lg:w-96 ' type="email" name="email" placeholder='Email Address' /><br />
                <input className='input input-bordered mb-5 lg:w-96' type="text" name="subject" placeholder='Subject' /><br />
                <textarea className='input input-bordered mb-5 lg:w-96 h-28' placeholder='Your message'></textarea>
            </div>
            <MainButton>Submit</MainButton>

        </div>
    );
};

export default Contact;