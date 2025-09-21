import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PROJECTS = [
  {
    title: "Last Mile Reassembly Attack",
    subtitle: "DEFCON 2024 - Security Research",
    img: "https://source.unsplash.com/random/800x600?cybersecurity",
    desc: "Research presented at DEFCON 2024 demonstrating vulnerabilities in secure web gateways. Built using Rust for PE and PDF analysis.",
    link: "https://github.com/arpitguptagithub/last-mile",
  },
  {
    title: "IIT Convocation App",
    subtitle: "IIT Tirupati - Mobile App",
    img: "https://source.unsplash.com/random/800x600?mobileapp",
    desc: "Developed the official convocation ceremony app for IIT Tirupati using Flutter and Firebase.",
    link: "https://github.com/arpitguptagithub/convocation-app",
  },
  {
    title: "Smart Laundry System",
    subtitle: "IoT + Cloud Project",
    img: "https://source.unsplash.com/random/800x600?iot",
    desc: "IoT-based laundry management system integrating washing machines with cloud services and real-time usage tracking.",
    link: "https://github.com/arpitguptagithub/laundry-system",
  },
  {
    title: "IIT Tirupati Website",
    subtitle: "Institute Website Revamp",
    img: "https://source.unsplash.com/random/800x600?website",
    desc: "Redesigned the official website for IIT Tirupati with a modern, responsive design using React and Tailwind CSS.",
    link: "https://github.com/arpitguptagithub/iitt-website",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full min-h-screen text-white flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-extrabold mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left dynamic project details */}
          <div>
            <span className="text-sm uppercase tracking-widest text-gray-400">
              {PROJECTS[active].subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
              {PROJECTS[active].title}
            </h1>
            <p className="mt-6 text-gray-300 max-w-lg leading-relaxed">
              {PROJECTS[active].desc}
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href={PROJECTS[active].link}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-lg border border-cyan-500/50 text-cyan-300 text-sm
                           hover:bg-blue-500/20 hover:scale-105 hover:shadow-[0_0_18px_rgba(59,130,246,0.5)]
                           transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Right carousel */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={3}
              spaceBetween={20}
              centeredSlides={true}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActive(swiper.realIndex)}
              className="pb-12"
            >
              {PROJECTS.map((p, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className={`relative rounded-xl overflow-hidden transition-transform border
                                ${active === idx
                                  ? "scale-105 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                                  : "scale-95 border-gray-700 opacity-70"
                                }`}
                  >
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-[350px] object-cover opacity-80 group-hover:opacity-100 transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                      <span className="text-xs text-gray-300">
                        {p.subtitle}
                      </span>
                      <h3 className="text-lg font-semibold text-blue-300">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
