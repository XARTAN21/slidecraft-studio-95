import { ReactNode } from "react";

interface SlideProps {
  id: string;
  number: number;
  eyebrow?: string;
  className?: string;
  children: ReactNode;
}

export const Slide = ({ id, number, eyebrow, className = "", children }: SlideProps) => (
  <section id={id} className={`slide ${className}`}>
    <div className="absolute top-6 left-6 md:top-8 md:left-12 font-mono text-xs text-foreground/40 tracking-widest">
      {String(number).padStart(2, "0")} / 15{eyebrow ? ` · ${eyebrow}` : ""}
    </div>
    <div className="slide-inner">{children}</div>
  </section>
);
