import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./heroSlice";
import currentUserReducer from "./UserSlice"


export const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
        hero: heroReducer,

    }
})
// const heroState = {
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

// const reducer = (state = heroState, action) => {
//     switch(action.type) {
//         case "updateHeroHealth":
//             return {...state, CurrentHealth: action.payload}
//         case "test":
//             console.log(action.payload)
//             break;
//         default: 
//             return state;
//         }
//     }

// const store = createStore(reducer)

// store.dispatch({ type: "test", payload: "hello"})