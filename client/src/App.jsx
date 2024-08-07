import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import Layout from './Layout';
import Home from './components/home/Home';
import UserLogin from './components/user-login/UserLogin';
import UserRegister from './components/user-register/UserRegister';
import TaskDetails from './components/tasks/task-details/TaskDetails';
import AllTasks from './components/tasks/all-tasks/AllTasks';
import CompletedTasks from './components/tasks/completed-tasks/CompletedTasks';
import ImportantTasks from './components/tasks/important-tasks/ImportantTasks';
import DoItNowTasks from './components/tasks/do-it-now-tasks/DoItNowTasks';
import PrivateGuard from './components/guards/PrivateGuard';
import PublicGuard from './components/guards/PublicGuard';
import NotFound from './components/404/NotFound';

function App() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route element={<PublicGuard />}>
                        <Route path="/login" element={<UserLogin />} />
                        <Route path="/register" element={<UserRegister />} />
                        
                    </Route>
                    <Route path="/tasks/:taskId/details" element={<TaskDetails />} />
                    <Route element={<PrivateGuard />}>
                        <Route path="/tasks/:taskId/details" element={<TaskDetails />} />
                        <Route path="/all-tasks" element={<AllTasks />} />
                        <Route path="/important-tasks" element={<ImportantTasks />} />
                        <Route path="/completed-tasks" element={<CompletedTasks />} />
                        <Route path="/now-tasks" element={<DoItNowTasks />} />
                    </Route>

                    {/* Catch-all for undefined routes */}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </AuthContextProvider>
    );
}

export default App;