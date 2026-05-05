import { SlideShow } from "@/components/SlideShow";
import { Sparkles } from "lucide-react";
import { Slide1 } from "@/slides/Slide-1";
import { Slide2 } from "@/slides/Slide-2";
import { Slide3 } from "@/slides/Slide-3";
import { Slide4 } from "@/slides/Slide-4";
import { Slide5 } from "@/slides/Slide-5";
import { Slide6 } from "@/slides/Slide-6";
import { Slide7 } from "@/slides/Slide-7";
import { Slide8 } from "@/slides/Slide-8";
import { Slide9 } from "@/slides/Slide-9";
import { Slide10 } from "@/slides/Slide-10";
import { Slide11 } from "@/slides/Slide-11";
import { Slide12 } from "@/slides/Slide-12";
import { Slide13 } from "@/slides/Slide-13";
import { Slide14 } from "@/slides/Slide-14";
import { Slide15 } from "@/slides/Slide-15";

const Index = () => {
  return (
    <div className="relative">
      {/* Top brand bar */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-brand to-brand-glow grid place-items-center">
              <Sparkles className="w-4 h-4 text-brand-foreground" />
            </div>
            <span className="font-semibold tracking-tight">EdgeFabric</span>
          </div>
        </div>
      </header>

      <SlideShow>
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <Slide7 />
        <Slide8 />
        <Slide9 />
        <Slide10 />
        <Slide11 />
        <Slide12 />
        <Slide13 />
        <Slide14 />
        <Slide15 />
      </SlideShow>
    </div>
  );
};

export default Index;
