import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { name: "María G.", text: "Un paraíso escondido en las montañas. La atención es impecable y las vistas, inolvidables.", rating: 5 },
  { name: "Carlos R.", text: "La mejor experiencia hotelera de Venezuela. El restaurante es extraordinario.", rating: 5 },
  { name: "Ana L.", text: "Volveremos sin duda. El spa con vista a los Andes es una experiencia única.", rating: 5 },
];

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-16 items-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-secondary font-body mb-3">Sobre Nosotros</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Tradición Andina,<br />Elegancia Contemporánea
            </h2>
            <div className="w-16 h-0.5 bg-secondary mb-8" />
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Ubicado a 1.630 metros de altura en la ciudad de Mérida, Hotel Sierra Verde es un refugio boutique que celebra la riqueza cultural y natural de los Andes venezolanos.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Nuestra arquitectura colonial restaurada se fusiona con el confort moderno, ofreciendo una experiencia única donde cada detalle está pensado para conectarte con la belleza de la Sierra Nevada de Mérida.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              { number: "15+", label: "Años de experiencia" },
              { number: "24", label: "Habitaciones únicas" },
              { number: "4.9", label: "Calificación promedio" },
              { number: "10K+", label: "Huéspedes felices" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 bg-muted rounded-lg">
                <p className="font-heading text-3xl text-secondary mb-1">{stat.number}</p>
                <p className="font-body text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-heading text-2xl text-foreground text-center mb-10">Lo que dicen nuestros huéspedes</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card p-8 rounded-lg shadow-sm border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed italic mb-4">"{t.text}"</p>
                <p className="font-heading text-foreground text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
