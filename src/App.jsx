import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="md:flex gap-3">
        <Navbar />
        <Routes>
          <Route path="/" element={"home"} />
          <Route path="/task/edit/:id" element={"edit"} />
          <Route path="/task/create" element={"create"} />
          <Route path="/tasks/:id" element={"task 1"} />
          <Route path="/tasks" element={"tasks"} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
