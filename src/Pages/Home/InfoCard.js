import React from 'react';

const InfoCard = ({ img, infoTitle, bgClass, infoDetails }) => {
    return (
        <div className={`card pt-5 md:pt-0 lg:pt-0 lg:card-side shadow-xl ${bgClass}`}>
            <figure className='lg:pl-5'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{infoTitle}</h2>
                <p>{infoDetails}</p>
            </div>
        </div>
    );
};

export default InfoCard;