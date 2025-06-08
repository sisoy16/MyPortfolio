"use client";

import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const menuItems = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About Me" },
        { id: "certificates", label: "Certificates" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact Me" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm flex justify-between items-center py-5 px-7 md:px-20 lg:px-32 z-50">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-foreground">Jerwin</span>
                <span className="text-primary">.</span>
            </div>
            <div className="flex gap-3 items-center justify-center">
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex" asChild>
                        <Button variant="ghost" size="icon">
                            <MenuIcon className="h-6 w-6 transition-all duration-300 hover:rotate-180" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="ml-[96px]">
                        {menuItems.map((item) => (
                            <DropdownMenuItem
                                key={item.id}
                                onSelect={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                <ModeToggle />
            </div>
        </header>
    );
}