import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIN from "../pages/SignIN/SignIN";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "../routes/PrivateRoutes";
import ApplyJob from "../pages/ApplyJob/ApplyJob";
import MyApplications from "../pages/MyApplications/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails,
      },
      {
        path:'/jobApply/:id',
        element: <PrivateRoutes>
          <ApplyJob></ApplyJob>
        </PrivateRoutes>
      },
      {
        path: "/myApplications",
        element: <PrivateRoutes>
          <MyApplications></MyApplications>
        </PrivateRoutes>
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: '/signIn',
        Component: SignIN,
      }
    ],
  },
]);

export default router;
