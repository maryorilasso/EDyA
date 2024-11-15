import { useReducer } from "react";
import { TaskReducer } from "../reducers/TaskReducer";

import TodoList from "./TaskList";
import TodoAdd from "./TaskForm";
import TaskForm from "./TaskForm";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Ir a mi cita de manicure",
    done: false,
  },
  {
    id: new Date().getTime() + 1000,
    description: "Terminar mis challenges",
    done: true,
  },
];

const TaskApp = () => {
  const [todos, dispatchTodo] = useReducer(TaskReducer, initialState);

  const handleNewTodo = (newTodo) => {
    dispatchTodo({ type: "add", payload: newTodo });
  };

  const handleDeleteTodo = (todoId) => {
    dispatchTodo({ type: "delete", payload: todoId });
  };

  return (
    <>
      <h1>
        TaskApp:
        <br />
        <small> Por hacer: {todos.filter((todo) => !todo.done).length} </small>{" "}
        <br />
        <small> Hechas: {todos.filter((todo) => todo.done).length} </small>{" "}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>

        <div className="col-5">
          <h4> Agregar TODO </h4>
          <hr />
          <TaskForm onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TaskApp;