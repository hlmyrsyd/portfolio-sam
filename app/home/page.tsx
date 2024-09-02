'use client'

import { Hero, Projects, Contact } from "../components";
import { motion} from 'framer-motion';
import { useEffect } from "react";

export default function Homepage() {
    useEffect( () => {

        (
            async () => {
                const LocomotiveScroll = (await import ('locomotive-scroll')).default;
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])
    
    return (
        <div className="relative h-[210vh] overflow-y-scroll">
            <div>
                <Hero />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    )
};
