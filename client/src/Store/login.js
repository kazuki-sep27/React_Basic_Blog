import { createSlice } from '@reduxjs/toolkit'

const localToken = localStorage.getItem('token')

const initialLoginState = {
    token: localToken,
    isLoggedIn: !!localToken
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialLoginState,
    reducers: {
        login: (state, action) => {
            let jwt = action.payload
            localStorage.setItem('token', jwt)

            state.token = jwt
            state.isLoggedIn = true
        },
        logout: (state) => {
            localStorage.removeItem('token')

            state.token = ''
            state.isLoggedIn = false
        },
    },
})

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;