import React from "react";
import { useParams } from "react-router-dom";
import { VscGripper } from "react-icons/vsc";
import { BiCaretDown } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import db from "../../Database";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div key={index} className="list-group main-content mt-4">
            <li className="list-group-item list-group-item-header">
              <VscGripper className="text me-1" size="20"/>
              <BiCaretDown className="text me-2" size="10"/>
              {module.name} {module.description}
              <HiOutlineEllipsisVertical className="text ms-1 me-0 float-right" size="25"/>
              <AiOutlinePlus className="text mt-1 ms-2 float-right" size="15"/>
              <BiCaretDown className="text mt-1 float-right" size="15"/>
              <AiFillCheckCircle className="text published float-right" size="20"/>
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