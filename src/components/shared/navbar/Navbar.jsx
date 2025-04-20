import { Link, NavLink } from "react-router";
import logo from "../../../assets/logo.png";
const Navbar = () => {
  return (
    <div>
      <div className=" sticky z-50 top-0  bg-base-200">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "btn text-[#176AE5] font-bold lg:text-lg hover:bg-[#1769e52d] lg:border-b-2 border-0 text-start"
                      : "font-bold"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/55"
                  className={({ isActive }) =>
                    isActive
                      ? "btn text-[#176AE5] font-bold lg:text-lg hover:bg-[#1769e52d] lg:border-b-2 border-0"
                      : "font-bold"
                  }
                >
                  My-Bookings
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "btn text-[#176AE5] font-bold lg:text-lg hover:bg-[#1769e52d] lg:border-b-2 border-0"
                      : "font-bold"
                  }
                >
                  Blogs
                </NavLink>

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "btn text-[#176AE5] font-bold lg:text-lg hover:bg-[#1769e52d] lg:border-b-2 border-0"
                      : "font-bold"
                  }
                >
                  Contact Us
                </NavLink>
              </ul>
            </div>
            <Link className="btn btn-ghost text-2xl font-extrabold work-sans">
              <img src={logo} className="w-10" alt="" /> Dr. Pathan
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex ">
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
                to="/55"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-outline text-[#176AE5] font-bold lg:text-lg hover:bg-[#1769e52d] lg:border-b-2 border-0"
                    : "font-bold relative after:bg-[#176AE5] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                }
              >
                My-Bookings
              </NavLink>
              <NavLink
                to="/45"
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
          <div className="navbar-end gap-3 work-sans">
            <a className="btn bg-[#176AE5] text-white lg:text-xl rounded-full">
              Emergency
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
