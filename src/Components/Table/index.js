import React from 'react';
import ActionButton from '../ActionButton';
import './style.css'
const Table = () => {
    const arr = [1,2,3,4,5]
    return (
    <>
    <table className="styled-table">
    <thead>
        <tr>
            <th>Title</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {arr.map((item,index) => {
            return (
            <tr>
                <td>Item 1</td>
                <ActionButton
                textButton={"Delete"}
                />
            </tr>
            )
        })}
        </tbody>
    </table>
    </>
    )
}

export default Table;