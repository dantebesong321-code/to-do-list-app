import { useParams } from "react-router-dom";

function ItemDetailsPage({ tasks }) {
  const { id } = useParams();

  const item = tasks[id];

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h1>Item Details</h1>
      <p>{item.task}</p>
      <p>{item.completed ? "✅ Done" : "❌ Not done"}</p>
    </div>
  );
}

export default ItemDetailsPage;
