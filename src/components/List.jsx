import allTasks from "../data/tasks.json";
//------- BODY --------
//-------New input section --------
// Show input new task input-type = "text"
// creat new input button


//-------List display section --------
// extract list from json file into new array in js/react - done
// show list
// push (CANNOT MUTATE THE ORIGIN)
// map
//setState
// another state
// onClick

const allTasksArr = allTasks;

function List() {

  let taskList = allTasksArr.map((element) => {
    return <li>{element}</li>
  });
 

  return (
    <div>
    </div>
  );
}

export default List;
