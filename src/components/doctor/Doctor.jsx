import { Link } from "react-router";
/* eslint-disable no-unused-vars */
const Doctor = ({ doctor }) => {
  const {
    id,
    fee,
    workplace,
    designation,
    registration_number,
    experience,
    speciality,
    education,
    name,
    available,
    image_url,
  } = doctor;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl my-5">
        <div className="px-10 pt-10">
          <img src={image_url} alt="doctors" className="rounded-xl" />
        </div>
        <div className="flex gap-2 px-10 mt-2">
          <p className="border border-gray-300 text-[#09982F] bg-[#09982f37] rounded-full px-3 ">
            {available}
          </p>
          <p className="border border-gray-300 text-[#176AE5] bg-[#1769e537] rounded-full px-3 ">
            {experience} +
          </p>
        </div>
        <div className="card-body ml-3">
          <h2 className="text-[#0F0F0F] text-xl lg:text-2xl font-bold">
            {name}
          </h2>
          <p className="lg:text-lg text-[#0F0F0F99]">{education}</p>
          <div className="border border-[#0f0f0f24] border-dashed"></div>
          <div className="flex gap-2 text-[#0F0F0FB2]">
            <h1 className="text-4xl">&#174;</h1>
            <h1 className="mt-1 font-semibold">Reg No: {registration_number}</h1>
          </div>
          <Link to={`/doctorDetails/${id}`}>
            <button className="rounded-full w-full px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border font-medium border-[#176AE5] text-[#176AE5]">
              <span className="absolute w-full h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#176AE5] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-[#176AE5] transition duration-300 group-hover:text-white ease font-semibold text-lg">
                View Details
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Doctor;
