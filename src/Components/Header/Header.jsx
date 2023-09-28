import { Link, NavLink } from "react-router-dom";
import { FaTimesCircle, FaBars } from "react-icons/fa";
import { useState } from "react";
export default function Header({ add, total }) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpen2 = () => {
    setOpen2(!open2);
  };
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <h2 className=" lg:text-3xl text-2xl font-bold">
              Fire <span className=" text-yellow-500">Base</span>
            </h2>
          </Link>
          <div className="md:flex hidden items-center lg:order-2">
            
            <Link
              to="#"
              className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div onClick={handleOpen} className="flex  md:hidden">
            {open ? <FaTimesCircle /> : <FaBars />}
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-yellow-500" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-yellow-500" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-500 lg:p-0`
                  }
                >
                  Login
                </NavLink>
              </li>
             
            </ul>
          </div>
          {/* for mobile */}
          <div
            className={`flex flex-col absolute duration-700 right-0  bg-yellow-500 p-5 md:hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
              open ? "top-12" : "-top-72"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li onClick={handleOpen}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-gray-300" : "text-white"
                    } lg:hover:bg-transparent lg:border-0 hover:text-gray-400 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li onClick={handleOpen}>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-gray-300" : "text-white"
                    } lg:hover:bg-transparent lg:border-0 hover:text-gray-400 lg:p-0`
                  }
                >
                  Login
                </NavLink>
              </li>
              
              
            </ul>
            
          </div>
        </div>
      </nav>
    </header>
  );
}
