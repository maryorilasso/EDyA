import React from 'react';  
import TodoItem from './TodoItem.jsx';  
import useTODO from './useTODO.jsx';  

function TodoApp() {
  const { todos, toggleTodo, deleteTodo, countTodos, countPendingTodos } = useTODO([
    { id: 1, text: 'Aprender React', isDone: false },
    { id: 2, text: 'Hacer el challenge', isDone: false }
  ]);

  return (
    <div>
      <h2>Total de TODOs: {countTodos()}</h2>
      <h3>Pendientes: {countPendingTodos()}</h3>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoApp;
