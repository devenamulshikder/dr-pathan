import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import Loader from "../components/shared/loader/Loader";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />
      {navigation.state === "loading" && <Loader />}
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
