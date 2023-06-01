// import { configureStore, createStore } from "@reduxjs/toolkit";
// import { useContext, useEffect } from "react";
// import { UserContext } from "../context/UserContext";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../redux/UserSlice";
import { loseHealth, gainHealth, heroDeathCount } from "../redux/heroSlice";
import { useEffect, useState } from "react";
import GameOverModal from "./GameOverModal";
import { heroGainHealth, setEnemyCombatState } from "../redux/combatSlice";


const Welcome = () => {

  const currentUser = useSelector(state => state.currentUser)
  const hero = useSelector(state => state.hero)
  const loaded = useSelector(state => state.loaded)
  const combatState = useSelector(state => state.combatState)
  const [isAlive, setIsAlive] = useState(true)
  const [displayModal, setDisplayModal] = useState(false)
  // const [heroLoaded, setHeroLoaded] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // useEffect(() => {
  //   if(hero === {}){
  //     setHeroLoaded(false)
  //   }
  // },[])
 
      // console.log(hero)
      console.log(combatState)
      // console.log(combatState.hero.hero.heroHealth)
      // console.log(currentUser)

      const testHeroDamage = (damage = 5) => {
        const newHealth = hero.currentHealth - damage
        if(newHealth > 0){
          dispatch(loseHealth(newHealth))
        } else {
          setIsAlive(false)
          dispatch(heroDeathCount())
          // alert(`Hero has been killed, Hero has died ${hero.deaths + 1} times`)
          setDisplayModal(true)
          navigate('/')
        }
      }

      const testHeroHeal = (healing = 5) => {
        // const newHealth = hero.currentHealth + healing
        const newHealth = hero.currentHealth + healing
        dispatch(gainHealth(newHealth))
      }

      const testHeroHealCombatSlice = (healing = 5) => {
        // const newHealth = hero.currentHealth + healing
        const newHealth = combatState.hero.heroHealth + healing
        dispatch(heroGainHealth(newHealth))
      }


      console.log(loaded)

      const saveHeroToDatabase = () => {
        console.log(hero)
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Hero/${currentUser.userId}/savehero/${hero.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(hero)
        })
        .then(res => {
          if(res.ok) {
            res.json().then(data => console.log(data))
          } else {
            res.json().then(errors => console.log(errors))
          }
        })
      }


      const createEnemyTest = () => {
        dispatch(setEnemyCombatState({
          enemy: {
            enemyHealth: 40,
            enemyAttack: 2,
            enemyDefense: 3
          }
        }))
      }

    return (
        <>
        {loaded === true ? 
          // <div>
          //   <h1>Stats</h1>
          //   <h3>{hero.currentHealth} / {hero.totalHealth}</h3>
          //   <h3>Attack:{hero.totalAttack}</h3>
          //   <h3>Defense: {hero.totalDefense}</h3>
          //   <h3>Deaths: {hero.deaths}</h3>
          //   <h3>Coins: {hero.coins}</h3>
          //   <h3>Zone: {hero.currentZone} World: {hero.currentNode}</h3>
          // </div>
          <div>
            <h1>Combat State</h1>
            <h3>hero: {combatState.hero.heroHealth}</h3>
            {combatState.enemy ? 
            <h3>enemy: {combatState.enemy.enemyHealth}</h3>
            :
            <></>
            }
          </div>
          :
          <></>
          }

        <button onClick={() => testHeroDamage(10)}>Deal damage</button>
        {/* <button onClick={() => testHeroHeal(3)}>Heal hero</button> */}
        <button onClick={() => testHeroHealCombatSlice(3)}>Heal hero</button>
        <GameOverModal displayModal={displayModal} setDisplayModal={setDisplayModal} saveHeroToDatabase={saveHeroToDatabase}/>
        <button onClick={() => saveHeroToDatabase()}>testsave</button>
        <button onClick={() => createEnemyTest()}>create enemy combat state</button>
        </>
    )
}

export default Welcome