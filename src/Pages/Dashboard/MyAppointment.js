import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyAppointment = () => {
    const [appoinments, setAppointments] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://thawing-cliffs-55758.herokuapp.com/booking?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/home')
                }
                return res.json()
            })
            .then(data => setAppointments(data))
    }, [user])
    return (
        <div>
            <h2 className='pb-4 text-center'>My Appointments:{appoinments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinments.map((appoinment, index) => < tr className="hover" key={index}>
                                <th>{index + 1}</th>
                                <td>{appoinment.patientName}</td>
                                <td>{appoinment.date}</td>
                                <td>{appoinment.slot}</td>
                                <td>{appoinment.treatment}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;