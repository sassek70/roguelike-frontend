import { createSlice } from "@reduxjs/toolkit";

//         UserId : 2,
//         HeroName: 2,
//         Class: 2,
//         HeroLevel: 2,
//         TotalHealth: 2,
//         CurrentHealth: 2,
//         TotalAttack: 2,
//         TotalDefense: 2,
//         TotalBattles: 2,
//         BattlesWon: 2,
//         Deaths: 2,
//         Coins: 2,
//         TotalEquippedWeaponSize: 2,
//         TotalEquippedArmorSize: 2,
//         EquippedWeaponId1: 2,
//         EquippedWeaponId2: 2,
//         EquippedArmorId1: 2,
//         EquippedArmorId2: 2,
//         EquippedArmorId3: 2,
//         CurrentZone: 2,
//         CurrentNode: 2,
//         DateLastPlayed: 2
// }

export const heroSlice = createSlice({
    name: 'hero',
    initialState: {},
    // initialState: {
    //     HeroName: null,
    //     Class: null,
    //     HeroLevel: null,
    //     TotalHealth: null,
    //     CurrentHealth: null,
    //     TotalAttack: null,
    //     TotalDefense: null,
    //     TotalBattles: null,
    //     BattlesWon: null,
    //     Deaths: null,
    //     Coins: null,
    //     TotalEquippedWeaponSize: null,
    //     TotalEquippedArmorSize: null,
    //     EquippedWeaponId1: null,
    //     EquippedWeaponId2: null,
    //     EquippedArmorId1: null,
    //     EquippedArmorId2: null,
    //     EquippedArmorId3: null,
    //     CurrentZone: null,
    //     CurrentNode: null,
    //     DateLastPlayed:null,
    // },
    reducers: {
        setHero: (state, action) => {
            state = action.payload
            return state
        },
        loseHealth: (state, action) => {
            const updatedHero = {...state,
                currentHealth: action.payload
            }
            return updatedHero
            // updatedHero.CurrentHealth = action
            // let newHealth = state.CurrentHealth - action.payload
            // const updated = {...state, CurrentHealth: action.payload}
            // return updated
            // state.currentHealth = state.currentHealth - action.payload
            // console.log(state.currentHealth, action.payload, updated, newHealth )
            // console.log(state)
            // setHero(...heroSlice, updated)
        },
        gainHealth: (state, action) => {
            // return state.CurrentHealth + action.payload
            const updatedHero = {...state,
                currentHealth: action.payload
            }
            return updatedHero

            // return {...state, CurrentHealth: state.CurrentHealth += action.payload}

        },
    }
})

export const {loseHealth, gainHealth, setHero} = heroSlice.actions;

export default heroSlice.reducer;