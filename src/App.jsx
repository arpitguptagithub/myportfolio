import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { ReactTyped } from "react-typed";

// Add keyframes for floating animation
const floatKeyframes = `
  @keyframes float {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-100px) translateX(40px);
    }
    100% {
      transform: translateY(-200px) translateX(0);
      opacity: 0;
    }
  }
`;

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className=" text-gray-100 w-full h-fit flex flex-col">
      <div className="gradient-blurred absolute w-full h-dvh -z-10 bg-transparent bg-gradient-to-br top-0 left-0 from-green-700 dark:to-[#282c33] to-[#eaeaea] to-55% opacity-50 blur-md"></div>
      <style>{floatKeyframes}</style>
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm border-b border-blue-500/20 z-50 transition-all duration-300">
        <div className="container mx-auto px-2 sm:px-6 py-4">
          <div className="flex justify-between items-center sm:flex-row flex-col gap-6">
            <h1 className="text-2xl font-bold text-blue-400 hover:scale-105 transition-transform duration-300 flex flex-row gap-2 items-center justify-center w-fit h-fit">
              <img
                src="/arpit.png"
                alt="logo"
                className="w-10 h-10 rounded-xl border-blue-600 border-2"
              />
              <span>Arpit Gupta</span>
            </h1>
            <div className="flex gap-2 sm:gap-6">
              {["home", "experience", "projects", "achievements", "skills"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-gray-300 hover:text-blue-400 transition-all duration-300 uppercase text-sm tracking-wider 
                    hover:transform hover:translate-y-[-2px] ${
                      activeSection === section
                        ? "border-b-2 border-blue-400"
                        : ""
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className={`min-h-screen w-full flex items-center justify-center pt-20 transition-opacity duration-1000 relative overflow-hidden
          ${isVisible.home ? "opacity-100" : "opacity-0"}`}
      >
        {/* Animated Background Pattern */}
       

        <div className="absolute inset-0">
          <svg
            className="w-full h-full opacity-30"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="grid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="0.5"
                  className="animate-pulse"
                />
              </pattern>
              <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="url(#radialGradient)"
              filter="url(#glow)"
              className="animate-ping"
              style={{ animationDuration: "3s" }}
            />
            <g className="animate-pulse">
              {Array.from({ length: 5 }).map((_, i) => (
                <circle
                  key={i}
                  cx={20 + i * 15}
                  cy={85}
                  r="0.5"
                  fill="#3B82F6"
                  style={{
                    animation: `ping 2s cubic-bezier(0, 0, 0.2, 1) infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-400/10 rounded-full"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `-${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Add a subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/95" />

        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div
              className={`space-y-6 transition-all duration-1000 transform 
        ${isVisible.home ? "translate-x-0" : "-translate-x-full"}`}
            >
              <h1 className="text-5xl font-bold leading-tight flex flex-col gap-4 mt-16">
                <ReactTyped
                  strings={["Hi, I am Arpit"]}
                  startDelay={400}
                  typeSpeed={100}
                  showCursor={true}
                />
                <span className="block text-blue-400 mt-2">
                 Software  Developer & Security Researcher
                </span>
              </h1>
              <p className="text-gray-400 text-lg">
                Specializing in secure software development and malware
                analysis. Currently working at Square X, Singapore.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/arpitguptagithub" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/arpit-gupta-9482bb239/",
                  },
                  { icon: Mail, href: "mailto:arpitb.lgupta1@gmail.com" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg border-2 border-cyan-500 
              hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div
              className={`bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 
        border-2 border-cyan-500 transition-all duration-1000 transform hover:scale-105 hover:shadow-lg 
        hover:shadow-blue-500/20 ${
          isVisible.home
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
            >
              <div className="text-sm text-blue-300 font-mono">
                <p>// Skills Overview</p>
                <p className="mt-4">const skills = {"{"}</p>
                <p className="ml-4">
                  languages: ["C++", "Rust", "Python", "Java"],
                </p>
                <p className="ml-4">
                  security: ["Malware Analysis", "Digital Forensics"],
                </p>
                <p className="ml-4">
                  microservices: ["Docker", "Kubernetes","openMP", "MPI"],
                </p>
                <p className="ml-4">cloud: ["AWS", "Azure", "GCP"]</p>
                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 bg-gray-800 transition-all duration-1000 transform
          ${
            isVisible.experience
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-12">
            {[
              {
                company: "Square X, Singapore",
                role: "Software Developer (Intern and Freelancer)",
                date: "May 2024 - Present",
                description:
                "Analyzing file formats like PDFs, legacy office files, and OOXML for hidden threats, and examining Portable Executable (PE) formats to verify digital signatures and SSL certificates in X.509 formats using Rust. A significant project, 'Last Mile Reassembly Attack' presented at DEFCON this year, demonstrated over 25 vulnerabilities in secure web gateways. Additionally, I developed custom windows images over Azure, integrated over 2o malware analysis tools. Also researched on context aware access security in industry, and code security breaching softwares for demo"
              },
              {
                company: "IIT Hyderabad",
                role: "Compiler Design Intern",
                date: "May 2023 - July 2023",
                description:
                  "Hands on experience in code compliance, optimization analysis, and cross-compilation across diverse architectures. Worked to become proficient in building parsers on Clang, adhering to ’AUTOSAR’ and ’MISRA’ rules. Conducted experiments to check various optimization levels’ effects on power consumption via various architectures, using a variety of Commercial Benchmarks.",
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 border border-transparent
                  transition-all duration-500 hover:border-blue-400 hover:scale-105
                  hover:shadow-lg hover:shadow-blue-500/20"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">
                      {exp.company}
                    </h3>
                    <p className="text-gray-400">{exp.role}</p>
                  </div>
                  <span className="text-gray-500">{exp.date}</span>
                </div>
                <p className="mt-4 text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 transition-all duration-1000 transform
          ${
            isVisible.projects
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Last Mile Reassembly Attack",
                description:
                  "Research project presented at DEFCON 2024 demonstrating vulnerabilities in secure web gateways.",
                tech: ["Rust", "Security Research"],
              },
              {
                title: "IIT Convocation App",
                description:
                  "Developed the official convocation ceremony app for IIT Tirupati.",
                tech: ["Flutter", "Firebase"],
              },
              {
                title: "Smart Laundry System",
                description:
                  "IoT-based solution for washing machines in collaboration with SRC.",
                tech: ["IoT", "Python"],
              },
              {
                title: "IIT Tirupati Website",
                description:
                  "Redesigned the official website for IIT Tirupati with a modern look.",
                tech: ["React", "Tailwind CSS"],

              },
              {
                title: "Lost & Found System",
                description:
                  "Developed a web app for managing lost and found items in the campus.",
                tech: ["python", "mysql", "google cloud"],
              },
             

            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 transition-all duration-500
                  hover:bg-gray-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-bold text-blue-400">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm
                        transition-all duration-300 hover:bg-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* Achievements Section */}
   <section
      id="achievements"
      className={`py-20 bg-gradient-to-b from-gray-800 to-gray-900 transition-all duration-1000 transform relative
        ${isVisible.achievements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="achievement-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#achievement-grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Notable Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "DEFCON 2024 Speaker",
              description: "Presented 'Last Mile Reassembly Attack' demonstrating critical vulnerabilities in secure web gateways, impacting major security vendors.",
              icon: "🔒",
              date: "2024",
              link: "#",
              tags: ["Security Research", "Public Speaking"]
            },
            {
              title: "Inter IIT Tech Meet Medalist",
              description: "Developed a secure IoT solution for smart mining, winning the bronze medal in the prestigious Inter IIT Tech Meet.",
              icon: "🌟",
              date: "2023",
              link: "#",
              tags: ["Open Source", "Development"]
            },
            {
              title: "International Hackathon Winner - Hackbells",
              description: "Led team to first place in Global Devfolio Hackathon. Developed a cybersecurity solution for organizations in 24 hours.",
              icon: "🏆",
              date: "2023",
              link: "#",
              tags: ["IoT", "Innovation"]
            },
            {
              title: "Indo Canadian Water Symposium",
              description: "Presented and awarded winners for the fresh water system locating using surronding biodiversity in the symposium.",
              icon: "🌊",
              date: "2023",
              link: "#",
              tags: ["Innovation", "Research"]

            },
            {
              title: "Shaastra 2023 - IIT Madras",
              description: "Secured 2nd place in the national level competition for modeling space debris reduction",
              icon: "🚀",
              date: "2023",
              link: "#",
              tags: ["Space Research", "Competition"]
              },
            {
              title: "IIT Tirupati Hackathon - Smart Laundry Innovation",
              description: "Developed a smart laundry system for the campus, integrating IoT and cloud services.",
              icon: "🧺",
              date: "2022",
              link: "#",
              tags: ["IoT", "Innovation"]
            }
        
          ].map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/10
                transition-all duration-500 hover:border-blue-400 hover:transform hover:scale-105
                hover:shadow-xl hover:shadow-blue-500/20"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Achievement Icon */}
              <div className="absolute -top-6 left-6 w-12 h-12 bg-blue-500/10 rounded-lg border border-blue-400/20 
                flex items-center justify-center text-2xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                {achievement.icon}
              </div>
              
              {/* Content */}
              <div className="mt-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {achievement.title}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-800/50 px-2 py-1 rounded">
                    {achievement.date}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {achievement.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {achievement.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-500/10 text-blue-300 rounded-full
                        transition-all duration-300 hover:bg-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover decoration */}
              <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300
                group-hover:border-blue-400/20 group-hover:scale-105 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 bg-gray-800 transition-all duration-1000 transform
          ${
            isVisible.skills
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Languages",
                skills: ["C++", "Rust", "Python", "Java", "SQL"],
              },
              {
                category: "Security",
                skills: [
                  "Malware Analysis",
                  "Digital Forensics",
                  "Threat Detection",
                ],
              },
              {
                category: "Cloud & DevOps",
                skills: ["AWS", "Azure", "Docker", "CI/CD"],
              },
              {
                category: "Tools",
                skills: ["Git", "Wireshark", "Burp Suite", "VS Code"],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 transition-all duration-500
                  hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 transition-all duration-300
                        hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-blue-500/20 py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">© 2025 Arpit Gupta</p>
            <div className="flex gap-4">
              <a
                href="mailto:cs21b062@iittp.ac.in"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300
                  hover:translate-y-[-2px]"
              >
                Contact
              </a>
              <a
                href="https://docs.google.com/document/d/1RdGB8YpDd42wj0V4wzDs8H6losUPQ42mtHBrjhUyNVo/edit?tab=t.0#heading=h.5v9kfwo7fo1p"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300
                  hover:translate-y-[-2px]"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
