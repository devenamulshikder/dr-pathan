import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
