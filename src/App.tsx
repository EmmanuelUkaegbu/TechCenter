import { Route, Routes } from "react-router-dom";

import Home from "../src/Pages/Home";
import Student from "./Pages/Student";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import RegisterCourse from "./Pages/RegisterCourses";
import Admin from "./Pages/Admin";
import AdminRoute from "./Component/AdminRoute";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<AdminRoute />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/registercourse" element={<RegisterCourse />} />
      </Routes>
    </div>
  );
}

export default App;
