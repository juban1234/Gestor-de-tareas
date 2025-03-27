import { Header } from "../../components/Header/Header"
import { Tareas } from "../../components/Tareas/Tareas"




export const Home = () => {
  return (
    <>
    <Header/>
    <Tareas
      nombreTarea={"juan"}
      descripcionTarea={"como estas"}
    />
    
</>
  )
}
