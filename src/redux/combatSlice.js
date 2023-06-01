import { createSlice } from "@reduxjs/toolkit";

export const combatSlice = createSlice({
    name: 'combat',
    initialState: {
        // hero: {
        //     heroHealth: 0,
        //     heroAttack: 0,
        //     heroDefense: 0,
        // },
        // enemy :{
        //     enemyHealth: 0,
        //     enemyAttack: 0,
        //     enemyDefense: 0,
        // },
    },
    
    reducers: {
        setHeroCombatState: (state, action) => {
            return {...action.payload}
        },
        setEnemyCombatState: (state, action) => {
            return {...state, ...action.payload}
        },
        loseHealth: (state, action) => {
            const updatedHero = {...state,
                heroHealth: action.payload
            }
            // const newHeroHealth = state.currentHealth - action.payload

            // const updatedHeroLogic = {
            //     ...state,
            //     currentHealth: newHeroHealth
            // }
            return updatedHero
            // return updatedHeroLogic

        },
        heroGainHealth: (state, action) => {
            // return state.CurrentHealth + action.payload

            const updatedHero = {...state, hero: {
                ...state, heroHealth: action.payload
            }}
            console.log(state)
            return updatedHero
            // return {...state, CurrentHealth: state.CurrentHealth += action.payload}
        },
    }
})

export const {setHeroCombatState, heroLoseHealth, heroGainHealth, setEnemyCombatState} = combatSlice.actions;

export default combatSlice.reducer;