import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreateTaskPage from "./pages/CreateTaskPage";
import AllTaskPage from "./pages/AllTaskPage";
import TaskPage from "./pages/TaskPage";
import EditTaskPage from "./pages/EditTaskPage";

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
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
