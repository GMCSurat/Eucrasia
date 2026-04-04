import { Trophy } from 'lucide-react';

export default function Competitions() {
  const offlineCompetitions = [
  { title: 'Crescendo (Music)', prize: '—', link: '  https://docs.google.com/forms/d/e/1FAIpQLSfJFG24pJX2FQC6cqJR3cpWoApTezvHfx_zf6hkK5H7WmHYVg/viewform?usp=header' },
  { title: 'Pitch Panthers', prize: '—', link: 'https://docs.google.com/forms/d/e/1FAIpQLSd2K9kN4PKDOzPn0NsXth7HNbxMXq3C9g3mgueqvjjJN98FZA/viewform?usp=header' },
  { title: 'Battle of Bands', prize: '—', link: 'https://forms.gle/a14xMqmk2h1e9pN39' },
  { title: 'Hawkins Hustle (Dance)', prize: '—', link: 'https://forms.gle/EBokmz28tgkSiJaBA' },
  { title: 'Verbal Gauntlet', prize: '—', link: 'https://docs.google.com/forms/d/e/1FAIpQLScehR4JAGXee8lEgDZ5clC3-dPiU7gAjU1P6-F85YRWatwxXg/viewform?usp=publish-editor' },
  { title: 'Ideation', prize: '—', link: 'https://docs.google.com/forms/d/e/1FAIpQLSekzbx8Pv9zDJDWARAvIdjI8aoloPWm9TgTMez5vIMiy7rCgQ/viewform?usp=header' },
  { title: 'Stranger Bytes', prize: '—', link: 'https://forms.gle/PUAT26f4i1ZJktvBA' },
  { title: 'Lemon Things Got Strange', prize: '—', link: 'https://forms.gle/hdGyEzyu2pndYwec6' },
  { title: 'Voices of Upside Down', prize: '—', link: 'https://forms.gle/ue2BagyTp3LDCdkw8' },
  { title: 'Still like Steve Harrington', prize: '—', link: ' https://forms.gle/bBUoftCkhienkibN9' },
  { title: 'Spill the Ink', prize: '—', link: 'https://forms.gle/wWwBeGZ6w6AndDrN9' },
  { title: 'Parallel Canvas', prize: '—', link: 'https://docs.google.com/forms/d/e/1FAIpQLSd2UGaadsQbHYClAi0FT0oTu-uS_248pTVrTEKSuO5khw7CRg/viewform?usp=publish-editor' },
  { title: 'Shadows on Fabric', prize: '—', link: 'https://docs.google.com/forms/d/e/1FAIpQLScyKTHD9HqQMejMV9ziR8xx8CBnzE_168N5VMyinALwwuSv1A/viewform?usp=header' },
  { title: 'Scent of Cinema (Quiz)', prize: '—', link: 'https://docs.google.com/forms/d/e/1FAIpQLScPTnz9xyqOckYDemv_0LDI0XfWrdGGpjA6ILyRbnHeU1efxA/viewform?usp=header' },
  { title: 'Lights Camera Action', prize: '—', link: 'https://forms.gle/gXyjCwYwCdshRsai7' },
  { title: 'Shutter Showdon (Photography)', prize: '—', link: 'https://forms.gle/zLgA355VdM38znTb7' },
  { title: 'Exhibition (Photography)', prize: '—', link: 'https://forms.gle/3XA61sR6q1KzbPgx6' },
];

const onlineCompetitions = [
  { title: 'Manuscript Tales', prize: '—', link: 'https://forms.gle/7Wn4D2vMqMbzuTr99' },
  { title: 'Synapse Strokes', prize: '—', link: 'https://forms.gle/ZMMQC5q1mBgjFtSq7' },
  { title: 'Meme Mela', prize: '—', link: 'https://docs.google.com/forms/d/e/1FAIpQLScBC00cIPgwoUsexuk9Kn_Tf26eFp_LSVg-f6Vzyj8v2pH0og/viewform?usp=dialog' },
  { title: 'Spectrum (Music)', prize: '—', link: 'https://docs.google.com/forms/d/e/1FAIpQLSceie7aRjSl5IDi4nvVoinZqryQN9zirN0pQ5VURbW6-gLdVg/viewform?usp=publish-editor' },
  { title: 'Beat Bonanza 2.0 (Dance)', prize: '—', link: 'https://forms.gle/JkioKtgjjiTTPfoA6' },
  { title: 'Demoglam (Fashion Show)', prize: '—', link: 'https://forms.gle/K6e9fUypPXD7e9cP9' },
  { title: 'Lumiere (Photography)', prize: '—', link: 'https://forms.gle/L5Cu7fFN8bs5gbt37' },
  { title: 'Esports Arena', prize: '—', link: 'https://docs.google.com/forms/d/e/1FAIpQLScWXL7xpvqmbkzvF_G-V1BGqk4BYtGKD5CThA7Y2kaD3xlZxQ/viewform?usp=publish-editor' },
];

const renderCards = (data) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
    {data.map((comp, index) => (
      <a
        key={index}
        href={comp.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full overflow-hidden touch-manipulation
        bg-gray-900/50 backdrop-blur-md 
        p-4 sm:p-6 
        rounded-lg border border-red-800/50 
        hover:border-red-500 
        transition-all duration-300 
        group 
        md:hover:scale-[1.02] 
        hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]"
      >
        <div className="flex items-start justify-between mb-4 gap-3">
          <div className="min-w-0">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors break-words">
              {comp.title}
            </h4>

            {comp.description && (
              <p className="text-gray-400 mt-2 leading-relaxed break-words">
                {comp.description}
              </p>
            )}
          </div>

          <Trophy className="text-red-500 flex-shrink-0" size={28} />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
          {comp.prize !== '—' && (
            <span className="text-lg sm:text-xl font-bold text-red-500">
              {comp.prize}
            </span>
          )}

          <span
            className="w-full sm:w-auto text-center px-5 py-2 bg-red-600 text-white rounded-lg font-semibold 
            group-hover:bg-red-700 
            transition-all duration-300 sm:transform sm:group-hover:scale-105"
          >
            Register Now →
          </span>
        </div>
      </a>
    ))}
  </div>
);

  return (
    <section
      id="competitions"
      className="min-h-screen py-20 px-4 bg-black relative overflow-x-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-16 px-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 mb-4 tracking-wider drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
            COMPETITIONS
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Compete, Win and Conquer
          </p>
        </div>

        {/* OFFLINE */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-6">
            Offline Competitions
          </h3>
          {renderCards(offlineCompetitions)}
        </div>

        {/* ONLINE */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-purple-500 mb-6">
            Online Competitions
          </h3>
          {renderCards(onlineCompetitions)}
        </div>
      </div>
    </section>
  );
}