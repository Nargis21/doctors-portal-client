import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment
    const formattedDate = format(date, 'PP')
    const [user] = useAuthState(auth)
    const handleBooking = event => {
        event.preventDefault()
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot: event.target.slot.value,
            patientEmail: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('https://thawing-cliffs-55758.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appointment set on ${formattedDate} at ${booking.slot}`)
                }
                else {
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch()
                setTreatment(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-center sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl text-secondary text-center">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-5'>
                        <input type="text" disabled value={formattedDate} name='name' className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary px-8" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;