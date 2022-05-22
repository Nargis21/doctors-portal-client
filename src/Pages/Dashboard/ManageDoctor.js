import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorsRow from './DoctorsRow';

const ManageDoctor = () => {
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://thawing-cliffs-55758.herokuapp.com/doctor', {
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
            <h1 className='text-3xl'>Manage Doctor:{doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorsRow
                                key={doctor._id}
                                index={index}
                                doctor={doctor}
                                setDeleteConfirm={setDeleteConfirm}
                            ></DoctorsRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteConfirm && <DeleteConfirmModal
                    deleteConfirm={deleteConfirm}
                    setDeleteConfirm={setDeleteConfirm}
                    refetch={refetch}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageDoctor;