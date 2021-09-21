import React from 'react';
import useForm from '../../hooks/useForm';

const AddTodoForm = ({ handleAddTask }) => {

    const [formValues, handleInputChange, reset] = useForm({
        task: ''
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(formValues.task.length === 0) return;

        const newTask = {
            id: new Date().getTime(),
            desc: formValues.task,
            done: false
        };

        handleAddTask(newTask);
        reset();
    }

    return (
        <>
            <h3>Add new task</h3>
            <hr />
            <form onSubmit={handleOnSubmit}>
                <input
                    type='text'
                    className='form-control'
                    placeholder='New task...'
                    autoComplete='off'
                    name='task'
                    value={formValues.task}
                    onChange={handleInputChange}
                />
                <div className='d-grid gap-2 addButton'>
                    <button
                        type='submit'
                        className='btn btn-primary'
                    >
                        Add
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddTodoForm;