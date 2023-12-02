import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "../Users/signin";
import Account from "../Users/account";
import UserTable from "../Users/table";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const BASE_API = process.env.REACT_APP_BASE;
  const URL = `${BASE_API}/api/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);
  const [course, setCourse] = useState({
    name: "Name",            number: "Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };
  const deleteCourse = async () => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
    setCourse({ name: "" });
  };
  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation/>
        <div>
          <Routes>
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/"                       element={<Navigate to="Dashboard"/>}/>
            <Route path="/signin" element={<Signin />} />
            <Route path="/account" element={<Account />} />
            <Route path="Dashboard"               element={<Dashboard 
                                                              courses={courses}
                                                              course={course}
                                                              setCourse={setCourse}
                                                              addCourse={addCourse}
                                                              deleteCourse={deleteCourse}
                                                              updateCourse={updateCourse}
                                                            />}/>
            <Route path="Courses/:courseId/*"     element={<Courses courses={courses}/>}/>
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;