import React, { useState, useEffect, useRef } from 'react';
import { X , ExternalLink , Menu , Download, Mail, Code2, 
  ChevronDown, Github, MapPin, Heart, ArrowUp,
  GraduationCap, ShieldCheck, UserCheck, Calculator
} from "lucide-react";
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const skillChartRef = useRef<HTMLDivElement>(null);
  const languageChartRef = useRef<HTMLDivElement>(null);
  const url =  "prateek-portfolio";
  
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

  const skills = [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Python", "JavaScript", "TypeScript", "PHP", "Java"]
    },
    {
      category: "Web Technologies",
      items: [
        "HTML", "CSS", "Tailwind CSS", "React.js", "Node.js", "Express",
        "EJS", "XML", "Flask", "FastAPI"
      ]
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Qdrant (Vector DB)"]
    },
    {
      category: "Cloud and DevOps",
      items: ["AWS (EC2, S3)", "Docker (Containerization)", "Git (Version Control)"]
    },
    {
      category: "Problem Solving",
      items: ["Data Structures and Algorithm", "Object Oriented Programming (OOPS)"]
    },
    {
      category: "Machine Learning and Data Science",
      items: [
        "NumPy", "Pandas", "TensorFlow", "Scikit-Learn",
        "Matplotlib", "Weka", "Power BI"
      ]
    },
    {
      category: "Tools and Technologies",
      items: ["Kafka (Message Broker)", "Swagger (API)", "Pygame (Game Development)"]
    }
  ];
  const projects = [
    {
      "title": "CricCrazy",
      "description": "A full-stack cricket stats manager with authentication, CRUD operations, and stat-based player sorting.",
      "extendedDescription": "Developed a responsive web application for managing cricket player statistics. Users can register, log in securely, perform CRUD operations on player data, and sort players by statistical performance.",
      "features": [
        "User authentication with encrypted passwords",
        "CRUD operations for player stats",
        "Stat-based sorting and filtering",
        "Responsive UI with EJS templating",
        "MongoDB for persistent data storage"
      ],
      "technicalDetails": {
        "Frontend": "HTML, CSS, JavaScript, EJS",
        "Backend": "Node.js, Express",
        "DevOps": "N/A",
        "Testing": "Manual Testing"
      },
      "tech": ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS", "MongoDB"],
      "image": `/${url}/projectImg/criccrazy.png`,
      "github": "https://github.com/prateek-dhanker/CricCrazy",
      "demo": "https://criccrazy.onrender.com/" 
    },
    {
      "title": "Disease Detection Using Medical Images",
      "description": "A Flask-based system that predicts diseases from medical images with confidence scores and visualizations.",
      "extendedDescription": "Built a deep learning web application to detect diseases from X-rays, MRIs, ultrasounds, and retinal images. Users upload images and receive model predictions with accuracy metrics and Grad-CAM visualizations.",
      "features": [
        "Multi-modal image support (X-ray, MRI, ultrasound, retina)",
        "Deep learning models (CNNs) for image classification",
        "Confidence scores and Grad-CAM heatmap visualization",
        "Flask backend for prediction and routing",
        "User-friendly UI"
      ],
      "technicalDetails": {
        "Frontend": "HTML, CSS, Bootstrap",
        "Backend": "Flask",
        "DevOps": "N/A",
        "Testing": "Manual Testing"
      },
      "tech": ["Flask", "TensorFlow", "OpenCV", "Pandas", "NumPy", "Matplotlib"],
      "image": `/${url}/projectImg/medical_ai.jpg`,
      "github": "https://github.com/prateek-dhanker/disease-detection-medical-images",
      "demo": "https://github.com/prateek-dhanker/disease-detection-medical-images"
    },
    {
      "title": "TinyML-Based Handwritten Digit Recognizer",
      "description": "Real-time handwritten digit recognition using a webcam, TinyML and TFLite, with 98% accuracy on MNIST.",
      "extendedDescription": "Trained a CNN model on MNIST dataset, converted it to TensorFlow Lite, and used webcam feed to classify digits in real time on low-resource devices.",
      "features": [
        "Webcam-based real-time digit recognition",
        "TinyML optimized using TFLite",
        "98% accuracy on MNIST test data",
        "Lightweight deployment for edge devices",
        "Python-based UI with OpenCV"
      ],
      "technicalDetails": {
        "Frontend": "Python GUI + OpenCV",
        "Backend": "TensorFlow Lite Inference",
        "DevOps": "Google Colab for training",
        "Testing": "Confusion Matrix & Accuracy Metrics"
      },
      "tech": ["TensorFlow", "TensorFlow Lite", "OpenCV", "Python", "NumPy"],
      "image": `/${url}/projectImg/digit.webp`,
      "github": "https://github.com/prateek-dhanker/tinyml-digit-recognizer",
      "demo": "https://github.com/prateek-dhanker/tinyml-digit-recognizer"
    },
    {
      "title": "QuizAura",
      "description": "An interactive quiz website with user authentication and score tracking across topics.",
      "extendedDescription": "Created a dynamic quiz platform with user sign-up/login, quiz categories, question display, and result tracking with a clean responsive design.",
      "features": [
        "Multiple quizzes across various topics",
        "Score tracking and performance stats",
        "User authentication and session handling",
        "Responsive layout and UI",
        "PHP + MySQL powered backend"
      ],
      "technicalDetails": {
        "Frontend": "HTML, CSS, JavaScript",
        "Backend": "PHP, MySQL",
        "DevOps": "N/A",
        "Testing": "Manual Testing"
      },
      "tech": ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XML"],
      "image": `/${url}/projectImg/quizaura.png`,
      "github": "https://github.com/prateek-dhanker/quizaura",
      "demo": "https://github.com/prateek-dhanker/quizaura"
    },
    {
      "title": "TaskForge",
      "description": "A robust task management system with secure login, role-based access, and Dockerized deployment.",
      "extendedDescription": "Full-stack task manager that lets users add tasks, attach PDFs, assign roles, and manage accounts. Role-based access ensures user-specific visibility and secure operations.",
      "features": [
        "User authentication with JWT",
        "Role-based access (Admin/User)",
        "CRUD for tasks and user profiles",
        "PDF uploads (3 per task max)",
        "Dockerized for easy deployment"
      ],
      "technicalDetails": {
        "Frontend": "React, TailwindCSS",
        "Backend": "Node.js, Express, MongoDB",
        "DevOps": "Docker",
        "Testing": "Postman + Unit Testing"
      },
      "tech": ["React", "Node.js", "Express", "MongoDB", "Docker", "JWT", "REST API"],
      "image": `/${url}/projectImg/task.png`,
      "github": "https://github.com/prateek-dhanker/Task-Manager",
      "demo": "https://task-manager-1-185z.onrender.com/"
    },
    {
      "title": "Viper Rush (Python Game)",
      "description": "A classic snake game with multiple levels, unique maps, color themes, and high-score tracking.",
      "extendedDescription": "Designed an engaging snake game using Pygame with progressively challenging levels, custom snake skins, and scoreboards. Each map offers different terrain and obstacles.",
      "features": [
        "Level-based gameplay with increasing difficulty",
        "Custom snake colors and themes",
        "Different maps and arena styles",
        "High-score tracking per level",
        "Smooth animation and input handling"
      ],
      "technicalDetails": {
        "Frontend": "Pygame UI",
        "Backend": "Python logic",
        "DevOps": "N/A",
        "Testing": "Manual Gameplay Testing"
      },
      "tech": ["Python", "Pygame"],
      "image": `/${url}/projectImg/viper.png`,
      "github": "https://github.com/prateek-dhanker/Viper-Rush",
      "demo": "https://drive.google.com/file/d/1G4FERwFPy_4kb_373bUfpx1RaQVMR7Wh/view?usp=sharing"
    }
  ];
  const experience = [
    {
      "date": "May 2025 – Present",
      "title": "Full-Stack Development Intern",
      "company": "PanScience Innovation, New Delhi",
      "description": [
        "Contributed to end-to-end development of a data visualization platform, delivering key UI/UX enhancements and backend integrations using modern web technologies.",
        "Actively participated in production deployments, API development, and client data workflows using tools like React, FastAPI, PostgreSQL, AWS, and Kafka.",
        "Collaborated cross-functionally with tech leads and clients to shape scalable system features and improve product architecture."
      ],
      "logos": ["https://cdn.prod.website-files.com/66f415d94f3cbc570edcdd65/6712049bd5eb1895e4aa0da8_Frame%20249.svg"],
      "certificateUrl": ""
    },
    {
      "date": "December 2024",
      "title": "Advanced Software Engineering Virtual Experience Program",
      "company": "Walmart USA (Forage)",
      "description": [
        "Completed the Advanced Software Engineering Job Simulation solving technical projects across Walmart teams.",
        "Developed a novel heap data structure for Walmart’s shipping department, showcasing algorithmic skills.",
        "Created an entity relationship diagram to model a database for Walmart’s pet department requirements.",
        "Integrated CSV-based data into the database using Python, improving accessibility and usability."
      ],
      "logos": [`/${url}/forage.png`, "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"],
      "certificateUrl": "https://drive.google.com/file/d/11tqYxifawpUoYBaZT5t_GpTuwcLLnl2e/view?usp=sharing"
    },
    {
      "date": "September 2024",
      "title": "Software Engineering Virtual Experience Program",
      "company": "Goldman Sachs (Forage)",
      "description": [
        "Completed a job simulation as a Goldman Sachs governance analyst responsible for assessing IT security and suggesting improvements.",
        "Identified that the company was using an outdated password hashing algorithm by cracking passwords using Hashcat.",
        "Wrote a memo summarizing proposed uplifts to increase the company’s password protection, including stronger algorithms and longer minimum length."
      ],
      "logos": [`/${url}/forage.png`, "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg"],
      "certificateUrl": "https://drive.google.com/file/d/1Zf5SyBuhaAnxA3Psc-tudU8mpErn6_i5/view?usp=sharing"
    },
    {
      "date": "June 2024",
      "title": "Certified in Data Structures and Algorithms (C++)",
      "company": "Coding Ninjas",
      "description": [
        "Completed an intensive certification program focused on C++ Data Structures and Algorithms.",
        "Covered topics such as dynamic programming, trees, graphs, and advanced problem solving.",
        "Gained hands-on experience through assignments, quizzes, and coding challenges."
      ],
      "logos": ["https://files.codingninjas.in/new-cn-logos-1-1711622387.svg"],
      "certificateUrl": "https://drive.google.com/file/d/1O3CA0AqC0fN6KqNAMZkBKISh0Zv6A94r/view?usp=sharing"
    },
    {
      "date": "May 2024",
      "title": "Knight Badge – Top Rated Contest Performer",
      "company": "LeetCode",
      "description": [
        "Earned the Knight badge for consistently ranking among the top in LeetCode weekly contests.",
        "Demonstrated strong problem-solving and algorithmic thinking under time pressure.",
        "Ranked in the top percentile among global competitive programmers on the platform."
      ],
      "logos": ["https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"],
      "certificateUrl": "https://drive.google.com/file/d/1W1my4u_4U2Oby7DJt265NuobPnWs_MqH/view?usp=sharing"
    }
  ];
  const socialLinks = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      url: "https://github.com/prateek-dhanker",
      label: "GitHub"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      url: "https://linkedin.com/in/prateek-dhanker07",
      label: "LinkedIn"
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      url: "https://leetcode.com/u/PrateekDhanker07/",
      label: "LeetCode"
    },
    {
      icon: "https://www.svgrepo.com/show/330198/codingninjas.svg",
      url: "https://www.naukri.com/code360/profile/PrateekDhanker",
      label: "Coding Ninjas"
    }
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  // Initialize skills chart
  useEffect(() => {
    if (skillChartRef.current) {
      const chart = echarts.init(skillChartRef.current);
      
      const option = {
        animation: false,
        radar: {
          indicator: [
            { name: 'Frontend', max: 100 },
            { name: 'Backend', max: 100 },
            { name: 'DevOps & Deployment', max: 100 },
            { name: 'Data Structures', max: 100 },
            { name: 'AI & ML', max: 100 },
            { name: 'System Design', max: 100 }
          ],
          splitArea: {
            areaStyle: {
              color: ['rgba(0, 255, 178, 0.05)', 'rgba(0, 255, 178, 0.1)']
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.2)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.2)'
            }
          },
          name: {
            textStyle: {
              color: '#e0e0e0'
            }
          }
        },
        series: [{
          name: 'Skills',
          type: 'radar',
          data: [
            {
              value: [95, 90, 80, 90, 75, 70],
              name: 'Skill Level',
              areaStyle: {
                color: 'rgba(0, 255, 178, 0.2)'
              },
              lineStyle: {
                color: '#00FFB2'
              },
              itemStyle: {
                color: '#00FFB2'
              }
            }
          ]
        }]
      };
      
      chart.setOption(option);
      
      const handleResize = () => {
        chart.resize();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        chart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  useEffect(() => {
    if (languageChartRef.current) {
      const chart = echarts.init(languageChartRef.current);
      const option = {
        animation: false,
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          max: 100,
          axisLabel: {
            color: "#e0e0e0",
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.2)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.1)",
            },
          },
        },
        yAxis: {
          type: "category",
          data: [
            "Java",
            "PHP",
            "JavaScript",
            "TypeScript",
            "Python",
            "C++",
            "C",
          ],
          axisLabel: {
            color: "#e0e0e0",
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.2)",
            },
          },
        },
        series: [
          {
            name: "Proficiency",
            type: "bar",
            data: [55, 67, 86, 76, 88, 98, 90],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#00FFB2" },
                { offset: 1, color: "#7B42F6" },
              ]),
            },
          },
        ],
      };
      chart.setOption(option);
      const handleResize = () => {
        chart.resize();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        chart.dispose();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);


  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#121212]/80 backdrop-blur-md z-50 border-b border-[#2a2a2a]">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white flex items-center">
            <span className="text-[#00FFB2]">Prateek</span>
            <span className="ml-1">Dhanker</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize relative py-1 cursor-pointer whitespace-nowrap ${
                  activeSection === item ? 'text-[#00FFB2]' : 'text-[#e0e0e0] hover:text-white'
                }`}
              >
                {item}
                <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-[#00FFB2] transform scale-x-0 transition-transform duration-300 ${
                  activeSection === item ? 'scale-x-100' : ''
                }`}></span>
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[#00FFB2]" />
          ) : (
            <Menu className="w-6 h-6 text-[#00FFB2]" />
          )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden bg-[#1A1A1A] overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 border-b border-[#2a2a2a]' : 'max-h-0'
        }`}>
          <div className="container mx-auto px-6 py-4">
            {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-3 capitalize cursor-pointer whitespace-nowrap ${
                  activeSection === item ? 'text-[#00FFB2]' : 'text-[#e0e0e0]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#121212] to-[#1F1F1F] pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://readdy.ai/api/search-image?query=abstract%20dark%20tech%20background%20with%20subtle%20neon%20blue%20and%20green%20particles%20floating%20in%20a%20deep%20space%20environment%2C%20creating%20a%20digital%20atmosphere%20with%20low%20opacity%20particles%2C%20perfect%20for%20a%20tech%20portfolio%20background&width=1920&height=1080&seq=hero-bg&orientation=landscape')]"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h2 className="text-xl md:text-2xl font-light text-[#00FFB2] mb-4">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Prateek Dhanker</h1>
              <h3 className="text-xl md:text-2xl font-medium text-[#e0e0e0] mb-6">
                Final-Year Software Engineer | Web & AI Developer
              </h3>
              <p className="text-lg md:text-xl text-[#cccccc] mb-8 max-w-lg">
                Turning complex problems into elegant software solutions.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="https://drive.google.com/file/d/1EMcvGjmqjrmQdupHcJkOxd9I2PDgj6Lw/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-6 py-3 bg-[#00FFB2] text-[#121212] font-medium rounded-lg hover:bg-[#00FFB2]/90 transition-all duration-300 flex items-center cursor-pointer whitespace-nowrap !rounded-button">
                    <Download className="w-4 h-4 mr-2" /> Download Resume
                  </button>
                </a>

                <button onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-transparent border border-[#00FFB2] text-[#00FFB2] font-medium rounded-lg hover:bg-[#00FFB2]/10 transition-all duration-300 flex items-center cursor-pointer whitespace-nowrap !rounded-button">
                  <Mail className="w-4 h-4 mr-2" /> Contact Me
                </button>
                <button onClick={() => scrollToSection('projects')} className="px-6 py-3 bg-[#1A1A1A] text-white font-medium rounded-lg hover:bg-[#2A2A2A] transition-all duration-300 flex items-center cursor-pointer whitespace-nowrap !rounded-button">
                  <Code2 className="w-4 h-4 mr-2" /> View Projects
                </button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00FFB2] to-[#7B42F6] opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-[#1A1A1A] border-2 border-[#00FFB2]/30"></div>
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img 
                    src={`/${url}/prateekPic.jpeg`}
                    alt="Prateek Dhanker" 
                    className="w-full h-full object-cover object-top zoom-510 transition-transform duration-500 hover:scale-105 rounded-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button onClick={() => scrollToSection('about')} className="text-[#e0e0e0] hover:text-[#00FFB2] transition-colors duration-300 cursor-pointer">
              <ChevronDown className="text-2xl" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#1A1A1A]">
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
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts. I'm always eager to learn and grow as a developer.
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
            <div className="w-20 h-1 bg-[#00FFB2] mx-auto"></div>
            <p className="text-[#e0e0e0] mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                onClick={() => setSelectedProject(project)}
                className="bg-[#1F1F1F] rounded-xl overflow-hidden border border-[#333333] hover:border-[#00FFB2]/50 transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#00FFB2] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#cccccc] mb-4 h-12">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-[#2A2A2A] text-[#00FFB2] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href={project.github} 
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#e0e0e0] hover:text-[#00FFB2] transition-colors duration-300 flex items-center cursor-pointer"
                    >
                      <Code2 className="w-4 h-4 mr-1" /> Code
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#e0e0e0] hover:text-[#00FFB2] transition-colors duration-300 flex items-center cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/prateek-dhanker" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-6 py-3 bg-[#1A1A1A] text-white font-medium rounded-lg hover:bg-[#2A2A2A] transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <span className="flex items-center">
                <Github className="w-4 h-4 mr-2" />
                View More on GitHub
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Skills & Tools
            </h2>
            <div className="w-20 h-1 bg-[#00FFB2] mx-auto"></div>
            <p className="text-[#e0e0e0] mt-4 max-w-2xl mx-auto">
              My technical toolkit and areas of expertise.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-[#222222] rounded-lg p-6 border border-[#333333]">
                <h3 className="text-xl font-semibold mb-4 text-[#00FFB2] text-center">
                  Technical Skills Overview
                </h3>
                <div className="h-64 w-full" ref={skillChartRef}></div>
              </div>
              <div className="bg-[#222222] rounded-lg p-6 border border-[#333333]">
                <h3 className="text-xl font-semibold mb-4 text-[#00FFB2] text-center">
                  Programming Language Proficiency
                </h3>
                <div className="h-64 w-full" ref={languageChartRef}></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((category, index) => (
                <div
                  key={index}
                  className="bg-[#222222] rounded-lg p-6 border border-[#333333]"
                >
                  <h3 className="text-xl font-semibold mb-4 text-[#00FFB2]">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-[#2A2A2A] text-[#e0e0e0] rounded-md hover:bg-[#333333] transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience & Achievements</h2>
            <div className="w-20 h-1 bg-[#00FFB2] mx-auto"></div>
            <p className="text-[#e0e0e0] mt-4 max-w-2xl mx-auto">
              My professional journey and key milestones.
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
                              <ExternalLink  className="w-4 h-4" /> View Certificate
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
                              <ExternalLink  className="w-4 h-4" /> View Certificate
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
            <div className="w-20 h-1 bg-[#00FFB2] mx-auto"></div>
            <p className="text-[#e0e0e0] mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2">
              <form action="https://formsubmit.co/prateek.engg7@gmail.com" method='POST' className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#e0e0e0] mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="Name" 
                    className="w-full bg-[#222222] border border-[#333333] focus:border-[#00FFB2] text-white p-3 rounded-lg outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label htmlFor="email" className="block text-[#e0e0e0] mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="Email"
                    className="w-full bg-[#222222] border border-[#333333] focus:border-[#00FFB2] text-white p-3 rounded-lg outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#e0e0e0] mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="Message"
                    rows={5}
                    className="w-full bg-[#222222] border border-[#333333] focus:border-[#00FFB2] text-white p-3 rounded-lg outline-none transition-colors duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00FFB2] to-[#00FFB2]/80 text-[#121212] font-medium py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 cursor-pointer whitespace-nowrap !rounded-button"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-[#222222] p-8 rounded-lg border border-[#333333] h-full">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#2A2A2A] p-3 rounded-lg mr-4">
                      <Mail className="w-4 h-4 text-[#00FFB2]" />
                    </div>
                    <div>
                      <h4 className="text-[#e0e0e0] font-medium">Email</h4>
                      <a href="mailto:prateek.engg7@gmail.com" className="text-[#00FFB2] hover:underline">prateek.engg7@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#2A2A2A] p-3 rounded-lg mr-4">
                      <MapPin className="w-4 h-4 text-[#00FFB2]" />
                    </div>
                    <div>
                      <h4 className="text-[#e0e0e0] font-medium">Location</h4>
                      <p className="text-[#cccccc]">Delhi, India</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-[#e0e0e0] font-medium mb-4">Social Profiles</h4>
                    <div className="flex gap-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          aria-label={social.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#2A2A2A] w-10 h-10 rounded-lg flex items-center justify-center text-[#e0e0e0] hover:text-[#00FFB2] hover:bg-[#333333] transition-colors duration-300 cursor-pointer"
                        >
                          <img
                            src={social.icon}
                            alt={social.label}
                            className="w-5 h-5 object-contain"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <h4 className="text-[#e0e0e0] font-medium mb-4">Availability</h4>
                    <p className="text-[#cccccc]">
                      I'm currently available for freelance work and full-time positions starting July 2025.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0A0A0A] border-t border-[#333333]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-[#e0e0e0]">
                &copy; {new Date().getFullYear()} Prateek Dhanker. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center">
              <span className="text-[#e0e0e0] mr-2">Built with</span>
              <Heart className="w-4 h-4 text-[#00FFB2] mx-1 fill-[#00FFB2]" />
              <span className="text-[#e0e0e0] ml-1">using React & TailwindCSS</span>
            </div>
            
            <div className="mt-4 md:mt-0">
              <button 
                onClick={() => scrollToSection('home')}
                className="flex flex-row items-center text-[#e0e0e0] hover:text-[#00FFB2] transition-colors duration-300 cursor-pointer"
              >
                <ArrowUp className="h-4 w-4 mr-2" /> Back to top
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)} 
        >
          <div className="bg-[#1A1A1A] w-full max-w-4xl h-[80vh] rounded-xl overflow-auto border border-[#333333] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="sticky top-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md px-4 py-2 rounded-t-xl flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white bg-[#2A2A2A] rounded-full p-2 hover:text-[#00FFB2] transition-colors duration-300 animate-glow-once"
              >
                <X className="h-5 w-5" />
              </button>
            </div>




            <div className="h-64 relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
            </div>

            <div className="p-8 -mt-12 relative">
              <h2 className="text-3xl font-bold mb-4 text-white">
                {selectedProject.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#2A2A2A] text-[#00FFB2] rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                {/* Project Overview */}
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#00FFB2]">
                    Project Overview
                  </h3>
                  <p className="text-[#e0e0e0] leading-relaxed">
                    {selectedProject.description}
                    <br />
                    <br />
                    {selectedProject.extendedDescription}
                  </p>
                </div>

                {/* Key Features */}
                {selectedProject.features && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#00FFB2]">
                      Key Features
                    </h3>
                    <ul className="list-disc list-inside text-[#e0e0e0] space-y-2">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical Details */}
                {selectedProject.technicalDetails && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#00FFB2]">
                      Technical Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-[#e0e0e0]">
                      {selectedProject.technicalDetails &&
                      Object.entries(selectedProject.technicalDetails as Record<string, string>).map(([key, value]) => (
                        <div key={key}>
                          <h4 className="font-medium mb-1">{key}</h4>
                          <p>{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 bg-[#00FFB2] text-[#121212] font-medium py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 text-center cursor-pointer whitespace-nowrap"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 bg-[#2A2A2A] text-white font-medium py-3 rounded-lg hover:bg-[#333333] transition-colors duration-300 text-center cursor-pointer whitespace-nowrap"
                  >
                    <Code2 className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;