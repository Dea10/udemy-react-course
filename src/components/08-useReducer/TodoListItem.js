import React from 'react';

import './styles.css';

const TodoListItem = ({ todo, idx, handleDelete, handleToggle }) => {
    const { id, desc, done } = todo;
    return (
        <li
            className='list-group-item taskItem'
            key={id}
        >
            <p
                onClick={() => handleToggle(id)}
                className={`taskText ${done && 'complete'}`}
            >
                {idx + 1}. {desc}
            </p>
            <button
                className='btn btn-danger'
                onClick={() => handleDelete(id)}
            >
                Delete
            </button>
        </li>
    )
}

export default TodoListItem;