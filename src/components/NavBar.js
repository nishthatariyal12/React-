// Import necessary modules
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserData from "../utils/useUserData";
// Define the Navbar component
const NavBar = () => {

  const navigate = useNavigate();
  const location = useLocation()
  const [open, setOpen] = useState(false);

  // This function is called when the user clicks on their name in the navbar
  const handleOpenNavbar = () => {
    setOpen(!open);
  };

  // Retrieve user data from localStorage
  const userdata = JSON.parse(localStorage.getItem("userData"));
  const users=JSON.parse(localStorage.getItem("users"));

  // This function is called when the user clicks the "Sign out" button
  const handleSignOut = () => {
    // remove data from localStorage
    localStorage.removeItem("userData");
    navigate("/");
  };

 
  return (
    <nav className="bg-white text-gray-600 py-4 flex justify-between items-center">
      {/* Link to home page */}
      <Link to="#" className="text-xl font-semibold">
        {location.pathname === `/profile/${userdata.id}` ? "Profile" : ""}
        {location.pathname === `/profile/posts` ? "Posts" : ""}
        {location.pathname === `/profile/gallery` ? "Gallery" : ""}
        {location.pathname === `/profile/todo` ? "ToDo" : ""}
      </Link>

      <div className="flex items-center">
        {/* User profile picture */}
        <div className="mr-4">
          <img
            src={userdata.profilepicture}
            alt={userdata.username}
            className="rounded-full w-8 h-8"
          />
        </div>

        {/* Display user name and dropdown menu on larger screens */}
        <div className="hidden md:block">
          <div className="relative">
            <button
              onClick={handleOpenNavbar}
              className="flex items-center"
            >
              <span className="mr-2">{userdata.name}</span>
            </button>

            {/* Dropdown menu */}
            {open ? (
              <div
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                }}
                className="absolute top-10 right-0 bg-white rounded-3xl shadow-md p-4 w-[274px] z-10"
              >
                {/* User information */}
                <div className="block">
                  <img
                    src={userdata.profilepicture}
                    className="rounded-full w-16 h-16 m-auto"
                    alt={userdata.username}
                  />
                  <p className="text-medium font-normal text-gray-700 text-center">
                    {userdata.name}
                  </p>
                  <p className="text-gray-400 text-center text-sm font-sm" >{userdata.email}</p>
                </div>
                <hr />

                {/* List of other users */}
                {users?.slice(0, 3).map((user) => (
                  <li key={user.id} className=" mt-4 list-none ">
                    <div className="flex justify-center pb-[5px] bg-white ">
                      <img
                        src={user.profilepicture}
                        alt={user.username}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <div className=" text-gray-700 text-center text-sm font-sm">
                        {user.name}
                      </div>
                    </div>
                    <hr />
                  </li>
                ))}

                {/* Sign out button */}
                <div className="block mt-1 center">
                  <button
                    onClick={handleSignOut}
                    className="bg-red-400 text-white font-semibold py-2 px-4 rounded-[2rem]"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar