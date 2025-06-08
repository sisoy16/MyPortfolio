"use client"

import AboutMe from "../_components/AboutMe"

export default function AboutMePage() {
    return (
        <main>
            <div className="pt-24">
                <div className="text-center mb-6">
                    <h1 className="text-xl font-bold">About Me<span className="text-primary">.</span></h1>
                    <p className='text-xs'>Learn more about my journey and skills<span className="text-primary">.</span></p>
                </div>
                
                <AboutMe />
            </div>
        </main>
    );
}