import React, { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

const RealExampleRef = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button className='btn btn-primary' onClick={handleClick}>Toggle</button>
        </div>
    );
}

export default RealExampleRef;