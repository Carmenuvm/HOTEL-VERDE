const FooterSection = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-heading text-2xl mb-2">Sierra Verde</h3>
          <p className="font-body text-background/60 text-sm">Mérida, Venezuela · Desde 2010</p>
        </div>
        <div className="flex gap-8 text-sm tracking-wider uppercase font-body text-background/60">
          <a href="#habitaciones" className="hover:text-secondary transition-colors">Habitaciones</a>
          <a href="#experiencias" className="hover:text-secondary transition-colors">Experiencias</a>
          <a href="#contacto" className="hover:text-secondary transition-colors">Contacto</a>
        </div>
      </div>
      <div className="border-t border-background/10 mt-8 pt-8 text-center">
        <p className="font-body text-background/40 text-xs tracking-wider">
          © 2025 Hotel Sierra Verde. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
