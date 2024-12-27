import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Authentication/LogIn";
import SignUp from "../Authentication/SignUp";
import CreateAssignment from "../Main/PrivateRouts/CreateAssignment";
import Assignments from "../Main/Assignments";
import UpdateAssignment from "../Main/UpdateAssignment";



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
        },
        {
            path:'assignments',
            element:<Assignments></Assignments>,
            loader: () => fetch('http://localhost:5000/assignmentCollection')
        },
       {
        path:'updateAssignment/:id',
        element: <UpdateAssignment></UpdateAssignment>,
        loader: ({params}) => fetch(`http://localhost:5000/assignmentCollection/${params.id}`)
       }
     ]
    },
  ]);

  export default router