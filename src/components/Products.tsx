import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Shirt, Pill, Watch } from "lucide-react";

const Products = () => {
  const categories = [
    {
      icon: Shirt,
      title: "Roupas Fitness",
      description: "Camisetas, shorts e leggings de alta performance",
      items: ["Camisetas dry-fit", "Shorts de treino", "Leggings", "Regatas"]
    },
    {
      icon: Pill,
      title: "Suplementos",
      description: "Whey protein, creatina, BCAA e pré-treinos",
      items: ["Whey Protein", "Creatina", "BCAA", "Pré-treino"]
    },
    {
      icon: Watch,
      title: "Acessórios",
      description: "Equipamentos para otimizar seu treino",
      items: ["Luvas de treino", "Straps", "Cinto", "Garrafas"]
    }
  ];

  const handleWhatsApp = (category: string) => {
    const message = `Olá! Vim pelo site da BBZAO e tenho interesse em ${category}. Quais produtos vocês têm disponíveis e os preços?`;
    window.open(`https://wa.me/000000000000?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <ShoppingBag className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">PRODUTOS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo o que você precisa para potencializar seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border p-6 hover:shadow-glow-blue transition-all duration-300 hover:scale-105"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleWhatsApp(category.title)}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  SOLICITAR VIA WHATSAPP
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
