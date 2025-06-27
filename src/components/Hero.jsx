import React from "react";
import heroImg from "../assets/img.jpg";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-black text-white flex flex-col md:flex-row items-start justify-between px-6 md:px-16 pt-20 pb-10">
      {/* Left Side */}
      <div className="md:w-1/2 w-full space-y-9 px-9 flex flex-col items-center ">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover the GameZone
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed  text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sint,
          explicabo inventore, possimus asperiores iusto dolor neque rerum
          consectetur doloremque ab! Deleniti minus officiis autem explicabo
          ratione perspiciatis, dolorem doloremque. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Doloribus, aspernatur sint accusamus
          dolores odio quam fugiat praesentium. Quam asperiores quidem
          temporibus repudiandae cum quasi, architecto ab molestias? Modi, sed
          culpa.
        </p>
        <div className=" flex items-center gap-x-10">
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 focus:outline-none focus:ring-4 focus:ring-red-300">
            Get Started
          </button>
          <button class="px-6 py-3 border border-red-500 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 focus:outline-none focus:ring-4 focus:ring-red-300">
            Explore
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 w-full mt-10 md:mt-0 flex justify-center">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full max-w-2xl rounded-xl 
    drop-shadow-[0_0_25px_rgba(255,255,0,0.5)] 
    hover:drop-shadow-[0_0_25px_rgba(128,0,255,0.5)] 
    transition duration-300"
        />
      </div>
    </div>
  );
};

export default Hero;
