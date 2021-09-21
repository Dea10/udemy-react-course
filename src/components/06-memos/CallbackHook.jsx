import React, { useCallback, useState } from 'react';
import ShowIncrementButton from './ShowIncrementButton';

const CallbackHook = () => {
    const [counter, setCounter] = useState(0);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback(() => {
        setCounter( prevState => setCounter(prevState + 1));
    }, [setCounter])

    return (
        <div>
            <h3>Callback Hook</h3>
            <hr />

            <p>Counter: <small>{ counter }</small></p>
            <ShowIncrementButton increment={ increment } />
        </div>
    );
}

export default CallbackHook;