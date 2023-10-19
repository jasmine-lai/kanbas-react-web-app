import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import ModuleList from "./ModuleList";
import "./index.css";

function Modules() {
  return (
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
  );
}
export default Modules;