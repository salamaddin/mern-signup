import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Contact from "./pages/contact";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import About from "./pages/About";

function App2() {
  return (
  
    <BrowserRouter> 
  
       <Layout>
         
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            
          </Routes>

       </Layout>
     
    </BrowserRouter>
  
  );
}
export default App2;
