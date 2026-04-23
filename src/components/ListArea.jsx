import Container from "./Container";

function ListArea() {
  // const sideBarStyle = {
  //   backgroundColor: "#fbfcfc",
  //   border: "#e9e9e9 solid 1px",
  //   width: "70px",
  //   height: "350px",
  //   padding: "8px",
  //   textDecoration: "none",
  //   textColor: "white",
  //   borderRadius: "4px",
  // };

  return (
    <div className="list-area">
      <h3>Tasks</h3>
      <Container bg={"white"}>
        <h4>First container for list</h4>
      </Container>
    </div>
  );
}

export default ListArea;
