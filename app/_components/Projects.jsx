"use client"

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import ProjectCarousel from '@/components/ProjectCarousel';

export default function Projects() {
    const projectsRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        // Check if we're coming back from a project detail page
        if (document.referrer.includes('/projects/')) {
            projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <section 
            ref={projectsRef}
            id="projects" 
            className="relative py-20 bg-gradient-to-br from-primary/20 via-background to-primary/15"
        >
            <div className="container mx-auto px-6">
                <ProjectCarousel />
            </div>
        </section>
    );
}