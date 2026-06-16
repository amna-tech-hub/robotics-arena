import React from 'react';

// Exact image asset imports mapping directly to your explorer sidebar files
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

  // Organizes your local imported brand assets to run flawlessly inside our map loops
  const sponsorRows = [
    // Top Row Brand Components
    [
      { name: "NIT DELHI", logo: nitDelhi },
      { name: "INDIAN BIT", logo: indianBit },
      { name: "NIT SILCHAR", logo: nitSilchar }
    ],
    // Bottom Row Brand Components
    [
      { name: "ROBO COMPANY", logo: deliveryRobotic },
      { name: "IIT BOMBAY", logo: iitBombay },
      { name: "ROBO COMPANY", logo: generalRobotic }
    ]
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-16 select-none font-roboto">
      <div className="max-w-6xl mx-auto">
        
        {/* ================= TOP SECTION: JOIN THE ECOSYSTEM ================= */}
        <div className="mb-24">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold tracking-wider uppercase text-white mb-14">
            JOIN THE ECOSYSTEM
          </h2>

          {/* 3-Column Sign-Up Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formCards.map((card, cardIdx) => (
              <div 
                key={cardIdx} 
                className="bg-[#0A0A0A] border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-zinc-800"
              >
                {/* Form Context Header */}
                <div className="space-y-6">
                  <h3 className="font-orbitron font-bold text-sm tracking-widest text-zinc-300 uppercase">
                    {card.title}
                  </h3>

                  {/* Inputs Loop Stack */}
                  <div className="space-y-4">
                    {card.inputs.map((placeholderText, inputIdx) => (
                      <input 
                        key={inputIdx}
                        type="text" 
                        placeholder={placeholderText}
                        className="w-full bg-[#141414] border border-zinc-950 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accent-red/40 focus:ring-1 focus:ring-accent-red/30 transition-all duration-200"
                      />
                    ))}
                  </div>
                </div>

                {/* Submit Action Button using your global accent color config */}
                <div className="pt-8">
                  <button className="w-full bg-accent-red hover:opacity-90 text-white font-orbitron font-bold text-xs tracking-[0.2em] uppercase py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-red-950/10 active:scale-[0.99]">
                    SIGN UP
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM SECTION: SPONSORS ================= */}
        <div>
          <h2 className="font-orbitron text-3xl font-bold tracking-[0.25em]  uppercase mb-12">
            SPONSORS
          </h2>

          {/* Structural Row Container matching Figma Layout Constraints */}
          <div className="space-y-12">
            {sponsorRows.map((row, rowIdx) => (
              <div 
                key={rowIdx} 
                className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                {row.map((sponsor, sponsorIdx) => (
                  <div key={sponsorIdx} className="flex items-center gap-4 w-full max-w-[240px] justify-center sm:justify-start">
                    {/* Visual Brand Icon Mark Container */}
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <img 
                        src={sponsor.logo} 
                        alt={`${sponsor.name} institutional logo`} 
                        className="max-w-full max-h-full object-contain filter brightness-95"
                      />
                    </div>
                    {/* Typographic Identity Stamp */}
                    <span className="font-orbitron text-xs font-bold tracking-[0.18em] text-zinc-400 whitespace-nowrap">
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