"use client"

import { projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function ProjectPage({ params }) {
    const router = useRouter();
    const project = projects.find(p => p.id === params.id);

    if (!project) {
        return <div>Project not found</div>;
    }

    const handleBack = (e) => {
        e.preventDefault();
        router.back();
    };

    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 px-6 md:px-20 lg:px-32">
                <div className="mb-6">
                    <Button 
                        onClick={handleBack} 
                        variant="ghost" 
                        size="sm"
                        className="flex items-center gap-2"
                    >
                        <ArrowLeft size={16} />
                        Back
                    </Button>
                </div>

                <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
                    <div>
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                            <p className="text-muted-foreground">{project.description}</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">Role</h2>
                            <p className="text-muted-foreground">{project.role}</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">Technologies</h2>
                            <div className="flex flex-wrap gap-2">
                                {Array.isArray(project.tech) ? project.tech.map((tech) => (
                                    <span 
                                        key={tech}
                                        className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                )) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}