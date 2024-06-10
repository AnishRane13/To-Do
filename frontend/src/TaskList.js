import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, filter }) => {
  const filteredTasks = tasks.filter(task => filter === 'All' || task.status === filter);

  return (
    <div>
      {filteredTasks.map(task => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
