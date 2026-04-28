import { useState } from "react";

function AddTask({ setTasks }) {
  const [taskInputValue, setTaskInputValue] = useState("");

  const handleTaskInput = (event) => {
    setTaskInputValue(event.target.value);
  };

  const addNewTask = (event) => {
    event.preventDefault();

    if (!taskInputValue.trim()) return;

    const newTask = {
      task: taskInputValue,
      completed: false,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);

    setTaskInputValue("");
  };

  return (
    <div className="task-container">
      <div className="tasks">
        <input
          className="input-zone"
          type="text"
          placeholder="What's on your mind?"
          value={taskInputValue}
          onChange={handleTaskInput}
        />

        <button onClick={addNewTask} className="add-task-btn">
          Add task
        </button>
      </div>
    </div>
  );
}

export default AddTask;
