import React from 'react';
import { ExternalLink } from "lucide-react";

interface ExperienceProps{
    url: string;
}

const Experience: React.FC<ExperienceProps> = ({url}) => {
    const experience = [
        {
            "date": "May 2025 - July 2025",
            "title": "Full-Stack Development Intern",
            "company": "PanScience Innovation, New Delhi",
            "description": [
                "Contributed to end-to-end development of a data visualization platform, delivering key UI/UX enhancements and backend integrations using modern web technologies.",
                "Actively participated in production deployments, API development, and client data workflows using tools like React, FastAPI, PostgreSQL, AWS, and Kafka.",
                "Collaborated cross-functionally with tech leads and clients to shape scalable system features and improve product architecture."
            ],
            "logos": ["https://cdn.prod.website-files.com/66f415d94f3cbc570edcdd65/6712049bd5eb1895e4aa0da8_Frame%20249.svg"],
            "certificateUrl": "https://drive.google.com/file/d/1-jrtpdMnL1vKM1rSPeqh9lxy4hh3sN_j/view?usp=drive_link"
        },
        {
            "date": "January 2026 - July 2026",
            "title": "Software Engineer Intern",
            "company": "PhonePe, Bengaluru",
            "description": [
                "Designed and built a file processing microservice (Java, Dropwizard) handling 100+ files/day (50K+ records each) across PhonePe Lending workflows",
                "Developed a generic callback-based sink framework with no-code onboarding via Jolt transformations, improving scalability by decoupling ingestion and processing from downstream services; implemented row-level alerting and SFTP source integration",
                "Contributed to system design and infrastructure planning by preparing reviewed documentation for database capacity estimation including Azure VM sizing, memory, IOPS, and disk requirements using Percona and Aerospike"
            ],
            "logos": ["https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/70/54/f7/7054f766-bcf9-88a9-a622-6ef7f49798d2/Placeholder.mill/400x400bb-75.webp"],
            "certificateUrl": ""
        }
    ];
    return (
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
                <div className="w-20 h-1 bg-[#00FFB2] mx-auto"></div>
                <p className="text-[#e0e0e0] mt-4 max-w-2xl mx-auto">
                    My professional journey.
                </p>
            </div>

            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-[#333333] transform md:translate-x-[-50%]">
                    <div className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-[#00FFB2] to-[#7B42F6] opacity-30"></div>
                </div>

                <div className="space-y-12">
                    {experience.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col md:flex-row items-center"
                        >
                            <div className="flex md:w-1/2 md:justify-end order-1 md:order-1 mb-4 md:mb-0">
                                <div
                                    className={`md:pr-8 ${index % 2 === 1 ? "md:order-2 md:pl-8 md:pr-0 md:text-left" : ""}`}
                                >
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="bg-[#1F1F1F] p-6 rounded-lg border border-[#333333] hover:border-[#00FFB2]/30 transition-all duration-300 md:ml-12 md:mr-0">
                                                <span className="text-[#00FFB2] font-medium">
                                                    {item.date}
                                                </span>
                                                <h3 className="text-xl font-bold mt-1 text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="text-[#aaaaaa] mt-1">
                                                    {item.company}
                                                </p>
                                                <ul className="list-disc list-inside text-[#e0e0e0] mt-2 space-y-1">
                                                    {item.description.map((point, idx) => (
                                                        <li key={idx}>{point}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
                                            <div className="bg-[#1F1F1F] p-8 rounded-lg border border-[#333333] hover:border-[#00FFB2]/30 transition-all duration-300 flex flex-wrap gap-4 justify-center items-center">
                                                {item.logos.map((logo, idx) => (
                                                    <img
                                                        key={idx}
                                                        src={logo}
                                                        alt={`${item.company} logo ${idx + 1}`}
                                                        className="w-20 h-20 object-contain"
                                                    />
                                                ))}
                                            </div>
                                            {item.certificateUrl && (
                                                <a
                                                    href={item.certificateUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#00FFB2] text-sm hover:underline flex items-center gap-1"
                                                >
                                                    <ExternalLink className="w-4 h-4" /> View Certificate
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="absolute left-0 md:left-1/2 flex items-center justify-center">
                                <div className="w-4 h-4 rounded-full bg-[#00FFB2] z-10"></div>
                            </div>
                            <div className="flex md:w-1/2 order-1 md:order-2 mb-4 md:mb-0">
                                <div
                                    className={`md:pl-8 ${index % 2 === 0 ? "md:order-2 md:pr-8 md:pl-0 md:text-right" : ""}`}
                                >
                                    {index % 2 === 1 ? (
                                        <>
                                            <div className="bg-[#1F1F1F] p-6 rounded-lg border border-[#333333] hover:border-[#00FFB2]/30 transition-all duration-300 md:mr-12 md:ml-0">
                                                <span className="text-[#00FFB2] font-medium">
                                                    {item.date}
                                                </span>
                                                <h3 className="text-xl font-bold mt-1 text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="text-[#aaaaaa] mt-1">
                                                    {item.company}
                                                </p>
                                                <ul className="list-disc list-inside text-[#e0e0e0] mt-2 space-y-1">
                                                    {item.description.map((point, idx) => (
                                                        <li key={idx}>{point}</li>
                                                    ))}
                                                </ul>

                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
                                            <div className="bg-[#1F1F1F] p-8 rounded-lg border border-[#333333] hover:border-[#00FFB2]/30 transition-all duration-300 flex flex-wrap gap-4 justify-center items-center">
                                                {item.logos.map((logo, idx) => (
                                                    <img
                                                        key={idx}
                                                        src={logo}
                                                        alt={`${item.company} logo ${idx + 1}`}
                                                        className="w-20 h-20 object-contain"
                                                    />
                                                ))}
                                            </div>
                                            {item.certificateUrl && (
                                                <a
                                                    href={item.certificateUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#00FFB2] text-sm hover:underline flex items-center gap-1"
                                                >
                                                    <ExternalLink className="w-4 h-4" /> View Certificate
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;