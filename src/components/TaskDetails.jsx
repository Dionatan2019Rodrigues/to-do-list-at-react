import React from "react";

import "./TaskDetails.css";
import Button from "./Button";
import Header from "./Header";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <>
      <Header>Detalhes da Tarefa</Header>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
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
