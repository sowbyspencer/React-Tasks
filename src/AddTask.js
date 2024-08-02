import React, { useState } from "react";
import "./styles.css"; // Ensure you import your CSS file

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [importance, setImportance] = useState(5);
  const [urgency, setUrgency] = useState(5);
  const [error, setError] = useState(false);

  const handleAddTask = () => {
    if (title.trim() === "") {
      setError(true);
      setTimeout(() => setError(false), 1500); // Remove the error after 1.5 seconds
      return;
    }
    addTask({ title, notes, importance, urgency, completed: false });
    setTitle("");
    setNotes("");
    setImportance(5);
    setUrgency(5);
    setError(false);
  };

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
