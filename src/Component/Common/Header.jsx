// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import { menuItems } from "./menuItem";
// import {
//   FaSearch,
//   FaInstagram,
//   FaMicrophone,
//   FaGem,
//   FaStore,
//   FaHeart,
//   FaUser,
//   FaShoppingBag
// } from 'react-icons/fa';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);


//   return (
//    <>
     
//     <header className="bg-gray-800 sticky top-0 z-10 text-white shadow-lg ">
//     <nav className="flex items-center justify-between p-4 ">
//                 <div className="flex items-center space-x-2">
//                     <img
//                         src=""
//                         alt=" Logo"
//                         className="h-10 text-[white]" />
//                 </div>
    
//                 <div className="flex items-center border rounded-full px-4 py-2 w-full max-w-md gap-2">
//                     <FaSearch className="text-gray-600 mr-2" />
//                     <input
//                         type="text"
//                         placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
//                         className="outline-none w-full text-sm"
//                     />
//                     <FaInstagram className="text-gray-600 mx-2 cursor-pointer" />
//                     <FaMicrophone className="text-gray-600 cursor-pointer" />
//                 </div>
    
//                 <div className="flex items-center space-x-4 text-[white] px-3">
//                     <Link to="/diamond" ><FaGem className="cursor-pointer size-7" /></Link>
//                     <Link to="/store"><FaStore className="cursor-pointer size-7" /></Link>
//                     <FaHeart className="cursor-pointer size-7" />
//                     <FaUser className="cursor-pointer size-7" />
//                     <div className="relative cursor-pointer">
//                         <FaShoppingBag className='size-7' />
//                         <span className="absolute -top-1 -right-1 bg-[#5b2724] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                             0
//                         </span>
//                     </div>
//                 </div>
//             </nav>
//       <div className="container mx-auto flex justify-end pr-4 items-center">
//         <h1 className="text-2xl font-bold absolute left-4 p-4">Brand</h1>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex  space-x-8 relative">
//           {menuItems.map((item, index) => (
//             <div
//               key={index}
//               className="relative group p-4"
//               onMouseEnter={() => setOpenDropdown(index)}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <Link
//                 to={item.link}
//                 className="flex items-center  hover:text-yellow-400 transition-all duration-300 relative"
//               >
//                 <img src={item.imageIcon} alt={item.name} className="w-5 h-5" />
//                 <span>{item.name}</span>


//                 {/* Center-out Animated Underline */}
//       {/* Dropdown */}
//       {openDropdown === index && item.dropdown.length > 0 && (
//         <div 
//           className="z-10 fixed left-1/2 top-[129px] transform -translate-x-1/2 w-[1200px] bg-white text-gray-900 rounded-lg shadow-lg"
//           onMouseEnter={() => setOpenDropdown(index)}
//           onMouseLeave={() => setOpenDropdown(null)}
//         >
//           <div className="grid grid-cols-3 justify-center items-center gap-4 p-4">
//             {item.dropdown.map((option, i) => (
//               <Link key={i} to={option.link} className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded">
//                 <img src={option.imageIcon} alt={option.name} className="w-4 h-4" />
//                 <span>{option.name}</span>

//               </Link>

//               {/* Dropdown */}
//               {openDropdown === index && item.dropdown.length > 0 && (
//                 <div
//                   className="fixed left-1/2 top-[55px] transform -translate-x-1/2 w-[1200px] bg-white text-gray-900 rounded-lg shadow-lg"
//                   onMouseEnter={() => setOpenDropdown(index)}
//                   onMouseLeave={() => setOpenDropdown(null)}
//                 >
//                   <div className="grid grid-cols-3 justify-center items-center gap-4 p-4">
//                     {item.dropdown.map((option, i) => (
//                       <Link key={i} to={option.link} className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded">
//                         <img src={option.imageIcon} alt={option.name} className="w-4 h-4" />
//                         <span>{option.name}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>


//         {/* Mobile Menu Button */}
//         <button className="md:hidden " onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <X size={24} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {/* {menuOpen && (
//         <nav className="md:hidden  bg-gray-700 p-4 mt-2">
//           {menuItems.map((item, index) => (
//             <div key={index} className="mb-2">
//               <button
//                 className="w-full text-left font-semibold py-2 flex items-center space-x-2"
//                 onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
//               >
//                 <img src={item.imageIcon} alt={item.name} className="w-5 h-5" />
//                 <span>{item.name}</span>
//               </button>
//               {openDropdown === index && item.dropdown.length > 0 && (
//                 <div className="bg-gray-600 p-2 rounded">
//                   {item.dropdown.map((option, i) => (
//                     <Link key={i} to={option.link} className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-gray-500 rounded">
//                       <img src={option.imageIcon} alt={option.name} className="w-4 h-4" />
//                       <span>{option.name}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>
//       )} */}
//       <div className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-gray-900 text-white transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 shadow-lg`}>
//         <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
//           <X size={28} />
//         </button>

//         <nav className="mt-12 p-4">
//           {menuItems.map((item, index) => (
//             <div key={index} className="mb-4">
//               <button
//                 className="w-full text-left font-semibold py-2 flex items-center space-x-2"
//                 onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
//               >
//                 <img src={item.imageIcon} alt={item.name} className="w-5 h-5" />
//                 <span>{item.name}</span>
//               </button>
//               {openDropdown === index && item.dropdown.length > 0 && (
//                 <div className="bg-gray-700 p-2 rounded">
//                   {item.dropdown.map((option, i) => (
//                     <Link key={i} to={option.link} className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-gray-600 rounded">
//                       <img src={option.imageIcon} alt={option.name} className="w-4 h-4" />
//                       <span>{option.name}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>
//       </div>
//     </header>
//    </>
//   );
// };

// export default Header;


import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItem";
import {
  FaSearch,
  FaInstagram,
  FaMicrophone,
  FaGem,
  FaStore,
  FaHeart,
  FaUser,
  FaShoppingBag,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [userDropdown, setUserDropdown] = useState(false);

  return (
   <>
     
    <header className="bg-gray-800 sticky top-0 z-10 text-white shadow-lg ">
    <nav className="flex items-center justify-between p-4 ">
                <div className="flex items-center space-x-2">
                    <img
                        src=""
                        alt=" Logo"
                        className="h-10 text-[white]" />
                </div>
    
                <div className="flex items-center border rounded-full px-4 py-2 w-full max-w-md gap-2">
                    <FaSearch className="text-gray-600 mr-2" />
                    <input
                        type="text"
                        placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                        className="outline-none w-full text-sm"
                    />
                    <FaInstagram className="text-gray-600 mx-2 cursor-pointer" />
                    <FaMicrophone className="text-gray-600 cursor-pointer" />
                </div>
    
                <div className="flex items-center space-x-4 text-[white] px-3">
                    <Link to="/diamond" ><FaGem className="cursor-pointer size-7" /></Link>
                    <Link to="/store"><FaStore className="cursor-pointer size-7" /></Link>
                    <FaHeart className="cursor-pointer size-7" />
                    <div 
            className="relative"
            onMouseEnter={() => setUserDropdown(true)}
            onMouseLeave={() => setUserDropdown(false)}
          >
            <FaUser className="cursor-pointer size-7" />

            {/* Dropdown */}
            {userDropdown && (
              <div className="z-30 absolute right-0 top-full  w-40 bg-white text-gray-800 shadow-lg rounded-lg">
                <Link to="/login/sihnup" className="block px-4 py-2 hover:bg-gray-100">Log in / Sign up</Link>
                <Link to="/contactpage" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link>
              </div>
            )}
          </div>

<Link  to="/productbag">
                    <div className="relative cursor-pointer">
                        <FaShoppingBag className='size-7' />
                        <span className="absolute -top-1 -right-1 bg-[#5b2724] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                            0
                        </span>
                    </div>
                    </Link>
                </div>
            </nav>
      <div className="container mx-auto flex justify-end pr-4 items-center">
        <h1 className="text-2xl font-bold absolute left-4 p-4">Brand</h1>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex  space-x-8 relative">
  {menuItems.map((item, index) => (
    <div
      key={index}
      className="relative group p-4"
      onMouseEnter={() => setOpenDropdown(index)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <Link 
        to={item.link} 
        className="flex items-center  hover:text-yellow-400 transition-all duration-300 relative"
      >
        <img src={item.imageIcon} alt={item.name} className="w-5 h-5" />
        <span>{item.name}</span>

        {/* Center-out Animated Underline */}
        <span className="absolute left-0 bottom-0 h-[2px] bg-yellow-400 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
      </Link>

      {/* Dropdown */}
      {openDropdown === index && item.dropdown.length > 0 && (
        <div 
          className="z-10 fixed left-1/2 top-[129px] transform -translate-x-1/2 w-[1200px] bg-white text-gray-900 rounded-lg shadow-lg"
          onMouseEnter={() => setOpenDropdown(index)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="grid grid-cols-3 justify-center items-center gap-4 p-4">
            {item.dropdown.map((option, i) => (
              <Link key={i} to={option.link} className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded">
                <img src={option.imageIcon} alt={option.name} className="w-4 h-4" />
                <span>{option.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center border rounded-full px-4 py-2 w-full max-w-md gap-2">
            <FaSearch className="text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
              className="outline-none w-full text-sm"
            />
            <FaInstagram className="text-gray-600 mx-2 cursor-pointer" />
            <FaMicrophone className="text-gray-600 cursor-pointer" />
          </div>

          <div className="flex items-center space-x-4 text-[white] px-3">
            <Link to="/diamond">
              <FaGem className="cursor-pointer size-7" />
            </Link>
            <Link to="/store">
              <FaStore className="cursor-pointer size-7" />
            </Link>
            <FaHeart className="cursor-pointer size-7" />
            <FaUser className="cursor-pointer size-7" />
            <div className="relative cursor-pointer">
              <FaShoppingBag className="size-7" />
              <span className="absolute -top-1 -right-1 bg-[#5b2724] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>
        </nav>

        <div className="container mx-auto flex justify-end pr-4 items-center">
          <h1 className="text-2xl font-bold absolute left-4 p-4">Brand</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 relative">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group p-4"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.link}
                  className="flex items-center hover:text-yellow-400 transition-all duration-300"
                >
                  <img src={item.imageIcon} alt={item.name} className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>

                {/* Dropdown */}
                {openDropdown === index && item.dropdown.length > 0 && (
                  <div
                    className="z-10 fixed left-1/2 top-[129px] transform -translate-x-1/2 w-[1200px] bg-white text-gray-900 rounded-lg shadow-lg"
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="grid grid-cols-3 justify-center items-center gap-4 p-4">
                      {item.dropdown.map((option, i) => (
                        <Link
                          key={i}
                          to={option.link}
                          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded"
                        >
                          <img src={option.imageIcon} alt={option.name} className="w-4 h-4" />
                          <span>{option.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-gray-900 text-white transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 shadow-lg`}
        >
          <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>

          <nav className="mt-12 p-4">
            {menuItems.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full text-left font-semibold py-2 flex items-center space-x-2"
                  onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                >
                  <img src={item.imageIcon} alt={item.name} className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
                {openDropdown === index && item.dropdown.length > 0 && (
                  <div className="bg-gray-700 p-2 rounded">
                    {item.dropdown.map((option, i) => (
                      <Link
                        key={i}
                        to={option.link}
                        className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-gray-600 rounded"
                      >
                        <img src={option.imageIcon} alt={option.name} className="w-4 h-4" />
                        <span>{option.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;


