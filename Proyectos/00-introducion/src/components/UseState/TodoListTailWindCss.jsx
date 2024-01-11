import { useState } from "react";
import idGenerator from "../../helpers/idGenerator";

const initialState = [
  {
    id: 1,
    title: "Comprar pan",
    completed: false,
  },
  {
    id: 2,
    title: "Pasear al Perro",
    completed: true,
  },
  {
    id: 3,
    title: "Aprender React",
    completed: false,
  },
];
const TodoListTailWindCss = () => {
  // estados --- HOOKS
  const [tasks, setTasks] = useState(initialState);
  const [newTask, setNewTask] = useState("");
  // funciones ----
  function handleAddTask() {
    const newId = idGenerator();
    if (newTask.trim() !== "") {
      const newTaskObject = {
        id: newId,
        title: newTask.trim(),
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  }

  function handleRemoveTask(taskId) {
    // filtro mi array buscando ese ID y lo guardo en una variable .
    // después seteo mi estado con la nueva variable filrada.
    const updateTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updateTasks);
  }

  function handleToggleCompleted(taskId) {
    // cada vez que hacemos click en el check me pone la tarea completada
    // modificando el estado y cambiando la clase cd css .
    const updateTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updateTasks);
  }

  return (
    <div
      className=" max-w-md 
  mx-auto mt-8 p-6
   bg-yellow-50
   shadow-md rounded-md
   "
    >
      <h1 className="text-2xl mb-4 font-bold uppercase text-center">
        Todo List
      </h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Nueva tarea"
          className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          // onKeyDown={}
        />
        <button
          className="bg-blue-500
         text-white px-4 py-2 
         rounded-md hover:bg-blue-800"
          onClick={handleAddTask}
        >
          Agregar Tarea
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center mb-2">
              {/* boton de check, nombre tarea , botón para borrar la tarea */}
              <input
                type="checkbox"
                className="mr-2"
                checked={task.completed}
                onChange={() => handleToggleCompleted(task.id)}
              />
              <span className={task.completed ? "line-through" : ""}>
                {task.title}
              </span>
              <button
                className="ml-auto bg-red-500 text-white px-3 py-1 
              rounded-md hover:bg-red-800"
                onClick={() => handleRemoveTask(task.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoListTailWindCss;
