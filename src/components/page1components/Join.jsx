import React from 'react';

import nitDelhi from '../../assets/images/NIT.png';
import indianBit from '../../assets/images/indianbit.png';
import nitSilchar from '../../assets/images/nitsilchar.png';
import deliveryRobotic from '../../assets/images/deliveryrobotic.png';
import iitBombay from '../../assets/images/iitbomby.png';
import generalRobotic from '../../assets/images/generalrobotic.png';

function Join() {
  const formCards = [
    {
      title: "BECOME IN JUDGE",
      inputs: ["Name", "Location", "Enroll"]
    },
    {
      title: "VOLUNTEER",
      inputs: ["Name", "Location", "Enroll"]
    },
    {
      title: "COMMUNITY MEMBER",
      inputs: ["Name", "Location", "Enroll"]
    }
  ];

  const sponsorRows = [
    [
      { name: "NIT DELHI", logo: nitDelhi },
      { name: "INDIAN BIT", logo: indianBit },
      { name: "NIT SILCHAR", logo: nitSilchar }
    ],
    [
      { name: "ROBO COMPANY", logo: deliveryRobotic },
      { name: "IIT BOMBAY", logo: iitBombay },
      { name: "ROBO COMPANY", logo: generalRobotic }
    ]
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-16 select-none font-roboto">
      <div className="max-w-6xl mx-auto">
        
        {/* ================= TOP SECTION ================= */}
        <div className="mb-24">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold tracking-wider uppercase text-white mb-14">
            JOIN THE ECOSYSTEM
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formCards.map((card, cardIdx) => (
              <div 
                key={cardIdx} 
                className="bg-[#0A0A0A] border border-surface rounded-2xl p-6 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <h3 className="font-orbitron font-bold! text-sm tracking-widest text-zinc-300 uppercase">
                    {card.title}
                  </h3>

                  <div className="space-y-4">
                    {card.inputs.map((placeholderText, inputIdx) => (
                      <input 
                        key={inputIdx}
                        type="text" 
                        placeholder={placeholderText}
                        className="w-full bg-[#141414] border border-surface rounded-xl px-4 py-3 text-sm text-white placeholder-innersurface focus:outline-none focus:border-accent-red/40 focus:ring-1 focus:ring-accent-red/30 transition-all duration-200"
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button className="w-full bg-accent-red hover:opacity-90 text-white font-orbitron font-bold text-xs tracking-[0.2em] uppercase py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-red-950/10 active:scale-[0.99]">
                    SIGN UP
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div>
          <h2 className="font-orbitron text-3xl font-bold tracking-[0.25em] uppercase mb-12">
            SPONSORS
          </h2>

          <div className="space-y-12">
            {sponsorRows.map((row, rowIdx) => (
              <div 
                key={rowIdx} 
                className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center justify-items-center"
              >
                {row.map((sponsor, sponsorIdx) => (
                  <div key={sponsorIdx} className="flex items-center gap-4 w-full max-w-[280px] justify-center sm:justify-start">
                    <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <img 
                        src={sponsor.logo} 
                        alt={`${sponsor.name} institutional logo`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  
                    <span className="font-orbitron text-xs font-bold! tracking-[0.18em] text-surfaceinner whitespace-nowrap">
                      {sponsor.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Join;