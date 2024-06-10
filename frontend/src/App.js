import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import Filter from './Filter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the tasks!", error);
      });
  }, []);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    return task.status === filter;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Task Management</h1>
        <TaskForm setTasks={setTasks} />
        <Filter filter={filter} setFilter={setFilter} />
        <div className="mt-6 space-y-4">
          {filteredTasks.map(task => (
            <TaskItem key={task._id} task={task} setTasks={setTasks} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
