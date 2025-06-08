"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { projects } from "@/lib/projects"

export default function ProjectDetails({ params }) {
    const router = useRouter()
    const project = projects.find(p => p.id === params.id)

    if (!project) return null

    return (
        <main className="pt-24 px-6 md:px-20 lg:px-32">
            <div className="max-w-6xl mx-auto">
                <Button 
                    variant="ghost" 
                    onClick={() => router.back()}
                    className="mb-6 -ml-2"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                </Button>

                <div className="grid gap-8">
                    {/* Header Section */}
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                        <div className="flex gap-2 items-center">
                            <span className="text-sm bg-secondary px-3 py-1 rounded">{project.alt}</span>
                            <span className="text-sm text-muted-foreground">{project.year}</span>
                        </div>
                    </div>

                    {/* Project Image */}
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full rounded-lg"
                    />

                    {/* Project Details */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Description</h2>
                            <p className="text-muted-foreground">{project.description}</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">My Role</h2>
                            <p className="text-muted-foreground">{project.role}</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-primary/10 text-primary rounded text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">Techniques Used</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techniques.map((technique, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                                    >
                                        {technique}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}