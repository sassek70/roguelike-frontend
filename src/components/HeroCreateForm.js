import { useState } from "react"


const CreateNewHero = () => {
    const [formData, setFormData] = useState({heroName: "", class: ""})


    const handleChange =(e) => {
        const {name, value} = e.target
        setFormData({...formData, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // use this fetch when user state is added
        // fetch(`${process.env.REACT_APP_BACKEND_URL}/Hero/user/{userId}/createhero`)
        
        //defualt user 1 for testing
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Hero/user/1/createhero`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(data => console.log(data))
            } else {
                res.json().then(errors => console.log(errors))
            }
        })
        
    }
    // const fetchHeroes = () => {
        // fetch(`http://localhost:5263/User/user/createuser`)
    // }


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