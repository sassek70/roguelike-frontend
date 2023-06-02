import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserCreateForm from "./UserCreateForm";
import CreateNewHero from "./HeroCreateForm";
import NavBar from "./Navbar";
import Welcome from "./Welcome";
import LoginForm from "./LoginForm";
import { useEffect } from "react";
import { setCurrentUser } from "../redux/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import Gameboard from "./Gameboard";



function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    if (localStorage.uid) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/Auth/existingtoken`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(localStorage.uid)
      })
      .then(res => {if(res.ok) {
        res.json()
        .then(user => {
            localStorage.setItem("uid", user.token)
            dispatch(setCurrentUser({
                userId: user.userId,
                username: user.username,
            }))
            navigate('/')
        }
      )}
    })
  } else {
    // setGuestUser(parseInt(Math.random() * ((100000 - 1000) + 1000)))
    console.log('No User Found');
    navigate('/')
  };
  },[])

  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/newuser" element={<UserCreateForm />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/newhero" element={<CreateNewHero />}/>
          <Route path="/game" element={<Gameboard />}/>
        </Routes>
    </>
  );
}

export default App;


const Div = styled.div`
height: 100vh;
width: 100vw;
background-color: gray;
`