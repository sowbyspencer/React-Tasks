/* Importing various modules and components. */
import React, { useState, useEffect } from "react";
import TaskBoard from "./TaskBoard";
import AddTask from "./AddTask";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";

/**
 * The function `App` manages a task board application in React, including adding,
 * updating, and deleting tasks with data saved in local storage.
 * @returns The `App` component is being returned, which contains the structure of
 * the task management application including the header, AddTask component,
 * TaskBoard component, and footer with a link to the developer's GitHub profile.
 */
function App() {
  /* Using the `useState` hook in React to initialize the `tasks` state
  variable. */
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  /* A function being used as an argument in the
  `useEffect` hook in the `App` component of a React application. */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /**
   * The `addTask` function adds a new task to a list of tasks with a unique
   * identifier generated using `uuidv4()`.
   * @param task - The `task` parameter in the `addTask` function represents the
   * task object that you want to add to the `tasks` array. It typically contains
   * information about the task such as its title, description, due date, etc.
   */
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4() }]);
  };

  /**
   * The `updateTask` function updates a task in an array of tasks based on the
   * task's id.
   * @param id - The `id` parameter in the `updateTask` function is the unique
   * identifier of the task that needs to be updated.
   * @param updatedTask - The `updatedTask` parameter in the `updateTask` function
   * is an object that contains the updated information for a specific task. It
   * could include properties such as `title`, `description`, `dueDate`,
   * `priority`, etc., depending on the structure of the tasks in your
   * application.
   */
  const updateTask = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  /**
   * The `deleteTask` function filters out a task with a specific id from an array
   * of tasks and updates the tasks array.
   * @param id - The `id` parameter in the `deleteTask` function represents the
   * unique identifier of the task that needs to be deleted from the `tasks`
   * array.
   */
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // The structure of the task management application including the header, AddTask
  // component, TaskBoard component, and footer with a link to the developer's
  // GitHub profile.
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
