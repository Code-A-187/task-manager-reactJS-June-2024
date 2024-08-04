import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import UserLogin from "../src/components/user-login/UserLogin"
import UserRegister from "../src/components//user-register/UserRegister"
import Layout from "./Layout"

import { AuthContextProvider } from "./contexts/AuthContext"

function App() {


  return (
	<AuthContextProvider>
		<Routes>
			<Route path="/" element={<Layout />} />
			<Route index element={<Home />} />
			<Route path="/login" element={<UserLogin />} />
			<Route path="/register" element={<UserRegister />} />
		</Routes>
	</AuthContextProvider>
  );
};
  
export default App
