import List from "../components/List";

function Dashboard({ tasks, setTasks }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Dashboard;
