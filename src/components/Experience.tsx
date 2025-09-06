import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

interface ExperienceItem {
  id: number;
  type: 'work' | 'education' | 'Internship' | 'Freelance';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  highlight?: boolean;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Software Engineer ",
    type: 'Internship',
    company: "SCIQUS INFOTECH PVT. LTD.",
    period: "2025 - present",
    location: 'Pune, India',
    description: ["Built and deployed a full-stack e-commerce platform with a storefront and admin dashboard", "Integrated third-party REST APIs, reducing product data update latency by 60%", "Technologies: React, SCSS"],
    highlight: true
  },
  {
    id: 2,
    type: 'Freelance',
    title: "Front End Developer",
    company: "Maulana Azad Polytechnic",
    period: "2022 - 2022",
    location: 'Solapur, India',
    description: ["Developed a college management system  for college", "Automated student data entry, saving 25+ hours/week ", "Technologies: React, Node.js, AWS, Docker."]
  },
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey of continuous learning and professional growth in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-200"></div>

            {experienceData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`relative flex flex-col md:flex-row mb-12 transform transition-all duration-700 ${visibleItems.has(index)
                  ? 'translate-x-0 opacity-100'
                  : index % 2 === 0
                    ? '-translate-x-8 opacity-0'
                    : 'translate-x-8 opacity-0'
                  } ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${visibleItems.has(index)
                  ? item.highlight
                    ? 'bg-indigo-600 scale-125'
                    : 'bg-indigo-400'
                  : 'bg-gray-300'
                  }`}>
                  {item.type === 'education' && (
                    <Award className="absolute -top-1 -left-1 w-6 h-6 text-indigo-600" />
                  )}
                </div>

                {/* Content card */}
                <div className={`md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl ${item.type === 'work' ? 'border-indigo-600' : 'border-purple-600'
                    }`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.type === 'work'
                        ? 'bg-indigo-100 text-indigo-800'
                        : 'bg-purple-100 text-purple-800'
                        }`}>
                        {item.type[0].toUpperCase() + item.type.slice(1)}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.period}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <div className="flex items-center text-indigo-600 font-semibold mb-2">
                      <span>{item.company}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </div>

                    <ul className="space-y-2">
                      {item.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-700 flex items-start">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;