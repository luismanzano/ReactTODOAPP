import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


function Modal({children, setOpenModal}) {

    const onClickBackground = (event) => {
        if (event.target.className === 'modalBackground') {
            setOpenModal(false);
            return;
        }
        console.log("You clicked in the form");
    }

    return ReactDOM.createPortal(
        <div className="modalBackground" onClick={(e) => onClickBackground(e)}>
        {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};