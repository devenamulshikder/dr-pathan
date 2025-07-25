import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import DoctorDetails from "../components/doctorDetails/DoctorDetails";
import MyBookings from "../pages/myBookings/MyBookings";
import Blogs from "../pages/blogs/Blogs";
import Loader from "../components/shared/loader/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/doctors.json"),
        HydrateFallback: Loader,
        Component: Home,
      },
      {
        path: "/doctorDetails/:id",
        loader: () => fetch("/doctors.json"),
        HydrateFallback: Loader,
        Component: DoctorDetails,
      },
      {
        path: "/myBooking",
        loader: () => fetch("/doctors.json"),
        HydrateFallback: Loader,
        Component: MyBookings,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
    ],
  },
]);
