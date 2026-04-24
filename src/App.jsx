import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import List from "./components/List.jsx";
import ListArea from './components/ListArea.jsx';
import Container from './components/Container.jsx';
import AddTask from "./components/AddTask.jsx"


import { Routes, Route, Link } from "react-router-dom";
import AboutPage from './pages/AboutPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx'
import ItemDetailsPage from './pages/ItemDetailsPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import HomePage from './pages/HomePage.jsx';


let cloneArr = List;

function App() {
  return (
    <>
      <Navbar />
      <AddTask />

      <div className="content-area">
        <Sidebar />

        {/* <Dashboard /> */}

        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/item/:id" element={<ItemDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
