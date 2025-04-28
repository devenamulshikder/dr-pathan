import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getStoredDoctor } from "../../utilities/addToLS";
import Recharts from "../../components/recharts/Recharts";
import toast from "react-hot-toast";
const MyBookings = () => {
  const [doctorAppintment, setDoctorAppintment] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    let storedAppointments = getStoredDoctor();
    let convertedStoredAppointments = storedAppointments.map((storedId) =>
      parseInt(storedId)
    );
    const myAppointments = data.filter((appointment) =>
      convertedStoredAppointments.includes(appointment.id)
    );
    setDoctorAppintment(myAppointments);
  }, [data]);
  const handleRemove = (id) => {
    let storedAppointments = getStoredDoctor();
    let updatedAppointments = storedAppointments.filter(
      (storedId) => storedId !== parseInt(id)
    );
    localStorage.setItem("doctors", JSON.stringify(updatedAppointments));
    setDoctorAppintment((prev) =>
      prev.filter((appointment) => appointment.id !== id)
    );
    toast.error(`Your booked appointment has been canceled`);
  };
  return (
    <div>
      {doctorAppintment.length === 0 ? (
        <div className="bg-[#fff] p-4 lg:p-12 rounded-2xl text-center lg:mt-28">
          <h2 className="text-xl font-bold text-[#0F0F0F] mb-4">
            First Add an Appointment
          </h2>
          <p className="text-lg text-[#0F0F0F99] mb-4">
            You don't have any appointments booked yet. Please visit the doctor
            details page to book your appointment.
          </p>
          <Link to={"/"}>
            <button className="btn">Go to Homepage</button>
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <Recharts doctorAppintment={doctorAppintment} />
          </div>
          <div>
            <h1 className="text-[#141414] text-2xl lg:text-4xl font-bold mb-4 text-center mt-8 lg:mt-18">
              My Today Appointments
            </h1>
            <p className="text-center">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 my-8 lg:my-14">
            {doctorAppintment.map((appointment, idx) => (
              <div key={idx} className="bg-[#fff] p-4 lg:p-12 rounded-2xl">
                <div className="flex justify-between items-center my-2">
                  <div>
                    <h1 className="text-xl font-bold text-[#0F0F0F] mb-2">
                      {appointment.name}
                    </h1>
                    <div className="flex gap-3">
                    <p className="text-lg text-[#0F0F0F99] mb-2 font-medium">
                      {appointment?.education}
                    </p>
                    <p className="text-lg text-[#0F0F0F99] mb-2 font-medium">
                      {appointment?.speciality}
                    </p>
                    </div>
                  </div>
                  <p className="text-lg text-[#0F0F0F99] font-medium">
                    Appointment Fee: {appointment?.fee}$ + Vat
                  </p>
                </div>
                <div className="border border-[#0F0F0F33] border-dashed"></div>
                <button
                  onClick={() => handleRemove(appointment.id)}
                  className="border border-red-600 w-full rounded-full p-3 mt-5 lg:mt-8 text-lg text-[#FF0000] font-semibold hover:bg-red-100 duration-300 hover:scale-105 cursor-pointer"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
