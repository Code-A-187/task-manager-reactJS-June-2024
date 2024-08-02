import { Route, Router, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import UserLogin from "../src/components/user-login/UserLogin"
import UserRegister from "../src/components//user-register/UserRegister"
import Layout from "./Layout"
import CreateTaskModal from "./components/create-task/CreateTaskModal"
import EditTaskModal from "./components/edit-task-modal/EditTask"

function App() {

  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/tasks/crete" element={<CreateTaskModal />} />
          <Route path="/tasks/edit" element={<EditTaskModal />} />
          {/* <Route path="/tasks//details/" element={<DetailsTaskModal />} /> */}
        </Route>
      </Routes>

  );
};
  
export default App
