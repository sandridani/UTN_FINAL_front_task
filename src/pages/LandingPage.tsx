import { useEffect, useState } from "react";
import CarruselHOME from "../components/CarruselHOME/CarruselHOME"
////import Categoria from "../components/Categoria/Categoria"
import CategoriaSelector from "../components/CategoriaSelector/CategoriaSelector"
import CategoriasTareas from "../components/CategoriasTareas/CategoriasTareas"
import { TaskService } from "../Services/TaskService";
import { Task } from "../types/Task";

const LandingPage = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(()=>{
    const fetchTasks = async () =>{
      const taskData = await TaskService.getAllTasks();
      setTasks(taskData);
    };
    fetchTasks();
  }, []);

  useEffect(() =>{
    if(selectedCategory) {
      const filtered = tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase());
      setFilteredTasks(filtered);
    }else{
      setFilteredTasks(tasks);
    }
  }, [selectedCategory, tasks]);


  return (
    <>
      <CarruselHOME/>
      <CategoriaSelector onSelectedCategory={setSelectedCategory}/>
      <CategoriasTareas tasks={filteredTasks.length > 0 ? filteredTasks : tasks}/>
    </>
  )
}

export default LandingPage;