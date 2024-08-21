import React, { useState } from "react";

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

  const handleTaskAdddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  return (
    <>
      <section className="container">
        <AddTask handleTaskAdddition={handleTaskAdddition}/>
        <Tasks tasks={tasks} />
      </section>
    </>
  );
};

export default App;
