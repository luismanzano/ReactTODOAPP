import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchVaule}) {    

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchVaule(event.target.value);
    };

    return (
        <input className="TodoSearch" type="text" placeholder="Cebolla" onChange={onSearchValueChange} value={searchValue}/>
    );
}

export {TodoSearch};