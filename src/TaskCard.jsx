import React, { useState } from "react";
import "./styles.css";

/**
 * The TaskCard function in JavaScript defines a component that displays task
 * information and allows for editing, completion, and deletion of tasks.
 * @returns The `TaskCard` component is being returned. The component
 * conditionally renders different content based on whether `isEditing` state is
 * true or false. If `isEditing` is true, it displays input fields for editing the
 * task details, and if false, it displays the task details along with options to
 * mark the task as completed, delete the task, or edit the task.
 */
function TaskCard({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [notes, setNotes] = useState(task.notes);
  const [importance, setImportance] = useState(task.importance);
  const [urgency, setUrgency] = useState(task.urgency);
  const [error, setError] = useState(false);

  /**
   * The handleSave function checks if the title is empty, sets an error if it is,
   * removes the error after 1.5 seconds, updates the task with new data, and
   * exits editing mode.
   * @returns If the `title` is empty or only contains whitespace characters, an
   * error is set to true, and then after 1.5 seconds, the error is removed. If
   * the `title` is not empty, the `updateTask` function is called with the
   * `task.id` and an object containing `title`, `notes`, `importance`, and
   * `urgency`. Finally, the `
   */
  const handleSave = () => {
    if (title.trim() === "") {
      setError(true);
      setTimeout(() => setError(false), 1500); // Remove the error after 1.5 seconds
      return;
    }
    updateTask(task.id, { title, notes, importance, urgency });
    setIsEditing(false);
  };

  /**
   * The `handleComplete` function toggles the completion status of a task.
   */
  const handleComplete = () => {
    updateTask(task.id, { completed: !task.completed });
  };

  /**
   * The handleDelete function is used to delete a task by calling the deleteTask
   * function with the task's id as a parameter.
   */
  const handleDelete = () => {
    deleteTask(task.id);
  };

  // The `TaskCard` component conditionally renders different content based on
  // whether `isEditing` state is true or false. If `isEditing` is true, it displays
  // input fields for editing the task details, and if false, it displays the task
  // details along with options to mark the task as completed, delete the task, or
  // edit the task.
  return (
    <div className="task-card" title="TaskCard" id={`taskId${task.id}`}>
      {isEditing ? (
        <>
          <label htmlFor={`title-${task.id}`}>Task Title:</label>
          <div className="input-wrapper">
            <input
              id={`title-${task.id}`}
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
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.notes}</p>
          <p>Importance: {task.importance}</p>
          <p>Urgency: {task.urgency}</p>
          <div className="completed-container">
            <label className="completed-label">
              Completed:
              <input
                type="checkbox"
                checked={task.completed}
                onChange={handleComplete}
                className="completed-checkbox"
              />
            </label>
            {task.completed && (
              <button className="delete" onClick={handleDelete}>
                Delete
              </button>
            )}
            {!task.completed && (
              <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default TaskCard;
