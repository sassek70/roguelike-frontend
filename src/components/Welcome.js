// import { configureStore, createStore } from "@reduxjs/toolkit";
// import { useContext, useEffect } from "react";
// import { UserContext } from "../context/UserContext";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../redux/UserSlice";
import { loseHealth, gainHealth } from "../redux/heroSlice";


const Welcome = () => {

    const currentUser = useSelector(state => state.currentUser)
    const hero = useSelector(state => state.hero)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.uid && currentUser === null) {
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
                localStorage.setItem("uid", user.token)
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

      console.log(hero)

      const testHeroDamage = () => {
        dispatch(gainHealth(hero, 5))
      }

      const testHeroHeal = () => {
        dispatch(loseHealth(hero, 5))
      }

    return (
        <>
        {hero? <h1>{hero.currentHealth}</h1> : <></>}
        <button onClick={() => testHeroDamage()}>Deal 5 damage</button>
        <button onClick={() => testHeroHeal()}>heal 5 damage</button>
        </>
    )
}

export default Welcome