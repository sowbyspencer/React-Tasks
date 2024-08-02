import React from "react";
import TaskCard from "./TaskCard";

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
