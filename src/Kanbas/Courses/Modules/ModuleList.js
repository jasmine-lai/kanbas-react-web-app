import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { VscGripper } from "react-icons/vsc";
import { BiCaretDown } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import { addModule, setModule, setModules } from "./modulesReducer";
import { updateModule, deleteModule, createModule, findModulesForCourse } from "./client.js";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await updateModule(module);
    dispatch(updateModule(module));
  };
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div className="list-group main-content mt-4">
      <li className="list-group-item">
        <div>
          <h5>Edit Module List</h5>
          <input value={module.name}
              onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
              placeholder="Module Name"
              className="me-2 col edit-module-list"
          />
          <button onClick={handleAddModule} className="btn btn-success ms-1">Add</button>
          <button onClick={handleUpdateModule} className="btn btn-primary ms-1">Update</button>
          <div className="col mt-2">
            <textarea value={module.description}
                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                placeholder="Module Description"
                className="edit-module-list"
            />
          </div>
        </div>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div className="mt-4">
            <li className="list-group-item module list-group-item-header">
              <VscGripper className="text me-1" size="20"/>
              <BiCaretDown className="text me-2" size="10"/>
              {module.name} {module.description}
              <HiOutlineEllipsisVertical className="text ms-1 me-0 float-right" size="25"/>
              <AiOutlinePlus className="text mt-1 ms-2 float-right" size="15"/>
              <BiCaretDown className="text mt-1 float-right" size="15"/>
              <AiFillCheckCircle className="text published mt-1 float-right" size="20"/>
              <button onClick={handleDeleteModule(module._id)} className="btn btn-danger mb-2 me-2 p-1 font-small float-right">
                Delete
              </button>
              <button onClick={() => dispatch(setModule(module))} className="btn btn-light mb-2 me-2 p-1 font-small float-right">
                Edit
              </button>
            </li>
            {module.lessons &&
              module.lessons.map((lesson, index) => (
              <li key={index} className="list-group-item border-left-active">
                <VscGripper className="text me-2" size="20"/>
                {lesson.name}
                <HiOutlineEllipsisVertical className="text ms-1 me-0 float-right" size="25"/>
                <AiFillCheckCircle className="text published float-right" size="20"/>
              </li>
            ))}
          </div>
        ))}
    </div>
  );
}
export default ModuleList;