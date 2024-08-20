import React from "react";

import "./Task_item.css";

const Task_item = ({ task }) => {
  return <div className="task-container">{task.title}</div>;
};

export default Task_item;
