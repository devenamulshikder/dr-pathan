import { Link, NavLink } from "react-router";

const FooterNav = () => {
  return (
    <div className="">
      <div className="">
        <div className="navbar container mx-auto">
          <div className="navbar-center hidden lg:flex mx-auto ">
            <ul className="menu menu-horizontal px-1 flex gap-10 text-lg items-center work-sans">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-outline text-[#176AE5] font-bold text-lg hover:bg-[#1769e52d] border-b-2 border-0"
                    : "font-bold relative after:bg-[#176AE5] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/myBooking"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-outline text-[#176AE5] font-bold lg:text-lg hover:bg-[#1769e52d] lg:border-b-2 border-0"
                    : "font-bold relative after:bg-[#176AE5] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                }
              >
                My-Bookings
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-outline text-[#176AE5] font-bold lg:text-lg hover:bg-[#1769e52d] lg:border-b-2 border-0"
                    : "font-bold relative after:bg-[#176AE5] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                }
              >
                Blogs
              </NavLink>
              <NavLink
                to="/55"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-outline text-[#176AE5] font-bold lg:text-lg hover:bg-[#1769e52d] lg:border-b-2 border-0"
                    : "font-bold relative after:bg-[#176AE5] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                }
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
