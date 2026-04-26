import { useState } from "react";
import allTasks from "../data/tasks.json";




const listStyles = {
  backgroundColor: "white",
  padding: "10px",
  margin: "10px",
  borderRadius: "10px",
  fontSize: "12px",
  boxShadow: "-webkit-box-shadow: 5px 5px 15px 5px rgba(86, 85, 85, 0.1)",
  boxShadow: "5px 5px 15px 5px rgba(86, 85, 85, 0.1)",
};


function List() {

  const [tasks, setTasks] = useState(allTasks);
  const handleDelete = (indexToDelete) => {
    const filteredTasks = tasks.filter((_, index) => {
      return index !== indexToDelete;
    });
    setTasks(filteredTasks);
  };

  return (
    <div>
      {tasks.map((taskObj, index) => {
        return (
          <div style={listStyles} key={index}>
            <p>{taskObj.task}</p>
            <p>{taskObj.completed ? "✅ Done" : "❌ Not done"}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default List;
