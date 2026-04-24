function Container(props) {
  // console.log(props);

  const containerStyles = {
    border: "lightgrey 2px solid",
    padding: "20px",
    backgroundColor: props.bg,
    with: "150px",
    height: "10px"
  };

  return <div style={containerStyles}>{props.children}</div>;
}

export default Container;
