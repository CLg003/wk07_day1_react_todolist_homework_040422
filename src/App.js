import { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState(["Wash dishes", "Sweep floor", "Mow lawn"]);

  const [newTask, setNewTask] = useState('');

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push(newTask);
    setTasks(copyTasks);
    setNewTask('');
  }

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index}><span>{task}</span></li>
    )
  })

  return (
    <div className="app">

      <h1>To Do:</h1>
      <hr></hr>

      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task">Add a new task: </label>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}/>
        {/* <label htmlFor="low-priority">Low Priority</label>
        <input type="radio" name="priority" value="Low"/>
        <label htmlFor="high-priority">High Priority</label>
        <input type="radio" name="priority" value="High"/> */}
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {taskNodes}
      </ul>
    </div>
  );
}

export default App;