import { useLoaderData } from "react-router";
import Doctors from "../../components/doctors/Doctors";
import Hero from "../../components/hero/Hero";
import Loader from "../../components/shared/loader/Loader";








const Home = () => {
  const doctorsData = useLoaderData()
  return <div>
  <Hero/>
  <Doctors doctorsData={doctorsData} />
  </div>;
};

export default Home;
