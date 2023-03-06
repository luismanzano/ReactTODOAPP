import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({ text, completed }) {
    const onClickButton = (event) => {
        alert('Creando nuevo TODO...')
    };
    return (
        <button onClick={onClickButton} className="CreateTodoButton">+</button>
    );
    }

export {CreateTodoButton};