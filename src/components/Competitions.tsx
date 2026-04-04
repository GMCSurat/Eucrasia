import { useState } from "react";
import { Trophy } from "lucide-react";

export default function Competitions() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  const offlineCompetitions = {
    Music: [
      { name: "Crescendo", link: "https://docs.google.com/forms/d/e/1FAIpQLSfJFG24pJX2FQC6cqJR3cpWoApTezvHfx_zf6hkK5H7WmHYVg/viewform?usp=header" },
      { name: "Pitch Panthers", link: "https://docs.google.com/forms/d/e/1FAIpQLSd2K9kN4PKDOzPn0NsXth7HNbxMXq3C9g3mgueqvjjJN98FZA/viewform?usp=header" },
      { name: "Battle of Bands", link: "https://forms.gle/a14xMqmk2h1e9pN39" }
    ],
    Dance: [
      { name: "Hawkins Hustle", link: "https://forms.gle/EBokmz28tgkSiJaBA" }
    ],
    Senate: [
      { name: "Verbal Gauntlet", link: "https://docs.google.com/forms/d/e/1FAIpQLScehR4JAGXee8lEgDZ5clC3-dPiU7gAjU1P6-F85YRWatwxXg/viewform?usp=publish-editor" },
      { name: "Ideation", link: "https://docs.google.com/forms/d/e/1FAIpQLSekzbx8Pv9zDJDWARAvIdjI8aoloPWm9TgTMez5vIMiy7rCgQ/viewform?usp=header" }
    ],
    "Cold Masterchef": [
      { name: "Stranger Bytes", link: "https://forms.gle/PUAT26f4i1ZJktvBA" }
    ],
    Informal: [
      { name: "Lemon Things Got Strange", link: "https://forms.gle/hdGyEzyu2pndYwec6" },
      { name: "Voices of Upside Down", link: "https://forms.gle/ue2BagyTp3LDCdkw8" },
      { name: "Steal like Steve Harrington", link: "https://forms.gle/bBUoftCkhienkibN9" }
    ],
    "Open Mic": [
      { name: "Spill the Ink", link: "https://forms.gle/wWwBeGZ6w6AndDrN9" }
    ],
    Art: [
      { name: "Parallel Canvas", link: "https://docs.google.com/forms/d/e/1FAIpQLSd2UGaadsQbHYClAi0FT0oTu-uS_248pTVrTEKSuO5khw7CRg/viewform?usp=publish-editor" },
      { name: "Shadows on Fabric", link: "https://docs.google.com/forms/d/e/1FAIpQLScyKTHD9HqQMejMV9ziR8xx8CBnzE_168N5VMyinALwwuSv1A/viewform?usp=header" }
    ],
    Quiz: [
      { name: "Scent of Cinema", link: "https://docs.google.com/forms/d/e/1FAIpQLScPTnz9xyqOckYDemv_0LDI0XfWrdGGpjA6ILyRbnHeU1efxA/viewform?usp=header" }
    ],
    "Lights Camera Action": [
      { name: "Aperture 2.0", link: "https://forms.gle/gXyjCwYwCdshRsai7" }
    ],
    Photography: [
      { name: "Shutter Showdown", link: "https://forms.gle/zLgA355VdM38znTb7" },
      { name: "Exhibition", link: "https://forms.gle/3XA61sR6q1KzbPgx6" }
    ]
  };

  const onlineCompetitions = {
    Literature: [
      { name: "Manuscript Tales", link: "https://forms.gle/7Wn4D2vMqMbzuTr99" }
    ],
    Art: [
      { name: "Synapse Strokes", link: "https://forms.gle/ZMMQC5q1mBgjFtSq7" }
    ],
    Meme: [
      { name: "Meme Mela", link: "https://docs.google.com/forms/d/e/1FAIpQLScBC00cIPgwoUsexuk9Kn_Tf26eFp_LSVg-f6Vzyj8v2pH0og/viewform?usp=dialog" }
    ],
    Music: [
      { name: "Spectrum", link: "https://docs.google.com/forms/d/e/1FAIpQLSceie7aRjSl5IDi4nvVoinZqryQN9zirN0pQ5VURbW6-gLdVg/viewform?usp=publish-editor" }
    ],
    Dance: [
      { name: "Beat Bonanza 2.0", link: "https://forms.gle/JkioKtgjjiTTPfoA6" }
    ],
    Fashion: [
      { name: "Demoglam", link: "https://forms.gle/K6e9fUypPXD7e9cP9" }
    ],
    Photography: [
      { name: "Lumiere", link: "https://forms.gle/L5Cu7fFN8bs5gbt37" }
    ],
    Esports: [
      { name: "Esports Arena", link: "https://docs.google.com/forms/d/e/1FAIpQLScWXL7xpvqmbkzvF_G-V1BGqk4BYtGKD5CThA7Y2kaD3xlZxQ/viewform?usp=publish-editor" }
    ]
  };

  const renderSection = (data, color) => (
    <div className="flex flex-col gap-4">
      {Object.keys(data).map((category, index) => {
        const isOpen = activeCategory === category;

        return (
          <div
            key={index}
            className={`rounded-xl border bg-gray-900/60 overflow-hidden transition-all duration-300 ${
              isOpen
                ? color === "blue"
                  ? "border-blue-500"
                  : "border-purple-500"
                : "border-gray-700"
            }`}
          >
            {/* CATEGORY HEADER */}
            <div
              onClick={() => handleClick(category)}
              className="p-5 flex justify-between items-center cursor-pointer"
            >
              <h3
                className={`text-xl font-bold ${
                  color === "blue" ? "text-blue-500" : "text-purple-500"
                }`}
              >
                {category}
              </h3>
              <Trophy
                className={
                  color === "blue" ? "text-blue-500" : "text-purple-500"
                }
              />
            </div>

            {/* DROPDOWN */}
            <div
              className={`origin-top transition-all duration-300 ${
                isOpen
                  ? "scale-y-100 opacity-100 mt-2"
                  : "scale-y-0 opacity-0 h-0"
              }`}
            >
              <div className="px-5 pb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data[category].map((event, i) => (
                    <a
                      key={i}
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col justify-between bg-gray-900/50 backdrop-blur-md 
                      p-4 rounded-lg border border-red-800/40 
                      hover:border-red-500 
                      transition-all duration-300 
                      group 
                      hover:scale-[1.02] 
                      hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] min-h-[120px]"
                    >
                      {/* TITLE */}
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                          {event.name}
                        </h4>
                        <Trophy className="text-red-500" size={20} />
                      </div>

                      {/* BUTTON */}
                      <div className="flex justify-end mt-4">
                        <span
                          className={`px-4 py-2 rounded-lg text-white font-semibold ${
                            color === "blue"
                              ? "bg-blue-600 group-hover:bg-blue-700"
                              : "bg-purple-600 group-hover:bg-purple-700"
                          } transition-all duration-300`}
                        >
                          Register →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section 
    id = "competitions"
    className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-red-600 mb-4">
            COMPETITIONS
          </h2>
          <p className="text-gray-400">
            Choose your battleground and compete
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl text-blue-500 mb-6">
            Offline Competitions
          </h3>
          {renderSection(offlineCompetitions, "blue")}
        </div>

        <div>
          <h3 className="text-3xl text-purple-500 mb-6">
            Online Competitions
          </h3>
          {renderSection(onlineCompetitions, "purple")}
        </div>

      </div>
    </section>
  );
}