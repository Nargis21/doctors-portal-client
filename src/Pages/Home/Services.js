import React from 'react';
import Service from './Service';
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            img: flouride,
            description: ''
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            img: cavity,
            description: ''
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            img: whitening,
            description: ''
        },
    ]
    return (
        <div>
            <div className='text-center pt-28 pb-14'>
                <h1 className='font-bold text-primary text-2xl'>OUR SERVICES</h1>
                <h1 className='text-4xl pt-2'>Services We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;