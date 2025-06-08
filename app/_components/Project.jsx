import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


export default function Project({ id, title, alt, image, year }) {
    return (
        <div className="relative border bg-background dark:bg-secondary rounded-md grid place-content-center">
            <div className="p-2">
                <img className="w-full max-w-[400px] md:max-w-[380px] h-full rounded-md aspect-video" src={image} alt={alt} />
            </div>
            <div className="absolute bottom-[94px] left-5 grid gap-2">
                <span className="text-xs dark:bg-secondary bg-background p-2 px-3 rounded">
                    {alt} • {year}
                </span>
            </div>
            <div className="flex items-center justify-between px-6 py-5 mt-[5px]">
                <h1 className="text-xl">{title}</h1>
                <Button asChild size="sm">
                    <Link href={`/projects/${id}`}>
                        view
                    </Link>
                </Button>
            </div>
        </div>
    )
}