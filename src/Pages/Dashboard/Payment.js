import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L281ULQVp5vUycMlsoCxNYBZUrQWgl92XkaoiNxRERuFeNeWw6sc9gSusKcZZ21vA3YlsTF97Zo9lLDohO40O3b00bDqDH26m');

const Payment = () => {
    const { id } = useParams()
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(`https://thawing-cliffs-55758.herokuapp.com/booking/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <p className='font-bold text-xl'>Hello <span className='text-success'>{appointment.patientName},</span></p>
                    <h2 className="card-title">Pay for {appointment.treatment}</h2>
                    <p>Your Appoinment on <span className='text-orange-700'>{appointment.date}</span> at <span className='text-orange-700'>{appointment.slot}</span></p>
                    <h3>Please Pay: ${appointment.price}</h3>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;