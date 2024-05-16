
import "./App.css";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
      <ToastContainer/>
      <Header/>
      <Form />
      <CourseDetails/>
    </>
  );
}

export default App;
