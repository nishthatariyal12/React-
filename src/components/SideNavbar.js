import { Link,useLocation } from "react-router-dom"
import { RiArrowDropRightLine } from "react-icons/ri";
const SideNavebar=()=>{
    const activeLink = useLocation();
    const profileData = JSON.parse(localStorage.getItem("userData"));
    const arrowHandler = (path, color, marginTop) => {
        // If the current path matches the given path, render the indicator
        return activeLink.pathname === path && (
          <div style={{ marginTop }} className="indicator">
            {/* Set the background color of the before and after pseudo-elements to the given color */}
            <style>
              {`
                .indicator::before {
                  background-color: ${color};
                }
                .indicator::after {
                  background-color: ${color};
                }
              `}
            </style>
            {/* Render the arrow symbol inside the indicator */}
            <RiArrowDropRightLine className="text-[2.1rem] text-gray-400" />
          </div>
        );
      };
    return(
        <div className="p-10">
             <div className='w-[238px] h-[750px] rounded-3xl bg-gradient-to-b from-indigo-700 to-purple-500 px-[40px] py-[200px]'>
          <ul className="text-left py-30 leading-[4rem] font-semibold">
            <li>
              <Link to={`/user/${profileData?.id}`} className={`${activeLink.pathname == `/user/${profileData?.id}`
                  ? "text-white"
                  : "text-gray-400"
                  }`}>
              <div>Profile</div>
              </Link>
              <hr className="border-t-[1px] border-gray-300" />
            </li>
            <li>
            <Link to={`/user/${profileData?.id}/posts`} className={`${activeLink.pathname === `/user/${profileData?.id}/posts`
                  ? "text-white"
                  : "text-gray-400"
                  }`}>
              <div>Posts</div>
              </Link>
              <hr className="border-t-[1px] border-gray-300" />
            </li>
            <li>
              
              <hr className="border-t-[1px] border-gray-300" />
            </li>
            <li>
            <Link to={`/user/${profileData?.id}/gallery`} className={`${activeLink.pathname === `/user/${profileData?.id}/gallery`
                  ? "text-white"
                  : "text-gray-400"
                  }`}>
              <div>Gallery</div>
              </Link>
              <hr className="border-t-[1px] border-gray-300" />
            </li>

            <li>
            <Link to={`/user/${profileData?.id}/todo`} className={`${activeLink.pathname === `/user/${profileData?.id}/todo`
                  ? "text-white"
                  : "text-gray-400"
                  }`}>
              <div>ToDo</div>
              </Link>
              <hr className="border-t-[1px] border-gray-300" />
            </li>
            {arrowHandler(`/user/${profileData.id}/posts`, "transparent", "-11rem")}
            {arrowHandler(`/user/${profileData.id}/todo`, "transparent", "-3rem")}
            {arrowHandler(`/user/${profileData.id}`, "transparent", "-15rem")}
            {arrowHandler(`/user/${profileData.id}/gallery`, "transparent", "-7rem")}
          </ul>
         </div>
            </div>
    )
}
export default SideNavebar