import React, { useState } from "react";
import PropTypes from "prop-types";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (taskName) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), name: taskName, completed: false },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newName) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <NewTaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
    </div>
  );
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default App;
