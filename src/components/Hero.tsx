import React, { useEffect, useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import image from '../../public/image.png'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Zaid Shaikh
            </h1>
            <h2 className="text-2xl lg:text-3xl text-indigo-600 font-semibold">
              Full-Stack Developer
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Problem Solver | Tech Enthusiast
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Passionate about creating elegant solutions to complex problems.
              I specialize in building scalable web applications with modern technologies
              and clean, maintainable code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                href="/Zaid_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
              {/* <button className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </button> */}
              <button
                onClick={scrollToNext}
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                View My Work
              </button>
            </div>
          </div>
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center shadow-xl">
                <img
                  src={image}
                  alt="Zaid Shaikh"
                  className="w-72 h-72 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToNext} className="text-indigo-600 hover:text-indigo-700 transition-colors">
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;