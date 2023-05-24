// import { configureStore, createStore } from "@reduxjs/toolkit";
// import { useContext, useEffect } from "react";
// import { UserContext } from "../context/UserContext";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../redux/UserSlice";


const Welcome = () => {

    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.uid) {
          fetch(`${process.env.REACT_APP_BACKEND_URL}/Auth/existingtoken`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(localStorage.uid)
          })
          .then(res => {if(res.ok) {
            res.json()
            .then(user => {
                console.log(user)
                dispatch(setCurrentUser({
                    userId: user.userId,
                    username: user.username,
                }))
                navigate('/')
            }
          )}
        })
      } else {
        // setGuestUser(parseInt(Math.random() * ((100000 - 1000) + 1000)))
        console.log('No User Found');
        navigate('/')
      };
      },[])

      console.log(currentUser)

    // const {currentUser, setCurrentUser} = useContext(UserContext)



    // console.log(currentUser)

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
    //             // console.log({...state, CurrentHealth: action.payload})
    //             return {...state, CurrentHealth: action.payload}
    //         case "test":
    //             console.log(action.payload)
    //             break;
    //         default: 
    //             return state;
    //         }
    //     }
    
    // const store = createStore(reducer)
    
    // store.dispatch({ type: "updateHeroHealth", payload: 444})

    return (
        <>
        </>
    )
}

export default Welcome