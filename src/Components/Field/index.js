import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import {CustomAlert, formatString} from '../../constants';
import './style.css'

const Field = ({func, labelText}) => {
    const [rows, setRows] = useState(0);
    const { register ,handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        setRows(rows+1)
        CustomAlert("¡Data send succesfully!", "Now you can see it in table", "success")
        func(formatString(data.Register.replace(/\n/ig, '.')))
    };


    return (
    <div className="customFieldComponent">
        <label>{labelText}</label>
        <form onSubmit={handleSubmit(onSubmit)}>
                <textarea 
                    className="textareaTag"
                    type="textarea" 
                    rows={rows}
                    name="textValue"
                    {...register("Register", { required: true })}
                />
            {errors.Register && <span>This field is required</span>}
            <div className="fieldSecondaryContainer">
                <input type="submit" placeholder="Add" className="buttonInput"/>
            </div>
        </form>
    </div>
    )
}

export default Field;