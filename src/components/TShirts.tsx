import { ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TShirts() {
  const price = 250;

  const [selectedImage, setSelectedImage] = useState('');
  const [zoomStyle, setZoomStyle] = useState({
    transform: 'scale(1)',
    transformOrigin: 'center',
  });

  // ✅ Detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setSelectedImage('/Eucrasia/Eucrasia_front.jpeg');

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return; // ❌ disable zoom on mobile

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2)',
    });
  };

  const handleMouseLeave = () => {
    if (isMobile) return;

    setZoomStyle({
      transform: 'scale(1)',
      transformOrigin: 'center',
    });
  };

  return (
    <section id="tshirts" className="min-h-screen py-20 px-4 bg-black relative">
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-red-600 mb-4 tracking-wider drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
            EVENT T-SHIRT
          </h2>
          <p className="text-gray-400 text-lg">Limited edition merchandise</p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 items-start">
          
          {/* LEFT */}
          <div className="flex flex-col">
            
            <div
              className="w-full h-[500px] overflow-hidden rounded-lg border border-gray-800 bg-black"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={selectedImage}
                alt="T-Shirt"
                className="w-full h-full object-cover transition-transform duration-200"
                style={isMobile ? {} : zoomStyle} // ✅ disable zoom style on mobile
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-4">
              
              <img
                src="/Eucrasia/Eucrasia_front.jpeg"
                onClick={() => setSelectedImage('/Eucrasia/Eucrasia_front.jpeg')}
                className={`w-20 h-20 object-cover rounded-lg border cursor-pointer transition-all
                ${selectedImage === '/Eucrasia/Eucrasia_front.jpeg'
                  ? 'border-red-500 scale-105'
                  : 'border-gray-700 hover:border-red-500'}`}
              />

              <img
                src="/Eucrasia/Eucrasia_back.jpeg"
                onClick={() => setSelectedImage('/Eucrasia/Eucrasia_back.jpeg')}
                className={`w-20 h-20 object-cover rounded-lg border cursor-pointer transition-all
                ${selectedImage === '/Eucrasia/Eucrasia_back.jpeg'
                  ? 'border-blue-500 scale-105'
                  : 'border-gray-700 hover:border-blue-500'}`}
              />
            </div>
          </div>

          {/* RIGHT CARD */}
          <a
            href="https://forms.gle/dkuSR5vNZLdRZ1EL8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm bg-gray-900/50 backdrop-blur-md p-6 rounded-lg 
            border border-red-800/50 
            hover:border-red-500 
            transition-all duration-300 
            group hover:scale-[1.02] 
            hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]
            sticky top-24"
          >
            
            <ShoppingBag className="text-red-500 mb-4" size={50} />

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
              EUCRASIA Official T-Shirt
            </h3>

            <p className="text-gray-400 mb-4">
              Premium cotton | Exclusive design
            </p>

            <div className="mt-2">
              <p className="text-3xl font-bold text-red-500 mb-4">
                ₹{price}
              </p>

              <span className="inline-block px-6 py-2 bg-red-600 text-white rounded-lg font-semibold 
              group-hover:bg-red-700 
              transition-all duration-300 transform group-hover:scale-105">
                Buy Now →
              </span>
            </div>

          </a>

        </div>
      </div>
    </section>
  );
}