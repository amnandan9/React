import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskName || !dueDate) return;
    const newTask = {
      id: Date.now(),
      name: taskName,
      date: dueDate,
      desc: description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskName('');
    setDueDate('');
    setDescription('');
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="reminder-app">
      <h2>Reminder Application</h2>
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <h3>{task.name}</h3>
            <p>Due: {task.date}</p>
            {task.desc && <p>{task.desc}</p>}
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              {task.completed ? 'Completed' : 'Mark as complete'}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
	
export default App;
