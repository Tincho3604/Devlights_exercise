import React from 'react';
import './style.css';

const ActionButton = ({textButton, functionButton, argument, colorButton}) => {
    return (
    <>
        <div className="buttonContainer" >
            <button className="operationButton" style={colorButton} onClick={() => functionButton(argument)}>{textButton}</button>
        </div>
    </>
)
}

export default ActionButton
