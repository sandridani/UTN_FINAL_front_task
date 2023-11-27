import { useEffect, useState } from "react";
import { Task } from "../../types/Task"
import CategoriaSelector from "../CategoriaSelector/CategoriaSelector";
import CategoriasTareas from "../CategoriasTareas/CategoriasTareas";
import { TaskService } from "../../Services/TaskService";


const Categoria = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(""); ///estado para la categoria que se selecciono

  ///para cargar tareas desde la api cuando el componente se ejecuta y reenderiza los dos componentes de la interfaz
  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks (tasksData);
    };

    fetchTasks ();

  }, []);

  ///filtrara las tareas segun categoria seleccionadas
  const filteredTasks = selectedCategory
  ? tasks.filter(task =>task.estado.toUpperCase() === selectedCategory.toUpperCase())
  : tasks;

  return (
    <div className="container mt-5">
      <CategoriaSelector onSelectedCategory={setSelectedCategory}/>{/* maneja la seleccion de categorias*/}
      <CategoriasTareas tasks={filteredTasks}/> {/*pasa las tareas filtradas al componente CategoriasTareas */}
    </div>
  )
}

export default Categoria


