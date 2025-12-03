import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import heroImage from "@/assets/gym-hero.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/0000000000?text=Olá!%20Vim%20pelo%20site%20da%20BBZAO%20e%20quero%20começar%20a%20treinar!%20Pode%20me%20passar%20mais%20informações%20sobre%20os%20planos?", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(0.4)"
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6 animate-fade-in">
          <Dumbbell className="w-16 h-16 text-primary" strokeWidth={2} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight animate-fade-in">
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            TRANSFORME
          </span>
          <br />
          <span className="text-foreground">SUA VIDA</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light animate-fade-in">
          Equipamentos de ponta, instrutores qualificados e um ambiente que vai te motivar a alcançar seus objetivos
        </p>
        
        <Button 
          size="lg"
          onClick={handleWhatsApp}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-glow-blue hover:shadow-glow-blue-strong transition-all duration-300 hover:scale-105 animate-fade-in"
        >
          QUERO TREINAR AGORA
        </Button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
