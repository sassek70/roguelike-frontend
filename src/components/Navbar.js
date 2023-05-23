import { NavLink, useNavigate } from "react-router-dom";


const NavBar = () => {

    const navigate = useNavigate()

    const userLogOut = () => {
        localStorage.removeItem("uid")
        navigate("/")
    }

    return (
        <>
            <NavLink to="/" name="Home">Home</NavLink>
            <NavLink to="/newuser" name="Create-Account">Create Account</NavLink>
            <NavLink to="/login" name="Login">Login</NavLink>
            <NavLink to="/newhero" name="New-Hero">New Hero</NavLink>
            <button onClick={() => userLogOut()}>Logout</button>
        </>
    )
}

export default NavBar