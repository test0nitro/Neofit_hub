import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    "Equipamentos de última geração",
    "Instrutores certificados e experientes",
    "Ambiente climatizado e moderno",
    "Acompanhamento personalizado",
    "Horários flexíveis",
    "Comunidade motivadora"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          <span className="bg-gradient-accent bg-clip-text text-transparent">SOBRE NÓS</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Somos mais do que uma academia, somos o lugar onde transformações acontecem
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card border-border p-8 hover:shadow-glow-blue transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-primary">Nossa História</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fundada em 2025 com a missão de transformar vidas através do fitness, a BBZAO nasceu do sonho de criar um espaço onde cada pessoa pudesse alcançar seu máximo potencial. Construímos uma comunidade forte e motivadora.
            </p>
          </Card>

          <Card className="bg-card border-border p-8 hover:shadow-glow-blue transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-primary">Missão e Valores</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Missão:</strong> Proporcionar uma experiência única de treino que inspire e transforme vidas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Valores:</strong> Dedicação, respeito, superação e excelência em tudo que fazemos.
            </p>
          </Card>
        </div>

        <Card className="bg-gradient-card border-primary/20 p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Nossos Diferenciais</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-foreground font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
