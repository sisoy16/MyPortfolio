import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Social() {
    return (
        <div className="flex gap-4 items-center -ml-1 bg-secondary rounded-full p-4 w-fit">
            <Link 
                href="https://github.com/sisoy16" 
                className="hover:text-primary transition-colors duration-200" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <GitHubLogoIcon className="h-6 w-6 md:h-7 md:w-7" />
            </Link>
            <Link 
                href="https://www.instagram.com/sisoooooy/" 
                className="hover:text-primary transition-colors duration-200" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <InstagramLogoIcon className="h-6 w-6 md:h-7 md:w-7" />
            </Link>
            <Link 
                href="https://x.com/jerwincolipano" 
                className="hover:text-primary transition-colors duration-200" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <TwitterLogoIcon className="h-6 w-6 md:h-7 md:w-7" />
            </Link>
        </div>
    )
}