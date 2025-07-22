import { useCallback } from 'react';
import { useExternalLinks } from './use-external-links.js';
import { siteConfig } from '@/config/site.js';

export const useWhatsApp = () => {
  const { sendWhatsAppMessage, sendCourseMessage, whatsappNumber } = useExternalLinks();

  // Mantém compatibilidade com código existente
  const sendMessage = useCallback((messageType, customMessage = null) => {
    sendWhatsAppMessage(messageType, customMessage);
  }, [sendWhatsAppMessage]);

  const openWhatsApp = useCallback((message) => {
    sendWhatsAppMessage('custom', message);
  }, [sendWhatsAppMessage]);

  // Função handleContactAction para compatibilidade
  const handleContactAction = useCallback((action, messageType = 'contact') => {
    if (action === 'whatsapp') {
      sendWhatsAppMessage(messageType);
    } else if (action === 'instagram') {
      window.open('https://instagram.com/mauriciohermann.adv', '_blank');
    } else if (action === 'calendly') {
      window.open('https://calendly.com/mauriciohermann/30min', '_blank');
    }
  }, [sendWhatsAppMessage]);

  return {
    sendMessage,
    sendCourseMessage,
    openWhatsApp,
    handleContactAction,
    whatsappNumber
  };
}; 