import PropTypes from 'prop-types';
import TaskItem from '../taskitem/TaskItem';

function TaskList({ tasks, onComplete, onDelete }) {
    return (
      <div className="tasklist">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={() => onComplete(task.id)}
            onDelete={() => onDelete(task.id)}
          />
        ))}
      </div>
    );
  }
  
  TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        completed: PropTypes.bool,
      })
    ).isRequired,
    onComplete: PropTypes.func,
    onDelete: PropTypes.func,
  };
  
  export default TaskList;