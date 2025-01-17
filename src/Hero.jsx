import React from "react";
import movie from "../src/assets/movie.mp4";

const Hero = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto">
        <div className="flex">
          <h1 className="text-9xl font-bold mb-4 text-customBlue">Zoomax News</h1>
        </div>
        <div className="relative w-full h-[470px] overflow-hidden">
          <video
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
            src={movie}
            autoPlay
            muted
            loop
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="w-full mx-auto py-4 px-6 bg-customBlue">
        <div className="overflow-hidden">
          <div className="inline-block animate-marquee text-xl font-semibold text-white">
            Breaking News: This is a scrolling text effect similar to a news
            ticker. Stay tuned for more updates!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
