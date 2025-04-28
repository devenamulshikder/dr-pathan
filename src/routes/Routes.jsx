import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import DoctorDetails from "../components/doctorDetails/DoctorDetails";
import MyBookings from "../pages/myBookings/MyBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/doctors.json"),
        Component: Home,
      },
      {
        path: "/doctorDetails/:id",
        loader: () => fetch("/doctors.json"),
        Component: DoctorDetails,
      },
      {
        path: "/myBooking",
        loader: () => fetch("/doctors.json"),
        Component: MyBookings,
      },
    ],
  },
]);
