interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
  id="home"
  className="relative w-screen min-h-screen flex items-start sm:items-center justify-center pt-28 sm:pt-0 overflow-hidden bg-black left-1/2 right-1/2 -mx-[50vw]"
  style={{}}
>
  <div
  className="absolute inset-0 w-full h-full z-0"
  style={{
    backgroundImage: 'url(/Eucrasia/bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center left',
    backgroundRepeat: 'no-repeat',
  }}
></div>
<div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-red-950/20 to-black"></div>
<div className="absolute inset-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

<div className="relative z-10 text-center w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 text-large text-red-600"
          data-text="EUCRASIA 2026"
        >
          EUCRASIA 2026
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl text-red-500 mb-4 animate-flicker">
          EXPERIENCE
        </p>

        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          The Fest you can't Escape
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onNavigate('registration')}
            className="px-8 py-4 bg-red-600 text-white rounded-lg font-bold text-lg hover:bg-red-700 transition-all duration-300 neon-button transform hover:scale-105"
          >
            Basic Registration
          </button>

          <button
            onClick={() => onNavigate('competitions')}
            className="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 neon-button-blue transform hover:scale-105"
          >
            Explore Competitions
          </button>

          <button
            onClick={() => onNavigate('tshirts')}
            className="px-8 py-4 bg-transparent border-2 border-red-500 text-red-500 rounded-lg font-bold text-lg hover:bg-red-500 hover:text-white transition-all duration-300 neon-button transform hover:scale-105"
          >
            Buy T-Shirt
          </button>
        </div>
      </div>

<div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
