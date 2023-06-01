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
//         EquippedWeaponId: 2,
//         EquippedWeaponId1: 2,
//         EquippedWeaponId2: 2,
//         EquippedArmorId: 2,
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
    //     EquippedWeaponId: null,
    //     EquippedArmorId: null,
    //     CurrentZone: null,
    //     CurrentNode: null,
    //     DateLastPlayed:null,
    // },
    reducers: {
        setHero: (state, action) => {
            // console.log(action)
            state = action.payload
            // return {...state, isLoaded: action.payload.isLoaded}
            return {...state}
        },
        // setHeroLoaded: (state, action) => {
        //     return ({...state, isLoaded: action.payload})
        // },
        loseHealth: (state, action) => {
            const updatedHero = {...state,
                currentHealth: action.payload
            }
            // const newHeroHealth = state.currentHealth - action.payload

            // const updatedHeroLogic = {
            //     ...state,
            //     currentHealth: newHeroHealth
            // }
            return updatedHero
            // return updatedHeroLogic

        },
        gainHealth: (state, action) => {
            // return state.CurrentHealth + action.payload
            const updatedHero = {...state,
                currentHealth: action.payload
            }
            return updatedHero
            // return {...state, CurrentHealth: state.CurrentHealth += action.payload}
        },

        equipWeapon: (state, action) => {
            return {
                ...state,
                EquippedWeaponId1: action.payload.weaponId,
                TotalAttack: action.payload.attack
            }
        },

        equipArmor: (state, action) => {
            return {
                ...state,
                EquippedArmorId: action.payload.weaponId,
                TotalDefense: action.payload.defense
            }
        },    
        
        heroDeathCount: (state, action) => {
            const totalDeaths = state.deaths + 1
            return {
                ...state,
                deaths: totalDeaths
            }
        },
    }
})

export const {loseHealth, gainHealth, setHero, heroDeathCount} = heroSlice.actions;

export default heroSlice.reducer;