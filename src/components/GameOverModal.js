import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { heroDeathCount, setHero } from "../redux/heroSlice";
import { loadHero, unloadHero } from "../redux/loadStatusSlice";
import { setHeroCombatState } from "../redux/combatSlice";
// import { ReactDOM } from "react-dom";


const GameOverModal = ({displayModal, setDisplayModal, saveHeroToDatabase}) => {
    const currentUser = useSelector(state => state.currentUser)
    const hero = useSelector(state => state.hero)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if(!displayModal) return null;

    const handleRestart = async () => {
        await saveHeroToDatabase()
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/Hero/${currentUser.userId}/load/${hero.id}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            }
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    dispatch(setHeroCombatState({
                            heroHealth: data.currentHealth,
                            heroAttack: data.totalAttack,
                            heroDefense: data.totalDefense,
                    }))
                    dispatch(loadHero())
                    setDisplayModal(false)
                    console.log(data)
                    // navigate("/game")
            })
            } else {
             res.json().then(errors => console.log(errors))
            }
        })
    }

    const handleQuit = () => {
        // dispatch(setHero({}))
        dispatch(unloadHero())
        navigate("/")
        }

    // return ReactDOM.createPortal(
        return (
        <div>
            <div>
            Hero has been killed
            </div>
            <button onClick={() => handleRestart()}>Restart Level</button>
            <button onClick={() => handleQuit()}>Quit to Main Menu</button>
        </div>
        // ,
        // document.getElementById("modal")
    )
}

export default GameOverModal
// function Modal(props) {
//     return ReactDOM.createPortal()
// }