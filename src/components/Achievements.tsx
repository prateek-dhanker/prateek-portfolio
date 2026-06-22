import React from "react";
import {
  Trophy,
  Award,
  Star,
  GitBranch,
  Medal,
  Users,
} from "lucide-react";

interface AchievementProps{
    url: string;
};

type Achievement = {
  title: string;
  organization: string;
  date: string;
  description: string[];
  logos: string[];
  certificateUrl: string;
  color: string;
};

const Achievements: React.FC<AchievementProps> = ({url}) => {
  const achievements: Achievement[] = [
    {
      title: "2nd Place in Interns Hackathon",
      organization: "PhonePe",
      date: "January 2026",
      description: [
        "Secured 2nd place in in the PhonePe Intern Hackathon by building SafePay, an AI-powered escrow layer built on top of the UPI protocol",
        "Used RAG agents for User Ratings, maintained users and transaction histories to calculate their risk scores ",
        "Tech Stack: Java as backend lang, Maven for buuild management, Sentinel-AI for AI agents"
      ],
      logos: ["https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/70/54/f7/7054f766-bcf9-88a9-a622-6ef7f49798d2/Placeholder.mill/400x400bb-75.webp"],
      certificateUrl: "https://www.linkedin.com/in/prateek-dhanker07/",
      color: '#3B82F6'
    },
    {
      title: "3rd Top Performer in PhonePe Bootcamp",
      organization: "PhonePe",
      date: "January 2026",
      description: [
        "Ranked among the top performers in the month-long PhonePe Bootcamp, ranked the 3rd Best Performer for overall performance and participation.",
        "Learned how real-world backend systems, APIs, databases, and microservices work at scale",
        "Gained exposure to industry tools and practices: Docker, CI/CD, monitoring, MariaDB, Aerospike"
      ],
      logos: ["https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/70/54/f7/7054f766-bcf9-88a9-a622-6ef7f49798d2/Placeholder.mill/400x400bb-75.webp"],
      certificateUrl: "https://www.linkedin.com/in/prateek-dhanker07/",
      color: '#8B5CF6'
    },
    {
      title: "Knight Badge - Top Rated Contest Performer",
      organization: "LeetCode",
      date: "May 2024",
      "description": [
        "Earned the Knight badge for consistently ranking among the top in LeetCode weekly contests.",
        "Demonstrated strong problem-solving and algorithmic thinking under time pressure.",
        "Ranked in the top percentile among global competitive programmers on the platform."
      ],
      logos: ["https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"],
      certificateUrl: "https://drive.google.com/file/d/1W1my4u_4U2Oby7DJt265NuobPnWs_MqH/view?usp=sharing",
      color: '#10B981'
    },
    {
      title: "Advanced Software Engineering Virtual Experience Program",
      organization: "Walmart USA (Forage)",
      date: "December 2024",
      description: [
        "Completed the Advanced Software Engineering Job Simulation solving technical projects across Walmart teams.",
        "Developed a novel heap data structure for Walmart’s shipping department, showcasing algorithmic skills.",
        "Created an entity relationship diagram to model a database for Walmart’s pet department requirements."
      ],
      logos: [`/${url}/forage.png`, `/${url}/walmart.png`],
      certificateUrl: "https://drive.google.com/file/d/11tqYxifawpUoYBaZT5t_GpTuwcLLnl2e/view?usp=sharing",
      color: '#EF4444'
    },
    {
      title: "Software Engineering Virtual Experience Program",
      organization: "Goldman Sachs (Forage)",
      date: "September 2024",
      description: [
        "Completed a job simulation as a Goldman Sachs responsible for assessing IT security",
        "Identified outdated password hashing algorithm by cracking passwords using Hashcat",
        "Wrote a memo summarizing proposed uplifts to increase password protection with stronger algorithms"
      ],
      logos: [`/${url}/forage.png`, "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg"],
      certificateUrl: "https://drive.google.com/file/d/1Zf5SyBuhaAnxA3Psc-tudU8mpErn6_i5/view?usp=sharing",
      color: '#F59E0B'
    },
    {
      title: "Certified in Data Structures and Algorithms (C++)",
      organization: "Coding Ninjas",
      date: "June 2024",
      "description": [
        "Completed an intensive certification program focused on C++ Data Structures and Algorithms.",
        "Covered topics such as dynamic programming, trees, graphs, and advanced problem solving.",
        "Gained hands-on experience through assignments, quizzes, and coding challenges."
      ],
      logos: ["https://files.codingninjas.in/new-cn-logos-1-1711622387.svg"],
      certificateUrl: "https://drive.google.com/file/d/1O3CA0AqC0fN6KqNAMZkBKISh0Zv6A94r/view?usp=sharing",
      color: '#06B6D4'
    },
  ];
  return (
      <div className="mx-auto max-w-7xl px-2">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Achievements & Certifications</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-emerald-400 rounded-full" />
          <p className="mt-4 text-gray-400">
            Key milestones and accomplishments in my career journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl overflow-hidden"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px ${item.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
              }}
            >
              {/* Gradient Background Accent */}
              <div
                className="absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-3xl"
                style={{ backgroundColor: item.color }}
              />

              {/* Header Section - Logo + Title */}
              <div className="relative mb-4 flex gap-4 items-start">
                {/* Logo Container */}
                <div className="flex gap-2 items-center flex-shrink-0">
                  {item.logos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                      <img
                        src={logo}
                        alt={`${item.organization} logo ${idx + 1}`}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                  ))}
                </div>

                {/* Title */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-xl font-semibold leading-tight"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Meta Info */}
              <div className="relative mb-4 flex items-center justify-between gap-4">
                <p className="min-w-0 text-sm font-medium text-gray-200 truncate">
                  {item.organization}
                </p>
                <p className="text-xs text-gray-400 whitespace-nowrap">
                  {item.date}
                </p>
              </div>

              {/* Description Points */}
              <ul className="relative mb-4 space-y-2">
                {item.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Certificate Link */}
              <a
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                style={{ color: item.color }}
              >
                View Certificate
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Achievements;