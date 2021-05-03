import React from 'react';
import Field from '../../Components/Field';
import Table from '../../Components/Table';
import './style.css';

const Home = () => {
    const recover = (e) => console.log("Tiempo --> ",e)
return (
    <div className="mainHomeContainer">
        <Field
            func={recover}
        />
        <Table />
    </div> 
    )
}

export default Home;