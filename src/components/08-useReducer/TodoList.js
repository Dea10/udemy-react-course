import React from 'react';

import './styles.css';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, handleDelete, handleToggle }) => {

    return (
        <ul className='list-group list-group-flush'>
            {
                todoList.map((todo, idx) => (
                        <TodoListItem
                            todo={todo}
                            idx={idx}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                            key={todo.id}
                        />
                    )
                )
            }
        </ul>
    );
}

export default TodoList;