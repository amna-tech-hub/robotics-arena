import React from 'react';

// Exact image imports from your assets folder sidebar
import roborace from '../../assets/images/roborace.jpg';
import linefoller from '../../assets/images/linefollwer.jpg';
import rcracing from '../../assets/images/rcracing.jpg';
import fpv from '../../assets/images/fpv.jpg';
import robohockey from '../../assets/images/robohockey.jpg';
import robotwar from '../../assets/images/robotwar.jpg';
import decipbg from '../../assets/images/decipbg.png';

function CompetitionDisciplines() {
  const disciplines = [
    {
      title: "Robo Race",
      imgSrc: roborace, 
    },
    {
      title: "Line Follower",
      imgSrc: linefoller,
    },
    {
      title: "RC Off-Road", 
      imgSrc: rcracing,
    },
    {
      title: "FPV Drone Racing & Aeromodelling",
      imgSrc: fpv,
    },
    {
      title: "Robo Hockey",
      imgSrc: robohockey,
    },
    {
      title: "Robo War",
      imgSrc: robotwar,
    }
  ];

  return (
    <section 
      className="relative bg-black text-white py-24 px-6 md:px-16 font-roboto select-none overflow-hidden"
      style={{ 
        backgroundImage: `url(${decipbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-14">
          <span className="text-accent-red font-orbitron text-3xl font-bold! tracking-[0.25em] uppercase block mb-2">
            SPORTS
          </span>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold! tracking-wider uppercase text-white ">
            COMPETITION DISCIPLINES
          </h2>
        </div>

        {/* Disciplines Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {disciplines.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-[#141414] border border-zinc-900 rounded-2xl overflow-hidden aspect-[300/236] flex flex-col justify-end transition-all duration-300 ease-out hover:border-zinc-700 hover:-translate-y-1 cursor-pointer"
            >
              {/* Background Discipline Image */}
              <img 
                src={item.imgSrc} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-fit transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
              />

              {/* Bottom Card Title Overlay Panel */}
              <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 pt-20 w-full">
                <h3 className="font-roboto font-bold text-base tracking-wide text-white transition-colors duration-300 group-hover:text-[#FF3B3B]">
                  {item.title}
                </h3>
              </div>

              {/* Ambient Blueprint Mesh Glow behind card text */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}

          {/* Decorative Technical Vector Block - Only show if there's an odd number */}
          {disciplines.length % 2 !== 0 && (
            <div className="hidden xl:flex border border-dashed border-zinc-900/40 rounded-2xl items-center justify-center p-6 bg-gradient-to-br from-zinc-950/20 to-transparent aspect-[300/236] opacity-30">
              <div className="w-full h-full border border-dashed border-zinc-900/60 rounded-xl relative flex items-center justify-center">
                <span className="text-[10px] font-orbitron tracking-widest text-zinc-700">BOTLEAGUE // SPEC</span>
              </div>
            </div>
          )}
          
        </div>

      </div>
    </section>
  );
}

export default CompetitionDisciplines;