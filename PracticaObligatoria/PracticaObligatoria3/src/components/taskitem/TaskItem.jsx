import PropTypes from 'prop-types';
import './TaskItem.css';

function TaskItem({ task, onComplete, onDelete }) {
  const taskStyle = {
    textDecoration: task.completed ? 'line-through' : 'none',
    color: task.completed ? '#888' : '', 
  };

  return (
    <div className="task-item">
      <span style={taskStyle}>{task.text}</span>
      <button onClick={() => onComplete(task.id)}>ok</button>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number
  }).isRequired,
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TaskItem;