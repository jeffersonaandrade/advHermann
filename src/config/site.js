export const siteConfig = {
  // Informações básicas
  name: "Maurício Hermann",
  title: "Maurício Hermann - Advogado | Advocacia Especializada | Recife",
  description: "Advocacia especializada com foco em direito civil, trabalhista e empresarial. Atendimento personalizado e soluções jurídicas eficazes. Consulte o Dr. Maurício Hermann.",
  keywords: "advogado, advocacia, direito civil, direito trabalhista, direito empresarial, Maurício Hermann, consultoria jurídica, processo judicial, Recife, advogado especializado",
  
  // SEO Avançado
  seo: {
    title: "Advogado Maurício Hermann | Advocacia Especializada em Recife",
    description: "Advocacia especializada em direito civil, trabalhista e empresarial. Dr. Maurício Hermann oferece consultoria jurídica personalizada e soluções eficazes.",
    keywords: [
      "advogado Recife",
      "advocacia especializada", 
      "direito civil",
      "direito trabalhista",
      "direito empresarial",
      "consultoria jurídica",
      "processo judicial",
      "Maurício Hermann advogado",
      "advocacia Recife",
      "advogado especializado",
      "soluções jurídicas",
      "assessoria jurídica"
    ],
    localBusiness: {
      name: "Dr. Maurício Hermann - Advocacia",
      address: "Recife, Pernambuco, Brasil",
      phone: "+5581999999999",
      email: "contato@mauriciohermann.com",
      website: "https://mauriciohermann.com",
      latitude: "-8.0476",
      longitude: "-34.8770",
      serviceArea: "Recife e Região Metropolitana",
      businessHours: "Segunda a Sexta, 9h às 18h"
    }
  },
  
  // Contato
  contact: {
    whatsapp: "5581999999999",
    whatsappFormatted: "(81) 99999-9999",
    instagram: "@mauriciohermann.adv",
    instagramUrl: "https://instagram.com/mauriciohermann.adv",
    email: "contato@mauriciohermann.com",
    address: "Recife, PE",
    schedule: "Segunda a Sexta, 9h às 18h",
    serviceArea: "Recife e Região Metropolitana"
  },
  
  // URLs
  urls: {
    whatsapp: "https://wa.me/5581999999999",
    instagram: "https://instagram.com/mauriciohermann.adv",
    email: "contato@mauriciohermann.com",
    calendly: "https://calendly.com/mauriciohermann/30min"
  },
  
  // Mensagens de WhatsApp (importadas de messages.js)
  whatsappMessages: {
    schedule: "Olá! Gostaria de agendar uma orientação jurídica com o Dr. Maurício Hermann.",
    scheduleLegal: "Olá! Gostaria de agendar uma orientação jurídica.",
    hero: "Olá! Vi o site do Dr. Maurício Hermann e gostaria de falar sobre uma questão jurídica.",
    questions: "Olá! Tenho algumas dúvidas sobre orientação jurídica.",
    legalQuestions: "Olá! Tenho algumas dúvidas sobre direito civil/trabalhista/empresarial.",
    testimonials: "Olá! Gostaria de agendar uma orientação jurídica.",
    videos: "Olá! Gostaria de receber mais informações sobre orientação jurídica.",
    courses: "Olá! Gostaria de receber informações sobre palestras jurídicas.",
    courseInfo: (courseTitle) => `Olá! Gostaria de mais informações sobre "${courseTitle}".`,
    courseEnrollment: (courseTitle) => `Olá! Gostaria de me inscrever em "${courseTitle}".`,
    contact: "Olá! Gostaria de falar com o Dr. Maurício Hermann."
  },
  
  // Estatísticas
  stats: {
    experience: "10+",
    followers: "2.375",
    rating: 5
  },
  
  // Navegação
  navigation: [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Dicas em Vídeo', href: '#videos' },
    { label: 'Cursos', href: '#courses' },
    { label: 'Informações Jurídicas', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contact' }
  ],
  
  // Indicadores de confiança
  trustIndicators: [
    "Advocacia especializada"
  ],
  
  // Informações de consulta
  consultation: {
    duration: "30 minutos",
    area: "Recife e Região Metropolitana",
    scheduling: "Agendamento via WhatsApp",
    benefits: [
      "Análise detalhada do caso",
      "Estratégia personalizada",
      "Acompanhamento completo",
      "Transparência total"
    ]
  },
  
  // Informações de contato estruturadas
  contactInfo: [
    {
      icon: "Phone",
      title: 'WhatsApp',
      content: '(81) 99999-9999',
      description: 'Atendimento de segunda a sexta',
      action: 'whatsapp',
      messageType: 'schedule'
    },
    {
      icon: "Instagram", 
      title: 'Instagram',
      content: '@mauriciohermann.adv',
      description: 'Dicas jurídicas e orientações',
      action: 'instagram'
    },
    {
      icon: "MapPin",
      title: 'Escritório',
      content: 'Recife, PE',
      description: 'Atendimento presencial e online',
      action: null
    },
    {
      icon: "Clock",
      title: 'Horários',
      content: 'Segunda a Sexta',
      description: '9h às 18h',
      action: null
    }
  ]
};

// Função utilitária para gerar URLs do WhatsApp
export const getWhatsAppUrl = (message) => {
  const encodedMessage = encodeURIComponent(message);
  return `${siteConfig.urls.whatsapp}?text=${encodedMessage}`;
};

// Função para detectar se é dispositivo móvel
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Função para detectar se é iOS
const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

// Função para abrir WhatsApp com melhor compatibilidade
export const openWhatsApp = (message) => {
  const url = getWhatsAppUrl(message);
  
  if (isMobile()) {
    // Em dispositivos móveis, tenta abrir o app diretamente
    try {
      // Para iOS, usa uma abordagem diferente
      if (isIOS()) {
        // Cria um link temporário e simula clique
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Para Android e outros, usa window.location
        window.location.href = url;
      }
    } catch (error) {
      // Fallback para window.open
      window.open(url, '_blank');
    }
  } else {
    // Em desktop, usa window.open normalmente
    window.open(url, '_blank');
  }
};

// Função para abrir Instagram com melhor compatibilidade
export const openInstagram = () => {
  const url = siteConfig.urls.instagram;
  
  if (isMobile()) {
    try {
      if (isIOS()) {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.location.href = url;
      }
    } catch (error) {
      window.open(url, '_blank');
    }
  } else {
    window.open(url, '_blank');
  }
};

// Função para abrir email com melhor compatibilidade
export const openEmail = () => {
  const url = `mailto:${siteConfig.urls.email}`;
  
  if (isMobile()) {
    try {
      if (isIOS()) {
        const link = document.createElement('a');
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.location.href = url;
      }
    } catch (error) {
      window.open(url, '_blank');
    }
  } else {
    window.open(url, '_blank');
  }
}; 