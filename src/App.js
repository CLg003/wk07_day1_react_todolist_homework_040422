import { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    {name: "Wash dishes", priority: "high"}, 
    {name: "Sweep floor", priority: "low"}, 
    {name: "Mow lawn", priority: "high"}
  ]);

  const [newTaskName, setNewTaskName] = useState('');

  const [newTaskPriority, setNewTaskPriority] = useState('');

  const handleTaskInput = (event) => {
    setNewTaskName(event.target.value);
  }

  const handlePriorityInput = (event) => {
    setNewTaskPriority(event.target.value);
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTaskName, priority: newTaskPriority});
    setTasks(copyTasks);
    setNewTaskName('');
    setNewTaskPriority('');
  }

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index}>
        <span className={task.priority==="high" ? "high" : "low"}>{task.priority.toUpperCase()} PRIORITY</span>
        <span>{task.name}</span>
        </li>
    )
  })

  return (
    <div className="app">

      <h1>To Do List:</h1>
      <hr></hr>

      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task">Add a new task: </label>
        <input id="new-task" type="text" value={newTaskName} onChange={handleTaskInput}/>
        <div className="radio" onChange={handlePriorityInput}>
          <label htmlFor="low-priority">Low Priority</label>
          <input type="radio" name="priority" value="low" checked={newTaskPriority==="low"}/>
          <label htmlFor="high-priority">High Priority</label>
          <input type="radio" name="priority" value="high" checked={newTaskPriority==="high"}/>
        </div>
        <button type="submit">Add Task</button>
      </form>

      <h2>Tasks</h2>

      <ul>
        {taskNodes}
      </ul>
    </div>
  );
}


export default App;