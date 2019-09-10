import React from 'react';
import './Row.css';

function Row(props){
    return (
        <div className="row">
            <span className="row-title">{props.label}</span>
            <span className="row-content">{props.children}</span>
        </div>
    );
}

export default Row;