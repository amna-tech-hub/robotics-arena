import React from "react";

function CompetitionsEvents() {
  return (
    <section className="relative bg-[#0D0D0D] text-white py-16 px-6 md:px-16 overflow-hidden border-b border-gray-900">
      {/* Top Right*/}
      <div className="absolute top-[10%] right-[-20%] w-[733px] h-[733px] rounded-full bg-[#5F2F2F]/42 blur-[90px] pointer-events-none z-0" />

      {/* Bottom Left  */}
      <div className="absolute bottom-[-50%] left-[-35%] w-[733px] h-[733px] rounded-full bg-[#5F2F2F]/42 blur-[70px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold tracking-wider uppercase mb-12">
          COMPETITIONS & EVENTS
        </h2>

        {/* 3-Column  */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* ================= COLUMN 1: LIVE================= */}
          <div className="flex-1 flex flex-col">
            <h3 className="font-orbitron text-lg font-bold text-red-500 tracking-wide mb-4 uppercase">
              LIVE NOW
            </h3>
            <div className="bg-surface border border-surfaceinner rounded-xl p-5 flex-1 flex flex-col">
              
              {/* Header with FULL WIDTH border-bottom */}
              <div className="mb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-roboto font-semibold text-lg text-[#EAEAEA]">
                      Bengaluru Regionals
                    </h4>
                    <p className="font-roboto text-sm text-gray-500 mt-0.5  mb-3">
                      Lorem Ipsum
                    </p>
                  </div>
                  <span className="bg-accent-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Ongoing
                  </span>
                </div>
                <div className="border-b border-surfaceinner mt-3 w-full"></div>
              </div>

              <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-[50%] space-y-8">
                  
                  <div className="flex items-center">
                    <div className="space-y-8 w-14">
                      <div className="h-6 bg-surfaceinner rounded w-full"></div>
                      <div className="h-6 bg-surfaceinner rounded w-full"></div>
                    </div>
                    <div className="w-4 h-12 border-y border-r border-accent-red"></div>
                    <div className="border-y w-5 border-accent-red"></div>
                    <div className="h-6 bg-surfaceinner rounded w-14 self-center"></div>
                  </div>

                  {/* Bracket Row 2 */}
                  <div className="flex items-center">
                    <div className="space-y-8 w-14">
                      <div className="h-6 bg-surfaceinner rounded w-full"></div>
                      <div className="h-6 bg-surfaceinner rounded w-full"></div>
                    </div>
                    <div className="w-4 h-12 border-y border-r border-accent-red"></div>
                    <div className="border-y w-5 border-accent-red"></div>
                    <div className="h-6 bg-surfaceinner rounded w-14 self-center"></div>
                  </div>

                </div>
                
                {/* Vertical Connector */}
                <div className="w-4 h-28 border-y border-r border-accent-red"></div>
                <div className="border-y w-8 border-accent-red"></div>
                {/* Final Winner Box with FIXED width */}
                <div className="h-6 bg-surfaceinner rounded w-14 self-center"></div>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2================= */}
          <div className="flex-1 flex flex-col">
            <h3 className="font-orbitron text-lg font-bold text-gray-300 tracking-wide mb-4 uppercase">
              UPCOMING
            </h3>
            <div className="flex-1 flex flex-col space-y-4">
              {/* Event 1 */}
              <div className="bg-surface border border-surfaceinner rounded-xl p-5 flex-1">
                <h4 className="font-roboto font-semibold text-lg text-text-primary">
                  Event in Mumbai
                </h4>
                <div className="grid grid-cols-3 gap-2 my-4 text-xs font-roboto">
                  <div>
                    <span className="text-text-primary block mb-1">Date</span>
                    <span className="text-text-primary font-medium">
                      11/11/25
                    </span>
                  </div>
                  <div>
                    <span className="text-text-primary block mb-1">
                      Location
                    </span>
                    <span className="text-text-primary font-medium">BKC</span>
                  </div>
                  <div>
                    <span className="text-text-primary block mb-1">
                      Category
                    </span>
                    <span className="text-text-primary font-medium">Lorem</span>
                  </div>
                </div>
                <button className="w-full bg-accent-red hover:bg-red-500 text-white font-roboto font-bold py-2.5 rounded-lg transition-colors uppercase tracking-wider text-sm cursor-pointer">
                  REGISTER
                </button>
              </div>

              {/* Event 2 */}
              <div className="bg-surface border border-gray-800/60 rounded-xl p-5 flex-1">
                <h4 className="font-roboto font-semibold text-lg text-text-primary">
                  Event in Delhi
                </h4>
                <div className="grid grid-cols-3 gap-2 my-4 text-xs font-roboto">
                  <div>
                    <span className="text-text-primary block mb-1">Date</span>
                    <span className="text-text-primary font-medium">
                      11/11/25
                    </span>
                  </div>
                  <div>
                    <span className="text-text-primary block mb-1">
                      Location
                    </span>
                    <span className="text-text-primary font-medium">BKC</span>
                  </div>
                  <div>
                    <span className="text-text-primary block mb-1">
                      Category
                    </span>
                    <span className="text-text-primary font-medium">Lorem</span>
                  </div>
                </div>
                <button className="w-full bg-accent-red hover:bg-red-500 text-white font-roboto font-bold py-2.5 rounded-lg transition-colors uppercase tracking-wider text-sm cursor-pointer">
                  REGISTER
                </button>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="flex-1 flex flex-col">
            <h3 className="font-orbitron text-lg font-bold text-gray-300 tracking-wide mb-4 uppercase">
              PAST RESULTS
            </h3>
            <div className="bg-surface border border-gray-800/60 rounded-xl p-5 divide-y divide-status-past flex-1">
              {/* Result 1 */}
              <div className="pb-4">
                <h4 className="font-roboto font-semibold text-base text-text-primary">
                  Bengaluru Regionals
                </h4>
                <p className="font-roboto text-xs text-surfaceinner mt-0.5">
                  Lorem Ipsum
                </p>
              </div>
              {/* Result 2 */}
              <div className="py-4">
                <h4 className="font-roboto font-semibold text-base text-text-primary">
                  Bengaluru Regionals
                </h4>
                <p className="font-roboto text-xs text-surfaceinner mt-0.5">
                  Lorem Ipsum
                </p>
              </div>
              {/* Result 3 */}
              <div className="pt-4">
                <h4 className="font-roboto font-semibold text-base text-text-primary">
                  Bengaluru Regionals
                </h4>
                <p className="font-roboto text-xs text-surfaceinner mt-0.5">
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompetitionsEvents;