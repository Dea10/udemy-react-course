import React from 'react';
import useCounter from '../../hooks/useCounter';
import styles from './CounterWithCustomHook.module.scss';

const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();

    return(
        <div className={styles.CounterWithCustomHook}>
            <h1>CounterWithCustomHook</h1>
            <hr />
            <p>{state}</p>
            <button
                className='btn btn-primary'
                onClick={() => decrement(10)}
            >
                    -1
            </button>
            <button
                className='btn btn-primary'
                onClick={reset}
            >
                    Reset
            </button>
            <button
                className='btn btn-primary'
                onClick={() => increment()}
            >
                    +1
            </button>
        </div>
        );
    };

export default CounterWithCustomHook;