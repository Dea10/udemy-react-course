import { useState } from "react";

const useForm = ( initialState : any) => {
    const [ formValues, setFormValues ] = useState(initialState);

    const handleInputChange = ({ target }: any) => {
        const { name, value } = target;

        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const reset = () => {
        setFormValues(initialState);
    }

    return [ formValues, handleInputChange, reset ];
}

export default useForm;