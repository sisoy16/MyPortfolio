"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import Social from '@/components/Social';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Hero() {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Only show loading on initial page load, not when navigating back
        if (pathname === '/' && !document.referrer.includes('/projects/')) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    return (
        <>
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
                    <div className="text-2xl md:text-3xl font-mono text-primary animate-pulse">
                        <TypeAnimation
                            sequence={[
                                'Loading...',
                                800, 
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={0}
                            cursor={true}
                            className="inline-block"
                        />
                    </div>
                </div>
            )}
            <section className={`relative min-h-screen flex flex-col justify-center py-20 px-6 md:px-20 lg:px-32 ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'} overflow-hidden`}>
                {/* Subtle Overlay for Readability */}
                <div className="absolute inset-0 bg-background/10 dark:bg-background/5 backdrop-blur-[1px]"></div>

                <div className="flex justify-between items-center relative z-10">
                    <div className="md:max-w-2xl max-w-md grid gap-2 ml-8 md:ml-12 lg:ml-16">
                        <div className="grid gap-2">
                            <h2 className="md:text-3xl lg:text-4xl text-2xl font-medium text-foreground/90 font-mono">
                                Hi, I am
                            </h2>
                            <h1 className="md:text-4xl lg:text-5xl text-3xl font-bold">
                                <span className="text-primary">Jerwin Colipano</span>
                            </h1>
                        </div>
                        <div className="h-12 md:text-xl text-lg font-semibold text-foreground/85 font-mono">
                            <TypeAnimation
                                sequence={[
                                    'Gamer',
                                    3000,
                                    'Full-Stack Developer',
                                    3000,
                                    'Tech Enthusiast',
                                    3000,
                                ]}
                                repeat={Infinity}
                                speed={40}
                            />
                        </div>
                        <div className="mt-4">
                            <Social />
                        </div>
                        <div className="flex items-center gap-3 mt-5">
                            <Button asChild variant="outline" className="bg-background/80 hover:bg-background border-primary/50 font-mono font-bold">
                                <Link href="/">Explore</Link>
                            </Button>
                            <Button asChild className="flex gap-1 items-center justify-center bg-primary/90 hover:bg-primary font-mono font-bold">
                                <Link 
                                    href="https://drive.google.com/file/d/1tpf-sbOnoKgDPYhiMhbkyA57-jtY_uXg/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    My Resume
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="relative hidden md:block -translate-x-20">
                        <div className="w-96 h-96 rounded-full bg-primary/40 absolute -inset-1 blur-md animate-pulse"></div> 
                        <div className="relative w-96 h-96 rounded-full border-2 border-primary/60 overflow-hidden animate-bounce-slow shadow-xl"> 
                            <Image
                                src="/personalphoto.png"
                                alt="Profile photo"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
                
                {/* Scroll Indicator - Centered */}
                <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 flex flex-col items-center z-10">
                    <div className="w-6 h-10 border-2 border-primary/60 rounded-full p-1 mb-2 bg-background/50">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-mouse-scroll mx-auto"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-3 h-3 border-b-2 border-r-2 border-primary/60 transform rotate-45 animate-arrow-bounce"></div>
                        <div className="w-3 h-3 border-b-2 border-r-2 border-primary/60 transform rotate-45 animate-arrow-bounce-delayed"></div>
                    </div>
                </div>
            </section>
        </>
    )
}