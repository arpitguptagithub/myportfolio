import {
    Code, Shield, Cloud, Database, Cpu, Monitor, Layers, Package
} from "lucide-react";

const CATEGORIES = [
    {
        title: "Programming",
        icon: Code,
        skills: ["C++ / C", "Rust", "Python", "TypeScript", "Java", "JavaScript", "Verilog", "Assembly", "Dart"],
    },
    {
        title: "Security",
        icon: Shield,
        skills: ["Malware Analysis", "Browser Security", "Threat Detection", "Network Security"],
    },
    {
        title: "Cloud & DevOps",
        icon: Cloud,
        skills: ["GCP", "AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    },
    {
        title: "Databases",
        icon: Database,
        skills: ["MongoDB", "Redis", "MySQL"],
    },
    {
        title: "Tools & Utilities",
        icon: Package,
        skills: ["Git", "Android Studio", "Unity", "Cisco Packet Tracer", "Wireshark", "Burp Suite"],
    },
    {
        title: "Backend",
        icon: Layers,
        skills: ["Flask", "Firebase", "REST APIs", "Node", "Google APIs"],
    },
    {
        title: "Microcontrollers",
        icon: Cpu,
        skills: ["Arduino", "Raspberry Pi", "NodeMCU", "Jetson Nano", "Pixhawk"],
    },
    {
        title: "Operating Systems",
        icon: Monitor,
        skills: ["Linux", "Windows", "macOS"],
    },
    {
        title: "Parallel Computing",
        icon: Layers,
        skills: ["OpenMP", "MPI"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative">
            {/* subtle page-wide grid backdrop */}
            <div className="absolute inset-0 pointer-events-none opacity-40 -z-10">
                <div className="w-full h-full tile-grid" />
            </div>

            <div className="container mx-auto px-6">
                <h2 className="text-center text-4xl font-extrabold mb-12">
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Skills & Technologies
                    </span>
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {CATEGORIES.map(({ title, icon: Icon, skills }, idx) => (
                        <article
                            key={idx}
                            className="group relative card-border hover-glow bg-gray-900/45 backdrop-blur-md overflow-hidden"
                        >
                            {/* grid background covers whole card */}
                            <div className="card-grid" />   {/* 👈 absolute, inset-0 in CSS */}

                            {/* hover tint */}
                            <div className="card-tint" />

                            {/* actual content */}
                            <div className="relative z-10 p-6">
                                <header className="flex items-center gap-2 mb-4">
                                    <Icon className="w-5 h-5 text-blue-400" />
                                    <h3 className="text-lg font-semibold text-blue-400">{title}</h3>
                                </header>

                                <ul className="space-y-2 text-sm text-gray-200">
                                    {skills.map((s, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* corner glow dots */}
                            <span className="corner-dot top-2 left-2" />
                            <span className="corner-dot top-2 right-2" />
                            <span className="corner-dot bottom-2 left-2" />
                            <span className="corner-dot bottom-2 right-2" />
                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
}
