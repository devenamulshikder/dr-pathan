import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
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
      <div>
        <Recharts doctorAppintment={doctorAppintment} />
      </div>
      <div>
        <div className="">
          <h1 className="text-[#141414] text-2xl lg:text-4xl font-bold mb-4 text-center mt-8 lg:mt-18">
            My Today Appointments
          </h1>
          <p className="text-center">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>

        {/* my booking appintment */}
        <div className="grid grid-cols-1 gap-5 my-8 lg:my-14">
          {doctorAppintment.map((appintment, idx) => (
            <div key={idx} className="bg-[#fff] p-4 lg:p-12 rounded-2xl">
              <div className="flex justify-between items-center my-2">
                <div>
                  <h1 className="text-xl font-bold text-[#0F0F0F] mb-2">
                    {appintment.name}
                  </h1>
                  <p className="text-lg text-[#0F0F0F99] mb-2 font-medium">
                    {appintment?.education}
                  </p>
                </div>
                <p className="text-lg text-[#0F0F0F99] font-medium">
                  Appintment Fee: {appintment?.fee}$ + Vat
                </p>
              </div>
              <div className="border border-[#0F0F0F33] border-dashed"></div>
              <button onClick={()=>handleRemove(appintment.id)} className="border border-red-600 w-full rounded-full p-3 mt-5 lg:mt-8 text-lg text-[#FF0000] font-semibold hover:bg-red-100 duration-300 hover:scale-105 cursor-pointer">
                Cancel Appintment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
