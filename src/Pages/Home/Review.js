import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi ratione ad placeat doloremque facilis!</p>
            </div>
            <div className='flex items-center mb-10'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mx-10">
                        <img src={review.img} alt='' />
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold '>{review.name}</h1>
                    <p>{review.location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;