import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import AddTask from "./components/AddTask.jsx";

import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ItemDetailsPage from "./pages/ItemDetailsPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import allTasks from "./data/tasks.json";

function App() {
  const [tasks, setTasks] = useState(allTasks);

  return (
    <>
      <Navbar />
      <Sidebar />

      <AddTask setTasks={setTasks} />

      <div className="content-area">
        <Routes>
          <Route
            path="/"
            element={<Dashboard tasks={tasks} setTasks={setTasks} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/item/:id" element={<ItemDetailsPage tasks={tasks} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
