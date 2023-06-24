"use client"
import React, { useState } from "react";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import { FiCheckSquare } from 'react-icons/fi';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md font-sans w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl text-[#56d3c4] hidden lg:block from-current font-poppins">
              <span className="flex justify-center h-8 items-center font-bold">
                {/* TODO Logo */}
              <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
      <span className="text-2xl mr-2 text-white">
        <FiCheckSquare className="text-gray-800" />
      </span>
      <span className="text-lg text-sky-400 font-bold">TODO</span>
    </div>
               
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline font-bold space-x-4 font-poppins">
              <a
                href="/"
                className="text-sky-400 leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
              >
                Home
              </a>
              <a
                href="/blog"
                className="text-sky-400 leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="text-sky-400 leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#56d3c4]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle Menu</span>
              {isOpen ? (
                <RiCloseFill className="block h-6 w-6" />
              ) : (
                <RiMenu2Fill className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-sky-400 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/blog"
              className="text-sky-400 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="text-sky-400 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;






























// import { useState } from 'react';
// import { FiCheckSquare, FiMenu, FiX } from 'react-icons/fi';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
//       <div className="container flex justify-between h-16 mx-auto">
//         <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
//       <span className="text-2xl mr-2 text-white">
//         <FiCheckSquare />
//       </span>
//       <span className="text-lg text-cyan-400 font-bold">TODO</span>
//     </div>

//         <ul className={`items-stretch lg:flex ${isOpen ? 'block' : 'hidden'}`}>
//           <li className="flex">
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-yellow-400 dark:border-yellow-400"
//             >
//               Link
//             </a>
//           </li>
//           <li className="flex">
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
//             >
//               Link
//             </a>
//           </li>
//           <li className="flex">
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
//             >
//               Link
//             </a>
//           </li>
//           <li className="flex">
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
//             >
//               Link
//             </a>
//           </li>
//         </ul>

//         <div className="items-center flex-shrink-0 hidden lg:flex">
//           <button className="self-center px-8 py-3 rounded">Sign in</button>
//           <button className="self-center px-8 py-3 font-semibold rounded dark:bg-yellow-400 dark:text-gray-900">
//             Sign up
//           </button>
//         </div>

//         <button className="p-4 lg:hidden" onClick={toggleMenu}>
//           {isOpen ? (
//             <FiX className="w-6 h-6 dark:text-gray-100" />
//           ) : (
//             <FiMenu className="w-6 h-6 dark:text-gray-100" />
//           )}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
