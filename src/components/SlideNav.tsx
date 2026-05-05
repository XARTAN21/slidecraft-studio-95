import { useEffect, useState } from "react";

const slides = Array.from({ length: 15 }, (_, i) => `slide-${i + 1}`);

export const SlideNav = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = slides.indexOf(e.target.id);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { threshold: 0.5 }
    );
    slides.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
      {slides.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={`Go to slide ${i + 1}`}
          className={`group relative flex items-center justify-end h-3 transition-all ${
            active === i ? "w-8" : "w-3 hover:w-5"
          }`}
        >
          <span
            className={`block h-[2px] rounded-full transition-all w-full ${
              active === i ? "bg-brand glow" : "bg-foreground/20 group-hover:bg-foreground/40"
            }`}
          />
        </a>
      ))}
    </nav>
  );
};
