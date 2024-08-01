import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "./home/Home"
import SideBar from "./side-bar/SideBar"
import Task from "./task/Task"
import UserLogin from "./user-login/UserLogin"
import UserRegister from "./user-register/UserRegister"

function App() {

  return (
    <>
      <Header />

      <Routes>        
        <Route path="/"element={ <Home /> } />
        <Route path="/login"element={ <UserLogin /> } />
        <Route path="/register"element={ <UserRegister /> } />
        <Route path="/sidebar"element={ <SideBar /> } />
        <Route path="/task"element={ <Task /> } />
      </Routes>

    </>
  
  )
}

export default App
