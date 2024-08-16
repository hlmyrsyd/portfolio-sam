import { Hero, TopNavigation } from "../components";
import CustomCursor from "../components/CustomCursor";

export default function Homepage() {
    return (
        <div className="w-full">
            <CustomCursor />
            <TopNavigation />
            <Hero />
        </div>
    )
};
