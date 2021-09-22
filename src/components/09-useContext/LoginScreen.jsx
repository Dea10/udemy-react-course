import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {
    const { setUser } = useContext(UserContext);
    const user = {
        id: 123,
        name: 'Daniel',
        mail: 'daniel@gmail.com'
    };

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={() => setUser(user)}
            >
                Send
            </button>
        </div>
    )
}

export default LoginScreen;