const items = [
  {
    imgSrc:
      "https://i.pinimg.com/736x/5c/f4/72/5cf4729541396fb7140f301581f6cbad.jpg",
    title: "Ignored ",
    author: "by jazzB",
  },
  {
    imgSrc:
      "https://i.pinimg.com/736x/35/10/42/351042fa75534bb8e5cf9fe90be57515.jpg",
    title: "NAO",
    author: "by Selena",
  },
  {
    imgSrc:
      "https://i.pinimg.com/736x/3a/7d/3c/3a7d3cbb269240a164c7d51712c868f2.jpg",
    title: "Orion",
    author: "by by Chuck",
  },
  {
    imgSrc:
      "https://i.pinimg.com/736x/5e/e9/e4/5ee9e4384a448fb6e7f5b215c828c5a8.jpg",
    title: "Hardwon",
    author: "by John Cody",
  },
  {
    imgSrc:
      "https://imgs.search.brave.com/U4trD42mUFtxV8uz7VlVv6j8ouMxRzVUS7Eyc5aU4Pw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxQnZrLWF5S0dM/LmpwZw",
    title: "Skillet",
    author: "by Comatoss",
  },
  {
    imgSrc:
      "https://i.pinimg.com/236x/9c/80/f2/9c80f20d6755868c5f326913781e93f8.jpg",
    title: "Jayball",
    author: "by Therapy",
  },
  {
    imgSrc:
      "https://i.pinimg.com/736x/df/b6/ac/dfb6ac463b42eccda0fc0a7accebc934.jpg",
    title: "Rapture",
    author: "by Selena",
  },
];
const Featured = () => {
  return (
    <>
      <div className="w-full h-[22%]  p-5">
        <h1>Featured</h1>
        <h5>by this week</h5>
        <div className="w-full h-[80%] mt-5 flex flex-wrap justify-evenly">
          {items.map((item, index) => (
            <span
              key={index}
              className="flex flex-col justify-center items-center relative"
            >
              {/* Blurred background image */}
              <div className="absolute top-1 w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={item.imgSrc}
                  alt="blurred background"
                  className="w-full h-full object-cover filter blur-lg"
                />
              </div>

              {/* Main image */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden z-10">
                <img
                  src={item.imgSrc}
                  alt="main image"
                  className="w-full h-full object-cover"
                />
              </div>

              <h5 className="z-20 mt-2 text-md font-semibold">{item.title}</h5>
              <p className="z-20 text-sm text-[#BABCC2]">{item.author}</p>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
