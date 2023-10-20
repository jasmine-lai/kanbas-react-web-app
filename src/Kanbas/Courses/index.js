import db from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import "./index.css"
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />}/>
            <Route path="Home" element={<Home/>}/>
            <Route path="Modules" element={<Modules/>}/>
            <Route path="Assignments" element={<Assignments/>}/>
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
          </Routes>
    </div>
  );
}
export default Courses;