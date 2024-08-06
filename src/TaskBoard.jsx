import React from "react";
import TaskCard from "./TaskCard";

/**
 * The TaskBoard function filters and sorts tasks based on importance and urgency
 * ranges, then renders TaskCard components accordingly in different sections.
 * @returns The `TaskBoard` component is being returned. It consists of four
 * sections, each displaying tasks based on their importance and urgency levels.
 * The tasks are filtered and sorted accordingly before being rendered using the
 * `TaskCard` component.
 */
function TaskBoard({ tasks, updateTask, deleteTask }) {
  const renderTasks = (importanceRange, urgencyRange) => {
    return tasks
      .filter(
        (t) =>
          importanceRange.includes(t.importance) &&
          urgencyRange.includes(t.urgency)
      )
      .sort((a, b) => {
        if (b.importance !== a.importance) {
          return b.importance - a.importance;
        }
        return b.urgency - a.urgency;
      })
      .map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ));
  };

  // The `TaskBoard` component returns a task board layout with different sections
  // based on the importance and urgency of tasks. Each section displays tasks
  // filtered and sorted based on their importance and urgency levels. The tasks are
  // rendered using the `TaskCard` component with the provided `updateTask` and
  // `deleteTask` functions for handling task updates and deletions.
  return (
    <div id="board">
      <div>
        <h2>High Importance, High Urgency</h2>
        <h3>Focus</h3>
        {renderTasks([6, 7, 8, 9, 10], [6, 7, 8, 9, 10])}
      </div>
      <div>
        <h2>High Importance, Low Urgency</h2>
        <h3>Goals/Plan</h3>
        {renderTasks([6, 7, 8, 9, 10], [1, 2, 3, 4, 5])}
      </div>
      <div>
        <h2>Low Importance, High Urgency</h2>
        <h3>Delegate/Fit In</h3>
        {renderTasks([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])}
      </div>
      <div>
        <h2>Low Importance, Low Urgency</h2>
        <h3>Eliminate/Backburner</h3>
        {renderTasks([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])}
      </div>
    </div>
  );
}

export default TaskBoard;
