import React from "react";

import "./Task_item.css";

const Task_item = ({ task, handleTaskClick, handleTaskDelete }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDelete(task.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Task_item;
