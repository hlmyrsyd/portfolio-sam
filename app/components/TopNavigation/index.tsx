'use client'
import { motion } from "framer-motion";

export default function TopNavigation() {
    return (
        <div className="absolute w-full z-50">
            <motion.div 
                initial={{ y:-100, opacity:0}}
                animate={{ y:0, opacity:1}}
                transition={{ duration:1, ease: 'easeInOut', delay:8}}
                className="p-6 flex justify-between items-center border-b border-white"
            >
                <button className="flex flex-col gap-1 p-4 rounded-full border transition ease-in-out duration-150 border-white hover:bg-neutral-900">
                    <div className="border border-white w-4"></div>
                    <div className="border border-white w-4"></div>
                    <div className="border border-white w-4"></div>
                </button>
                <h1>Top Navigation</h1>
            </motion.div>
        </div>
    )
};
