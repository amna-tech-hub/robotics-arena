import React from 'react';
import botleagueimg from '../../assets/images/botleagueimage.png';

// Tailored icon sets to perfectly match the design visual styles
import { LuOrbit, LuLightbulb } from 'react-icons/lu';
import { MdEngineering } from "react-icons/md";
import { BiBrain } from 'react-icons/bi';
import { HiOutlineLightBulb } from "react-icons/hi";

function BotLeagueDetails() {
  const features = [
    {
      num: "1.",
      title: "STRUCTURED EVENTS",
      desc: '"From one-off events to a year-round competitive season."'
    },
    {
      num: "2.",
      title: "DIGITAL IDENTITY",
      desc: '"Your professional robotics legacy, tracked and verified."'
    },
    {
      num: "3.",
      title: "NATIONAL RANKING",
      desc: '"Benchmark your skills against the best engineers in India."'
    },
    {
      num: "4.",
      title: "CAREER PATHWAY",
      desc: '"Turning arena victories into real-world industry opportunities."'
    }
  ];

  const categories = [
    {
      title: "MINI MAKERS",
      desc: "Where Creativity Meets Logic.",
      icon: <LuOrbit className="w-14 h-14 text-[#FFC700]" />
    },
    {
      title: "JUNIOR INNOVATORS",
      desc: "Engineering & Strategy Fundamentals.",
      icon: <HiOutlineLightBulb className="w-14 h-14 text-[#FFC700]" />
    },
    {
      title: "YOUNG ENGINEERS",
      desc: "Advanced Wireless & Autonomous Control.",
      icon: <MdEngineering className="w-14 h-14 text-[#FFC700]" />
    },
    {
      title: "ROBO MINDS",
      desc: "Elite Professional Sports & Robotics.",
      icon: <BiBrain className="w-14 h-14 text-[#FFC700]" />
    }
  ];

  return (
    <section className="bg-[#1A1A19] text-white py-20 px-6 md:px-16 border-b border-gray-900 font-roboto select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* ================= TOP SECTION: WHAT IS BOTLEAGUE? ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          
          {/* Left Columns: Text Content Grid */}
          <div className="lg:col-span-8">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold tracking-wider uppercase mb-14 text-white">
              WHAT IS BOTLEAGUE?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {features.map((item, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#FF3B3B] font-bold font-orbitron text-lg">{item.num}</span>
                    <h3 className="font-orbitron font-bold text-base tracking-widest text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm font-normal leading-relaxed pl-5 tracking-wide">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Columns: Schematic Diagram Vector */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <img 
              src={botleagueimg} 
              alt="BotLeague schematic layout illustration" 
              className="max-w-[260px] w-full h-auto object-contain opacity-85"
            />
          </div>

        </div>

        {/* ================= BOTTOM SECTION: CATEGORIES ================= */}
        <div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold tracking-wider uppercase mb-12 text-white">
            CATEGORIES
          </h2>

          {/* 4-Card Grid Layout with Hover Transitions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((card, index) => (
              <div 
                key={index} 
                className="group relative bg-[#151515] rounded-2xl p-6 flex flex-col h-[270px] transition-all duration-300 ease-out hover:border-[#FFC700] hover:shadow-[0_0_25px_rgba(255,199,0,0.12)] hover:-translate-y-1 cursor-pointer"
              >
                {/* Top Node Wrapper - Fixed alignment */}
                <div className="flex-1 flex flex-col">
                  {/* Icon Container - Centered and larger */}
                  <div className="flex items-center justify-start mb-4">
                    <div className="w-[115px] h-[105px] flex items-center justify-center transition-colors duration-300 group-hover:border-[#FFC700]/30">
                      {card.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="font-orbitron font-bold text-lg tracking-wider text-white">
                      {card.title}
                    </h4>
                    <p className="text-gray-400 text-[13px] font-normal tracking-wide leading-snug">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA Element */}
                <div className="pt-4 mt-auto">
                  <span className="inline-flex items-center gap-2 text-[#FF3B3B] font-bold text-xs tracking-widest uppercase transition-colors duration-300 group-hover:text-red-400">
                    LEARN MORE <span className="text-sm transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default BotLeagueDetails;