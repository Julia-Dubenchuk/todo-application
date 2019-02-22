import React from 'react';
import './TodoItem.css'

export function TodoItem(props) {
    return (
        <label>
            <p>
                <input type="checkbox" checked={props.completed} onChange={() => {console.log('chenged')}} />
                {props.text}
            </p>
        </label>
    )
}