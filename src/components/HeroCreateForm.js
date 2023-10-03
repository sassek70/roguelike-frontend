import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setHero } from "../redux/heroSlice";
import { loadHero } from "../redux/loadStatusSlice";
import { setHeroCombatState } from "../redux/combatSlice";


const CreateNewHero = () => {
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({heroName: "", class: ""})


    const handleChange =(e) => {
        const {name, value} = e.target
        setFormData({...formData, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Hero/${currentUser.userId}/createhero`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(data => {
                    dispatch(setHero(data))
                    dispatch(loadHero())
                    dispatch(setHeroCombatState({
                            heroHealth: data.currentHealth,
                            heroAttack: data.totalAttack,
                            heroDefense: data.totalDefense,
                    }))
                })
            } else {
                res.json().then(errors => console.log(errors))
            }
        })
        
    }


    return (
        <>
            <div>
                Choose a class:
                <div>
                    Card containing class info
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="heroName">Hero Name:</label>
                <input type="text" value={formData.heroName} name="heroName" placcholder="Enter a Hero Name" onChange={handleChange}></input>

                {/* ***TESTING*** remove this input field, Class will be chosen with cards */}
                <label htmlFor="heroName">Class:</label>
                <input type="text" value={formData.class} name="class" placeholder="Enter a Class" onChange={handleChange}></input>
                <button type="submit">Create Hero</button>

            </form>
        </>
    )
}

export default CreateNewHero;