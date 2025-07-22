import { Instagram, MessageCircle, Phone, Clock, MapPin, Calendar } from 'lucide-react';
import { Logo } from '@/components/ui/logo.jsx';
import { siteConfig } from '@/config/site.js';
import { useWhatsApp } from '@/hooks/use-whatsapp.js';
import { useScroll } from '@/hooks/use-scroll.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { handleContactAction } = useWhatsApp();
  const { scrollToSection } = useScroll();

  const handleNavigation = (href) => {
    scrollToSection(href);
  };

  return (
    <footer className="bg-card text-foreground border-t border-border">
      <div className="container mx-auto section-padding">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Logo size="xl" variant="full" showText={true} />
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Advocacia especializada em direito civil, trabalhista e empresarial. 
              Assessoria jurídica profissional para pessoas físicas e jurídicas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Navegação</h3>
            <nav className="space-y-3">
              {siteConfig.navigation.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.href)}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contato</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">WhatsApp</p>
                  <p className="text-muted-foreground text-sm">{siteConfig.contact.whatsappFormatted}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Instagram</p>
                  <p className="text-muted-foreground text-sm">{siteConfig.contact.instagram}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Escritório</p>
                  <p className="text-muted-foreground text-sm">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Horários</p>
                  <p className="text-muted-foreground text-sm">{siteConfig.contact.schedule}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aviso Legal */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="text-center mb-6">
            <p className="text-muted-foreground text-xs max-w-4xl mx-auto">
              Este site segue as normas éticas da OAB e não constitui propaganda ou captação de clientela. 
              As informações são de caráter educativo e informativo. Para orientação jurídica específica, consulte um advogado.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Dr. Maurício Hermann - Advocacia Especializada. Todos os direitos reservados.
            </div>
            
            <div className="text-muted-foreground text-sm">
              Recife, PE - Brasil
            </div>
          </div>
          
          {/* Crédito do Criador */}
          <div className="border-t border-border mt-6 pt-6">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-muted-foreground text-xs">
              <span>Desenvolvimento do site - Todos os direitos reservados a</span>
              <a 
                href="https://www.instagram.com/jeffersonaandrade10/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors font-medium"
              >
                <span>Jefferson Andrade</span>
                <Instagram className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

