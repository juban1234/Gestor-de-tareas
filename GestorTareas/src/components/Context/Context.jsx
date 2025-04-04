import { createContext, useState } from "react";


export const TaskContext  = createContext();

export const Context = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
  };
  

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask ,editTask}}>
      {children}
    </TaskContext.Provider>
  );
};
