import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import Loader from "../components/shared/loader/Loader";
const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {navigation.state === "loading" && <Loader />}
      <main className="flex-1 bg-[#EFEFEF]">
        <div className="container mx-auto p-2 lg:p-6">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Root;
