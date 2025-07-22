import { BookOpen, Scale, Shield, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card.jsx';

const Testimonials = () => {
  const legalInfo = [
    {
      icon: BookOpen,
      title: 'Direitos Fundamentais',
      description: 'Conheça seus direitos básicos como cidadão e como protegê-los adequadamente.',
      content: 'Informações sobre direitos constitucionais, acesso à justiça e garantias fundamentais.'
    },
    {
      icon: Scale,
      title: 'Orientação Jurídica',
      description: 'Entenda quando e como buscar orientação jurídica profissional.',
      content: 'Orientações sobre quando procurar um advogado e como escolher um profissional adequado.'
    },
    {
      icon: Shield,
      title: 'Prevenção Legal',
      description: 'Dicas para evitar problemas jurídicos e proteger seus interesses.',
      content: 'Medidas preventivas para evitar litígios e proteger direitos e interesses.'
    },
    {
      icon: FileText,
      title: 'Documentação',
      description: 'Importância da documentação adequada em questões jurídicas.',
      content: 'Orientações sobre a importância de manter documentação organizada e completa.'
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary">
            <Scale className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Informações Jurídicas
            </span>
          </div>
          
          <h2 className="heading-secondary">
            Orientação{' '}
            <span className="text-primary">Jurídica</span>
          </h2>
          
          <p className="text-body max-w-2xl mx-auto">
            Informações educativas sobre direitos, deveres e orientações jurídicas gerais.
          </p>
        </div>

        {/* Grid de Informações */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {legalInfo.map((info, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow glass-effect">
              <CardContent className="p-6 space-y-4">
                {/* Icon */}
                <div className="flex justify-start items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-lg font-semibold text-foreground">
                  {info.title}
                </h3>

                {/* Descrição */}
                <p className="text-muted-foreground leading-relaxed">
                  {info.description}
                </p>

                {/* Conteúdo */}
                <div className="bg-primary/5 rounded-lg p-3">
                  <div className="text-sm text-muted-foreground">{info.content}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Aviso Legal */}
        <div className="glass-effect rounded-2xl p-8 shadow-sm">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Aviso Legal
            </h3>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              As informações contidas neste site são de caráter educativo e informativo. 
              Para orientação jurídica específica, consulte um advogado. 
              Este site segue as normas éticas da OAB e não constitui propaganda ou captação de clientela.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

