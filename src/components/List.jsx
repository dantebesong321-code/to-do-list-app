import { useState } from "react";
import allTasks from "../data/tasks.json";




const listStyles = {
  border: "white 2px solid",
  padding: "8px",
  margin: "10px",
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
