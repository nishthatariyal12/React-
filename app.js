import React, { Children ,lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import LandingPage from "./src/Routes/LandingPage";
import ProfilePage from "./src/Routes/ProfilePage";
import PostsPage from "./src/Routes/PostsPage";
import ToDoPage from "./src/Routes/ToDoPage";
import GalleryPage from "./src/Routes/GalleryPage";
const AppLayout = () => {

  return (
    <div>
     <LandingPage/>
    </div>
  );
};

const appProvider = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<h1>error</h1>
  },
  {
    path:"/user/:userId",
    element:<ProfilePage/>
  },
  {
    path:"/user/:userId/posts",
    element:<PostsPage/>
  },
  {
    path:"/user/:userId/todo",
    element:<ToDoPage/>
  
  },
  {
    path:"/user/:userId/gallery",
    element:<GalleryPage/>
  
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appProvider} />);
