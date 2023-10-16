import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { FaN, TbMapX } from "react-icons/fa6"
import { RiAccountCircleLine } from "react-icons/ri"
import { AiOutlineDashboard } from "react-icons/ai"
import { BiSolidBook } from "react-icons/bi"
import { IoCalendarOutline } from "react-icons/io5"
import { BsFillInboxFill } from "react-icons/bs"
import { AiOutlineClockCircle } from "react-icons/ai"
import { AiOutlineVideoCamera } from "react-icons/ai"
import { FiArrowRightCircle } from "react-icons/fi"
import { AiOutlineQuestionCircle } from "react-icons/ai"

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const linksToIconsMap = {
    Account: <RiAccountCircleLine className="fs-1 text" size='30'/>,
    Dashboard: <AiOutlineDashboard className="fs-1 text" size='30'/>,
    Courses: <BiSolidBook className="fs-1 text" size='30'/>,
    Calendar: <IoCalendarOutline className="fs-1 text" size='30'/>,
    Inbox: <BsFillInboxFill className="fs-1 text" size='30'/>,
    History: <AiOutlineClockCircle className="fs-1 text" size='30'/>,
    Studio: <AiOutlineVideoCamera className="fs-1 text" size='30'/>,
    Commons: <FiArrowRightCircle className="fs-1 text" size='30'/>,
    Help: <AiOutlineQuestionCircle className="fs-1 text" size='30'/>,
  };
  const { pathname } = useLocation();
  return (
    <div className="list-group kanbas-navigation" style={{ width: 95 }}>
        <FaN className="fs-1 text logo" size='60'/>
        {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`list-group-item ${pathname.includes(link) && "active"}`}
            >
                {linksToIconsMap[link]}
                <br/>
                {link}
            </Link>
        ))}
    </div>
  );
}
export default KanbasNavigation;