import { useLoaderData } from "react-router";
import Doctors from "../../components/doctors/Doctors";
import Hero from "../../components/hero/Hero";
import Loader from "../../components/shared/loader/Loader";
import MedicalService from "../../components/services/MedicalService";

const Home = () => {
  const doctorsData = useLoaderData();
  return (
    <div>
      <Hero />
      <Doctors doctorsData={doctorsData} />
      <MedicalService />
    </div>
  );
};

export default Home;
