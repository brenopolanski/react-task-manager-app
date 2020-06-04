import React, { useContext, useEffect, useState } from 'react';
import { TaskListContext } from '../contexts/TaskListContext';

const TaskForm = () => {
  const { addTask, editItem, clearList, editTask } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

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
          {!editItem ? 'Add Task' : 'Edit Task'}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
