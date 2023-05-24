import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setCurrentUser } from "../redux/UserSlice";


const NavBar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const userLogOut = () => {
        localStorage.removeItem("uid")
        dispatch(setCurrentUser(null))
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