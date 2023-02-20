import React from "react";
import './TodoItem.css';

function TodoItem({ text, completed }) {

    const onComplete = () => {
        alert('Completando TODO...' + text);
    }

    const onDelete = () => {
        alert('Eliminando TODO...' + text);
    }


    return (
        <li key={text} className="ListItem">
        <span onClick={onComplete} className={`CompletedMark ${completed && 'Icon-checked'}`}>C</span>
        <p className={`${completed && 'Icon-checked'}`}>{text}</p>
        <span onClick={onDelete} className="XMark">X</span>
        </li>
    );
    }

export {TodoItem};