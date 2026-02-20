import HeroSection from "@/components/HeroSection";
import RoomsSection from "@/components/RoomsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <RoomsSection />
      <ExperiencesSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;
