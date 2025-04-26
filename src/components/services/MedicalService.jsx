import img1 from "../../assets/success-doctor.png";
import img2 from "../../assets/success-review.png";
import img3 from "../../assets/success-patients.png";
import img4 from "../../assets/success-staffs.png";
import CountUp from "react-countup";
const MedicalService = () => {
  return (
    <div className="mb-5 lg:mb-20">
      <h1 className="text-2xl lg:text-5xl font-bold text-[#0F0F0F] text-center">
        We Provide Best Medical Services{" "}
      </h1>
      <p className="text-[#0F0F0F] lg:w-[1000px] mx-auto my-2 lg:my-5 text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-20 ">
        <div className="bg-[#fff] p-4 lg:p-6 rounded-2xl flex flex-col sm:items-center lg:items-start ">
          <img src={img1} alt="" />
          <h1 className="text-3xl lg:text-5xl font-bold my-3">
            <CountUp end={199} duration={50}></CountUp>+
          </h1>
          <p className="text-[#0F0F0F99] lg:text-lg">Total Doctors</p>
        </div>
        <div className="bg-[#fff] p-4 lg:p-6 rounded-2xl flex flex-col sm:items-center lg:items-start ">
          <img src={img2} alt="" />
          <h1 className="text-3xl lg:text-5xl font-bold my-3">
            <CountUp end={467} duration={50}></CountUp>+
          </h1>
          <p className="text-[#0F0F0F99] lg:text-lg">Total Reviews</p>
        </div>
        <div className="bg-[#fff] p-4 lg:p-6 rounded-2xl flex flex-col sm:items-center lg:items-start ">
          <img src={img3} alt="" />
          <h1 className="text-3xl lg:text-5xl font-bold my-3">
            <CountUp end={1900} duration={50}></CountUp>+
          </h1>
          <p className="text-[#0F0F0F99] lg:text-lg">Total Patients</p>
        </div>
        <div className="bg-[#fff] p-4 lg:p-6 rounded-2xl flex flex-col sm:items-center lg:items-start ">
          <img src={img4} alt="" />
          <h1 className="text-3xl lg:text-5xl font-bold my-3">
            <CountUp end={300} duration={50}></CountUp>+
          </h1>
          <p className="text-[#0F0F0F99] lg:text-lg">Total Stuffs</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalService;
