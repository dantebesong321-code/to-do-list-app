function Navbar(){

const navBarStyle = {
  fontFamily: "Arial", 
  backgroundColor: "lightgreen",
  Display: "flex",
  justifyContent: "spacebetween",
  padding: "8px"
}

return (
  <div style={navBarStyle}>
    <a href="">2-DO</a>
    <a href="">To-Do-List</a>
  </div>
);

}

export default Navbar