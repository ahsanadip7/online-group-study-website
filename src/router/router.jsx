import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Authentication/LogIn";
import SignUp from "../Authentication/SignUp";
import CreateAssignment from "../Main/PrivateRouts/CreateAssignment";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     children: [
        {
            path : 'login',
            element: <Login></Login>
        },
        {
            path: 'signUp',
            element: <SignUp></SignUp>
        },
        {
            path: 'createAssignment',
            element: <CreateAssignment></CreateAssignment>
        }
     ]
    },
  ]);

  export default router