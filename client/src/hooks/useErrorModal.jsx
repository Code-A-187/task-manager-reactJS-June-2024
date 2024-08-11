import { useState } from 'react';
import ErrorModal from '../components/common/error-modal/ErrorModal';

export function useErrorModal() {
    const [errorMessage, setErrorMessage] = useState(null);

    const showErrorModal = (message) => {
        setErrorMessage(message);
    };

    const closeErrorModal = () => {
        setErrorMessage(null);
    };

    const ErrorModalComponent = () => (
        errorMessage ? (
            <ErrorModal message={errorMessage} closeFn={closeErrorModal} />
        ) : null
    );

    return { showErrorModal, ErrorModalComponent };
}