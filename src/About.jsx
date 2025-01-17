import React from "react";
 
const About = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
      <div className="flex items-center space-x-6">
        <p className="text-gray-600 text-justify flex-1">
          Welcome to Zoomaax News! As a visionary entrepreneur, I have successfully
          expanded my reach by launching Zoomaax TV, a pioneering OTT TV platform that
          has revolutionized entertainment consumption, building on the success of Zoom
          Bollywood, and consolidating my brand by registering all platforms under
          Zoomster Hub Pvt Ltd. My journey began as a director, facing numerous
          challenges and struggling to find opportunities, but I persevered and innovated
          ways to support newcomers, leading to the establishment of Zoomaax Studio, a
          production house dedicated to nurturing fresh talent. Today, Zoomaax TV OTT
          platform will launch in over 190 countries, marking a significant milestone, and
          live streaming platforms like Pro Maax are also operational, showcasing my
          commitment to professional and high-quality content. My work is a testament to
          my name, Abinash Rout, meaning "one who achieves success," and with Zoomster
          Hub Pvt Ltd, I have brought new hope to the entertainment industry, providing
          a platform for fresh talent to shine. Through my dedication, perseverance, and
          innovative spirit, I have made a lasting impact as a successful entrepreneur,
          and my legacy continues to inspire others, serving as a shining example of
          innovation, perseverance, and success, revolutionizing the entertainment
          industry, and providing a platform for fresh talent to thrive, inspiring future
          generations of entrepreneurs and entertainment professionals.
        </p>
        <div className="flex flex-col items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQGCrKHqRlYBtQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725613838698?e=1742428800&v=beta&t=rrE1NxVSqn75nPDhQOkkCF0qoskIMR41E7t2jd25vgI"
            alt=""
            className="w-48 h-48 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-bold">Abinash Rout</h2>
          <p className="text-gray-600">Director & CEO</p>
        </div>
      </div>
    </div>
  );
};

export default About;
