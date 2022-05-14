import React from 'react';
import chair from '../../assets/images/chair.png'
import background from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero lg:min-h-screen bg-cover " style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:pl-20'>
                    <img src={chair} className="lg:max-w-xl rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='lg:pr-20 rounded-lg shadow-2xl'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;