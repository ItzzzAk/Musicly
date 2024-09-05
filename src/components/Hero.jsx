import Featured from "./Featured";
import Imagecont from "./Imagecont";
import Navbar from "./Navbar";


const Hero = () => {
  return (
    <>
      <div className="w-full h-full relative ">
        <Navbar />
        <Imagecont/>
        <Featured/>
      
      </div>
    </>
  );
};

export default Hero;
