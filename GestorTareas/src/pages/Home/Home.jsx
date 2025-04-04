import { useContext, useState } from "react";
import { TaskContext } from "../../components/Context/Context";
import { TaskCard } from "../../components/TaskCard/TaskCard";

const Home = () => {
  const { tasks, addTask, deleteTask, editTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [editingId, setEditingId] = useState(null); // Para saber si estamos editando

  const handleAddOrEditTask = () => {
    if (taskName.trim() === "") return;

    if (editingId) {
      // Editar tarea existente
      editTask(editingId, { name: taskName, description: taskDescription });
      setEditingId(null);
    } else {
      // Agregar nueva tarea
      addTask({ id: Date.now(), name: taskName, description: taskDescription, completed: false });
    }

    setTaskName("");
    setTaskDescription("");
  };

  const handleEditClick = (task) => {
    setTaskName(task.name);
    setTaskDescription(task.description);
    setEditingId(task.id);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Hacer ejercicio"
        className="w-full p-2 mb-2 border border-gray-300 rounded-md"
      />

      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Descripción"
        className="w-full p-2 mb-2 border border-gray-300 rounded-md"
      ></textarea>

      <button
        onClick={handleAddOrEditTask}
        className={`w-full py-2 rounded-md ${editingId ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"} text-white`}
      >
        {editingId ? "Guardar Cambios" : "Agregar Tarea"}
      </button>

      <div className="mt-4 space-y-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={deleteTask} onEdit={handleEditClick} />
        ))}
      </div>
    </div>
  );
};

export default Home;
