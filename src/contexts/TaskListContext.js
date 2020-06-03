import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Read the book' },
    { id: 2, title: 'Wash the car' },
    { id: 3, title: 'Write some code' },
  ]);

  const addTask = (title) => {
    setTasks([...tasks, { id: uuidv4(), title }]);
  };

  return (
    <TaskListContext.Provider value={{ tasks, addTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
