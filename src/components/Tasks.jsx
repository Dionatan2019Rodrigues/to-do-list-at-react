import React from "react";

import Task_item from "./Task_item";

const Tasks = ({ tasks, handleTaskClick, handleTaskDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task_item
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDelete={handleTaskDelete}
        />
      ))}
    </>
  );
};

export default Tasks;
