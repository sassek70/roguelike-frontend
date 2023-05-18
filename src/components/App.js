import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import UserCreateForm from "./UserCreateForm";
import CreateNewHero from "./HeroCreateForm";
import NavBar from "./Navbar";
import Welcome from "./Welcome";
import LoginForm from "./LoginForm";

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/newuser" element={<UserCreateForm />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/newhero" element={<CreateNewHero />}/>
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