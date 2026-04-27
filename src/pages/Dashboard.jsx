import List from "../components/List";

function Dashboard({ tasks, setTasks }) {
  return (
    <div>
      <h3>Your Tasks</h3>
      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Dashboard;
