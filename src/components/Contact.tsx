import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin } from "lucide-react";

const Hero: React.FC = () => {
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

    return (
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
    );
};

export default Hero;