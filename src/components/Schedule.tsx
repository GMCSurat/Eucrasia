import { useState } from 'react';
import { Clock, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const schedule = [
  {
    day: 'Day 1',
    date: 'April 24, 2026',
    theme: 'The Opening Gate',
    events: [
      { time: '06:00 AM', title: 'Marathon',location : 'College Campus', type: 'general', detail :[]},
      { time: '08:00 AM', title: 'Inauguration', location: 'College Gate', type: 'ceremony', detail :[]},
      { time: '09:00 AM', title: 'Shadows On Fabric', location: 'Sushrut Hall', type: 'competition', detail :[] },
      { time: '09:00 AM', title: 'Music Competitions', location: 'Auditorium', type: 'competition',detail: ['Crescendo : Solo Singing', 'Raaga Rumble : Classical Solo Singing', 'Falsetto : Western Solo Singing ', 'Mirror Third : Duet Singing' , 'Master of Puppets : Instrumental Solo Competition'] },
      { time: '09:00 AM', title: 'Mock Parliament : Senate', location: 'Sushrut Hall', type: 'competition', detail :[] },
      { time: '07:00 PM', title: 'Camazotz Showdown : Dance Night', location: 'Central Ground', type: 'ceremony', detail :[] },
    ],
  },
  {
    day: 'Day 2',
    date: 'April 25, 2026',
    theme: 'Into The Upside Down',
    events: [
      { time: '09:00 AM', title: 'Blood Donation', location: 'Blood Bank above Old Trauma Centre', type: 'general', detail : [] },
      { time: '09:00 AM', title: 'Hawkins Hustle : Dance Competition', location: 'Auditorium', type: 'competition', detail :[] },
      { time: '09:00 AM', title: 'Shutter Showdown : Photography', location: 'Charak Hall', type: 'competition', detail :[] },
      { time: '02:00 PM', title: 'Rounds : Beyond the Wards', location: 'Council Room', type: 'competition', detail :[] },
      { time: '02:00 PM', title: 'Parallel Canvas', location: 'Sushrut Hall', type: 'competition', detail :[] },
      { time: '07:00 PM', title: 'Kahaniyon ka Karawan : Drama', location: 'Central Ground', type: 'ceremony', detail :[] },
    ],
  },
  {
    day: 'Day 3',
    date: 'April 26, 2026',
    theme: 'The Mind Flayer Night',
    events: [
      { time: '09:00 AM', title: 'Tree Plantation', location: 'Campus', type: 'general', detail :[] },
      { time: '09:00 AM', title: 'Ica Aperture 2.0', location: 'Charak Hall', type: 'competition', detail :[] },
      { time: '09:00 AM', title: 'Spell The Ink', location: 'Sushrut Hall', type: 'competition', detail :[] },
      { time: '02:00 PM', title: 'Ideation Arena : Clash of Fandoms', location: 'Charak Hall', type: 'competition', detail :[] },
      { time: '02:00 PM', title: 'Frames of Life', location: 'Anatomy alley', type: 'competition', detail :[] },
      { time: '07:00 PM', title: 'Elixir : Fashion Show', location: 'Central Ground', type: 'competition', detail :[] },
    ],
  },
  {
    day: 'Day 4',
    date: 'April 27, 2026',
    theme: 'Back to Hawkins',
    events: [
      { time: '09:00 AM', title: 'Scent of Cinema', location: 'Charak Hall', type: 'ceremony', detail :[] },
      { time: '09:00 AM', title: 'Mission Impossible 2.0', location: 'Central Ground', type: 'ceremony', detail :[] },
      { time: '09:00 AM', title: 'Hellfire Streetz : Flash Mob', location: 'Central Ground', type: 'ceremony', detail :[] },
      { time: '09:00 AM', title: 'Verbal Gauntlet', location: 'Sushrut Hall', type: 'competition', detail :[] },
      { time: '02:00 PM', title: 'Stranger Bites', location: 'Dining Hall', type: 'general', detail :[] },
      { time: '07:00 PM', title: 'Ode to The Meds', location: 'Central Ground', type: 'ceremony', detail :[] },
    ],
  },
];

const typeStyles: Record<string, string> = {
  competition: 'bg-red-950/60 border-red-700/50 text-red-400',
  workshop:    'bg-blue-950/60 border-blue-700/50 text-blue-400',
  ceremony:    'bg-purple-950/60 border-purple-700/50 text-purple-400',
  break:       'bg-gray-900/60 border-gray-700/50 text-gray-400',
  general:     'bg-gray-900/60 border-gray-700/50 text-gray-300',
};

const typeDot: Record<string, string> = {
  competition: 'bg-red-500',
  workshop:    'bg-blue-500',
  ceremony:    'bg-purple-500',
  break:       'bg-gray-500',
  general:     'bg-gray-400',
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  return (
    <section id="schedule" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl sm:text-6xl font-bold text-red-600  mb-4 "
            data-text="SCHEDULE"
          >
            SCHEDULE
          </h2>
          <p className="text-gray-400 text-lg">4 Days of Non-Stop Action</p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { label: 'Competition', type: 'competition' },
            { label: 'Ceremony',    type: 'ceremony' },
            { label: 'General',     type: 'general' },
          ].map((item) => (
            <div key={item.type} className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${typeDot[item.type]}`}></span>
              <span className="text-gray-400 text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Day Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {schedule.map((day, index) => (
            <button
              key={index}
              onClick={() => { setActiveDay(index); setExpandedEvent(null); }}
              className={`p-4 rounded-lg border-2 text-left transition-all duration-300 transform hover:scale-105 ${
                activeDay === index
                  ? 'border-red-500 bg-red-950/20 neon-border'
                  : 'border-gray-700 bg-gray-900/50 hover:border-red-500'
              }`}
            >
              <div className={`text-lg font-bold mb-1 ${activeDay === index ? 'text-red-500' : 'text-white'}`}>
                {day.day}
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-xs mb-1">
                <Calendar size={11} />
                <span>{day.date}</span>
              </div>
              <div className="text-gray-500 text-xs">{day.theme}</div>
            </button>
          ))}
        </div>

        {/* Events Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-red-900/30 hidden sm:block"></div>

          <div className="space-y-3">
            {schedule[activeDay].events.map((event, index) => (
            <div
  key={index}
  className={`relative sm:pl-14 rounded-lg border transition-all duration-300 ${typeStyles[event.type]} cursor-pointer ${
  expandedEvent === index ? 'scale-[1.02]' : ''
}`}
  onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
>
                {/* Timeline dot */}
                <div className={`absolute left-3.5 top-5 w-3 h-3 rounded-full border-2 border-black hidden sm:block ${typeDot[event.type]}`}></div>

                <div className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* Time */}
                    <div className="flex items-center gap-1.5 text-gray-400 whitespace-nowrap text-sm shrink-0">
                      <Clock size={14} />
                      <span className="font-mono">{event.time}</span>
                    </div>
                    {/* Title */}
                    <div
  className={`font-bold text-white transition-all duration-300 ${
    expandedEvent === index
      ? 'whitespace-normal break-words'
      : 'truncate'
  }`}
>
  {event.title}
</div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {expandedEvent === index
  ? <ChevronUp size={16} className="text-gray-400" />
  : <ChevronDown size={16} className="text-gray-400" />
}
                  </div>
                </div>

                {/* Expanded detail */}
     {expandedEvent === index && (
  <div className="px-4 pb-4 pt-2 border-t border-white/10 space-y-3">

    {/* 📄 Additional Details */}
    {event.detail && event.detail.length > 0 && (
      <ul className="space-y-1">
        {event.detail.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
            <span className="text-red-500 mt-0.5">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
    {/* 📍 Location FIRST */}
    <div className="flex items-center gap-2 text-sm text-gray-300">
      <MapPin size={14} className="text-red-500" />
      <span>{event.location}</span>
    </div>

  </div>
)}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
