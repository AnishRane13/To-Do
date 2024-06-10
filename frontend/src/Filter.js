import React from 'react';

function Filter({ filter, setFilter }) {
  return (
    <div className="mt-4">
      <label htmlFor="filter" className="block text-sm font-medium text-gray-700">Filter by status:</label>
      <select 
        id="filter" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}

export default Filter;
