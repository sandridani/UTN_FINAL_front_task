
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import AppRoutes from "./routes/AppRoutes";
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
    <ToastContainer/>
    <Router>
      <NavBar />
        <AppRoutes />
      <Footer />

    </Router>
    
    </>
  )
}

export default App