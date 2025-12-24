import React from 'react';
import {GraduationCap, ShieldCheck, UserCheck, Calculator} from "lucide-react";

const About: React.FC = () => {
    const achievements = [
        {
        title: "CGPA",
        value: "9.03",
        icon: GraduationCap,
        description: "Consistent academic excellence in B.Tech",
        },
        {
        title: "NDA Cleared",
        value: "3 Times",
        icon: ShieldCheck,
        description: "Successfully cleared UPSC NDA written exam thrice",
        },
        {
        title: "AFSB Attempt",
        value: "Mysore",
        icon: UserCheck,
        description: "Reached AFSB interview stage (Conference Out)",
        },
        {
        title: "JEE Mains Rank",
        value: "11,183",
        icon: Calculator,
        description: "Secured a competitive AIR in JEE Mains",
        }
    ];
    return(
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-[#00FFB2] mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <p className="text-[#e0e0e0] text-lg leading-relaxed mb-6">
                I'm a passionate software engineer in my final year of Computer Science, specializing in web development and artificial intelligence. With a strong foundation in both frontend and backend technologies, I enjoy creating intuitive and impactful digital experiences.
              </p>
              <p className="text-[#e0e0e0] text-lg leading-relaxed mb-6">
                Throughout my academic journey, I've developed a keen interest in solving complex problems through elegant code. I believe in writing clean, maintainable software that not only works well but is also a joy to work with.
              </p>
              <p className="text-[#e0e0e0] text-lg leading-relaxed">
                I'm driven by a passion for building scalable solutions and exploring new technologies. From web apps to AI models, I enjoy turning ideas into reliable, user-focused experiences that blend clean code with meaningful impact.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-[#222222] rounded-xl p-6 border border-[#333333] hover:border-[#00FFB2]/50 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FFB2]/5 rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="bg-[#2A2A2A] p-3 rounded-lg group-hover:bg-[#00FFB2]/10 transition-colors duration-300">
                        <achievement.icon className="w-6 h-6 text-[#00FFB2]" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-white">{achievement.value}</h3>
                          <span className="text-lg font-medium text-[#00FFB2]">{achievement.title}</span>
                        </div>
                        <p className="text-[#cccccc]">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    );
};

export default About;