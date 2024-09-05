const Imagecont = () => {
  return (
    <>
      <div className="w-full h-1/2 flex items-center justify-center p-5 relative mb-3">
        {/* 70% Card (bottom layer) */}
        <div className="card w-[70%] h-[70%] bg-green-800 rounded-[30px] overflow-hidden absolute z-10">
        <img
            src="https://i.pinimg.com/736x/b7/3b/00/b73b00fad0a2f24f43739911da68741a.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* 65% Card (middle layer) */}
        <div className="card w-[65%] h-[80%] bg-blue-800 rounded-[30px] overflow-hidden absolute z-20">
          <img
            src="https://imgs.search.brave.com/KdB5cqVpgckKM2I3fV5KwbKBVD4F2-APoRk5n8mf9HA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2RuLnByZC5h/cGkuZGlzY29tYXgu/Y29tLzIwMjMvMDIv/MDIvOTc5ZmM5MjIt/YjE5NS0zOTliLTg3/MTEtYTYxNjUyZjg2/NjE5LmpwZWc_Zj1q/cGcmcT03NSZ3PTEy/ODAmdz0xNjA"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* 60% Card (top layer) */}
        <div className="card w-[60%] h-[100%] rounded-[30px] overflow-hidden absolute z-30">
        <img
            src="https://imgs.search.brave.com/_GTH6_ckXibp-O5d-boZxABhT8vljY0j8wmD1LrZEWg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaGJvLmNvbS8y/MDIxLTExL2luc2Vj/dXJlLXMxLTE5MjB4/MTA4MC5wbmc_dz0x/MjAw"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default Imagecont;
