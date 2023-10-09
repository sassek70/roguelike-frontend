import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { gainHealth, heroDeathCount, loseHealth } from "../redux/heroSlice"
import { heroGainHealth, heroLoseHealth, setEnemyCombatState } from "../redux/combatSlice"
import GameOverModal from "./GameOverModal"


const Gameboard = () => {
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
        // console.log(combatState)
        // console.log(combatState.hero.hero.heroHealth)
        // console.log(currentUser)
  
        const heroDamage = (damage = 5) => {
          console.log(hero)
          let currentHeroHealth = hero.currentHealth
          let newHealth = currentHeroHealth - damage
          console.log(newHealth)
          if(newHealth > 0){
            // dispatch(heroLoseHealth(newHealth))
            dispatch(loseHealth(newHealth))
          } else {
            setIsAlive(false)
            dispatch(heroDeathCount())
            // alert(`Hero has been killed, Hero has died ${hero.deaths + 1} times`)
            setDisplayModal(true)
            // navigate('/')
          }
        }
  
 
        const heroHealCombatSlice = (healing = 5) => {
          // const newHealth = hero.currentHealth + healing
          let currentHeroHealth = hero.currentHealth
          let newHealth = currentHeroHealth + healing
          if(newHealth >= hero.totalHealth) {
            dispatch(gainHealth(hero.totalHealth))
          } else {
            dispatch(gainHealth(newHealth))
          }
        }
  
  
        console.log(loaded)
  
        const saveHeroToDatabase = async () => {
          console.log(hero)
          await fetch(`${process.env.REACT_APP_BACKEND_URL}/Hero/${currentUser.userId}/savehero/${hero.id}`, {
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
              enemyHealth: 40,
              enemyAttack: 2,
              enemyDefense: 3
            }))
        }
    
    
    return (
        <>
        {loaded === true ? 
          <div>
            <h1>Stats</h1>
            <h3>{hero.currentHealth} / {hero.totalHealth}</h3>
            <h3>Attack:{hero.totalAttack}</h3>
            <h3>Defense: {hero.totalDefense}</h3>
            <h3>Deaths: {hero.deaths}</h3>
            <h3>Coins: {hero.coins}</h3>
            <h3>Zone: {hero.currentZone} World: {hero.currentNode}</h3>
          </div>
            :
            <></>
            }
        <button onClick={() => heroDamage(10)}>Deal damage</button>
        {/* <button onClick={() => testHeroHeal(3)}>Heal hero</button> */}
        <button onClick={() => heroHealCombatSlice(3)}>Heal hero</button>
        <GameOverModal displayModal={displayModal} setDisplayModal={setDisplayModal} saveHeroToDatabase={saveHeroToDatabase}/>
        <button onClick={() => saveHeroToDatabase()}>testsave</button>
        <button onClick={() => createEnemyTest()}>create enemy combat state</button></>
    )
}

export default Gameboard;