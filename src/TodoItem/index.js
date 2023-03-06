import React from "react";
import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
        <li key={text} className="ListItem">
        <span onClick={onComplete} className={`CompletedMark ${completed && 'Icon-checked'}`}>C</span>
        <p className={`${completed && 'Icon-checked'}`}>{text}</p>
        <span onClick={onDelete} className="XMark">X</span>
        </li>
    );
    }

export {TodoItem};