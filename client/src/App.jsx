import Header from "./Header"
import TaskDashboard from "./task-dashboard/TaskDashboard"
import SideBar from "./side-bar/SideBar"
import Task from "./task/Task"
import Login from "./user-login/Login"
import Register from "./user-register/Register"

function App() {

  return (
    <>
      <Header />
      <TaskDashboard />
      <Login />
      <Register />
      <SideBar />
      <Task />
    </>
  
  )
}

export default App
