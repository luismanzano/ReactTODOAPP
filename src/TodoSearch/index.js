import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../App/TodoContext";

function TodoSearch() {   
    
    const {searchValue, setSearchVaule} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchVaule(event.target.value);
    };

    return (
        <input className="TodoSearch" type="text" placeholder="Cebolla" onChange={onSearchValueChange} value={searchValue}/>
    );
}

export {TodoSearch};