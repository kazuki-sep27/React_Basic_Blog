import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    console.log(initialToken);
    const [token, setToken] = useState(initialToken)

    const userIsLoggedIn = !!token

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext





