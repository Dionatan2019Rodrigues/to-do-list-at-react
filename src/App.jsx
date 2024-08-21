import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
  ]);

  const handleTaskClick = (idTask) => {
    const newTasks = tasks.map((task) => {
      if (task.id == idTask) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskDelete = (idTask) => {
    const newTasks = tasks.filter((task) => task.id != idTask);

    setTasks(newTasks);
  };

  const handleTaskAdddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  return (
    <Router>
      <section className="container">
        <Route
          path="/"
          exact
          render={() => {
            return (
              <>
                <Header>Minhas Tarefas</Header>
                <AddTask handleTaskAdddition={handleTaskAdddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDelete={handleTaskDelete}
                />
              </>
            );
          }}
        />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </section>
    </Router>
  );
};

export default App;
