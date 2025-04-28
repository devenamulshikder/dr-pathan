import { useLoaderData } from "react-router";


const MyBookings = () => {




  const data = useLoaderData()


   
    
  return (
    <div>
      {/* chart */}
      <div>
        <h1>chart</h1>
      </div>

      <div>
        <div className="">
          <h1 className="text-[#141414] text-2xl lg:text-4xl font-bold mb-4 text-center">
            My Today Appointments
          </h1>
          <p className="text-center">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
          
        </div>


      </div>
    </div>
  );
};

export default MyBookings;
