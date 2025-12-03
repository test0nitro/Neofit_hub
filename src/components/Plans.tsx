import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "BÁSICO",
      price: "R$ 99",
      period: "/mês",
      benefits: [
        "Acesso à área de musculação",
        "Acesso à área de cardio",
        "Vestiários e armários",
        "Avaliação física inicial",
      ],
      highlight: false,
    },
    {
      name: "PRO",
      price: "R$ 179",
      period: "/mês",
      benefits: [
        "Tudo do plano Básico",
        "Aulas coletivas ilimitadas",
        "Treino personalizado mensal",
        "Área de functional training",
        "Desconto em produtos",
      ],
      highlight: true,
    },
    {
      name: "ELITE",
      price: "R$ 299",
      period: "/mês",
      benefits: [
        "Tudo do plano Pro",
        "Personal trainer 2x por semana",
        "Acompanhamento nutricional",
        "Acesso prioritário",
        "Zona VIP exclusiva",
        "Suplementação inclusa",
      ],
      highlight: false,
    },
  ];

  const handleWhatsApp = (planName: string) => {
    const message = `Olá! Vim pelo site da BBZAO e tenho interesse no plano ${planName}. Gostaria de contratar! Quais são as condições e formas de pagamento?`;
    window.open(`https://wa.me/000000000000?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-gym-black">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          <span className="bg-gradient-accent bg-clip-text text-transparent">PLANOS</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Escolha o plano ideal para sua jornada de transformação
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 ${
                plan.highlight
                  ? "bg-gradient-card border-primary shadow-glow-blue scale-105"
                  : "bg-card border-border"
              } hover:shadow-glow-blue transition-all duration-300`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-accent px-4 py-1 rounded-full">
                  <span className="text-sm font-bold text-background">MAIS POPULAR</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-primary mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-black text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground mb-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleWhatsApp(plan.name)}
                className={`w-full font-bold ${
                  plan.highlight
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-blue"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                } transition-all duration-300 hover:scale-105`}
                size="lg"
              >
                CONTRATAR AGORA
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
