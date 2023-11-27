import { Facebook, Instagram } from "react-bootstrap-icons";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between aling-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex aling-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none 1h-1">UTN Trabajo final React</a>
                <span className="mb-3 mb-md-0 text-body-secondary">&copy; Sandra Daniela Gomez Heredia </span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-body-secondary" href="#"><Facebook /></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><Instagram /></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><FaXTwitter /></a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer