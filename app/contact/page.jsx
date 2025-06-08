"use client"

import ContactMe from "../_components/ContactMe"

export default function AboutMePage() {
    return (
        <main>
            <div className="pt-24">
                <div className="text-center mb-0 mt-16">
                        <h1 className="text-xl font-bold">Contact Me<span className="text-primary">.</span></h1>
                        <p className='text-xs'>Let's connect and build something amazing together<span className="text-primary">.</span></p>
                      </div>
                
                    <ContactMe />
            </div>
        </main>
    );
}