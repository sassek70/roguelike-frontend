import styled from "styled-components";
import { Routes } from "react-router-dom";
import UserAccount from "./UserCreateForm";
import CreateNewHero from "./HeroCreateForm";

function App() {
  return (
    // <Routes >
    <>
      <UserAccount />
      <CreateNewHero />
    </>
    // </Routes>
  );
}

export default App;


const Div = styled.div`
height: 100vh;
width: 100vw;
background-color: gray;
`