import React from "react";

import "./TaskDetails.css"
import Button from "./Button";
import Header from "./Header";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const TaskDetails = () => {
  const params = useParams();

  return (
    <>
      <Header>Detalhes da Tarefa</Header>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea minus
          maxime temporibus, incidunt fugit.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
