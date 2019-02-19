import React from 'react';
import './TodoItem.css'

export function TodoItem(props) {
    return (
        <label>
            <p>
                <input type="checkbox" checked={props.completed} />
                {props.text}
            </p>
        </label>
    )
}