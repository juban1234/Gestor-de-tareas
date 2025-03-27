
export const Tareas = ({nombreTarea,descripcionTarea}) => {
  return (
    <>
        <input type="checkbox" name="completado" id="complit" />
        <div className="w-full h-30 bg-gray-200">
            <h1 className="">{nombreTarea}</h1>
            <p> {descripcionTarea} </p>
        </div>
    </>
  )
}
