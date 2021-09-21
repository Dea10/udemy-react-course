import React from 'react';
import useForm from '../../hooks/useForm';
import styles from './SimpleForm.module.scss';

const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleOnSubmit = (e : any) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <div className={styles.SimpleForm}>
            <h1>FormWithCustomHook</h1>
            <form onSubmit={handleOnSubmit}>
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
                    <input
                        type="password"
                        className='form-control'
                        name='password'
                        value={ password }
                        onChange={handleInputChange}
                        placeholder='password'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Send</button>
            </form>
        </div>
    );
}

export default FormWithCustomHook;