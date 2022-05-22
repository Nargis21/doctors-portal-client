import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteConfirm, setDeleteConfirm, refetch }) => {
    const { name, email } = deleteConfirm
    const handleDeleteDoctor = () => {
        fetch(`https://thawing-cliffs-55758.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`Doctor ${name} is Deleted`)
                    setDeleteConfirm(null)
                    refetch()
                }
                else {
                    toast.error(`Failed to delete ${name}`)
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{`Are you sure want to delete ${name}?`}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button onClick={handleDeleteDoctor} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;