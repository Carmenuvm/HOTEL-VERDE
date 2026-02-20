import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-hotel.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.classList.add("animate-float-up");
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Hotel Sierra Verde en los Andes de Mérida, Venezuela"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-16 py-6">
        <span className="font-heading text-2xl md:text-3xl tracking-wider text-primary-foreground">
          Sierra Verde
        </span>
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-primary-foreground/90 font-body">
          <a href="#habitaciones" className="hover:text-secondary transition-colors duration-300">Habitaciones</a>
          <a href="#experiencias" className="hover:text-secondary transition-colors duration-300">Experiencias</a>
          <a href="#nosotros" className="hover:text-secondary transition-colors duration-300">Nosotros</a>
          <a href="#contacto" className="hover:text-secondary transition-colors duration-300">Contacto</a>
        </div>
      </nav>

      <div ref={ref} className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 opacity-0">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-secondary font-body mb-4">
          Mérida, Venezuela
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-medium leading-tight mb-6">
          Hotel Sierra Verde
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 font-light">
          Un refugio de lujo entre las montañas andinas, donde la naturaleza y la elegancia se encuentran.
        </p>
        <a
          href="#habitaciones"
          className="inline-block border border-secondary text-secondary px-8 py-3 text-sm tracking-widest uppercase font-body hover:bg-secondary hover:text-secondary-foreground transition-all duration-500"
        >
          Explorar
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-secondary/50 animate-pulse mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
