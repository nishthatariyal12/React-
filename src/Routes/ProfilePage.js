import React from "react";
import { Link, useParams } from "react-router-dom";
import useProfileData from "../utils/useProfileData";
import Loader from "../components/Loader.js";
import NavBar from "../components/NavBar";
import SideNavebar from "../components/SideNavbar";
import mapImage from "../assets/mapImage.png";
import ChatPage from "../components/ChatPage";
const ProfilePage = () => {
  const { userId } = useParams();
  const { isLoading, userData } = useProfileData(userId);
  localStorage.setItem("userData", JSON.stringify(userData));
  const userProfile = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex">
          <SideNavebar />
          {userData && (
            <div className="py-12 px-8 w-[76%]">
              <NavBar />
              <hr />
              <div className="w-auto flex flex-warp justify-between mt-4 p-8">
                <div className="p-4 w-[31%] m-1">
                  <img
                    src={userData.profilepicture}
                    className="w-[188px] h-[188px] rounded-full ml-[24px]"
                  />
                  <p className=" text-neutral-600 font-semibold text-lg pt-2 text-center">
                    {userData.name}
                  </p>
                  <div className="grid grid-cols-2 gap-x-6 leading-normal pb-4">
                    <div>
                      <p className="text-gray-500 font-medium text-end whitespace-nowrap text-lg">
                        Username :
                      </p>
                      <p className="text-gray-500 font-medium text-end whitespace-nowrap text-lg">
                        e-mail :
                      </p>
                      <p className="text-gray-500 font-medium text-end whitespace-nowrap text-lg">
                        Phone :
                      </p>
                      <p className="text-gray-500 font-medium text-end whitespace-nowrap text-lg">
                        Website :
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold text-lg">
                        {userData?.username}
                      </p>
                      <p className="text-gray-700 font-semibold text-lg">
                        {userData?.email}
                      </p>
                      <p className="text-gray-700 font-semibold text-lg">
                        {userData?.phone}
                      </p>
                      <p className="text-gray-700 font-semibold text-lg">
                        {userData?.website}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <p className=" text-gray-500 font-semibold text-lg pt-2 text-center ">
                    Company
                  </p>
                  <div className="grid grid-cols-2 gap-x-6 leading-normal pb-4">
                    <div>
                      <p className="text-gray-500 font-medium text-end whitespace-nowrap text-lg">
                        Name :
                      </p>
                      <p className="text-gray-500 font-medium text-end whitespace-nowrap text-lg">
                        catchphrase :
                      </p>
                      <p className="text-gray-500 font-medium text-end whitespace-nowrap text-lg">
                        bs :
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold text-lg">
                        {userData?.company?.name}
                      </p>
                      <p className="text-gray-700 font-semibold text-lg">
                        {userData?.company?.catchPhrase}
                      </p>
                      <p className="text-gray-700 font-semibold text-lg">
                        {userData?.company?.bs}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="border-r border-gray-300 h-[40em] mx-4"/>

                <div className=" w-[50%] p-4">
             
                  <div className="leading-8 w-[65%]">
                    <p className=" text-neutral-600 font-semibold text-lg pt-2 text-center">
                      Address
                    </p>
                    <div className="grid grid-cols-2 gap-x-6 leading-normal pb-4">
                      <div>
                        <p className="text-gray-500 font-medium text-end whitespace-nowrap text-lg">
                          Username :
                        </p>
                        <p className="text-gray-500 font-medium text-end whitespace-nowrap text-lg">
                          e-mail :
                        </p>
                        <p className="text-gray-500 font-medium text-end whitespace-nowrap text-lg">
                          Phone :
                        </p>
                        <p className="text-gray-500 font-medium text-end whitespace-nowrap text-lg">
                          Website :
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-700 font-semibold text-lg">
                          {userData?.address?.street}
                        </p>
                        <p className="text-gray-700 font-semibold text-lg">
                          {userData?.address?.suite}
                        </p>
                        <p className="text-gray-700 font-semibold text-lg">
                          {userData?.address?.city}
                        </p>
                        <p className="text-gray-700 font-semibold text-lg">
                          {userData?.address?.zipcode}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <img className="rounded-2xl" src={mapImage} />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div></div>
          </div>
       
      )}
      <ChatPage/>
    </>
    
  );
};

export default ProfilePage;
