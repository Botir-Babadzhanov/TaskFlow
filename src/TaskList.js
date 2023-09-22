import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onToggleComplete, onDelete, onEditTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
