import { createStoreHook as createStore} from "react-redux";

const heroState = {
    hero = {
        UserId : 
        HeroName: 
        Class: 
        HeroLevel: 
        TotalHealth: 
        CurrentHealth: 
        TotalAttack: 
        TotalDefense: 
        TotalBattles: 
        BattlesWon: 
        Deaths: 
        Coins: 
        TotalEquippedWeaponSize: 
        TotalEquippedArmorSize: 
        EquippedWeaponId1: 
        EquippedWeaponId2: 
        EquippedArmorId1: 
        EquippedArmorId2: 
        EquippedArmorId3: 
        CurrentZone: 
        CurrentNode: 
        DateLastPlayed: 
    }

}

const reducer = (state, action) {
    switch(action.type) {
        case "updateHeroHealth" :
            ...state,
            CurrentHealth: action.payload
        }
    }
}

const store = createStore(reducer)