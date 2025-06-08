"use client"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import Social from '@/components/Social';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className='relative min-h-screen flex flex-col justify-center py-20 px-6 md:px-20 lg:px-32'>
            <div className='flex justify-between items-center'>
                <div className='md:max-w-2xl max-w-md grid gap-2 ml-8 md:ml-12 lg:ml-16'>
                    <div className="grid gap-2">
                        <h2 className='md:text-3xl lg:text-4xl text-2xl font-medium'>
                            Hi, I am
                        </h2>
                        <h1 className='md:text-4xl lg:text-5xl text-3xl font-bold'>
                            <span className='text-primary'>Jerwin Colipano</span>
                        </h1>
                    </div>
                    <div className='h-12 md:text-xl text-lg font-semibold'>
                        <TypeAnimation
                            sequence={[
                                'Student',
                                3000,
                                'Full-Stack Developer',
                                3000,
                                'Gamer',
                                3000,
                            ]}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="mt-4">
                        <Social />
                    </div>
                    <div className='flex items-center gap-3 mt-5'>
                        <Button asChild variant="outline">
                            <Link href="/">Explore</Link>
                        </Button>
                        <Button asChild className="flex gap-1 items-center justify-center">
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
                    <div className="w-96 h-96 rounded-full bg-primary/20 absolute -inset-0.5 blur-sm animate-pulse"></div> 
                    <div className="relative w-96 h-96 rounded-full border-2 border-primary/50 overflow-hidden animate-bounce-slow"> 
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
            <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1 mb-2">
                    <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-mouse-scroll mx-auto"></div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-3 h-3 border-b-2 border-r-2 border-primary/50 transform rotate-45 animate-arrow-bounce"></div>
                    <div className="w-3 h-3 border-b-2 border-r-2 border-primary/50 transform rotate-45 animate-arrow-bounce-delayed"></div>
                </div>
            </div>
        </section>
    )
}