import React from 'react';
import axios from 'axios';

function TaskItem({ task, setTasks }) {
  const updateTaskStatus = async (status) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${task._id}`, { status });
      setTasks(prevTasks => prevTasks.map(t => (t._id === task._id ? response.data : t)));
    } catch (error) {
      console.error("There was an error updating the task!", error);
    }
  };

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
      setTasks(prevTasks => prevTasks.filter(t => t._id !== task._id));
    } catch (error) {
      console.error("There was an error deleting the task!", error);
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
      </div>
      <div className="flex items-center space-x-2">
        <select 
          value={task.status} 
          onChange={(e) => updateTaskStatus(e.target.value)} 
          className="px-2 py-1 border rounded-lg"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button onClick={deleteTask} className="bg-red-500 text-white px-3 py-1 rounded-lg">Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
