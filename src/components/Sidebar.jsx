function Sidebar() {

  return (
    <div className="side-bar">
      {/* <a href="Home">Home</a> <br /> */}
      <div className="dashboard-w-icon">
        {" "}
        <img
          src="src/assets/dashboard_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
          alt=""
        />{" "}
        <a href="Dashboard">Dashboard</a>
      </div>

      <br />

      <div className="about-w-icon">
        <img
          src="src/assets/info_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
          width={24}
          alt=""
        />
        <a href="About">About</a>
      </div>
    </div>
  );
}

export default Sidebar;
