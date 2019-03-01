import React from 'react';
import './TodoItem.css'

export function TodoItem(props) {
    return (
        <label>
            <p>
                <input type="checkbox" checked={props.completed} onChange={() => {props.handleChange(props.id)}} />
                {props.text}
            </p>
        </label>
    )
}