"use client"

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function Project() {
    if (!projects || projects.length === 0) {
        return <div>No projects available</div>;
    }

    return (
        <section className="py-20">
            <div className="max-w-[1050px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-background dark:bg-secondary rounded-lg overflow-hidden shadow-lg border border-black dark:border-black"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <div className="h-[250px] overflow-hidden">
                                <motion.img 
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                            <div className="h-[150px] p-4 flex flex-col justify-between">
                                <div>
                                    <span className="inline-block text-xs bg-primary/10 px-3 py-1 rounded-full mb-2">
                                        {project.year}
                                    </span>
                                    <h3 className="text-lg font-semibold line-clamp-2">
                                        {project.title}
                                    </h3>
                                </div>
                                <Button asChild size="sm" className="self-end">
                                    <Link href={`/projects/${project.id}`}>
                                        view
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}