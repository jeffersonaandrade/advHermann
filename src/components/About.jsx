import { Scale, Award, Building, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { OptimizedImage } from '@/components/ui/optimized-image.jsx';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer.js';
import { memo } from 'react';
import aboutImage from '@/assets/DSC04625.jpg';

const About = memo(() => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const features = [
    {
      icon: Scale,
      title: 'Direito Civil',
      description: 'Atuação em contratos, responsabilidade civil, direito de família e sucessões.'
    },
    {
      icon: Building,
      title: 'Direito Trabalhista',
      description: 'Assessoria em relações de trabalho, rescisões contratuais e direitos trabalhistas.'
    },
    {
      icon: Award,
      title: 'Direito Empresarial',
      description: 'Consultoria para empresas, constituição de sociedades e compliance empresarial.'
    },
    {
      icon: Users,
      title: 'Assessoria Jurídica',
      description: 'Orientação jurídica personalizada para pessoas físicas e jurídicas.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagem */}
          <div 
            ref={elementRef}
            className={`relative transition-all duration-700 ${
              hasIntersected ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              {/* Imagem do Dr. Maurício Hermann */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage 
                  src={aboutImage}
                  alt="Dr. Maurício Hermann Hermann - Advogado Especializado"
                  className="w-full h-full"
                  objectPosition="center top"
                  fallback={
                    <div className="w-full h-full bg-gradient-to-br from-secondary to-accent/20 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-40 h-40 rounded-full bg-white/90 flex items-center justify-center mx-auto">
                          <Scale className="w-20 h-20 text-primary" />
                        </div>
                        <div className="text-muted-foreground">
                          <p className="font-semibold text-lg">Dr. Maurício Hermann Hermann</p>
                          <p className="text-sm">Advogado</p>
                          <p className="text-xs">Especialista em Direito Civil e Trabalhista</p>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
              
              {/* Quote bubble */}
              <div className="absolute -right-4 top-8 glass-effect rounded-lg shadow-lg p-4 max-w-xs">
                <p className="text-sm text-muted-foreground italic">
                  "Justiça é a base da sociedade"
                </p>
                <div className="text-xs text-primary font-medium mt-2">- Dr. Maurício Hermann Hermann</div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Scale className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Sobre o Dr. Maurício Hermann
                </span>
              </div>
              
              <h2 className="heading-secondary">
                Advocacia Especializada por{' '}
                <span className="text-primary">Maurício Hermann</span>
              </h2>
              
              <div className="space-y-4 text-body">
                <p>
                  Advogado especializado em direito civil, trabalhista e empresarial, 
                  com experiência em assessoria jurídica para pessoas físicas e jurídicas.
                </p>
                
                <p>
                  Atuação focada em orientação jurídica profissional, 
                  oferecendo assessoria especializada nas áreas de atuação.
                </p>
                
                <p>
                  Atendimento baseado em princípios éticos e profissionais, 
                  com foco na orientação jurídica adequada para cada situação.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-border hover:shadow-md transition-shadow glass-effect">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Credentials */}
            <div className="bg-secondary/30 rounded-lg p-6 glass-effect">
              <h3 className="font-semibold text-foreground mb-3">Formação e Especialização</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Bacharel em Direito pela Universidade de São Paulo (USP)</li>
                <li>• Especialização em Direito Civil e Processo Civil</li>
                <li>• Especialização em Direito do Trabalho e Processo do Trabalho</li>
                <li>• Membro da Ordem dos Advogados do Brasil (OAB/SP)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;

