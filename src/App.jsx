

import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Task from "./components/Task.jsx";
import List from "./components/List.jsx";
import ListArea from './components/ListArea.jsx';
import Container from './components/Container.jsx';
import { Routes, Route, Link } from "react-router-dom";
import AboutPage from './pages/AboutPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx'
import ItemDetailsPage from './pages/ItemDetailsPage.jsx';

function App() {
  
  return (
    <>
      <nav>
        <Link to="/">Home </Link> <br />
        <Link to="/">About </Link> <br />
      </nav>

      <Routes>

        <Navbar />
        <div>
          <div className="content-area">
            <H3>Task</H3>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/about"} element={<AboutPage />} />

            <Sidebar></Sidebar>

            <List />

            {/* router */}
            {/* <Router>
          {/* <Router path={}></Router> 

          </Router>*/}

            <ListArea />
          </div>
        </div>
        <Footer />
      </Routes>
    </>
  );
}

export default App
