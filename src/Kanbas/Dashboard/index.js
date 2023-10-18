import { Link } from "react-router-dom";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { TfiWrite } from "react-icons/tfi";
import db from "../Database";
import "./index.css"
import "../index.css"

function Dashboard() {
  const courses = db.courses;
  const colorMap = {
    19753: "color-turquoise", 
    16840: "color-indigo", 
    12075: "color-green",
  };
  return (
    <div className="dashboard">
      <h1 className="mt-3 ms-4 mb-0 font-slim">Dashboard</h1>
      <hr className="mt-2 ms-4"/>
      <h2 className="ms-5 font-slim">Published Courses (3)</h2>
      <hr className="ms-5"/>
      {/* TODO: fix card alignment */}
      <div className="list-group courses">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item p-0">
            <div className="card">
              <div className={`card-top bg-${colorMap[`${course._id}`]}`}>
                <HiOutlineEllipsisVertical className="fs-1 text mt-3 me-2 color-white float-right"/>
              </div>
              <div className="card-body">
                  <p className={`primary-text mb-1 ${colorMap[`${course._id}`]}`}>{course.name}</p>
                  <p class="secondary-text mt-0">
                    {course.number}.{course._id}
                  </p>
                  <TfiWrite className="text" size="20"/>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;