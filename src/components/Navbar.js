import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setCurrentUser, removeCurrentUser } from "../redux/UserSlice";
import { useSelector } from "react-redux";

const NavBar = () => {
    const currentUser = useSelector(state => state.currentUser)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const userLogOut = () => {
        localStorage.removeItem("uid")
        dispatch(removeCurrentUser(null))
        navigate("/")
    }
    
    console.log(currentUser)
    return (
        <>
            {currentUser? <h3>{currentUser.username}</h3> : <h3>Please log in</h3>}
            <NavLink to="/" name="Home">Home</NavLink>
            <NavLink to="/newuser" name="Create-Account">Create Account</NavLink>
            {currentUser && currentUser != null ? <button onClick={() => userLogOut()}>Logout</button> :  <NavLink to="/login" name="Login">Login</NavLink>}
            <NavLink to="/newhero" name="New-Hero">New Hero</NavLink>
            <NavLink to="/game" name="Game">Play Game</NavLink>
        </>
    )
}

export default NavBar