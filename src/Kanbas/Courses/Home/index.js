import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BiGlassesAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { TbFileImport } from "react-icons/tb"
import { FiArrowRightCircle } from "react-icons/fi";
import { FaRegLifeRing } from "react-icons/fa6";
import { RiBarChart2Fill } from "react-icons/ri";
import { RiMegaphoneLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { AiFillExclamationCircle } from "react-icons/ai";
import CourseNavigation from "../CourseNavigation";
import ModuleList from "../Modules/ModuleList";
import "./index.css";
import "../Modules/index.css";

function Home() {
    const { courseId } = useParams();
    const URL = "https://kanbas-node-server-app-h46z.onrender.com/api/courses";
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
    // const assignments = db.assignments;
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
              <li class="breadcrumb-item active" aria-current="page">Home</li> 
            </ol>
          </nav>
          <a class="btn mb-1 student-view">
              <BiGlassesAlt className="text me-1"/>
                Student View</a>
        </div>
        <hr className="mt-2 ms-4"/>
        <div className="row mt-4 ms-1">
          <CourseNavigation className="col-3"/>
          <div className="col-8">
            <div className="modules ms-2">
              <div className="row ms-0">
                <a className="btn ms-1 collapse-all">
                  Collapse All</a>
                <a className="btn ms-1 view-progress">
                  View Progress</a>
                <select className="form-select ms-1 dropdown-option">
                  <option selected value="PUBLISH-ALL">
                    Publish All</option></select>
                <a className="btn btn-danger ms-1 add-module">
                  <AiOutlinePlus className="mt-0 me-2"/>
                  Module</a>
                <a className="btn ms-1 vertical-ellipsis ps-1">
                  <HiOutlineEllipsisVertical className="text" size="20"/></a>
              </div>
              <hr/>
              <ModuleList/>
            </div>
          </div>
          <div className="col">
            <a class="btn side-button mb-1">
              <TbFileImport className="text me-1"/>
                Import Existing Content</a>
            <a class="btn side-button mb-1">
              <FiArrowRightCircle className="text me-1"/>
                Import from Commons</a>
            <a class="btn side-button mb-1">
              <FaRegLifeRing className="text me-1"/>
                Choose Home Page</a>
            <a class="btn side-button mb-1">
              <RiBarChart2Fill className="text me-1"/>
                View Course Stream</a>
            <a class="btn side-button mb-1">
              <RiMegaphoneLine className="text me-1"/>
                New Announcement</a>
            <a class="btn side-button mb-1">
              <RiBarChart2Fill className="text me-1"/>
                New Analytics</a>
            <a class="btn side-button mb-1">
              <BsBell className="text me-1"/>
                View Course Notifications</a>
            <h5 className="mt-3">To Do</h5>
            <hr className="mt-0 mb-1"/>
            {/* {assignments
              .filter((assignment) => assignment.course === courseId)
              .map((assignment, index) => (
                <span key={index}>
                  <AiFillExclamationCircle className="text ms-4 todo"/>
                  <a className="ms-2 primary-todo">Grade {assignment.title}</a>
                  <p className="ms-5 secondary-todo">100 points</p>
                </span>
             ))} */}
          </div>
        </div>
      </div>
    );
}
export default Home;