import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

import styles from './LayoutEffect.module.scss';

const LayoutEffect = () => {
    const { state: counter, increment, decrement } = useCounter(); 

    const url = `https://breakingbadapi.com/api/quotes/${ counter }`;
    const { data } = useFetch(url);

    const { quote } = !!data && data[0];

    const blockquoteEl = (
        <figure className="text-end">
            <blockquote className="blockquote">
                <p>{ quote }</p>
            </blockquote>
        </figure>
    );

    return (
        <div>
            <h1>LayoutEffect Quotes</h1>
            <hr />

            { blockquoteEl }

            <div className={styles.Buttons}>
                <button className='btn btn-primary' onClick={ () => decrement() }>Prev</button>
                <button className='btn btn-primary' onClick={ () => increment() }>Next</button>
            </div>
        </div>
    );
}

export default LayoutEffect;