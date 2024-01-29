import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Interface from "./components/Interface";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import DoctorPage from './components/DoctorPage';

import AdminLogin from "./components/AdminLogin";
import Psignup from "./components/Psignup";
import Plogin from "./components/Plogin";
import DoctorList from './components/DoctorList';
import Interfac from "./components/Interfac";
import Myappoinments from "./components/Myappoinments";
import PatientView from "./components/PatientView";


function App() {
  return (
    <div>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Interface/>}></Route>
      
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/patient login' element={<Plogin/>}></Route>
      
      <Route path='/register' element={<SignUp />}></Route>
      <Route path='/patient register' element={<Psignup />}></Route>
      <Route path='/admin' element={<AdminLogin />}></Route>
      <Route path='/doctorview' element={<DoctorList />}></Route>
      <Route path="/doctor/:userId" element={<DoctorPage />} />
      <Route path='/admindashboard' element={<Interfac/>}></Route>
      <Route path='/Myapp' element={<Myappoinments/>}></Route>
      <Route path='/pview' element={<PatientView/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
