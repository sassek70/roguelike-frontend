import { createSlice } from "@reduxjs/toolkit";

export const loadStatusSlice = createSlice({
    name: 'isLoaded',
    initialState: false,
    reducers: {
        loadHero: (state) => {
            return state = true
        },
        unloadHero: (state) => {
            return state = false
        }

    }
})

export const {loadHero, unloadHero} = loadStatusSlice.actions;

export default loadStatusSlice.reducer;