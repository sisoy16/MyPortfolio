"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <DialogPrimitive.Content
      ref={ref}
      className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg"
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogPortal,
}

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";

export default function Project({ id, title, alt, image, year }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(() => projects.findIndex(p => p.id === id));

    // Auto-advance carousel
    React.useEffect(() => {
        if (isModalOpen) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % projects.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isModalOpen]);

    return (
        <>
            <div className="relative border bg-background dark:bg-secondary rounded-md grid place-content-center">
                <div className="p-2">
                    <img 
                        className="w-full max-w-[400px] md:max-w-[380px] h-full rounded-md aspect-video" 
                        src={image} 
                        alt={alt} 
                    />
                </div>
                <div className="absolute bottom-[94px] left-5 grid gap-2">
                    <span className="text-xs dark:bg-secondary bg-background p-2 px-3 rounded">
                        {alt} • {year}
                    </span>
                </div>
                <div className="flex items-center justify-between px-6 py-5 mt-[5px]">
                    <h1 className="text-xl">{title}</h1>
                    <Button 
                        size="sm"
                        onClick={() => setIsModalOpen(true)}
                    >
                        view
                    </Button>
                </div>
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="max-w-5xl p-0">
                    <div className="relative w-full min-h-[80vh] overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 300 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -300 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 p-6"
                            >
                                <div className="grid md:grid-cols-[1.5fr,1fr] gap-6 h-full">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <img
                                            src={projects[currentIndex].image}
                                            alt={projects[currentIndex].title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-bold">
                                            {projects[currentIndex].title}
                                        </h2>
                                        <p className="text-muted-foreground">
                                            {projects[currentIndex].description}
                                        </p>
                                        
                                        <div>
                                            <h3 className="font-semibold mb-2">Technologies</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {projects[currentIndex].technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}