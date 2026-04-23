import './App.css';
import Navbar from './components/Navbar.jsx'
import Footer from "./components/Footer.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Task from "./components/Task.jsx"
import List from "./components/List.jsx"


function App() {
  
  return (
    <>
      <Navbar />

      {/* <div className="main-container"> */}
      <div>
        <List />
        <Task>
        </Task>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

export default App
