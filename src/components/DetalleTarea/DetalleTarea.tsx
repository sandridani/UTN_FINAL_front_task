import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Task } from "../../types/Task";
import { TaskService } from "../../Services/TaskService";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "react-bootstrap";

const DetalleTarea = () => {

  const { taskId } = useParams<{taskId?: string}>(); ///parametros para la URL
  const [task, setTasks] = useState<Task | null>(null); ////tarea y cambi de estado a la tarea
  const [estado, setEstado] = useState<string>('');
  const [relatedTask, setRelatedTasks] = useState<Task[]>([]); ////aca estara las tareas relacionadas

  const navigate = useNavigate();  ///para navegar en nuestra pagina, par REDIRIGIR AL USUARIO EN LA PAG. PRINCIP
 
  useEffect(() => {

    ////..............para obtener una tarea......................
    const fetchTask = async () => {
      try{
        if (taskId && !isNaN(parseInt(taskId, 10))){

          const taskData = await TaskService.getOneTask(parseInt(taskId, 10));
          setTasks(taskData);

          const tasksInCategory= await TaskService.getTasksInCategory(taskData.estado);
          setRelatedTasks([tasksInCategory]);
        } else{
          console.error('Identificador de tarea no valido.');
        }
      } catch (error) {
        console.error('Error al cargar la tarea: ', error);
      }
    };
    
    fetchTask();
  }, [taskId]);
 


  ///// ------------------cambiar elestado de una tarea------------
  const handleUpDateState = async ()=>{
    if (estado !== ''){
      try{
        const upDateTask = await TaskService.updateStateTask(parseInt(taskId!, 10), estado);
        setTasks(upDateTask);
        toast.success('El estado de la tarea se ha realizado con exito.',{
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }catch (error) {
        toast.error('Error al actualizar el estado de la tarea', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        console.error('Error al actualizar el estado de la tarea.', error);
      } 
      
    } else {
      toast.error('Selecciona un estado que sea valido.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.error('Selecciona un estado Valido.')
    }
  };

  /////// delete una tarea
  const handleDeleteTask =async ()=>{
    try{
      if(taskId){
        await TaskService.deleteTask(parseInt(taskId, 10));
        toast.success('Tarea eliminada con exito.',{
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        console.log('Tarea eliminada correctamente.')
        navigate('/');  ////despues de eliminar tarea, redirige al usuario a la pag princip.
      }

    }catch (error) {
      toast.error('error al eliminar la tarea', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.error('Error al eliminar la tarea: ', error);
    }
  };
 
  return (
    <>
    <div className="container mt-5">
      {task && (
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={task.imagen} alt={task.titulo} className="card-img-top mb-5"/>
          </div>

          <div className="col-12 col-md-6">
            <h1 className="display-5 fw-bolder"> Titulo: {task.titulo}</h1>
            <h3>Detalle de tarea con ID: {task.id}</h3>
            <h5>Estado actual: {task.estado}</h5>
            <p className="lead">Tiempo: {task.tiempo}</p>
            <p className="lead">Responsable: {task.responsable}</p>
            <p className="lead">Descripcion: {task.descripcion}</p>

            <select className="form-select mb-3" onChange={(e) => setEstado(e.target.value)} value={estado}>
              <option value="">- Seleccionar un estado -</option>
              <option value="PORHACER">Por hacer</option>
              <option value="ENPRODUCCION">En produccion</option>
              <option value="PORTESTEAR">Por testear</option>
              <option value="COMPLETADA">Completada</option>
            </select>

            <button className="btn btn-danger" onClick={handleDeleteTask}> Eliminar tarea </button>
            <button className="btn btn-primary ms-2" onClick={handleUpDateState}> Actualizar estado </button>
          </div>

        </div>
      )}

      <div className="row mt-5">
        {relatedTask.map((relatedTask) => (
          <div className="col-12 col-md-4 mb-4" key={relatedTask.id}>
            <div className="card">
              <img src={relatedTask.imagen} alt={relatedTask.titulo} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{relatedTask.titulo}</h5>
                <p className="card-text"> Tiempo: {relatedTask.tiempo}</p>
                <p className="card-text"> Responsable: {relatedTask.responsable}</p>

                <Button variant="primary" onClick={() => navigate(`/detalle/${relatedTask.id}`)}> Mas info </Button>

              </div>

            </div>
          </div>

        ))}
      </div>

      

    </div>
    </>
  )
}

export default DetalleTarea