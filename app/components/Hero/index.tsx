'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image'

export default function Hero() {
    
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="font-bold text-[6rem] flex flex-col items-center">
                <h1 className="leading-10">Test Dulu</h1>
                <h1>Developer</h1>
            </div>

            <motion.div 
                whileHover={{ scale: 1.1}}
                className="border p-4 rounded-xl shadow-inner-white border-neutral-800 cursor-none">
                
                specialized in turn text into reality
            </motion.div>

            <div className='p-6 flex flex-row gap-4 h-32 w-full justify-center'>
                <div 
                    className="border p-4 rounded-xl shadow-inner-white flex items-center border-neutral-800 cursor-none"
                >
                    <Image
                        src="./logo-nest.svg"
                        width={50}
                        height={50}
                        alt="logo-nest"
                    />
                </div>
                <div
                    className="border p-4 rounded-xl shadow-inner-white flex items-center border-neutral-800 cursor-none"
                >
                    <Image
                        src="./logo-python.svg"
                        width={50}
                        height={50}
                        alt="logo-python"
                    />
                </div>
            </div>
            {/* NESTJS, PYTHON, TS, POSTGRES, AWS S3, SQL */}
        </div>
    )
};
