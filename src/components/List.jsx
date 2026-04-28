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

function List({ tasks, setTasks }) { 
  const handleDelete = (indexToDelete) => {
    const filteredTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(filteredTasks);
  };

  // We need to implement a toggle functionality
  // When clicked should show the check mark if done
  //

  const handleToggle = (indexToToggle) => { 
    const updatedTasks = tasks.map((task, index) => { 
      if (index === indexToToggle) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div>
      {tasks.map((taskObj, index) => (
        <div style={listStyles} key={index}>
          <p>{taskObj.task}</p>
          <p>{taskObj.completed ? "✅" : ""}</p>
          <div className="status-btn">
            <button className="done-btn" onClick={() => handleToggle(index)}>Done</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
