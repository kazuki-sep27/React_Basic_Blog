import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: {},
});

export const AuthContextProvider = (props) => {
    const { token, setToken } = React.useState(null)

    const userIsLoggedIn = !!token

    const logInHandler = (token) => {
        setToken(token)
    }

    const logOutHandler = (token) => {
        setToken(null)
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: logInHandler,
        logout: logOutHandler,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContext





