import { useState } from "react";


 // Clone the array in parent and bring here
  // We connect new input to existing array
  // We use the .push method
  // Use the onChange function


function AddTask() {
  const [taskInputValue, setTaskInputValue] = useState("");

  const handleTaskInput = (event) => {
    console.log("user typing something in input task");
    setTaskInputValue(event.target.value);
  };

 

  const addNewTask = (event) => {
    event.preventDefault();
    console.log("Task added:", taskInputValue);
    setTaskInputValue("");
  };

  return (
    <div className="task-container">
      <div className="tasks">
        <input
          className="input-zone"
          type="text"
          placeholder={"Write something"}
        />

        <button onClick={addNewTask} className="add-task-btn">
          Add task
        </button>
      </div>
    </div>
  );
}

export default AddTask;