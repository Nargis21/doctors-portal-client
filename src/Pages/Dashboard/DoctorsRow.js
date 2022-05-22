import React from 'react';

const DoctorsRow = ({ index, doctor, setDeleteConfirm }) => {
    const { name, speciality, img } = doctor

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={img} alt="Avatar" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={() => setDeleteConfirm(doctor)} htmlFor="delete-confirm-modal" className="btn btn-error btn-xs  modal-button">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorsRow;