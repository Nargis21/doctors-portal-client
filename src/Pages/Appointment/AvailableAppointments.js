import React, { useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP')

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate],
        () => fetch(`https://thawing-cliffs-55758.herokuapp.com/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl text-secondary text-center py-20'>Available Appointments On {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                    date={date}></BookingModal>
            }

        </div>
    );
};

export default AvailableAppointments;