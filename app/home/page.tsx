import { Hero, Projects, CustomCursor } from "../components";

export default function Homepage() {
    return (
        <div className="h-screen overflow-y-scroll scroll-snap-y scroll-smooth">
            {/* <TopNavigation /> */}
            <div id="hero" className="scroll-snap-start">
                <Hero />
            </div>
            <div id="projects" className="scroll-snap-start">
                <Projects />
            </div>
            {/* <CustomCursor /> */}
        </div>
    )
};
