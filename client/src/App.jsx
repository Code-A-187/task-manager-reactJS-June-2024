import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "./components/home/Home"
import SideBar from "../src/components/side-bar/SideBar"
import UserLogin from "../src/components/user-login/UserLogin"
import UserRegister from "../src/components//user-register/UserRegister"

function App() {

  return (
    <>
      <Header />

      <Routes>        
        <Route path="/"element={ <Home /> } />
        <Route path="/login"element={ <UserLogin /> } />
        <Route path="/register"element={ <UserRegister /> } />
        <Route path="/sidebar"element={ <SideBar /> } />
      </Routes>

    </>
  
  )
}

export default App
