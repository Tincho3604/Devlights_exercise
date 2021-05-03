import React,{useState} from 'react';
import { useForm } from "react-hook-form";

const Field = ({func}) => {
    
    const [info, setInfo] = useState([{}]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setInfo(data);
        func(info);
    };
    

    return (
    <>
    <label>Title : </label>
    <form onSubmit={handleSubmit(onSubmit)}>
        <textarea type="textarea" 
            name="textValue"
            {...register("Register", { required: true })}
        />
        {errors.Register && <span>This field is required</span>}
        <input type="submit" placeholder="Add" />
    </form>
    </>
    )
}

export default Field;