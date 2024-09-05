import { IoSearchOutline, IoSettings } from "react-icons/io5";
import { LuBellDot } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
      <div className="w-full p-6 flex justify-between items-center ">
        <div className="w-[fit-content] flex  gap-2 items-center">
          <IoSearchOutline className="text-xl cursor-pointer" />
          <input
            type="text"
            placeholder="Search for songs, etc... "
            className="bg-transparent text-md outline-none cursor-pointer font-medium"
          />
        </div>
        <div className="flex gap-10 items-center">
          <LuBellDot className="text-2xl opacity-70 cursor-pointer" />
          <IoSettings className="text-2xl opacity-70 cursor-pointer" />
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src="https://i.pinimg.com/736x/43/8b/74/438b747628f8f2a0ddfce090595c9806.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
