import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [description, setDescription] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.trim().length === 0) return;

    const newTask = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onAddTask(newTask);
    setDescription(""); // Clear the input field after adding the task
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        className="form-control"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar TODO
      </button>
    </form>
  );
};

export default TaskForm;
