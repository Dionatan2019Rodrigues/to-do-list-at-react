import React from "react";

import Task_item from "./Task_item";

const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task_item task={task}/>
      ))}
    </>
  );
};

export default Tasks;
