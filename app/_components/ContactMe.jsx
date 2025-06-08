"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactMe() {
    return (
        <div className="py-20">
        
            <form method="post" className="max-w-md mx-auto grid gap-2 px-6">
                <Label className="mt-3" htmlFor="name">Full Name</Label>
                <Input autoComplete="off" id="name" type="text" placeholder="John Doe" />
                
                <Label className="mt-3" htmlFor="email">Email</Label>
                <Input autoComplete="off" id="email" type="email" placeholder="johndoe@gmail.com" />
                
                <Label className="mt-3" htmlFor="message">Message</Label>
                <Textarea 
                    className="min-h-[100px]" 
                    autoComplete="off" 
                    id="message" 
                    placeholder="I wanna hire you."
                />
                
                <Button className="mt-4" type="submit">Send</Button>
            </form>
        </div>
    )
}