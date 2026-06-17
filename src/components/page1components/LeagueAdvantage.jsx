import React from 'react';

// Tailored icon sets to precisely match your design vectors
import { FaMedal, FaGavel, FaBriefcase, FaBolt } from 'react-icons/fa';
import leaderboard from '../../assets/images/leaderboard.png';

function LeagueAdvantage() {
  const advantages = [
    {
      title: "NATIONAL RECOGNITION",
      desc: '"Benchmark your skills on India\'s official robotics leaderboard."',
      icon: <FaMedal className="w-8 h-8 text-[#FF3B3B]" />
    },
    {
      title: "FAIR JUDGING",
      desc: '"Compete with confidence under standardized, expert-led evaluation."',
      icon: <FaGavel className="w-8 h-8 text-[#FF3B3B]" />
    },
    {
      title: "CAREER OPS",
      desc: '"Bridge the gap between arena victories and top-tier tech placements."',
      icon: <FaBriefcase className="w-8 h-8 text-[#FF3B3B]" />
    },
    {
      title: "HIGH - ENERGY ECO",
      desc: '"Join a nationwide community of elite innovators and robotics athletes."',
      icon: <FaBolt className="w-8 h-8 text-[#FF3B3B]" />
    }
  ];

  return (
    <section className="bg-[#1A1A19] text-white py-24 px-6 md:px-16 select-none font-roboto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ================= LEFT COLUMN================= */}
        <div className="lg:col-span-7 space-y-12">
          <div>
            <span className="text-[#FF3B3B] font-orbitron text-xs font-bold! tracking-[0.25em] uppercase block mb-2">
              WHY REGISTER ?
            </span>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold! tracking-wider uppercase text-white">
              THE LEAGUE ADVANTAGE
            </h2>
          </div>

          <div className="space-y-8">
            {advantages.map((item, index) => (
              <div key={index} className="flex gap-5 items-start max-w-xl">
                {/* Icon Container */}
                <div className="flex-shrink-0 mt-1 p-2 bg-[#2A2A2A] rounded-lg">
                  {item.icon}
                </div>

                <div className="space-y-1">
                  <h3 className="font-orbitron font-bold! text-base tracking-widest text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed tracking-wide">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative max-w-[480px] w-full">
            <img 
              src={leaderboard} 
              alt="Leaderboard Rankings Interface" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default LeagueAdvantage;