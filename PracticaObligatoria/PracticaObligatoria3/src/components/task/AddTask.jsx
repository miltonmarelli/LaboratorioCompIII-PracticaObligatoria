import { useState } from 'react';
import PropTypes from 'prop-types';
import './AddTask.css';

function AddTask({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="addtask">
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Agregar</button>
    </div>
  );
}

AddTask.propTypes = {
  onAddTask: PropTypes.func,
};

export default AddTask;