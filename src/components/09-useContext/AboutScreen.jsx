import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AboutScreen = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button
                className='btn btn-danger'
                onClick={() => setUser({})}
            >
                Logout
            </button>
        </div>
    )
}

export default AboutScreen;