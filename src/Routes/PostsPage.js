import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import SideNavebar from "../components/SideNavbar";
import ChatPage from "../components/ChatPage";

const PostsPage = () => {
    const profileData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className="">
      <div className=" flex ">
        <div className=" w-[24%]">
          <SideNavebar />
        </div>
        <div className="py-12 px-8 w-[76%]">
          <NavBar />
          <hr />
          
          {/* If dataArr is falsy (undefined, null, false, 0, ""), display a loading animation, otherwise display the content. */}
          {!profileData ? (
            <div>
             <Loader/>
            </div>
          ) : (
            <div className="mt-4 p-8">
              <div className="text-center font-bold text-gray-400 text-[5rem] opacity-25 p-40">
              Coming Soon
              </div>
            </div>
          )}
        </div>
      </div>
      <ChatPage/>
    </div>
  );
};

export default PostsPage;
