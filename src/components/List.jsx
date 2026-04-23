import { useState } from "react";
import allTasks from "../data/tasks.json";




const listStyles = {
  border: "white 2px solid",
  padding: "8px",
  margin: "10px",
};



function List() {
  // 1. state = copie des données JSON
  const [tasks, setTasks] = useState(allTasks);
  // 2. fonction delete
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
            <h3>{taskObj.task}</h3>
            <p>{taskObj.completed ? "✅ Done" : "❌ Not done"}</p>
            {/* 3. bouton delete */}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default List;
