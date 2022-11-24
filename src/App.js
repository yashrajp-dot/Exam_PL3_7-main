import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import StudentLogin from './components/StudentLoginSignup/StudentLogin'
import StudentSignup from './components/StudentLoginSignup/StudentSignup'
import Profile from './components/StudentProfile/Profile'
import Result from "./components/StudentProfile/Result";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/studentsignup" element={<StudentSignup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/result" element={<Result />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/searchlogin" element={<Searchlogin />} />
        <Route path="/news" element={<News />} />
        <Route path="/help" element={<Help />} />
        <Route path="/verifyotp" element={<Verifyotp />} />
        <Route path="/resendotp" element={<ResendOtp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} /> */}

        
        
      </Routes>
    </Router>
  );
}

export default App;
