export function validateLogin(values) {
    const errors = {};

    // Email validation
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    // Password validation
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 4) {
        errors.password = 'Password must be at least 6 characters';
    }

    return errors;
}


export function validateRegister (values) {
    
    const errors = {};

    // Full Name validation
    if (!values.fullName) {
        errors.fullName = 'Full Name is required';
    } else if (values.fullName.length < 3) {
        errors.fullName = 'Full Name must be at least 3 characters long';
    }

    // Email validation
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    // Password validation
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
};

