import React, { useState, useEffect } from 'react';

const Message = () => {

    const initialCoords = {
        x: 0,
        y: 0
    }
    const [coords, setCoords] = useState(initialCoords);
    const {x, y} = coords;

    useEffect(() => {
        const mouseMove = ({x, y}: any) => {
            const coords = {
                x,
                y
            }

            setCoords(coords);
        };

        window.addEventListener('mousemove', mouseMove);
        // console.log('Message mounted');

        return () => {
            // console.log('Message unmounted');
            window.removeEventListener('mousemove', mouseMove);
        }
    });

    return (
        <div>
            <h1>Message</h1>
            x: {x}, y: {y}
        </div>
    );

};

export default Message;