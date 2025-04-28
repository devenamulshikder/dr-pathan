import { OctagonAlert } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useParams, useNavigate } from "react-router";
const DoctorDetails = () => {
  const { id: urlId } = useParams();
  const doctorsData = useLoaderData();
  const doctorsId = Number(urlId);
  const singleDoctor = doctorsData.find((doctor) => doctor.id === doctorsId);
  const allDoctorId = doctorsData.map((doc) => doc.id);
  const status = allDoctorId.includes(doctorsId);
  let fee,
    workplace,
    id,
    registration_number,
    education,
    name,
    available,
    availability,
    image_url;
  if (status) {
    ({
      fee,
      workplace,
      id,
      registration_number,
      education,
      name,
      available,
      availability,
      image_url,
    } = singleDoctor);
  }

  const navigate = useNavigate();
  const getStoredDoctor = () => {
    const storedDoctorStr = localStorage.getItem("doctors");
    if (storedDoctorStr) {
      return JSON.parse(storedDoctorStr);
    } else {
      return [];
    }
  };
  const handleAddToLS = (id) => {
    const storedDoctorData = getStoredDoctor();
    if (storedDoctorData.includes(id)) {
      toast.error(`Already Booked ${name} Appointment!`);
    } else {
      storedDoctorData.push(id);
      const data = JSON.stringify(storedDoctorData);
      localStorage.setItem("doctors", data);
      toast.success(`You Booked Successfully ${name} Appointment!`);
      navigate("/myBooking");
    }
  };

  return (
    <div>
      {status ? (
        <div>
          <div className="bg-[#fff] text-center p-5 lg:p-20 rounded-2xl my-4 lg:my-8">
            <h1 className="text-[#141414] text-2xl lg:text-4xl font-bold mb-4">
              Doctor’s Profile Details
            </h1>
            <p className="text-[#141414B2]">
              Doctors Day is a special occasion to honor and appreciate the
              tireless dedication, compassion, and expertise of doctors who work
              relentlessly to improve our health and well-being.
            </p>
          </div>
          <div className="bg-[#fff] rounded-2xl p-4 lg:p-10">
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
                <p className="text-[#0F0F0F99]">
                  Work at <br />
                  <small className="text-lg font-bold text-[#0F0F0F]">
                    {workplace}
                  </small>
                </p>
                <div className="border border-dashed border-[#0f0f0f58] my-2 w-full lg:w-2xl"></div>

                <div className="flex gap-2 text-[#0F0F0FB2]">
                  <h1 className="text-4xl">&#174;</h1>
                  <h1 className="mt-0.5 font-semibold">
                    Reg No: {registration_number}
                  </h1>
                </div>

                <div className="border border-dashed border-[#0f0f0f58] mb-2 w-full lg:w-2xl"></div>

                <div>
                  <h1 className="text-[#0F0F0] font-semibold">
                    Availability :
                    <span className="bg-[#FFA0001A] text-[#FFA000] py-1 border px-2 rounded-full">
                      {availability[0]}
                    </span>
                    <span className="bg-[#FFA0001A] text-[#FFA000] py-1 border px-2 rounded-full mx-2">
                      {availability[1]}
                    </span>
                    <span
                      className={
                        availability[2]
                          ? `bg-[#FFA0001A] text-[#FFA000] py-1 border px-2 rounded-full`
                          : ""
                      }
                    >
                      {availability[2]}
                    </span>
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#0F0F0] font-semibold my-2">
                    Consultation Fee:{" "}
                    <span className="text-[#176AE5]">$ {fee}</span>{" "}
                    <span className="text-[#0f0f0f58]">(incl. Vat)</span>{" "}
                    <span className="text-[#176AE5]">Per consultation</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] p-5 lg:p-20 rounded-2xl my-4 lg:my-8">
            <h1 className="text-[#141414] text-center text-2xl lg:text-4xl font-bold mb-4">
              Book an Appointment
            </h1>
            <div className="border border-dashed border-[#0f0f0f58] my-2 w-full"></div>

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
                  Doctor Not Available Today
                </p>
              )}
            </div>

            <div className="divider"></div>

            <div className="flex items-center gap-2 bg-[#FFA0001A] px-4 py-1 rounded-full text-[#FFA000]">
              <OctagonAlert size={20} />
              <p>
                Due to high patient volume, we are currently accepting
                appointments for today only.
              </p>
            </div>

            <div>
              {available === "Available" ? (
                <button
                  onClick={() => handleAddToLS(id)}
                  className="px-5 py-2 w-full mt-5 lg:mt-12 bg-[#176AE5] text-white rounded-full hover:bg-[#176AE5] transition duration-300 text-lg hover:cursor-pointer hover:scale-105"
                >
                  Book Appointment Now
                </button>
              ) : (
                <button
                  disabled
                  className="px-5 py-2 w-full mt-5 lg:mt-12 bg-gray-400 text-white rounded-full transition duration-300 text-lg cursor-not-allowed"
                >
                  Book Appointment Now
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold my-4 lg:mt-20">
            No Doctors Found!!
          </h1>
          <p className="text-lg">No Doctors found with this id no -</p>
          <p className="text-blue-600 font-semibold text-lg my-2">{urlId}</p>
          <Link to={"/"}>
            <button className="btn">Go Back Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DoctorDetails;
