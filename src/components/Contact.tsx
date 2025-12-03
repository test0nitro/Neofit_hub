import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/000000000000?text=Olá!%20Vim%20pelo%20site%20da%20BBZAO%20e%20gostaria%20de%20mais%20informações%20sobre%20a%20academia.%20Podem%20me%20atender?", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gym-black to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          <span className="bg-gradient-accent bg-clip-text text-transparent">CONTATO</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Visite-nos ou entre em contato. Estamos prontos para te receber!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-card border-border p-6 hover:shadow-glow-blue transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Avenida das Nações, 1500<br />
                    Setor Comercial Sul<br />
                    Brasília - DF, 70000-000
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6 hover:shadow-glow-blue transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 05h00 - 23h00<br />
                    Sábados: 07h00 - 20h00<br />
                    Domingos: 08h00 - 14h00
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6 hover:shadow-glow-blue transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Telefone</h3>
                  <p className="text-muted-foreground">
                    (00) 0000-0000
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6 hover:shadow-glow-blue transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">E-mail</h3>
                  <p className="text-muted-foreground">
                    contato@bbzao.com.br
                  </p>
                </div>
              </div>
            </Card>

            <Button
              onClick={handleWhatsApp}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-glow-blue hover:shadow-glow-blue-strong transition-all duration-300 hover:scale-105"
              size="lg"
            >
              FALAR NO WHATSAPP AGORA
            </Button>
          </div>

          <Card className="bg-card border-border p-2 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.3277282654753!2d-47.89216668514702!3d-15.794229589066753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3ab1e9e08c11%3A0x1fca4cbf68c11e0!2sBrasilia!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
