"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const certificates = [
    {
        id: 1,
        title: "Introduction to Cloud Computing",
        date: "2025",
        image: "/certificates/certificate1.png",
    },
    {
        id: 2,
        title: "Introduction to Cybersecurity",
        date: "2025",
        image: "/certificates/certificate2.png",
    },
     {
        id: 3,
        title: "Machine Learning",
        date: "2025",
        image: "/certificates/certificate3.png",
    },
     {
        id: 4,
        title: "Capstone Writing 1",
        date: "2024",
        image: "/certificates/certificate4.png",
    },
     {
        id: 5,
        title: "Capstone Writing 2",    
        date: "2024",
        image: "/certificates/certificate5.png",
    },
]

export default function Certificates() {
    const [hoveredCert, setHoveredCert] = useState(null)

    return (
        <div className="grid md:grid-cols-[1fr,2fr] gap-8 p-6 md:p-12">
            {/* Left Side - Certificate List */}
            <div className="space-y-4 md:ml-12 lg:ml-16">
                {certificates.map((cert) => (
                    <div key={cert.id}>
                        <div
                            onMouseEnter={() => setHoveredCert(cert)}
                            onMouseLeave={() => setHoveredCert(null)}
                            className="cursor-pointer"
                        >
                            <h3 className="text-2xl font-semibold">
                                <span className="inline-block relative">
                                    {cert.title.split('').map((letter, index) => (
                                        <span
                                            key={index}
                                            className="transition-colors duration-75"
                                            style={{ 
                                                color: hoveredCert?.id === cert.id ? 'hsl(var(--primary))' : 'inherit',
                                                transitionDelay: `${index * 30}ms`
                                            }}
                                        >
                                            {letter}
                                        </span>
                                    ))}
                                </span>
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {cert.date}
                            </p>
                        </div>
                        <div className="h-[1px] bg-border w-full opacity-90" /> 
                    </div>
                ))}
            </div>

            {/* Right Side - Certificate Display */}
            <div className="relative h-[550px] w-[800px] mx-auto">
                <AnimatePresence>
                    {hoveredCert && (
                        <motion.div
                            key={hoveredCert.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={hoveredCert.image}
                                alt={hoveredCert.title}
                                fill
                                sizes="(max-width: 500px) 100vw, 500px"
                                className="object-contain scale-90" // Added scale to make image slightly smaller
                                priority
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}