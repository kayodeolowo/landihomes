import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    email: null,
    token: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;

            // Save to local storage
            localStorage.setItem('authToken', action.payload.token);
            localStorage.setItem('authEmail', action.payload.email);
            localStorage.setItem('authId', action.payload.id);
        },
        // ...
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        
            // Clear local storage
            localStorage.removeItem('authToken');
            localStorage.removeItem('authEmail');
            localStorage.removeItem('authId');
        },
    },
});


export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;