import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

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
    <>
      <section className="container">
        <AddTask handleTaskAdddition={handleTaskAdddition} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDelete={handleTaskDelete}
        />
      </section>
    </>
  );
};

export default App;
