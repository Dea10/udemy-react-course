import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';

import './styles.css';
import AddTodoForm from './AddTodoForm';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

    const [todoList, dispatch] = useReducer(todoReducer, [], init);
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList])

    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        })
    }

    const handleDelete = (id) => {
        const action = {
            type: 'deleteTask',
            payload: id
        }

        dispatch(action);
    }

    const handleAddTask = (newTask) =>{
        dispatch({
            type: 'addTask',
            payload: newTask
        })
    }

    

    return (
        <div>
            <h1>TodoApp ({todoList.length})</h1>
            <hr />
            <div className='container'>
                <div className='todoList'>
                    <TodoList
                        todoList={todoList}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className='addItem'>
                    <AddTodoForm 
                        handleAddTask={handleAddTask}
                    />
                </div>
            </div>
        </div>
    );
}

export default TodoApp;