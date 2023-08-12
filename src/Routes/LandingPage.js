import React from "react";
import { Link } from "react-router-dom";
import homePageImage from "../assets/homeImage.png";
import useUserData from "../utils/useUserData";
import Loader from "../components/Loader"

const LandingPage = () => {
  const { isLoading, userData } = useUserData(); // Destructure isLoading and userData
  localStorage.setItem("users", JSON.stringify(userData));
  return (
    <div
      style={{ backgroundImage: `url(${homePageImage})` }}
      className="bg-center bg-cover bg-no-repeat pt-[130px] pb-[300px] "
    >
      <div className="w-[534px] rounded-[20px] border-transparent border-[1px] m-auto shadow-xl">
        <div className="h-[97px] rounded-t-[23px] bg-gray-100">
          <h1 className="text-center text-lg font-bold tracking-wide p-8 text-neutral-600">
            Select an account
          </h1>
        </div>
        {isLoading ? (
         <Loader/>
        ) : (
          <div>
            {/* If user is logged in show the dashboard page */}

            <div className="bg-white rounded-b-[18px] h-[405px] pr-[8px] pt-[10px] ">
              <ul className="overflow-auto h-[24rem] custom-scrollbar ">
                {userData.length > 0 &&
                  userData.map((user) => (
                    <li
                      key={user.id}
                      className="mx-2 list-none block px-[25px] h-[50px] py-[12px]  "
                    >
                      <Link
                        to={`/user/${user.id}`}
                        className="bg-gray-100 border-b-2 border-slate-200"
                      >
                        <div className="flex items-center pb-[10px] bg-white border-b-[1px] border-slate-200">
                          <img
                            className="w-[28px] h-[28px] rounded-full mr-2"
                            src={user.profilepicture}
                            alt={user.username}
                          />
                          <div className=" text-neutral-600 hover:font-boldfont-medium tracking-wide">
                            {user.name}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
