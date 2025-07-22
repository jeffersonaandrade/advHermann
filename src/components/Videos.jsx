import { Play, Clock, Eye, Instagram, Scale, Shield, AlertTriangle, FileText, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { useWhatsApp } from '@/hooks/use-whatsapp.js';
import logoImage from '@/assets/logo-adv.png';

const Videos = () => {
  const { handleContactAction } = useWhatsApp();

  const videos = [
    {
      id: 1,
      title: 'Como escolher um advogado de confiança para seu caso?',
      description: 'Dicas importantes sobre como escolher um profissional de confiança para defender seus direitos. Dr. Maurício Hermann explica os critérios essenciais.',
      duration: '3:15',
      views: '1.5k',
      thumbnail: 'gradient-soft',
      instagramUrl: 'https://www.instagram.com/p/mauriciohermann.adv/',
      isRealVideo: true,
      customThumbnail: true,
      thumbnailType: 'default'
    },
    {
      id: 2,
      title: 'Direitos trabalhistas que você precisa conhecer',
      description: 'Orientações práticas sobre seus direitos como trabalhador. Conheça as principais garantias trabalhistas e como defendê-las.',
      duration: '4:20',
      views: '2.1k',
      thumbnail: 'gradient-soft',
      instagramUrl: 'https://www.instagram.com/p/mauriciohermann.adv/',
      isRealVideo: true,
      customThumbnail: true,
      thumbnailType: 'labor'
    },
    {
      id: 3,
      title: 'Contratos: o que você deve verificar antes de assinar',
      description: 'Dicas essenciais para analisar contratos antes de assiná-los. Evite armadilhas e proteja seus interesses com orientação jurídica adequada.',
      duration: '5:30',
      views: '1.8k',
      thumbnail: 'gradient-soft',
      instagramUrl: 'https://www.instagram.com/p/mauriciohermann.adv/',
      isRealVideo: true,
      customThumbnail: true,
      thumbnailType: 'contract'
    },
    {
      id: 4,
      title: 'Direito empresarial: constituindo sua empresa com segurança',
      description: 'Orientações sobre como constituir uma empresa de forma segura e dentro da lei. Planejamento jurídico para o sucesso do seu negócio.',
      duration: '4:45',
      views: '1.2k',
      thumbnail: 'gradient-soft',
      instagramUrl: 'https://www.instagram.com/p/mauriciohermann.adv/',
      isRealVideo: true,
      customThumbnail: true,
      thumbnailType: 'business'
    }
  ];

  const handleVideoClick = (video) => {
    if (video.instagramUrl) {
      window.open(video.instagramUrl, '_blank');
    } else {
      // Para vídeos que ainda não têm URL do Instagram, abrir WhatsApp
      handleContactAction('whatsapp', 'videos');
    }
  };

  const renderCustomThumbnail = (video) => {
    if (video.thumbnailType === 'labor') {
      return (
        <div className="aspect-video rounded-t-lg relative overflow-hidden">
          {/* Background with Logo */}
          <div 
            className="absolute inset-0"
            style={{ backgroundImage: `url(${logoImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Overlay sutil para melhorar legibilidade */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Main Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 p-6">
              {/* Text Content */}
              <div className="space-y-2">
                <h4 className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                  Direitos Trabalhistas
                </h4>
                <p className="text-white/95 text-sm font-medium drop-shadow-md">
                  Conheça seus direitos
                </p>
              </div>
            </div>
          </div>

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Instagram className="w-12 h-12 text-white" />
          </div>
          
          {/* Video Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center space-x-2 bg-black/50 px-2 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="font-medium">4:20</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/50 px-2 py-1 rounded-full">
                <Eye className="w-4 h-4" />
                <span className="font-medium">2.1k</span>
              </div>
            </div>
          </div>

          {/* Badge para vídeo real */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/95 text-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center space-x-1 shadow-lg">
              <Instagram className="w-3 h-3" />
              <span>Instagram</span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 left-4">
            <div className="w-3 h-3 bg-white/60 rounded-full shadow-sm"></div>
          </div>
          <div className="absolute bottom-8 left-6">
            <div className="w-2 h-2 bg-white/50 rounded-full shadow-sm"></div>
          </div>
          <div className="absolute top-6 right-6">
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full shadow-sm"></div>
          </div>
        </div>
      );
    }

    if (video.thumbnailType === 'contract') {
      return (
        <div className="aspect-video rounded-t-lg relative overflow-hidden">
          {/* Background with Logo */}
          <div 
            className="absolute inset-0"
            style={{ backgroundImage: `url(${logoImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Overlay sutil para melhorar legibilidade */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Main Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 p-6">
              {/* Text Content */}
              <div className="space-y-2">
                <h4 className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                  Análise de Contratos
                </h4>
                <p className="text-white/95 text-sm font-medium drop-shadow-md">
                  Proteja seus interesses
                </p>
              </div>
            </div>
          </div>

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Instagram className="w-12 h-12 text-white" />
          </div>
          
          {/* Video Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center space-x-2 bg-black/50 px-2 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="font-medium">5:30</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/50 px-2 py-1 rounded-full">
                <Eye className="w-4 h-4" />
                <span className="font-medium">1.8k</span>
              </div>
            </div>
          </div>

          {/* Badge para vídeo real */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/95 text-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center space-x-1 shadow-lg">
              <Instagram className="w-3 h-3" />
              <span>Instagram</span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 left-4">
            <div className="w-3 h-3 bg-white/60 rounded-full shadow-sm"></div>
          </div>
          <div className="absolute bottom-8 left-6">
            <div className="w-2 h-2 bg-white/50 rounded-full shadow-sm"></div>
          </div>
          <div className="absolute top-6 right-6">
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full shadow-sm"></div>
          </div>
        </div>
      );
    }

    if (video.thumbnailType === 'business') {
      return (
        <div className="aspect-video rounded-t-lg relative overflow-hidden">
          {/* Background with Logo */}
          <div 
            className="absolute inset-0"
            style={{ backgroundImage: `url(${logoImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Overlay sutil para melhorar legibilidade */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Main Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 p-6">
              {/* Text Content */}
              <div className="space-y-2">
                <h4 className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                  Direito Empresarial
                </h4>
                <p className="text-white/95 text-sm font-medium drop-shadow-md">
                  Constituição de empresas
                </p>
              </div>
            </div>
          </div>

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Instagram className="w-12 h-12 text-white" />
          </div>
          
          {/* Video Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center space-x-2 bg-black/50 px-2 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="font-medium">4:45</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/50 px-2 py-1 rounded-full">
                <Eye className="w-4 h-4" />
                <span className="font-medium">1.2k</span>
              </div>
            </div>
          </div>

          {/* Badge para vídeo real */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/95 text-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center space-x-1 shadow-lg">
              <Instagram className="w-3 h-3" />
              <span>Instagram</span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 left-4">
            <div className="w-3 h-3 bg-white/60 rounded-full shadow-sm"></div>
          </div>
          <div className="absolute bottom-8 left-6">
            <div className="w-2 h-2 bg-white/50 rounded-full shadow-sm"></div>
          </div>
          <div className="absolute top-6 right-6">
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full shadow-sm"></div>
          </div>
        </div>
      );
    }

    if (video.thumbnailType === 'default') {
      return (
        <div className="aspect-video rounded-t-lg relative overflow-hidden">
          {/* Background with Logo */}
          <div 
            className="absolute inset-0"
            style={{ backgroundImage: `url(${logoImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Overlay sutil para melhorar legibilidade */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Main Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 p-6">
              {/* Text Content */}
              <div className="space-y-2">
                <h4 className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                  Escolha do Advogado
                </h4>
                <p className="text-white/95 text-sm font-medium drop-shadow-md">
                  Confiança e profissionalismo
                </p>
              </div>
            </div>
          </div>

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Instagram className="w-12 h-12 text-white" />
          </div>
          
          {/* Video Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center space-x-2 bg-black/50 px-2 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="font-medium">3:15</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/50 px-2 py-1 rounded-full">
                <Eye className="w-4 h-4" />
                <span className="font-medium">1.5k</span>
              </div>
            </div>
          </div>

          {/* Badge para vídeo real */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/95 text-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center space-x-1 shadow-lg">
              <Instagram className="w-3 h-3" />
              <span>Instagram</span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 left-4">
            <div className="w-3 h-3 bg-white/60 rounded-full shadow-sm"></div>
          </div>
          <div className="absolute bottom-8 left-6">
            <div className="w-2 h-2 bg-white/50 rounded-full shadow-sm"></div>
          </div>
          <div className="absolute top-6 right-6">
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full shadow-sm"></div>
          </div>
        </div>
      );
    }

    // Thumbnail padrão (fallback)
    return (
      <div className="aspect-video rounded-t-lg relative overflow-hidden">
        {/* Background with Logo */}
        <div 
          className="absolute inset-0"
          style={{ backgroundImage: `url(${logoImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Overlay sutil para melhorar legibilidade */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Main Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 p-6">
            {/* Text Content */}
            <div className="space-y-2">
              <h4 className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                Escolha do Advogado
              </h4>
              <p className="text-white/95 text-sm font-medium drop-shadow-md">
                Confiança e profissionalismo
              </p>
            </div>
          </div>
        </div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Instagram className="w-12 h-12 text-white" />
        </div>
        
        {/* Video Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center space-x-2 bg-black/50 px-2 py-1 rounded-full">
              <Clock className="w-4 h-4" />
              <span className="font-medium">3:15</span>
            </div>
            <div className="flex items-center space-x-2 bg-black/50 px-2 py-1 rounded-full">
              <Eye className="w-4 h-4" />
              <span className="font-medium">1.5k</span>
            </div>
          </div>
        </div>

        {/* Badge para vídeo real */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/95 text-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center space-x-1 shadow-lg">
            <Instagram className="w-3 h-3" />
            <span>Instagram</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4">
          <div className="w-3 h-3 bg-white/60 rounded-full shadow-sm"></div>
        </div>
        <div className="absolute bottom-8 left-6">
          <div className="w-2 h-2 bg-white/50 rounded-full shadow-sm"></div>
        </div>
        <div className="absolute top-6 right-6">
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full shadow-sm"></div>
        </div>
      </div>
    );
  };

  return (
    <section id="videos" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary">
            <Play className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Dicas Jurídicas
            </span>
          </div>
          
          <h2 className="heading-secondary">
            Orientações semanais do{' '}
            <span className="text-primary">Dr. Maurício Hermann</span>
          </h2>
          
          <p className="text-body max-w-2xl mx-auto">
            Toda semana, o Dr. Maurício Hermann compartilha dicas valiosas sobre direitos, 
            orientações jurídicas e informações importantes sobre as principais áreas do direito.
          </p>
        </div>

        {/* Grid de Vídeos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {videos.map((video) => (
            <Card key={video.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer glass-effect" onClick={() => handleVideoClick(video)}>
              <CardContent className="p-0">
                {/* Thumbnail */}
                {video.customThumbnail ? (
                  renderCustomThumbnail(video)
                ) : (
                <div className={`aspect-video ${video.thumbnail} rounded-t-lg relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        {video.isRealVideo ? (
                          <Instagram className="w-8 h-8 text-primary" />
                        ) : (
                      <Play className="w-8 h-8 text-primary ml-1" />
                        )}
                      </div>
                  </div>
                  
                  {/* Video Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{video.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>{video.views}</span>
                      </div>
                    </div>
                  </div>

                    {/* Badge para vídeo real */}
                    {video.isRealVideo && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 text-primary text-xs font-medium px-2 py-1 rounded-full flex items-center space-x-1">
                          <Instagram className="w-3 h-3" />
                          <span>Instagram</span>
                        </div>
                      </div>
                    )}
                </div>
                )}

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">
                      Publicado por Dr. Maurício Hermann
                    </span>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-primary hover:text-primary hover:bg-primary/10"
                    >
                      {video.isRealVideo ? 'Ver no Instagram' : 'Assistir'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <div className="glass-effect rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Quer receber as dicas jurídicas toda semana?
            </h3>
            <p className="text-muted-foreground mb-6">
              Siga o Instagram @mauriciohermann.adv e não perca nenhuma orientação importante 
              sobre seus direitos e questões jurídicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="gradient-primary text-white hover:opacity-90"
                onClick={() => window.open('https://instagram.com/mauriciohermann.adv', '_blank')}
              >
                <Instagram className="w-5 h-5 mr-2" />
                Seguir no Instagram
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => handleContactAction('whatsapp', 'videos')}
              >
                Receber por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;

