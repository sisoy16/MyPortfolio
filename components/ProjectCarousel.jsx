"use client"

import { useState, useEffect } from 'react';
import { projects } from '@/lib/projects';
import { motion, AnimatePresence } from 'framer-motion';
import Project from '@/app/_components/Project';

export default function ProjectCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden min-h-[400px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-full"
                >
                    <Project {...projects[currentIndex]} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}