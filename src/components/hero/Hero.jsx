import banner from "../../assets/banner-img-1.png";
const Hero = () => {
  return (
    <div className="bg-[#ffffff7f] border-[#fff] border-4 border-b-0 rounded-lg shadow-lg">
      <div className=" p-4 lg:p-20">
        <div className="text-center my-4 lg:my-10">
          <h1 className="text-2xl lg:text-5xl font-bold lg:w-[917px] mx-auto text-[#0F0F0F]">
            Dependable Care, Backed by Trusted Professionals.
          </h1>
          <p className="lg:w-[1000px] mx-auto text-[#0F0F0F] my-2 lg:my-5">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
          <fieldset className="fieldset flex justify-center">
            <input
              type="text"
              className="input rounded-full lg:w-[500px]"
              placeholder="Search any doctor..."
            />
            <button className="btn bg-[#176AE5] text-white lg:text-lg rounded-full">
              Search Now
            </button>
          </fieldset>
        </div>
        <div className="lg:flex justify-center gap-15 ">
          <img src={banner} alt="" />
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
