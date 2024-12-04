import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreateTaskPage from "./pages/CreateTaskPage";
import AllTaskPage from "./pages/AllTaskPage";
import TaskPage from "./pages/TaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import { Button } from "antd";

function App() {
  return (
    <BrowserRouter>
      <div className="md:flex gap-3">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task/edit/:id" element={<EditTaskPage />} />
          <Route path="/task/create" element={<CreateTaskPage />} />
          <Route path="/task/:id" element={<TaskPage />} />
          <Route path="/tasks" element={<AllTaskPage />} />
          <Route
            path="*"
            element={
              <div className="text-center font-bold text-3xl w-full h-full mt-10">
                <p>Page Not Found</p>
                <Button>
                  <Link to={"/"}>Back To Home</Link>
                </Button>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
