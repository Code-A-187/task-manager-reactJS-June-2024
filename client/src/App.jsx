import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import UserLogin from "../src/components/user-login/UserLogin"
import UserRegister from "../src/components//user-register/UserRegister"
import Layout from "./Layout"

import { AuthContextProvider } from "./contexts/AuthContext"
import TaskDetails from "./components/tasks/task-details/TaskDetails"

function App() {


  return (
	<AuthContextProvider>
		<Routes>
			<Route path="/" element={<Layout />}>
			<Route index element={<Home /> } />
			<Route path="/login" element={<UserLogin />} />
			<Route path="/register" element={<UserRegister />} />
			<Route path="/tasks/:taskId/details" element={ <TaskDetails /> } />
			</Route>
		</Routes>
	</AuthContextProvider>
  );
};
  
export default App
