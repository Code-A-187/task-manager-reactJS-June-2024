import {useEffect, useState} from 'react'

export function useForm(initialValues, submitCallback, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setValues(initialValues)
    }, [initialValues])

    // TODO: add suport for dropdownMenu in form
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    };

    const validateForm = () => {
        const validationErrors = validate(values);
        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };


    const submitHandler = async (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {
            await submitCallback(values);
        }
        
        
        setValues(initialValues);
        
    };

    return {
        values,
        changeHandler,
        submitHandler,
        errors,
    };
}
