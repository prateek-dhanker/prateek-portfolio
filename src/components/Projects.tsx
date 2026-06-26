import React, { useState, useEffect} from 'react';
import {X, ExternalLink, Code2, Github } from "lucide-react";

interface ProjectsProps{
    url: string;
};

const Projects: React.FC<ProjectsProps> = ({url}) => {
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
            "title": "VigilNet: AI-Driven Crowd Monitoring",
            "description": "A surveillance platform for real-time crowd density estimation and safety monitoring using deep learning.",
            "extendedDescription": "The system analyzes live and recorded video streams to estimate crowd density, trigger alerts on threshold breaches, and visualize trends through an analytics dashboard. It leverages a Multi-Column CNN to overcome scale variation and occlusion challenges present in dense crowds.",
            "features": [
                "Real-time video-based crowd density estimation",
                "Threshold-based alert system with CSV logging",
                "Low-light enhancement and camera hindrance detection",
                "Interactive analytics dashboard with graphs and filters"
            ],
            "technicalDetails": {
                "Frontend": "React.js, Recharts",
                "Backend": "Python, FastAPI",
                "AI/ML": "Multi-Column CNN, TensorFlow, PyTorch",
                "Data": "ShanghaiTech Crowd Counting Dataset",
                "Visualization": "Time-series, histogram, pie charts"
            },
            "tech": ["Python", "Deep Learning", "Computer Vision", "TensorFlow", "PyTorch", "React.js", "FastAPI"],
            "image": `/${url}/projectImg/vigilNet.png`,
            "github": "https://github.com/prateek-dhanker/VigilNet-Crowd-Counting",
            "demo": "https://github.com/prateek-dhanker/VigilNet"
        },
        {
            "title": "PinPlace: Location Saver Android App",
            "description": "Android app allowing users to save and manage important locations with persistent storage and map integration.",
            "extendedDescription": "PinPlace is a Java-based Android app designed to help users save their current locations along with custom names and descriptions. The app uses Room Database for persistent storage, integrates Google Location Services for accurate location fetching, and allows users to open saved locations directly in Google Maps. The project follows proper Android permission handling, app signing, versioning, and GitHub release practices, making it production-ready and portfolio-grade.",
            "features": [
                "Save and manage user locations with name, description, latitude, and longitude",
                "Persistent local storage using Room Database",
                "Real-time location fetching with runtime permission handling",
                "View saved locations on Google Maps with one-click navigation",
                "Edit, delete and share saved locations from a dedicated detail screen",
                "Versioned and signed APK releases published via GitHub Releases"
            ],
            "technicalDetails": {
                "Frontend": "Android UI using XML layouts",
                "Backend": "Java + Room Database (SQLite abstraction)",
                "DevOps": "Secure keystore management, signed APK generation, and GitHub Releases",
                "Testing": "Manual functional testing on emulator and physical Android devices"
            },
            "tech": ["Java", "Android SDK", "Room Database", "SQLite", "Google Maps Intents", "XML"],
            "image": `/${url}/projectImg/pinplace.png`,
            "github": "https://github.com/prateek-dhanker/PinPlace",
            "demo": "https://github.com/prateek-dhanker/PinPlace/releases/tag/v1.1"
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

    const [selectedProject, setSelectedProject] = useState<any>(null);

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

    return (
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

export default Projects;