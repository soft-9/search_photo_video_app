import { NavLink } from "react-router-dom";
import { FaImage } from "react-icons/fa";
const Navbar = () => {
  return (
    <header
      data-aos="fade-down"
      data-aos-duration="1000"
      className=" fixed bord top-0 min-back w-full h-11 flex justify-center items-center px-3 gap-10 md:h-16 z-30"
    >
      <nav className="select-none">
        <NavLink
          to="/Video"
          className={({ isActive }) =>
            isActive
              ? "text-red-600 text-[20px] md:text-[30px] hover:text-white transition-colors relative lie "
              : "hover:text-red-600 transition-colors text-white text-[20px] md:text-[30px] lin relative"
          }
        >
          Video
        </NavLink>
      </nav>
      <span className="anw text-[25px] top-[-10px] bg-red-600 w-20 h-20 clip absolute md:h-28 md:top-[-10px]"></span>
      <div className="text-[25px] top-1 min-back flex items-center justify-center size-20 clip relative md:size-28 md:top-[8px]">
        <NavLink to="/" className="color-header absolute bottom-4 text-white rounded-md md:text-[30px]">
          <FaImage className="bg-transparent" />
        </NavLink>
      </div>
      <nav className="select-none">
        <NavLink
          to="/photo"
          className={({ isActive }) =>
            isActive
              ? "text-red-600 text-[20px] md:text-[30px] hover:text-white transition-colors relative lie "
              : "hover:text-red-600 transition-colors text-white text-[20px] md:text-[30px] lin relative"
          }
        >
          Photo
        </NavLink>
      </nav> 
    </header>
  );
};

export default Navbar;
