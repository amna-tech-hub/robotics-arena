import React from 'react';
import heroImage from '../../assets/images/hero-image.png';

function Hero() {
  return (
    <section 
      className="bg-[#000000] px-4 sm:px-8 md:px-16 lg:px-24 pb-6 sm:pb-8 border-b border-border relative pt-3 min-h-[80vh] flex items-center"
      style={{ 
        backgroundImage: `linear-gradient(to right, #000000 0%, #000000 50%, transparent 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-6xl sm:mx-3 md:mx-auto w-full">
        
        {/* LIVE BOX - Centered on mobile, right-aligned on larger screens */}
        <div className="flex justify-start md:justify-end my-4 sm:my-6 gap-x-10 md:my-8">
          <div className="relative w-fit flex items-center gap-1 sm:gap-2 bg-[#1A1919] border border-border rounded px-2 sm:px-3 py-1 sm:py-1.5 font-roboto font-semibold text-text-primary whitespace-nowrap">
            {/* Pulsing Live Badge Indicator */}
            <span className="text-accent-red text-[9px] sm:text-[11px] font-bold px-1 sm:px-1.5 py-0.5 rounded">
              ● LIVE
            </span>
            <span className="text-text-primary text-xs sm:text-sm md:text-[16px]">
              Episode 14 - Bengaluru Regionals
            </span>
            <a 
              href="#watch" 
              className="text-[#FF4C4C] hover:underline ml-0.5 sm:ml-1 font-bold text-[10px] sm:text-xs md:text-sm tracking-wider"
            >
              WATCH LIVE
            </a>
          </div>
        </div>
      

        {/* Logo & Tagline Section - Fully Responsive */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-text-primary font-orbitron font-semibold [word-spacing:2px] sm:[word-spacing:4px]">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl block font-orbitron tracking-widest">
              INDIA'S ULTIMATE
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl block mt-1 sm:mt-0 font-orbitron">
              ROBOTICS ARENA
            </span>
          </h1>
          <p className="text-text-muted text-xl sm:text-2xl md:text-3xl mt-2 sm:mt-3 font-roboto font-medium">
            Build.Compete.Rank.The National
          </p>
          <p className="text-text-muted text-xl sm:text-2xl md:text-3xl font-roboto font-medium">
            Ecosystem for Robotics Arena
          </p>
        </div>

        {/* Navigation Buttons - Fully Responsive */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <button className="bg-accent-red text-text-primary px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-button font-roboto font-bold text-sm sm:text-base hover:bg-opacity-80 transition-all duration-300 shadow-button hover:shadow-button-hover cursor-pointer">
            CREATE ACCOUNT
          </button>
          <button className="border-2 border-text-primary text-text-primary px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-button font-roboto font-bold text-sm sm:text-base hover:bg-accent-red hover:text-text-primary transition-all duration-300 cursor-pointer">
            EXPLORE EVENTS
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;