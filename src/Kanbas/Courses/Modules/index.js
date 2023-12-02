import db from "../../../Kanbas/Database";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BiGlassesAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import CourseNavigation from "../CourseNavigation";
import ModuleList from "./ModuleList";
import "./index.css";

function Modules({ courses }) {
  const { courseId } = useParams();
  const BASE_API = process.env.REACT_APP_BASE;
  const URL = `${BASE_API}/api/courses`;
  const [course, setCourse] = useState({
    name: "Name",            number: "Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  return (
    <div className="courses">
      <div className="row mt-3 ms-0">
        <HiOutlineBars3 className="text icon ms-3 col-1" size="35"/>
        <nav aria-label="breadcrumb" className="mb-0 col-9">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="breadcrumb-link">
                {course.number}.{course._id}
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Modules</li> 
          </ol>
        </nav>
        <a class="btn mb-1 student-view">
              <BiGlassesAlt className="text me-1"/>
                Student View</a>
      </div>
      <hr className="mt-2 ms-4"/>
      <div className="row mt-4 ms-1">
        <CourseNavigation className="col-3"/>
        <div className="col">
          <div className="main-content">
            <div className="row ms-1">
              <a className="btn ms-1 collapse-all">
                Collapse All</a>
              <a className="btn ms-1 view-progress">
                View Progress</a>
              <select className="form-select ms-1 dropdown-option">
                <option selected value="PUBLISH-ALL">
                  Publish All</option></select>
              <a className="btn btn-danger ms-1 add-module">
                <AiOutlinePlus className="text mt-0 me-2"/>
                  Module</a>
              <a className="btn ms-1 vertical-ellipsis ps-1">
                <HiOutlineEllipsisVertical className="text" size="20"/></a>
            </div>
            <hr/>
            <ModuleList/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modules;