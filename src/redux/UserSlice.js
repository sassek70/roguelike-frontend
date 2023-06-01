import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setCurrentUser: (state, action) => {
            console.log(action)
            const user = {...action.payload}
            return (user)
        },
        removeCurrentUser: (state, action) => {
            return state = null
        }

    }
})

export const {setCurrentUser, removeCurrentUser} = currentUserSlice.actions;

export default currentUserSlice.reducer;