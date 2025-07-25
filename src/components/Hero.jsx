import { ArrowRight, Play, Shield, Scale, Users } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { siteConfig } from '@/config/site.js';
import { useWhatsApp } from '@/hooks/use-whatsapp.js';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer.js';
import AppointmentScheduler from './AppointmentScheduler.jsx';
import mauricioPhoto from '@/assets/foto-tratada.jpeg';

const Hero = () => {
  const { handleContactAction } = useWhatsApp();
  const { elementRef, hasIntersected } = useIntersectionObserver();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Heading */}
            <div 
              ref={elementRef}
              className={`space-y-6 transition-all duration-700 ${
                hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-primary mb-4">
                <Scale className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Advocacia Especializada
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Advocacia{' '}
                <span className="text-primary">Especializada</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Advocacia especializada em direito civil, trabalhista e empresarial. 
                Dr. Maurício Hermann oferece assessoria jurídica profissional.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm text-muted-foreground">
              {siteConfig.trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{indicator}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8">
              <AppointmentScheduler />
              
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold"
                onClick={() => handleContactAction('whatsapp', 'hero')}
              >
                <Shield className="w-5 h-5 mr-2" />
                Falar com o Dr. Maurício Hermann
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>


          </div>

          {/* Imagem do Dr. Maurício Hermann */}
          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative max-w-md mx-auto">
              {/* Foto do Maurício */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 shadow-2xl">
                <img 
                  src={mauricioPhoto} 
                  alt="Dr. Maurício Hermann Hermann - Advogado Especializado"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full opacity-40"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-accent rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

