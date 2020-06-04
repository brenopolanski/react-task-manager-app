import React, { useContext, useState } from 'react';
import { TaskListContext } from '../contexts/TaskListContext';

const TaskForm = () => {
  const { addTask, clearList } = useContext(TaskListContext);

  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="task-input"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          Add Task
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
