"use client"

import { useState } from 'react';
import { FaHtml5, FaReact, FaNodeJs, FaPhp, FaLaravel } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiTailwindcss, SiNextdotjs, SiJavascript, SiPhpmyadmin, SiMysql, SiPostgresql } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { useTheme } from 'next-themes'

export default function AboutMe() {
    const { theme } = useTheme() 
    const [activeTab, setActiveTab] = useState('education');
    const [hoveredSkill, setHoveredSkill] = useState('');

    const education = [
        {
            school: "Holy Cross of Davao College",
            degree: "Bachelor of Science in Information Technology",
            year: "2021-2025"
        },
        {
            school: "Davao City National High School",
            degree: "Senior High School",
            year: "2019-2021"
        },
        {
            school: "Davao City National High School",
            degree: "Junior High School",
            year: "2014-2019"
        },
        {
            school: "Vicente Hizon Sr. Elementary School",
            degree: "Elementary School",
            year: "2009-2014"
        }
    ];

    const skills = {
        frontend: [
            { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
            { name: 'CSS', icon: IoLogoCss3, color: '#1572B6' },
            { name: 'React', icon: FaReact, color: '#61DAFB' },
            { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'Next.js', icon: SiNextdotjs, color: theme === 'dark' ? '#fff' : '#000' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        ],
        backend: [
            { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
            { name: 'PHP', icon: FaPhp, color: '#777BB4' },
            { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
            { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
        ],
        database: [
            { name: 'PHPMyAdmin', icon: SiPhpmyadmin, color: '#6C78AF' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        ]
    };

    return (
        <div className="py-10 -mt-5 mb-10 px-5">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Jerwin Colipano</h1>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => setActiveTab('education')}
                            className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'education' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                        >
                            Education
                        </button>
                        <button 
                            onClick={() => setActiveTab('skills')}
                            className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'skills' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                        >
                            Skills
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Side */}
                    <div className="space-y-6">
                    <p className="text-muted-foreground text-justify">
                        I am a 4th-year Information Technology student passionate about exploring the dynamic and ever-evolving world of tech. My current focus is on becoming a full stack developer, where I can build both the front-end and back-end of applications that make a real impact. I am eager to gain valuable hands-on experience in a professional IT environment and expand my skills across various domains, including emerging technologies and innovative solutions.
                    </p>
                    <p className="text-muted-foreground text-justify">
                        Outside of academics, I enjoy playing online games, which has helped me develop strategic thinking, teamwork, and a love for problem-solving—skills that I bring into my approach to development. I'm always curious and driven to learn more, whether it's about new programming frameworks, design trends, or how to create seamless user experiences. My goal is to continuously grow and contribute meaningfully to the tech community.
                    </p>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-6">
                        {activeTab === 'education' ? (
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div key={index} className="p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                                        <h3 className="font-bold">{edu.school}</h3>
                                        <p className="text-muted-foreground">{edu.degree}</p>
                                        <p className="text-sm text-muted-foreground">{edu.year}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {Object.entries(skills).map(([category, skillList]) => (
                                    <div key={category} className="space-y-3">
                                        <h3 className="text-lg font-semibold capitalize">{category}</h3>
                                        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                                            {skillList.map((skill) => (
                                                <div 
                                                    key={skill.name}
                                                    className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-secondary transition-all cursor-pointer"
                                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                                    onMouseLeave={() => setHoveredSkill('')}
                                                >
                                                    <skill.icon 
                                                        className="w-8 h-8" 
                                                        style={{ color: skill.color }} 
                                                    />
                                                    {hoveredSkill === skill.name && (
                                                        <span className="mt-2 text-sm">{skill.name}</span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}