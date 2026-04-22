function Sidebar() {

const sideBarStyle = {
  backgroundColor: "lightgrey",
  width: "70px",
  height: "350px",
  padding: "8px",
  textDecoration: "none",
  textColor: "white",
  borderRadius: "16px"
};

  return (
    <div style={sideBarStyle}>
      <a href="Home-Page">Home</a> <br />
      <a href="About Us">About Us</a>
    </div>
  );
}

export default Sidebar;
