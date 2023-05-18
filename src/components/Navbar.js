import { NavLink } from "react-router-dom";
import Login from "./LoginForm";


const NavBar = () => {

    return (
        <>
            <NavLink to="/" name="Home">Home</NavLink>
            <NavLink to="/newuser" name="Create-Account">Create Account</NavLink>
            <NavLink to="/login" name="Login">Login</NavLink>
            <NavLink to="/newhero" name="New-Hero">New Hero</NavLink>
        </>
    )
}

export default NavBar