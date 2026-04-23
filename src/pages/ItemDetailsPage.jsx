//1. We need to access the name in the URL
//2. We need to search info of that name
//3. display that info if it exists

import { useParams } from "react-router-dom";

function ItemDetailsPage(props) {
  // in order to access dymaic parameters in a page or component we need useParams()
  const params = useParams();
  console.log(params);

  const foundUser = props.userList.find((user) => {
    return user.id === params.userId;
  });
  console.log(foundUser);

  // guard clause for the component
  if (!foundUser) {
    return <h3>User not found with that name, please use the correct link</h3>;
  }

  return (
    <div>
      <h4>Showing details for a user</h4>

      <h5>Name: {foundUser.username} </h5>
      <p>City: {foundUser.city} </p>
      <p>Course: {foundUser.course}</p>
      <p>ID: {foundUser.id} </p>
    </div>
  );
}
export default ItemDetailsPage;
