import { createSlice } from "@reduxjs/toolkit";

export const combatSlice = createSlice({
    name: 'combat',
    initialState: {},
    reducers: {
        setHeroCombatState: (state, action) => {
            return {...action.payload}
        },
        setEnemyCombatState: (state, action) => {
            return {...state, ...action.payload}
        },
        heroLoseHealth: (state, action) => {
            const updatedHero = {...state, hero: {
                    ...state,
                    heroHealth: action.payload
            }}
            return updatedHero
        },
        heroGainHealth: (state, action) => {
            const updatedHero = {...state, hero: {
                ...state, heroHealth: action.payload
            }}
            return updatedHero
        },
    }
})

export const {setHeroCombatState, heroLoseHealth, heroGainHealth, setEnemyCombatState} = combatSlice.actions;

export default combatSlice.reducer;