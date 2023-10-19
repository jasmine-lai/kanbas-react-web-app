import db from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import "./index.css"
import Home from "./Home";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />}/>
            <Route path="Home" element={<Home/>}/>
            <Route path="Modules" element={<Modules/>}/>
            <Route path="Assignments" element={<h1>Assignments</h1>}/>
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>}/>
          </Routes>
    </div>
  );
}
export default Courses;