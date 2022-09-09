import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        error: '',
        loading: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLogout: (state, action) => {
            localStorage.removeItem('profile');
            state.user = null;
        },
    }
});


export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;