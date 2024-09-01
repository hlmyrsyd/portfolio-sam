'use client'
import Image from "next/image"

export default function Projects() {

    return (
        <div className="md:px-80 sm:px-10 w-full h-screen flex flex-col justify-center items-start py-24">
            <h1 className="w-full font-bold text-left sm:text-[3rem] md:text-[4rem]">Projects</h1>
            
            {/* PROJECT AXIE INFINITY */}
            <div 
                className="group transition border-t flex justify-between items-center text-neutral-700 border-neutral-800 w-full h-24 
                hover:bg-neutral-900 hover:cursor-pointer ease-in-out duration-150"
            >
                <h1 className="text-3xl transition-transform group-hover:translate-x-6 group-hover:text-white">Axie Infinity</h1>

                <div className="relative pr-2 flex flex-row scale-75 transform opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-150">
                    <div className="h-full w-3/4 p-6 rounded-xl flex justify-center items-center bg-neutral-900 border border-neutral-950 shadow-inner-white">
                        <Image
                            src="/axie-infinity.jpeg"
                            alt="Project Image"
                            width={500}
                            height={500}
                            className="rounded-sm"
                        >
                            
                        </Image>
                    </div>
                    {/* <div className="h-full w-1/4 flex flex-col justify-between">
                        <div className="bg-blue-500">Test</div>
                        <div className="bg-green-500">test</div>
                        <div className="bg-purple-500">test</div>
                    </div> */}
                </div>
            </div>

            {/* PROJECT VOGUE SCHOOL */}
            <div 
                className="group transition border-t flex justify-between items-center text-neutral-700 border-neutral-800 w-full h-24 
                hover:bg-neutral-900 hover:cursor-pointer ease-in-out duration-150"
            >
                <h1 className="text-3xl transition-transform group-hover:translate-x-6 group-hover:text-white">Vogue School</h1>

                <div className="relative pr-2 flex flex-row scale-75 transform opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-150">
                    <div className="h-full w-3/4 p-6 rounded-xl flex justify-center items-center bg-neutral-900 border border-neutral-950 shadow-inner-white">
                        <Image
                            src="/vogue-school.jpeg"
                            alt="Project Image"
                            width={500}
                            height={500}
                            className="rounded-sm"
                        >
                            
                        </Image>
                    </div>
                    {/* <div className="h-full w-1/4 flex flex-col justify-between">
                        <div className="bg-blue-500">Test</div>
                        <div className="bg-green-500">test</div>
                        <div className="bg-purple-500">test</div>
                    </div> */}
                </div>
            </div>

            {/* PROJECT WE RENT */}
            <div 
                className="group transition border-t flex justify-between items-center text-neutral-700 border-neutral-800 w-full h-24 
                hover:bg-neutral-900 hover:cursor-pointer ease-in-out duration-150"
            >
                <h1 className="text-3xl transition-transform group-hover:translate-x-6 group-hover:text-white">We Rent</h1>

                <div className="relative pr-2 flex flex-row scale-75 transform opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-150">
                    <div className="h-full w-3/4 p-6 rounded-xl flex justify-center items-center bg-neutral-900 border border-neutral-950 shadow-inner-white">
                        <Image
                            src="/we-rent.png"
                            alt="Project Image"
                            width={500}
                            height={500}
                            className="rounded-sm"
                        >
                            
                        </Image>
                    </div>
                    {/* <div className="h-full w-1/4 flex flex-col justify-between">
                        <div className="bg-blue-500">Test</div>
                        <div className="bg-green-500">test</div>
                        <div className="bg-purple-500">test</div>
                    </div> */}
                </div>
            </div>

            {/* PROJECT SALEMATE */}
            <div 
                className="group transition border-t flex justify-between items-center text-neutral-700 border-neutral-800 w-full h-24 
                hover:bg-neutral-900 hover:cursor-pointer ease-in-out duration-150"
            >
                <h1 className="text-3xl transition-transform group-hover:translate-x-6 group-hover:text-white">Salemate</h1>

                <div className="relative pr-2 flex flex-row scale-75 transform opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-150">
                    <div className="h-full w-3/4 p-6 rounded-xl flex justify-center items-center bg-neutral-900 border border-neutral-950 shadow-inner-white">
                        <Image
                            src="/salemate.jpeg"
                            alt="Project Image"
                            width={500}
                            height={500}
                            className="rounded-sm"
                        >
                            
                        </Image>
                    </div>
                    {/* <div className="h-full w-1/4 flex flex-col justify-between">
                        <div className="bg-blue-500">Test</div>
                        <div className="bg-green-500">test</div>
                        <div className="bg-purple-500">test</div>
                    </div> */}
                </div>
            </div>

        </div>
    )
};