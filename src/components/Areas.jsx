import { Scale, Users, Building, Shield, Calculator, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer.js';
import { legalAreas } from '@/data/areas.js';
import { useWhatsApp } from '@/hooks/use-whatsapp.js';
import { memo } from 'react';

const Areas = memo(() => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const { handleContactAction } = useWhatsApp();

  const iconMap = {
    Scale,
    Users,
    Building,
    Shield,
    Calculator,
    FileText
  };

  return (
    <section id="areas" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div 
          ref={elementRef}
          className={`text-center space-y-6 mb-16 transition-all duration-700 ${
            hasIntersected ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center space-x-2 text-primary">
            <Scale className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Áreas de Atuação
            </span>
          </div>
          
          <h2 className="heading-secondary">
            Especialidades{' '}
            <span className="text-primary">Jurídicas</span>
          </h2>
          
          <p className="text-body max-w-3xl mx-auto">
            Oferecemos serviços jurídicos especializados em diversas áreas do direito, 
            sempre com foco na excelência e nos melhores resultados para nossos clientes.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalAreas.map((area, index) => {
            const IconComponent = iconMap[area.icon];
            
            return (
              <Card 
                key={area.id} 
                className={`glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  hasIntersected ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg bg-${area.color}/10 flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 text-${area.color}`} />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {area.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Principais serviços:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.features.slice(0, 3).map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex} 
                          variant="secondary" 
                          className="text-xs bg-secondary/50 text-muted-foreground"
                        >
                          {feature}
                        </Badge>
                      ))}
                      {area.features.length > 3 && (
                        <Badge 
                          variant="outline" 
                          className="text-xs border-primary/30 text-primary"
                        >
                          +{area.features.length - 3} mais
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de Orientação Jurídica?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Agende uma orientação jurídica e descubra como podemos ajudar 
              você com suas questões legais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://calendly.com/mauriciohermann/30min', '_blank')}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Agendar Orientação
              </button>
              <button 
                onClick={() => handleContactAction('whatsapp', 'questions')}
                className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Areas.displayName = 'Areas';

export default Areas; 