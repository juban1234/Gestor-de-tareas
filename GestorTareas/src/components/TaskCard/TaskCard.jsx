import React from 'react'

export const TaskCard = ({ task, onDelete,onEdit }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <p className="text-lg font-semibold">{task.name}</p>
        <p className="text-sm text-gray-600">{task.description}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onEdit(task)} className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600">
          Editar
        </button>
        <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
          Eliminar
        </button>
      </div>
    </div>
  );
};
