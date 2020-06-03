import React, { createContext, useState } from 'react';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Read the book' },
    { id: 2, task: 'Wash the car' },
    { id: 3, task: 'Write some code' },
  ]);

  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
