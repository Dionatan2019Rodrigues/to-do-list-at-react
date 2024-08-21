import React from "react";

import Task_item from "./Task_item";

const Tasks = ({ tasks, handleTaskClick }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task_item task={task} handleTaskClick={handleTaskClick} />
      ))}
    </>
  );
};

export default Tasks;
