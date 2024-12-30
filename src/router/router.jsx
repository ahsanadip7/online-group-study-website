import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Authentication/LogIn";
import SignUp from "../Authentication/SignUp";
import CreateAssignment from "../Main/PrivateRouts/CreateAssignment";
import Assignments from "../Main/Assignments";
import UpdateAssignment from "../Main/UpdateAssignment";
import Home from "../Main/Home";
import ViewDetails from "../Main/ViewDetails";
import MySubmitted from "../Main/PrivateRouts/MySubmitted";
import PendingAssignment from "../Main/PrivateRouts/PendingAssignment";
import Mark from "../Main/PrivateRouts/Mark";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
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
                path: 'assignments',
                element: <Assignments></Assignments>,
                loader: () => fetch('http://localhost:5000/assignmentCollection')
            },
            {
                path: 'updateAssignment/:id',
                element: <UpdateAssignment></UpdateAssignment>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignmentCollection/${params.id}`)
            },
            {
                path:'viewDetails/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignmentCollection/${params.id}`)
            },
            {
                path:'mySubmissions',
                element: <MySubmitted></MySubmitted>,
                loader: () => fetch('http://localhost:5000/assignmentCollection')
            },
            {
                path:'pendingAssignment',
                element: <PendingAssignment></PendingAssignment>,
                loader: () => fetch('http://localhost:5000/submissions')
            },
            {
                path:'mark/:id',
                element: <Mark></Mark>,
                loader: ({ params }) => fetch(`http://localhost:5000/submissions/${params.id}`)

            }
        ]
    },
]);

export default router