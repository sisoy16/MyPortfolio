"use client"

import Certificates from "../_components/Certificates"

export default function AboutMePage() {
    return (
        <main>
            <div className="pt-24">
                <div className="text-center mb-0 mt-7">
                    <h1 className="text-xl font-bold">Certificates<span className="text-primary">.</span></h1>
                    <p className='text-xs'>My achievements and certifications<span className="text-primary">.</span></p>
                  </div>
                  
                  <Certificates />
            </div>
        </main>
    );
}