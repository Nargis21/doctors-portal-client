import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 pt-4 '>
            <InfoCard img={clock} infoTitle={'Opening Hours'} infoDetails={'24/7'} bgClass={'bg-gradient-to-r from-secondary to-primary'}></InfoCard>
            <InfoCard img={marker} infoTitle={'Visit Our Location'} infoDetails={'Brooklyn, NY 10036, United States'} bgClass={'bg-accent'}></InfoCard>
            <InfoCard img={phone} infoTitle={'Contact us Now'} infoDetails={'+000 123 456789'} bgClass={'bg-gradient-to-r from-secondary to-primary'}></InfoCard>
        </div>
    );
};

export default Info;