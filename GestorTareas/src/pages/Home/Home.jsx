import { useState } from "react"
import { Card } from "../../components/Card/Card";

export const Home = () => {

  const [task,setTask] = useState({title:'', description:''})
  const [ListTask,setListTask] = useState([]);

  const addTask = (e)=>{
    e.preventDefault()
    if (!task.title.trim() || !task.description.trim()) return

    const newTask ={
      id: Date.now(),
      title: task.title,
      description :task.description,
      completed: false
    }

    setListTask([...ListTask,newTask])
    setTask({title:'',description:''})
  }

  const deleteTask = (id) =>{
    setListTask(ListTask.filter(task => task.id !==id))
  }

  return (
    <header className="flex flex-col items-center justify-center">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg ">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

        <form onSubmit={addTask} className="mb-4">

        <input
          type="text"
          placeholder="Hacer ejercicio"
          value={task.title}
          onChange={(e) => setTask({...task,title:e.target.value})}
          className="w-full p-2 border rounded-md mb-2"
        />
        <textarea
          placeholder="Description"
          value={task.description}
          onChange={(e) => setTask({...task,description:e.target.value})}
          className="w-full p-2 border rounded-md mb-4 h-20"
        ></textarea>
        
        {/* Add Task Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-4 hover:bg-blue-700">
          Add Task
        </button>
        </form>

        <div className="flex justify-between mb-4">
          <button className="px-4 py-2 border rounded-md">All</button>
          <button className="px-4 py-2 border rounded-md">Pending</button>
          <button className="px-4 py-2 border rounded-md">Completed</button>
        </div>
        
        <Card/>

      </div>
    </header>
  )
}
