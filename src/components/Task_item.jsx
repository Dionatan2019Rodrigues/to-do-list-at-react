import React from "react";
import { CgCloseO, CgInfo } from "react-icons/cg";
import { BrowserRouter as Router } from "react-router-dom";

import "./Task_item.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Task_item = ({ task, handleTaskClick, handleTaskDelete }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title.split("/").join("-")}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button className="task-buttons" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
        <button
          className="task-buttons"
          onClick={() => handleTaskDelete(task.id)}
        >
          <CgCloseO />
        </button>
      </div>
    </div>
  );
};

export default Task_item;
