import { useEffect, useRef, useState } from "react";
import spaImg from "@/assets/amenity-spa.jpg";
import restaurantImg from "@/assets/amenity-restaurant.jpg";
import { Mountain, Utensils, Waves, Coffee } from "lucide-react";

const experiences = [
  {
    icon: Waves,
    title: "Spa & Bienestar",
    description: "Piscina infinita con vista a los Andes, sauna, masajes con aromas locales de cacao y café.",
    image: spaImg,
  },
  {
    icon: Utensils,
    title: "Gastronomía Andina",
    description: "Cocina de autor inspirada en la tradición merideña, con ingredientes frescos de nuestra huerta orgánica.",
    image: restaurantImg,
  },
];

const activities = [
  { icon: Mountain, title: "Excursiones", desc: "Rutas guiadas al Pico Bolívar y Laguna de Mucubají" },
  { icon: Coffee, title: "Ruta del Café", desc: "Visita a haciendas cafetaleras con degustación" },
];

const ExperiencesSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experiencias" ref={ref} className="py-24 md:py-32 bg-section-gradient">
      <div className="container max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm tracking-[0.3em] uppercase text-secondary font-body mb-3">Experiencias</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Vive la Magia de los Andes</h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`group relative overflow-hidden rounded-lg h-96 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <exp.icon className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-heading text-2xl text-primary-foreground mb-2">{exp.title}</h3>
                <p className="font-body text-primary-foreground/80 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-2 gap-6 max-w-2xl mx-auto transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {activities.map((act) => (
            <div key={act.title} className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <act.icon className="w-10 h-10 text-secondary mx-auto mb-3" />
              <h4 className="font-heading text-lg text-foreground mb-2">{act.title}</h4>
              <p className="font-body text-muted-foreground text-sm">{act.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
