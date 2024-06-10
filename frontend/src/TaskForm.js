import React, { useState } from 'react';
import axios from 'axios';

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, status };
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', newTask);
      setTasks(prevTasks => [...prevTasks, response.data]);
      setTitle('');
      setDescription('');
      setStatus('To Do');
    } catch (error) {
      console.error("There was an error creating the task!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full px-3 py-2 border rounded-lg"
        ></textarea>
      </div>
      <div>
        <select 
          value={status} 
          onChange={(e) => setStatus(e.target.value)} 
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Add Task</button>
    </form>
  );
}

export default TaskForm;
