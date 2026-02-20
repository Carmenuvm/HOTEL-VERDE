import { useEffect, useRef, useState } from "react";
import roomSuite from "@/assets/room-suite.jpg";
import roomStandard from "@/assets/room-standard.jpg";

const rooms = [
  {
    name: "Suite Andina",
    description: "Espaciosa suite con vista panorámica a la Sierra Nevada, chimenea privada y terraza con jacuzzi.",
    price: "Desde $220/noche",
    image: roomSuite,
    features: ["Vista a la montaña", "Jacuzzi privado", "Chimenea", "60 m²"],
  },
  {
    name: "Habitación Colonial",
    description: "Encanto rústico con vigas de madera, muebles artesanales y la calidez de los Andes venezolanos.",
    price: "Desde $120/noche",
    image: roomStandard,
    features: ["Estilo colonial", "Balcón privado", "Minibar", "35 m²"],
  },
];

const RoomsSection = () => {
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
    <section id="habitaciones" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm tracking-[0.3em] uppercase text-secondary font-body mb-3">Alojamiento</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Nuestras Habitaciones</h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={`group overflow-hidden bg-card rounded-lg shadow-lg transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-4 py-1.5 text-xs tracking-widest uppercase font-body rounded">
                  {room.price}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl text-foreground mb-3">{room.name}</h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">{room.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {room.features.map((f) => (
                    <span key={f} className="text-xs tracking-wider uppercase font-body border border-border px-3 py-1.5 text-muted-foreground rounded-sm">
                      {f}
                    </span>
                  ))}
                </div>
                <a href="#contacto" className="text-sm tracking-widest uppercase font-body text-secondary hover:text-primary transition-colors duration-300">
                  Reservar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
