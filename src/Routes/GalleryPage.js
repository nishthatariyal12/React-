import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import SideNavbar from "../components/SideNavbar";
import ChatPage from "../components/ChatPage";

const GalleryPage = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setProfileData(userData);
  }, []);

  const renderContent = () => {
    if (!profileData) {
      return <Loader />;
    } else {
      return (
        <div className="mt-4 p-8">
          <div className="text-center font-bold text-gray-400 text-[5rem] opacity-25 mt-[8rem]">
            Coming Soon
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex">
      <div className="w-[24%]">
        <SideNavbar />
      </div>
      <div className="py-12 px-8 w-[76%]">
        <NavBar />
        <hr />
        {renderContent()}
      </div>
      <ChatPage />
    </div>
  );
};

export default GalleryPage;
