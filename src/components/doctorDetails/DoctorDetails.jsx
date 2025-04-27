/* eslint-disable no-unused-vars */
import { OctagonAlert } from "lucide-react";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctorsData = useLoaderData();
  const doctorsId = parseInt(id);
  const singleDoctor = doctorsData.find((doctor) => doctor.id === doctorsId);
  const {
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
  } = singleDoctor;
  return (
    <div>
      <div className="bg-[#fff] text-center p-5 lg:p-20 rounded-2xl my-4 lg:my-8">
        <h1 className="text-[#141414] text-2xl lg:text-4xl font-bold mb-4">
          Doctor’s Profile Details
        </h1>
        <p className="text-[#141414B2]">
          Doctors Day is a special occasion to honor and appreciate the tireless
          dedication, compassion, and expertise of doctors who work relentlessly
          to improve our health and well-being. Whether you're looking to
          express your gratitude or inspire a healthcare professional,
          thoughtful quotes and messages can convey your heartfelt appreciation.
        </p>
      </div>
      <div className=" bg-[#fff] rounded-2xl p-4 lg:p-10">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
          <div>
            <img
              src={image_url}
              className="w-full lg:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold">{name}</h1>
            <p className="py-2 text-[#0F0F0F99]">{education}</p>
            <p className=" text-[#0F0F0F99]">
              Work at <br />{" "}
              <small className="text-lg font-bold text-[#0F0F0F]">
                {workplace}
              </small>
            </p>
            <div className="border border-dashed border-[#0f0f0f58] my-2  w-full lg:w-2xl"></div>

            <div className="flex gap-2 text-[#0F0F0FB2]">
              <h1 className="text-4xl">&#174;</h1>
              <h1 className="mt-0.5 font-semibold">
                Reg No: {registration_number}
              </h1>
            </div>
            <div className="border border-dashed border-[#0f0f0f58] mb-2  w-full lg:w-2xl"></div>
            <div>
              <h1 className="text-[#0F0F0] font-semibold">Availability </h1>
            </div>
            <div>
              <h1 className="text-[#0F0F0] font-semibold my-2">
                Consultation Fee:{" "}
                <span className="text-[#176AE5] ">$ {fee}</span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] p-5 lg:p-20 rounded-2xl my-4 lg:my-8">
        <h1 className="text-[#141414] text-center text-2xl lg:text-4xl font-bold mb-4">
          Book an Appointment
        </h1>
        <div className="border border-dashed border-[#0f0f0f58] my-2  w-full "></div>
        <div className="flex items-center justify-between">
          <h1 className="text-[#0F0F0] font-semibold text-lg lg:text-xl pt-3">
            Availability
          </h1>
          {available === "Available" ? (
            <p className="border border-gray-300 text-[#09982F] bg-[#09982f37] rounded-full px-3 mt-4">
              Doctor Available Today
            </p>
          ) : (
            <p className="border border-gray-300 text-[#981e09] bg-[#981a0937] rounded-full px-3 mt-4">
              Doctor No-Available Today
            </p>
          )}
        </div>
        <div className="divider"></div>
        <div className="flex items-center gap-2  bg-[#FFA0001A] px-4 py-1 rounded-full text-[#FFA000]">
          <p>
            <OctagonAlert size={20} />
          </p>
          <p>
            {" "}
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
        </div>
        <div>
          {available === "Available" ? (
            <button className="px-5 py-2 w-full mt-5 lg:mt-12 bg-[#176AE5] text-white rounded-full hover:bg[#176AE5] transition duration-300 text-lg hover:cursor-pointer hover:scale-105">
              Book Appointment Now
            </button>
          ) : (
            <button className="px-5 py-2 w-full mt-5 lg:mt-12 bg-[#1769e5] text-white rounded-full hover:bg[#176AE5] transition duration-300 text-lg hover:cursor-not-allowed hover:scale-105">
              Book Appointment Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
