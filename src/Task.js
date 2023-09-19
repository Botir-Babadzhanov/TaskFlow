import React from 'react';

const Task = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={() => onToggleComplete(task.id)}>
        Mark as Complete
      </button>
      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
