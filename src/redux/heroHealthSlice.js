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

export const heroHealthSlice = createSlice({
    name: 'updateHealth',
    initialState: null,
    reducers: {
        loseHealth: (state, action) => {
            return state.CurrentHealth -= action.payload
        },
        gainHealth: (state, action) => {
            return state.CurrentHealth += action.payload
        },
    }
})

export const {loseHealth, gainHealth} = heroHealthSlice.actions;

export default heroHealthSlice.reducer;