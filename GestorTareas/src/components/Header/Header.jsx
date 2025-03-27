export const Header = () => {
  return (
    <header className="min-w-screen h-auto flex flex-col justify-center p-4 items-center ">
        <h1 className="text-xl font-bold text-gray-700">To-Do List</h1>
        <input 
          type="text" 
          placeholder="Nombre tarea" 
          className="w-80 md:w-3/4 sm:w-3/3 p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          placeholder="Descripción tarea" 
          className="w-80 md:w-3/4 sm:w-3/3 h-20 p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className=" mt-3 w-80 md:w-3/4 sm:w-3/3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
          Add Task
        </button>
    </header>
  )
}
