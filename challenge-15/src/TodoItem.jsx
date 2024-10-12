import React from 'react';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className="todo-item">
      <span
        className={todo.isDone ? 'todo-done' : ''}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Eliminar</button>
    </div>
  );
}

export default TodoItem;
