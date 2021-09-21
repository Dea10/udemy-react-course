import { useEffect, useRef, useState } from "react";

const useFetch = ( url : string ) => {
    const initialState = {
        data: null,
        loading: true,
        error: null
    }

    const [state, setState] = useState(initialState);
    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null
        });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                setTimeout(() => {
                    if(isMounted.current) {
                        setState({
                            data,
                            loading: false,
                            error: null
                        });
                    } else {
                        console.log('not mounted');
                    }
                }, 2000);
            })
    }, [url])

    return state;
}

export default useFetch;