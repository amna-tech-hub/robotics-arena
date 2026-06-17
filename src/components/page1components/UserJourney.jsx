import React from 'react';
// Import the required icons from lucide-react
import { Wrench, MapPin, Trophy, Users } from 'lucide-react';
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { GiIndianPalace } from 'react-icons/gi';    // Game Icons (Matches your exact Figma layer!)
import { FaRankingStar } from "react-icons/fa6";
import { PiUsersThreeBold } from "react-icons/pi";
function UserJourney() {
  const steps = [
    {
      step: "STEP 1",
      title: "BUILD YOUR TEAM",
      icon: <HiOutlineWrenchScrewdriver className="w-8 h-8 text-white" />,
    },
    {
      step: "STEP 2",
      title: "COMPETE ACROSS INDIA",
      icon: <GiIndianPalace className="w-8 h-8 text-white" />,
    },
    {
      step: "STEP 3",
      title: "EARN NATIONAL RANKING & VALUE",
      icon: <FaRankingStar className="w-8 h-8  border-amber-50" />,
    },
    {
      step: "STEP 4",
      title: "JOIN THE LEAGUE",
      icon: <PiUsersThreeBold className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section className="bg-[#000000] text-white py-16 px-6 md:px-16 border-b border-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Header*/}
        <span className="text-accent-red font-roboto font-bold text-3xl tracking-widest uppercase">
          USER JOURNEY
        </span>
        <h2 className="font-orbitron text-5xl md:text-4xl font-bold!  uppercase mt-2 mb-3">
          YOUR PATH TO THE LEAGUE
        </h2>
        <p className="text-[#D9D9D966] font-roboto text-sm max-w-md mx-auto mb-16">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>

        {/* Steps Timeline box */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-around gap-12 md:gap-4">
          
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-[#1101D4] z-0" />

          {/* Map through each milestone */}
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1 relative z-10 max-w-[200px]">
              
              <div className="w-[104px] h-[104px] rounded-full bg-[#2D2D2D]  flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-transform duration-300 hover:scale-105 mb-6">
                {/* Inner Circle Background */}
                <div className="w-[76px] h-[76px] rounded-full bg-[#09090b] border border-[#1101D4] border-4   flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              {/* Text Meta Content */}
              <span className="text-accent-red font-roboto font-bold text-xs tracking-wider mb-2">
                {item.step}
              </span>
              <h4 className="font-roboto font-semibold text-sm tracking-wide leading-snug uppercase text-center text-[#EAEAEA]">
                {item.title}
              </h4>
              
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default UserJourney;