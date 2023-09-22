import React from "react";

const Task = ({ task, onToggleComplete, onDelete, onEditTask }) => {
  const handleEditClick = () => {
    const newName = window.prompt("Enter new task name:", task.name);
    if (newName) {
      onEditTask(task.id, newName);
    }
  };

  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.name}
      </span>
      <button onClick={() => onToggleComplete(task.id)}>
        Mark as Complete
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default Task;
