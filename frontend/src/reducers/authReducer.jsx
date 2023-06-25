import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    credentials: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.credentials = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.credentials = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;