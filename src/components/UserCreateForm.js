import { useState } from "react"


const UserAccount = () => {
    const [formData, setFormData] = useState({
        userName: "", 
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name] : value})
        
        console.log(formData)
    }
    console.log(`${process.env.REACT_APP_BACKEND_URL}/createuser`)
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`${process.env.REACT_APP_BACKEND_URL}/createuser`,{
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

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Username:</label>
            <input type="text" value={formData.userName} name="userName" placeholder="Enter a userName" onChange={handleChange}></input>

            <label htmlFor="password">Password:</label>
            <input type="text" value={formData.password} name="password" placeholder="Enter a password" onChange={handleChange}></input>
        <button type="submt">Create Account</button>
        </form>
    )



}

export default UserAccount