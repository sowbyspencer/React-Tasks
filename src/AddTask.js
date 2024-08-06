import React, { useState } from "react";
import "./styles.css";

/**
 * The AddTask function in JavaScript creates a form for adding tasks with title,
 * notes, importance, and urgency inputs.
 * @returns The `AddTask` component is being returned. It is a form for adding a
 * new task with input fields for task title, notes, importance, and urgency. The
 * user can input task details, set importance and urgency levels using range
 * sliders, and then click the "Add Task" button to add the task. If the task
 * title is empty, an error message will be displayed prompting the user to
 * provide a title.
 */
function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [importance, setImportance] = useState(5);
  const [urgency, setUrgency] = useState(5);
  const [error, setError] = useState(false);

  /**
   * The function `handleAddTask` adds a new task with specified details and
   * resets input fields if the title is not empty, otherwise it displays an error
   * message for a short duration.
   * @returns The `handleAddTask` function returns nothing (`undefined`)
   * explicitly, as there is no `return` statement in the function. The function
   * performs some logic related to adding a task and resetting form fields based
   * on certain conditions.
   */
  const handleAddTask = () => {
    if (title.trim() === "") {
      setError(true);
      setTimeout(() => setError(false), 1500);
      return;
    }

    // Create new task object
    addTask({ title, notes, importance, urgency, completed: false });
    setTitle("");
    setNotes("");
    setImportance(5);
    setUrgency(5);
    setError(false);
  };

  // The `AddTask` component returns a form for adding tasks with input fields for
  // task title, notes, importance, and urgency. The user can input task details,
  // set importance and urgency levels using range sliders, and then click the
  // "Add Task" button to add the task. If the task title is empty, an error message
  // will be displayed prompting the user to provide a title.
  return (
    <div id="addTask">
      <label htmlFor="title">Task Title:</label>
      <div className="input-wrapper">
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className={error ? "error" : ""}
        />
        {error && <p className="error-message">Title is required.</p>}
      </div>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Task notes"
      />
      <label>
        Importance: {importance}
        <input
          type="range"
          min="1"
          max="10"
          value={importance}
          onChange={(e) => setImportance(parseInt(e.target.value))}
        />
      </label>
      <label>
        Urgency: {urgency}
        <input
          type="range"
          min="1"
          max="10"
          value={urgency}
          onChange={(e) => setUrgency(parseInt(e.target.value))}
        />
      </label>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
