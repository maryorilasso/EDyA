import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ todos, onDelete, onCheck, onEdit }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TaskItem key={todo.id} todo={todo} onDelete={onDelete} onCheck={onCheck} onEdit={onEdit} />
      ))}
    </ul>
  );
}

export default TaskList;