import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Marie Lu',
            location: 'UK',
            img: people2
        },
        {
            _id: 3,
            name: 'Wark Atomi',
            location: 'Afganistan',
            img: people3
        }
    ]
    return (
        <div className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-xl text-secondary mb-2 font-bold'>Testimonial</h1>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonials;