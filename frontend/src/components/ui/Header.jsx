import React, { useState } from "react";
import { NavLink } from "react-router";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";

const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const handleClick = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <header className="h-15 bg-blue-400 flex justify-center items-center">
      <nav className="flex justify-between items-center w-full m-1 sm:w-10/12 md:w-9/12">
        <div className="bg-white rounded h-10 flex justify-evenly items-center w-70">
          <h1 className="text-blue-400">Maa Santoshi Tours And Travels</h1>
          <FaBusAlt className="text-blue-400" />
        </div>

        {/* navbar for large screen */}
        <div className="hidden md:flex gap-10">
          <NavLink to="/app" className="text-white hover:text-blue-200">
            Home
          </NavLink>
          <NavLink to="/app/about" className="text-white hover:text-blue-200">
            About
          </NavLink>
          <NavLink to="/app/contact" className="text-white hover:text-blue-200">
            Contact
          </NavLink>
        </div>

        {/* hamburger menu for mobile devices */}
        <div className="flex items-center md:hidden">
          {hamburgerMenu ? (
            <IoClose onClick={handleClick} className="text-5xl text-white" />
          ) : (
            <IoMenu onClick={handleClick} className="text-5xl text-white" />
          )}
        </div>
      </nav>

      {hamburgerMenu && (
        <div className="bg-white text-black w-full absolute top-15 flex flex-col items-center p-4 gap-4 shadow-md">
          <NavLink
            to="/app"
            className="text-black hover:text-blue-400 text-xl"
            onClick={handleClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/app/about"
            className="text-black hover:text-blue-400 text-xl"
            onClick={handleClick}
          >
            About
          </NavLink>
          <NavLink
            to="/app/contact"
            className="text-black hover:text-blue-400 text-xl"
            onClick={handleClick}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;

/*
 import clsx from "clsx";

 <section
  className={clsx(
    "bg-white text-black w-full flex flex-col items-center absolute top-0 right-0 z-50 gap-8 p-8 -translate-y-full transition-transform duration-500 ease-in-out",
    hamburgerMenu && "translate-y-0"
  )}
 >
  content 
 </section> 
*/

// updated by ChatGPT
// ---------------------
// import React, { useState } from "react";
// import { NavLink } from "react-router";
// import { IoMenu } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";
// import clsx from "clsx";

// const Header = () => {
//   const [hamburgerMenu, setHamburgerMenu] = useState(false);

//   return (
//     <header className="h-15 bg-zinc-800 flex justify-center items-center">
//       <nav className="flex justify-between items-center w-11/12 h-10 p-5">
//         <div className="bg-white rounded">
//           <h1 className="text-blue-400">Hello</h1>
//         </div>

//         {/* Backdrop Overlay */}
//         <div
//           className={clsx(
//             "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ease-in-out",
//             {
//               "opacity-0 pointer-events-none": !hamburgerMenu,
//               "opacity-100": hamburgerMenu,
//             }
//           )}
//           onClick={() => setHamburgerMenu(false)} // Click outside to close the menu
//         ></div>

//         {/* Sliding Menu Panel */}
//         <section
//           className={clsx(
//             "fixed bg-white text-black h-screen w-1/2 top-0 right-0 transition-transform duration-500 ease-in-out z-50",
//             {
//               "translate-x-full": !hamburgerMenu,
//               "translate-x-0": hamburgerMenu,
//             }
//           )}
//         >
//           <IoClose
//             onClick={() => setHamburgerMenu(false)}
//             className="text-4xl cursor-pointer hover:bg-red-500 self-end"
//           />
//           <NavLink
//             to="/"
//             className="text-black hover:text-blue-400"
//             onClick={() => setHamburgerMenu(false)}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className="text-black hover:text-blue-400"
//             onClick={() => setHamburgerMenu(false)}
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className="text-black hover:text-blue-400"
//             onClick={() => setHamburgerMenu(false)}
//           >
//             Contact
//           </NavLink>
//         </section>

//         <div className="flex items-center">
//           <IoMenu
//             onClick={() => {
//               console.log("Opening menu");
//               setHamburgerMenu(true);
//             }}
//             className="text-white text-4xl cursor-pointer"
//           />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// // complete new responsive navbar using ChatGPT
// // --------------------------------------------
// import React, { useState } from "react";
// import { Link } from "react-router";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => setIsOpen(!isOpen);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     // Main navbar container, fixed at the top with shadow and full width
//     <nav className="bg-white shadow-md fixed w-full z-10">

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Navbar inner container */}
//         <div className="flex justify-between h-16">

//           {/* Logo Section */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link to="/" className="text-2xl font-bold text-teal-500">
//               MyLogo
//             </Link>
//           </div>

//           {/* Desktop Navigation Links (hidden on smaller screens) */}
//           <div className="hidden md:flex md:items-center">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className="ml-8 text-gray-700 hover:text-teal-500 transition-colors"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Hamburger Menu Button for Mobile (visible only on small screens) */}
//           <div className="flex items-center md:hidden">
//             <button
//               onClick={handleToggle}
//               className="text-gray-700 hover:text-teal-500 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? (
//                 <AiOutlineClose size={24} />
//               ) : (
//                 <AiOutlineMenu size={24} />
//               )}
//             </button>
//           </div>

//         </div>

//       </div>

//       {/* Mobile Menu Panel */}
//       {isOpen && (
//         <div className="md:hidden">

//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-100 transition-colors"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//         </div>
//       )}

//     </nav>
//   );
// };

// export default Navbar;
