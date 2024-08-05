import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({
    userId: '',
    fullName: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeState: (authState = {}) => null,
    login: () => null ,
});

export function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState(() => {
        const storedAuthData = localStorage.getItem('auth');
        return storedAuthData ? JSON.parse(storedAuthData) : {};
    });

    useEffect(() => {
        if (authState?.accessToken) {
            localStorage.setItem('auth', JSON.stringify(authState))
        } else {
            localStorage.removeItem('auth')
        }
    }, [authState])

    const changeAuthState = (state) => {
        setAuthState(prevState => ({ ...prevState, ...state }))
    }

    const logout = () => {
        setAuthState(null)
    }

    const contextData = {
        userId: authState?.userId,
        fullName: authState?.fullName,
        email:authState?.email,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
};

export function useAuthContext() {
    return useContext(AuthContext);

}

