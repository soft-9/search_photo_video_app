import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Searchbar = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <form
      onSubmit={onSubmit}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="1000"
      className="flex justify-center items-center relative top-40 w-full md:px-56 "
    >
      <div
        className=" rounded-full w-96 h-11 min-back select-none relative flex items-center gap-2 px-2  border-[0.1px] 
                      border-[#ffffff6b] md:w-full md:h-20 "
      >
        <input
          type="text"
          className="rounded-full w-full px-3 outline-none bg-transparent text-white py-1 md:text-[25px] md:px-6"
          placeholder="Search Photo"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-[#3d3d3d] rounded-full p-2 an transition-all relative md:p-4 md:text-[30px]"
        >
          <IoIosSearch />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
