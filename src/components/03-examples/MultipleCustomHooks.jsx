import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

import styles from './MultipleCustomHooks.module.scss';

const MultipleCustomHooks = () => {
    const { state: counter, increment, decrement } = useCounter(); 

    const url = `https://breakingbadapi.com/api/quotes/${ counter }`;
    const { loading, data } = useFetch(url);

    const { author, quote } = !!data && data[0];

    const loadingEl = (<div className="alert alert-info" role="alert">Loading ...</div>);
    const blockquoteEl = (
        <figure className="text-end">
            <blockquote className="blockquote">
                <p>{ quote }</p>
            </blockquote>
            <figcaption className="blockquote-footer">
                { author }
            </figcaption>
        </figure>
    );

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {loading ? loadingEl : blockquoteEl}

            <div className={styles.Buttons}>
                <button className='btn btn-primary' onClick={ () => decrement() }>Prev</button>
                <button className='btn btn-primary' onClick={ () => increment() }>Next</button>
            </div>
        </div>
    );
}

export default MultipleCustomHooks;