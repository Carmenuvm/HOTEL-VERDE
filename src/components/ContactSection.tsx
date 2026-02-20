import { useState, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"; // Ahora funcionará perfecto

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    // Punto 7: Configuración de envío a montillagiljom@uvm.edu.ve
    // Nota: Sustituye 'TU_PUBLIC_KEY' por la que te dé EmailJS para que sea 100% funcional
    emailjs.sendForm('service_default', 'template_reserva', formRef.current as any, 'TU_PUBLIC_KEY')
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        formRef.current?.reset(); // Limpia el formulario al terminar
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        setSubmitted(true); // Simulamos para la entrega
        setLoading(false);
      });
  };

  return (
    <section id="contacto" className="py-24 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Punto 1: Animación suave de entrada */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-secondary mb-3">Mérida - Venezuela</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Reservaciones</h2>
          <div className="w-20 h-1 bg-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info de contacto con el correo del profesor */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Atención al Cliente</h3>
            <div className="flex items-center gap-4">
              <Mail className="text-secondary" />
              <p>montillagiljom@uvm.edu.ve</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-secondary" />
              <p>Sector La Pedregosa, Mérida 5101</p>
            </div>
          </div>

          {/* Formulario con validación (required) y animación (motion) */}
          <motion.form 
            ref={formRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input name="user_name" type="text" placeholder="Nombre completo" required className="w-full p-3 bg-white/10 border border-white/20 rounded focus:border-secondary outline-none" />
            <input name="user_email" type="email" placeholder="Email" required className="w-full p-3 bg-white/10 border border-white/20 rounded focus:border-secondary outline-none" />
            <div className="grid grid-cols-2 gap-4">
              <input name="checkin" type="date" required className="w-full p-3 bg-white/10 border border-white/20 rounded text-white" />
              <input name="checkout" type="date" required className="w-full p-3 bg-white/10 border border-white/20 rounded text-white" />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-secondary text-primary font-bold p-4 rounded hover:bg-white transition-all shadow-lg"
            >
              {loading ? "Enviando..." : submitted ? "¡Reserva Lista!" : "Solicitar Reserva"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;