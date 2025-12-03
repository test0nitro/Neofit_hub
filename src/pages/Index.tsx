import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Plans from "@/components/Plans";
import Products from "@/components/Products";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-card border border-border">
            <TabsTrigger 
              value="about"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold"
            >
              SOBRE
            </TabsTrigger>
            <TabsTrigger 
              value="plans"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold"
            >
              PLANOS
            </TabsTrigger>
            <TabsTrigger 
              value="products"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold"
            >
              PRODUTOS
            </TabsTrigger>
            <TabsTrigger 
              value="contact"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold"
            >
              CONTATO
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="animate-fade-in">
            <About />
          </TabsContent>
          
          <TabsContent value="plans" className="animate-fade-in">
            <Plans />
          </TabsContent>
          
          <TabsContent value="products" className="animate-fade-in">
            <Products />
          </TabsContent>
          
          <TabsContent value="contact" className="animate-fade-in">
            <Contact />
          </TabsContent>
        </Tabs>
      </div>

      <footer className="bg-gym-black border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 BBZAO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
