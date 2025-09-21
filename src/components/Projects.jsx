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
    img: "https://sqrx.com/static/img/lmr/where-swgs-fail.png",
    desc: "Research presented at DEFCON 2024 demonstrating vulnerabilities in secure web gateways.",
    link: "https://www.youtube.com/watch?v=mBZQnJ1MWYI", 
  },
  {
    title: "Polymorphic Extensions Attack",
    subtitle: "SquareX Research - Browser Extensions Exploit",
    img: "https://tse2.mm.bing.net/th/id/OIP.TxfFv2s3noRC_EIg494iHgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Developed a polymorphic browser extension attack that impersonates legitimate extensions (icons, UI), tricking users into entering credentials. Disclosed by SquareX (see official blog).",
    link: "https://sqrx.com/polymorphic-extensions", 
  },
  {
    title: "Copycat Identity Stealer",
    subtitle: "DEF CON 33 - Extension Toolkit",
    img: "https://i0.wp.com/undercodenews.com/wp-content/uploads/Demo-Labs_SquareX.png?resize=1024%2C614&ssl=1",
    desc: "Browser extension-based red-team toolkit for simulating identity theft attacks; includes phishing via Gmail/LinkedIn, login + OTP stealing, autofill extraction. Presented at DEF CON 33.",
    link: "https://infocondb.org/con/def-con/def-con-33/copycat-identity-stealer-extension",
  },
  {
    title: "Browser Synjacking Attack",
    subtitle: "2025 - Security Research",
    img: "https://tse4.mm.bing.net/th/id/OIP.oob7cDRRAZX2uvqrHv9BCwHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Novel browser-based attack exploiting synchronization features to steal sensitive account data across multiple sessions/devices. Widely covered in security press.",
    link: "https://www.forbes.com/sites/alexvakulov/2025/01/31/new-browser-syncjacking-attack-gives-hackers-full-device-control/", 
  },
  {
    title: "Smart Laundry System",
    subtitle: "IoT + Cloud Project",
    img: "https://www.lg.com/eastafrica/images/WM/features/WM-SapienceHEDD-BlackSteel-11-1-SmartThinQ-Desktop_new.jpg",
    desc: "IoT-based laundry management system integrating washing machines with cloud backend, real-time usage tracking, and payment gateway.",
    link: "#",
  },
  {
    title: "Browser Security Field Manual Support Code",
    subtitle: "Publication / Book Contribution",
    img: "https://v.fastcdn.co/t/5979c3ac/02dfe38b/1754329472-65539895-465x363x635x537x69x83-RSAC-SquareX-Book-11.png",
    desc: "My demos, exploit code, and attack walkthroughs are included as supporting material in the book 'Browser Security Field Manual'.",
    link: "https://getstarted.sqrx.com/browser-security-manual#", 
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

        <div className="grid md:grid-cols-2 gap-10 items-center">
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

            <div className="flex gap-4 mt-9">
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
              slidesPerView={2.2}
              spaceBetween={15}
              centeredSlides={true}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActive(swiper.realIndex)}
              className="pb-16 relative"
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
                      className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                      <span className="text-xs text-gray-300">
                        {p.subtitle}
                      </span>
                      <h3 className="text-lg py-4 font-semibold text-blue-300">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* style overrides */}
<style jsx global>{`
  .swiper-pagination {
    bottom: -5px !important; /* push dots a bit further down */
  }
  .swiper-pagination-bullet {
    background: linear-gradient(90deg, #3b82f6, #02ddffff);
    opacity: 0.8;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    transform: scale(1.2);
  }
`}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
