import { useState } from "react";
import Doctor from "../doctor/Doctor";
const Doctors = ({ doctorsData }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedDoctors = showAll ? doctorsData : doctorsData.slice(0, 6);
  return (
    <div className="p-2 my-8 lg:my-16">
      <h1 className="text-2xl lg:text-5xl font-bold text-[#0F0F0F] text-center">
        Our Best Doctors
      </h1>
      <p className="text-[#0F0F0F] lg:w-[1000px] mx-auto my-2 lg:my-5 text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-15">
        {displayedDoctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))}
      </div>

      {!showAll && doctorsData.length > 6 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="px-5 py-2 bg-[#176AE5] text-white rounded-full hover:bg[#176AE5] transition duration-200 text-lg hover:cursor-pointer hover:scale-110"
          >
            View All Doctors
          </button>
        </div>
      )}
    </div>
  );
};
export default Doctors;
