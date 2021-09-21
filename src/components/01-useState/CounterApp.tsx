import React from 'react';
import { useState } from 'react';
import styles from './CounterApp.module.scss';

const CounterApp = () => {

    const initialCounter = {
        counter1: 10,
        counter2: 20
    };
    const [{ counter1, counter2 }, setCounter] = useState(initialCounter);

    const handleCounter1 = () => {
        const newCounter = {
            counter1: counter1 + 1,
            counter2
        }
        setCounter(newCounter);
    }

    const handleCounter2 = () => {
        const newCounter = {
            counter1,
            counter2: counter2 + 1
        }
        setCounter(newCounter);
    }

    return(
        <div className={styles.CounterApp}> 
            <h1>Counter App</h1>
            <hr />
            <div>
                <p>{ counter1 }</p>
                <button
                    className='btn btn-primary'
                    onClick={handleCounter1}
                >
                    Counter01 +1
                </button>
            </div>
            <div>
                <p>{ counter2 }</p>
                <button
                    className='btn btn-primary'
                    onClick={handleCounter2}
                >
                    Counter02 +1
                </button>
            </div>
        </div>
    );
}

export default CounterApp;