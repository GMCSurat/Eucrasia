import { Trophy } from 'lucide-react';

export default function Competitions() {
  const offlineCompetitions = [
    {
      title: 'Code Hunt',
      description: 'Navigate through mysterious coding challenges in real-time',
      prize: '₹10,000',
      link: 'https://forms.gle/your-link-1',
    },
    {
      title: 'Tech Quiz Battle',
      description: 'Test your knowledge in this intense technology quiz competition',
      prize: '₹5,000',
      link: 'https://forms.gle/your-link-2',
    },
    {
      title: 'Hackathon',
      description: '24-hour coding marathon to build innovative solutions',
      prize: '₹25,000',
      link: 'https://forms.gle/your-link-3',
    },
  ];

  const onlineCompetitions = [
    {
      title: 'Design Contest',
      description: 'Create stunning themed designs',
      prize: '₹3,000',
      link: 'https://forms.gle/your-link-4',
    },
    {
      title: 'Meme Challenge',
      description: 'Showcase your creativity with event-themed memes',
      prize: '₹2,000',
      link: 'https://forms.gle/your-link-5',
    },
  ];

  const renderCards = (data) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {data.map((comp, index) => (
        <a
          key={index}
          href={comp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-full overflow-hidden touch-manipulation
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
              <p className="text-gray-400 mt-2 leading-relaxed break-words">
                {comp.description}
              </p>
            </div>

            <Trophy className="text-red-500 flex-shrink-0" size={28} />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
            <span className="text-lg sm:text-xl font-bold text-red-500">
              {comp.prize}
            </span>

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