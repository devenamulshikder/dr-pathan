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
          <h2 className="text-[#0F0F0F] text-lg lg:text-2xl font-bold">
            {name}
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
