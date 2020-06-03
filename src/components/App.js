import React from 'react';
import TaskList from './TaskList';
import TaskListContextProvider from '../contexts/TaskListContext';
import './App.css';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
