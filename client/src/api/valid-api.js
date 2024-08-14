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

export function validateRegister(values) {
    const errors = {};

    if(!values.fullName) {
        errors.fullName = 'Full Name is required';
    } else if (values.fullName.length < 3) {
        errors.fullName = 'Full Name must be at least 3 characters long';
    }

    if (!values.email){
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\+/.test(values.email)) {
        errors.email = 'Email address is invalid'
    }

    if (!values.password) {
        errors.password = 'Password is required';
    }   else if (values.password.length < 6) {
        errors.passsword = 'Password must be at least 6 characters long'
    }

    return errors;
};


export function validateTaskForm(values) {
    const errors = {};

    // Validate Title
    if (!values.title) {
        errors.title = 'Title is required';
    } else if (values.title.length < 3) {
        errors.title = 'Title must be at least 3 characters long';
    } else if (values.title.length > 50) {
        errors.title = 'Title cannot exceed 20 characters';
    }

    // Validate Description
    if (!values.description) {
        errors.description = 'Description is required';
    } else if (values.description.length < 10) {
        errors.description = 'Description must be at least 10 characters long';
    } else if (values.description.length > 200) {
        errors.description = 'Description cannot exceed 100 characters';
    }

    return errors;
}

export function validateCommentForm(values) {
    const errors = {};

    // Validate Comment
    if (!values.comment) {
        errors.comment = 'Comment is required';
    } else if (values.comment.length < 5) {
        errors.comment = 'Comment must be at least 5 characters long';
    } else if (values.comment.length > 200) {
        errors.comment = 'Comment cannot exceed 200 characters';
    }

    return errors;
}