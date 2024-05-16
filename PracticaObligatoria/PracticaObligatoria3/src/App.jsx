import { useState } from 'react';
import AddTask from './components/task/AddTask';
import TaskList from './components/tasklist/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskIdCounter, setTaskIdCounter] = useState(1);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: taskIdCounter, text: newTask, completed: false }]);
    setTaskIdCounter(taskIdCounter + 1); 
  };

  const handleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1 className="app-title">Lista de tareas</h1>
      <div className="app-content">
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onComplete={handleComplete}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;