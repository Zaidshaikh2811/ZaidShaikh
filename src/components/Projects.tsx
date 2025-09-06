import React, { useEffect, useState, useRef } from 'react';
import { Github, ExternalLink, Code2, Database, Smartphone } from 'lucide-react';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string ;
  category: string;
}


const projectsData: Project[] = [
  {
    id: 7,
    title: "AI-Powered Applications",
    description: "The AI Job Application Assistant  offers features such as automated resume tailoring, personalized cover letter generation, and AI-driven job matching, aiming to reduce the time and effort involved in applying for jobs",
    image: "/AIResume.png",
    technologies: ["Next.js", "PostgreSQL (Neon)", "Drizzle ORM", "Google Gemini", "Typescript", "Tailwind CSS"],
    liveUrl: "https://ai-job-application-assistant.vercel.app",
    githubUrl: "https://github.com/Zaidshaikh2811/AI-Job-Application-Assistant",
    category: 'Full-Stack'
  },
    {
    id: 8,
    title: "BookStore",
    description: "A cross-platform mobile bookstore app built with React Native (Expo), complete with a supporting backend to manage book listings, user accounts, and more.",
    image: "/BookStore.png",
    technologies: ["React Native (Expo)", "Node.js with Express.js", "MongoDB", "Zustand", "Typescript", "React Nativewind"],
    // liveUrl: "https://github.com/Zaidshaikh2811/Native_BookStore",
    githubUrl: "https://github.com/Zaidshaikh2811/Native_BookStore",
    category: 'Mobile-App'
  },  {
    id: 9,
    title: "FitNest Fitness Platform",
    description: "A scalable microservices-based fitness tracking and AI recommendation platform built with Java (Spring Boot), React, RabbitMQ, Docker, and more.",
    image: "/ActivityAI.png",
    technologies: ["Java (Spring Boot)", "RabbitMQ ", "Eureka Server", "Spring Cloud Config", "Docker "],
    // liveUrl: "https://github.com/Zaidshaikh2811/ActivityAI-Microservices-Platform",
    githubUrl: "https://github.com/Zaidshaikh2811/ActivityAI-Microservices-Platform",
    category: 'Backend'
  },
    {
    id: 1,
    title: "Public Transport Complaint Portal",
    description: "A full-stack web app for users to report and track public transport complaints with real-time status updates and media support.",
    image: "/publicTransport.png",
    technologies: ["Next.js", "Neon Database", "Drizzle ORM", "Typescript", "Tailwind CSS"],
    liveUrl: "https://public-transport-complain.vercel.app/",
    githubUrl: "https://github.com/Zaidshaikh2811/PublicTransportComplain",
    category: 'Full-Stack'
  },
  {
    id: 2,
    title: " Developer Community Platform",
    description: " A real- time social platform for developers to share updates, showcase work, and engage  with the tech community.",
    image: "/DevPulse.png",
    technologies: ["NextJS", "Tailwind", "Typescript", "Framer Motion"],
    liveUrl: "https://devpulse-ruddy.vercel.app/",
    githubUrl: "https://github.com/Zaidshaikh2811/Devpulse",
    category: 'Full-Stack'
  },
  {
    id: 3,
    title: "Mock Interview Simulator",
    description: "A web app to help users practice technical interviews with timed questions and instant feedback.",
    image: "/AIInterview.png",
    technologies: ["Nextjs", "Tailwind", "Clerk", "Neon Database", "Drizzle ORM", "Gemini AI"],
    liveUrl: "https://mock-interview-five.vercel.app/",
    githubUrl: "https://github.com/Zaidshaikh2811/MockInterview",
    category: 'Full-Stack'
  },
  {
    id: 4,
    title: "AI Travel Planner",
    description: "An AI-powered web app that creates personalized travel itineraries based on user preferences.",
    image: "/TripPlanner.png",
    technologies: ["Next.js", "Express", "MongoDB", "Google Maps API"],
    liveUrl: "https://ai-travel-7tbm.vercel.app/",
    githubUrl: "https://github.com/Zaidshaikh2811/AI-Travel",
    category: 'Full-Stack'
  },
  {
    id: 5,
    title: "Next Social Media Platform",
    description: "A modern full-stack social media app with real-time interactions, posting, and user engagement features.",
    image: "/SocialMedia.png",
    technologies: ["NextJS", "Typescript", "ImageKit", "Neon Database", "Prisma", "Clerk"],
    liveUrl: "https://next-social-media-kappa.vercel.app/",
    githubUrl: "https://github.com/Zaidshaikh2811/Next_Social_Media",
    category: 'Full-Stack'
  },
  {
    id: 6,
    title: "JobBoard – Job Listing Platform",
    description: "A web app for browsing, posting, and managing job listings across various roles and industries.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: [" Next.js", "Tailwind", "Clerk", "Stripe"],
    liveUrl: "https://job-board-pi-seven.vercel.app/",
    githubUrl: "https://github.com/Zaidshaikh2811/JobBoard",

    category: 'Full-Stack'
  },
];




const Projects = () => {
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
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mobile': return <Smartphone className="w-5 h-5" />;
      case 'Backend': return <Database className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development,
            from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform ${visibleItems.has(index)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
                } hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 flex items-center">
                    {getCategoryIcon(project.category)}
                    <span className="ml-1">{project.category}</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                    {

                        project.liveUrl &&
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>    }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;