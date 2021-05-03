import React,{useState, useEffect} from 'react';
import Field from '../../Components/Field';
import ActionButton from '../ActionButton';
import {CustomAlert} from '../../constants';
import './style.css'
const Table = ({allItems}) => {
    

    const [obj, setObj] = useState()
    const recover = (e) => setObj(e)
    
    const deleteItem = (id) => {
        CustomAlert("¡Item delete succesfully!", "Item deleted", "warning")
        setObj(obj?.filter((item, index) => index !== id))
    }

    useEffect(() => {

    },[]);

    return (
    <>
        <Field
            labelText={"Title"}
            func={recover}
        />

    <table className="styled-table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Action</th>
            </tr>
        </thead>
    <tbody>
        {obj?.map((item,index) => {
            return (
            <tr key={index}>
                <td>{item.name}</td>
                <ActionButton
                    textButton={"Delete"}
                    functionButton={deleteItem}
                    argument={index}
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