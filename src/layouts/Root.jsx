import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#EFEFEF]">
        <div className="container mx-auto p-2 lg:p-6">
        <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
