import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Skills: React.FC = () => {
    const skills = [
        {
            category: "Programming Languages",
            items: ["C", "C++", "Python", "JavaScript", "TypeScript", "PHP", "Java"]
        },
        {
            category: "Web Development",
            items: [
                "HTML", "CSS", "Tailwind CSS", "React.js", "Node.js", "Express",
                "EJS", "XML", "Flask", "FastAPI"
            ]
        },
        {
            category: "Mobile Development",
            items: ["Android Development (Java)", "XML Layouts", "Room Database"]
        },
        {
            category: "Database",
            items: ["MySQL", "PostgreSQL", "MongoDB", "Qdrant (Vector DB)", "Room (SQLite)"]
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


    const skillChartRef = useRef<HTMLDivElement>(null);
    const languageChartRef = useRef<HTMLDivElement>(null);

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
                        data: [75, 67, 86, 76, 88, 98, 90],
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

    return (
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
    );
};

export default Skills;