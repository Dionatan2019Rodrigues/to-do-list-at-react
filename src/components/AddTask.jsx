import React, { useState } from "react";

import "./AddTask.css";
import Button from "./Button.jsx";

const AddTask = ({ handleTaskAdddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAdddition(inputData);
    setInputData("");
  };

  return (
    <>
      <div className="add-task-container">
        <input
          onChange={handleInputChange}
          value={inputData}
          className="add-task-input"
          type="text"
        />
        <div className="add-task-button-container">
          <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
