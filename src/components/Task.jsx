

function Task() {

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
