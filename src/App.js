import React, { useState, useEffect } from "react";
import TaskBoard from "./TaskBoard";
import AddTask from "./AddTask";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4() }]);
  };

  const updateTask = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header>
        <h1>Task Board</h1>
      </header>
      <AddTask addTask={addTask} />
      <TaskBoard
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <footer>
        <div className="footer-content">
          {/* <p>&copy; 2024 Task Management App. All rights reserved.</p> */}
          <p>
            <a href="https://github.com/sowbyspencer">My GitHub</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
