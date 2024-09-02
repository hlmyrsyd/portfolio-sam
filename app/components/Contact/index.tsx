import Link from "next/link";

export default function Contact() {

    return (
        <div className="m-5 h-full flex flex-col items-center">
            <div className="text-neutral-300 m-5 py-20 px-40 gap-8 bg-neutral-950 h-[40vh] w-full rounded-xl border-1 border-neutral-950 flex flex-col justify-start items-center">
                <h1 className="text-5xl font-bold">Let's get in touch</h1>
                <div className="w-full flex flex-row justify-center gap-10">
                    
                    {/* GITHUB LINK */}
                    <div>
                        <div className="border bg-neutral-900 border-neutral-950 p-6 rounded-xl shadow-inner-white relative group">
                            <div className="flex flex-col gap-4">
                                <div className="bg-gray-950 rounded-md h-36 w-60 flex justify-center items-center ">
                                    <svg
                                        height="80"
                                        width="80"                                
                                        viewBox="0 0 24 24"
                                        fill="white"
                                    >
                                        <path 
                                            d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-3xl font-bold">
                                    Github
                                </h1>
                            </div>
                            <div className="h-0 overflow-hidden opacity-0 translate-y-[-20px] transition-all ease-in-out duration-300 group-hover:h-6 group-hover:translate-y-0 group-hover:opacity-100">
                                <Link 
                                    href="https://github.com/SamuelAlvianM" 
                                    className="text-neutral-300 text-xs hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    github.com/SamuelAlvianM
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* LINKEDIN LINK */}
                    <div>
                        <div className="border bg-neutral-900 border-neutral-950 p-6 rounded-xl shadow-inner-white relative group">
                            <div className="flex flex-col gap-4">
                                <div className="bg-[#136e96] rounded-md h-36 w-60 flex justify-center items-center ">
                                    <svg
                                        height="100"
                                        width="100"                                
                                        viewBox="0 0 24 24"
                                        fill="white"
                                    >
                                        <path 
                                            d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-3xl font-bold">
                                    LinkedIn
                                </h1>
                            </div>
                            <div className="h-0 overflow-hidden opacity-0 translate-y-[-20px] transition-all ease-in-out duration-300 group-hover:h-6 group-hover:translate-y-0 group-hover:opacity-100">
                                <Link 
                                    href="https://www.linkedin.com/in/samuel-alvian-m/" 
                                    className="text-neutral-300 text-xs hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    linkedin.com/in/samuel-alvian-m
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* EMAIL LINK */}
                    <div>
                        <div className="border bg-neutral-900 border-neutral-950 p-6 rounded-xl shadow-inner-white relative group">
                            <div className="flex flex-col gap-4">
                                <div className="bg-[#bb3131] rounded-md h-36 w-60 flex justify-center items-center ">
                                    <svg
                                        height="80"
                                        width="80"                                
                                        viewBox="0 0 32 32"
                                        fill="white"
                                    >
                                        <path 
                                            d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-3xl font-bold">
                                    Email
                                </h1>
                            </div>
                            <div className="h-0 overflow-hidden opacity-0 translate-y-[-20px] transition-all ease-in-out duration-300 group-hover:h-6 group-hover:translate-y-0 group-hover:opacity-100">
                                <Link 
                                    href="mailto:samuelalvian@gmail.com" 
                                    className="text-neutral-300 text-xs hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    mailto:samuelalvian@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}