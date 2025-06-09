import { projects } from '@/lib/projects'
import Hero from './_components/Hero'
import Project from './_components/Project'
import AboutMe from './_components/AboutMe'
import Certificates from './_components/Certificates'
import ContactMe from './_components/ContactMe'

export default function Home() {
    return (
        <main className='mb-20'>
            <section id="hero">
                <Hero />
            </section>
            
            <section id="about">
                <div className="text-center mb-0 mt-7">
                    <h1 className="text-xl font-bold">About Me<span className="text-primary">.</span></h1>
                    <p className='text-xs'>Learn more about my journey and skills<span className="text-primary">.</span></p>
                </div>
                <AboutMe />
            </section>

            <section id="certificates">
                <div className="text-center mb-0 mt-7">
                    <h1 className="text-xl font-bold">Certificates<span className="text-primary">.</span></h1>
                    <p className='text-xs'>My achievements and certifications<span className="text-primary">.</span></p>
                </div>
                <Certificates />
            </section>
            
            <section id="projects">
                <div className="text-center mb-5">
                    <h1 className="text-xl font-bold">Projects<span className="text-primary">.</span></h1>
                    <p className='text-xs'>Some of my projects i built<span className="text-primary">.</span></p>
                </div>
                <Project />
            </section>

            <section id="contact">
                <div className="text-center mb-0 mt-16">
                    <h1 className="text-xl font-bold">Contact Me<span className="text-primary">.</span></h1>
                    <p className='text-xs'>Let's connect and build something amazing together<span className="text-primary">.</span></p>
                </div>
                <ContactMe />
            </section>
        </main>
    )
}