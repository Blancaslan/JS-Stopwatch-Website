import './button.css'
import React from 'react';



export default function Button({id, id2, text, onClick, backgroundColor}) {
    return (
        <button id={id} className="box" onClick={onClick} style={{backgroundColor:backgroundColor}}>
            <h1 id={id2} className="text">{text}</h1>
        </button>
    )
}