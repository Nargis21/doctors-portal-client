import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary justify-center">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span> :
                            <span className='text-red-500'>Try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center py-5">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary px-8"
                    >Book Appointment</label>
                </div>

            </div>
        </div>
    );
};

export default Service;