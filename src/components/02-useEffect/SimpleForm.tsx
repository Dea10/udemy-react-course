import React, { useEffect, useState } from 'react';
import Message from './Message';
import styles from './SimpleForm.module.scss';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const { name, email } = formState;

    useEffect(() => {
        // console.log('hey');
    }, []);

    useEffect(() => {
        // console.log('name changed');
    }, [name]);

    useEffect(() => {
        // console.log('formState changed');
    }, [formState]);

    const handleInputChange = ({ target }: any) => {
        // console.log(target);
        const { value, name } = target;

        setFormState({
            ...formState,
            [ name ]: value
        })
    };

    return (
        <div className={styles.SimpleForm}>
            <h1>SimpleForm</h1>
            <form>
                <div>
                    <input 
                        type="text"
                        className='form-control'
                        name='name'
                        value={ name }
                        onChange={handleInputChange}
                        placeholder='name'
                    />
                    <input
                        type="email"
                        className='form-control'
                        name='email'
                        value={ email }
                        onChange={handleInputChange}
                        placeholder='mail'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>

            { name === '123' && <Message /> }
        </div>
    );
}

export default SimpleForm;