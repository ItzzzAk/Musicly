import { FaMicrophone } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import { IoIosHeartEmpty, IoMdAlbums } from "react-icons/io";
import { IoSearchOutline, IoTimeOutline } from "react-icons/io5";
import { TiHome } from "react-icons/ti";

const Leftbar = () => {
  return (
    <>
      <div className="gradient-eff"></div>
      <div className="w-80  h-full bg-[#12192C]  p-7 ">
        <div className=" w-full ">
          <h1 className="text-[#1DB954] 2xl:text-2xl uppercase md:text-xl ">
            Musicly
          </h1>
        </div>

        <div className="w-full h-[20%] mt-14  ">
          <span className="flex items-center gap-5 mb-4">
            <TiHome className="text-xl " />
            <h4 className="uppercase font-medium text-md cursor-pointer">
              home
            </h4>
          </span>
          <span className="flex items-center gap-5 mb-4">
            <IoSearchOutline className="text-xl " />
            <h4 className="uppercase font-medium text-md cursor-pointer ">
              browse
            </h4>
          </span>
          <span className="flex items-center gap-5">
            <FaMicrophone className="text-xl " />
            <h4 className="uppercase font-medium text-md cursor-pointer ">
              radio
            </h4>
          </span>
        </div>
        <div className="w-full h-[20%] mb-14">
          <h6 className="text-xl text-[#e4416c] uppercase tracking-tighter mb-3">
            Your library
          </h6>
          <span className="flex items-center gap-5  mb-4">
            <IoTimeOutline className="text-xl " />
            <h4 className="uppercase font-medium text-md cursor-pointer">
              recently played
            </h4>
          </span>
          <span className="flex items-center gap-5 mb-4">
            <IoIosHeartEmpty className="text-xl " />
            <h4 className="uppercase font-medium text-md cursor-pointer">
              Favorite songs
            </h4>
          </span>

          <span className="flex items-center gap-5 mb-4">
            <IoMdAlbums className="text-xl " />
            <h4 className="uppercase font-medium text-md cursor-pointer">
              albums
            </h4>
          </span>
        </div>

        <div className="w-full h-[20%]">
          <h6 className="text-xl text-[#e4416c] uppercase tracking-tighter mb-3">
            Playlist
          </h6>
          <span className="flex items-center gap-5 mb-4">
            <h4 className="uppercase font-medium text-md cursor-pointer">
              Hindi Top 50
            </h4>
          </span>
          <span className="flex items-center gap-5 mb-4">
            <h4 className="uppercase font-medium text-md cursor-pointer">
              Indipop 50
            </h4>
          </span>

          <span className="flex items-center gap-5 mb-4">
            <h4 className="uppercase font-medium text-md cursor-pointer">
              Romace Season
            </h4>
          </span>

          <span className="flex items-center justify-center  p-3  mt-16 border-2 w-full border-[#1DB954] rounded-sm">
            <h4 className="uppercase font-medium text-md text-[#1DB954] cursor-pointer flex items-center gap-2">
              <GoPlusCircle className="text-2xl" />
              Add new playlist
            </h4>
          </span>
        </div>
      </div>
    </>
  );
};

export default Leftbar;
