// Mensagens do WhatsApp
export const WHATSAPP_MESSAGES = {
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
  contact: "Olá! Gostaria de falar com o Dr. Maurício Hermann.",
  consultation: "Olá! Gostaria de mais informações sobre orientação jurídica.",
  float: "Olá! Gostaria de falar com o Dr. Maurício Hermann."
};

// Mensagens de erro
export const ERROR_MESSAGES = {
  generic: "Ocorreu um erro. Tente novamente.",
  network: "Erro de conexão. Verifique sua internet.",
  loading: "Carregando...",
  notFound: "Conteúdo não encontrado."
};

// Mensagens de sucesso
export const SUCCESS_MESSAGES = {
  contactSent: "Mensagem enviada com sucesso!",
  appointmentScheduled: "Consulta agendada com sucesso!",
  formSubmitted: "Formulário enviado com sucesso!"
};

// Textos de interface
export const UI_TEXTS = {
  buttons: {
    schedule: "Agendar Orientação",
    contact: "Falar com o Dr. Maurício",
    follow: "Seguir no Instagram",
    moreInfo: "Mais Informações",
    enroll: "Inscrever-se",
    preEnroll: "Pré-inscrição",
    watch: "Assistir",
    close: "Fechar",
    submit: "Enviar",
    cancel: "Cancelar"
  },
  labels: {
    loading: "Carregando...",
    error: "Erro",
    success: "Sucesso",
    required: "Obrigatório",
    optional: "Opcional"
  },
  aria: {
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    whatsapp: "Falar com o Dr. Maurício Hermann pelo WhatsApp",
    calendly: "Agendar orientação pelo Calendly",
    instagram: "Seguir no Instagram",
    email: "Enviar email"
  }
};

// Mensagens de validação
export const VALIDATION_MESSAGES = {
  required: "Este campo é obrigatório",
  email: "Digite um email válido",
  phone: "Digite um telefone válido",
  minLength: (min) => `Mínimo de ${min} caracteres`,
  maxLength: (max) => `Máximo de ${max} caracteres`
}; 