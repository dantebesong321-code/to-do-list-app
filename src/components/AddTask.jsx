import { useState } from "react";

// const handleTaskInput()

// Onclick to change the state
// create and add new item to list
// Task component displayed on dashoard page and user can update and existing item in item list



function AddTask() {
  return (
    <div className="task-container">
      <div className="tasks">
        <input
          className="input-zone"
          type="text"
          placeholder="Write something"
        />
        <button className="add-task-btn">Add task</button>
      </div>
    </div>
  );
}

export default Task;
