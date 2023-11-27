import { Carousel } from "react-bootstrap"

const CarruselHOME = () => {
  return (
    <>
     <Carousel>
      <Carousel.Item>
        <img
        className="d block w-100" 
        style={{maxHeight: "500px", objectFit: "cover"}}
        src="https://i.pinimg.com/originals/f5/36/01/f53601133f236d1cb167ac19f05a3d60.gif" alt="slide3" />
        <Carousel.Caption>
          <h3>Tareas dentro del ambito Profesional</h3>
          <p> Agenda tus actividades, reuniones y compromisos </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
        className="d block w-100" 
        style={{maxHeight: "500px", objectFit: "cover"}}
        src="https://i.pinimg.com/564x/8d/37/99/8d3799e24be55bdfddb7a4fd8e4100d0.jpg" alt="slide3" />
        <Carousel.Caption>
          <h3>Tareas en el ambito estudiantil</h3>
          <p>Agenda tus parciales, fechas de practicos y actividades </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
        className="d block w-100" 
        style={{maxHeight: "500px", objectFit: "cover"}}
        src="https://i.pinimg.com/564x/4b/4d/4d/4b4d4df11cf51597dd1e5472b95f140a.jpg" alt="slide3" />
        <Carousel.Caption>
          <h3> Tareas diarias </h3>
          <p> Agenda tu rutina diaria incluyendo todas las tareas que quieras</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </>
  )
}

export default CarruselHOME