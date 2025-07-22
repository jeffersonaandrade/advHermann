# Documentação - Site Dr. Maurício Hermann Hermann

## 📋 Resumo do Projeto

Site profissional desenvolvido para o advogado Dr. Maurício Hermann Hermann, especializado em direito civil, trabalhista e empresarial. O projeto foi adaptado de um modelo de fisioterapia para advocacia, mantendo a estrutura moderna e responsiva.

## 🎯 Principais Adaptações Realizadas

### 1. **Paleta de Cores**
- **Antes**: Rosa (#e91e63) e laranja (#ff9800) - adequado para fisioterapia
- **Depois**: Dourado (#d4af37), preto (#0a0a0a) e marrom (#8b4513) - profissional para advocacia

### 2. **Conteúdo Adaptado**
- **Hero**: "Justiça com excelência" em vez de "Respire com tranquilidade"
- **Sobre**: Informações do Dr. Maurício Hermann Hermann em vez da Tia Jow
- **Áreas**: Direito Civil, Trabalhista, Empresarial, etc.
- **Vídeos**: Dicas jurídicas em vez de fisioterapia
- **Depoimentos**: Casos jurídicos e resultados obtidos

### 3. **Configurações Atualizadas**
- **Contato**: WhatsApp, Instagram e email do advogado
- **Localização**: Recife, PE
- **Calendly**: URL específica para o advogado
- **SEO**: Meta tags otimizadas para advocacia

## 📁 Estrutura de Arquivos

### Arquivos Principais Modificados
```
src/
├── config/site.js              # ✅ Configurações do advogado
├── components/
│   ├── Hero.jsx               # ✅ Adaptado para advocacia
│   ├── About.jsx              # ✅ Informações do Dr. Maurício Hermann
│   ├── Areas.jsx              # ✅ Novo componente criado
│   ├── Videos.jsx             # ✅ Dicas jurídicas
│   ├── Testimonials.jsx       # ✅ Depoimentos de clientes
│   ├── Contact.jsx            # ✅ Contato do advogado
│   ├── Header.jsx             # ✅ Nome e branding
│   ├── Footer.jsx             # ✅ Informações atualizadas
│   └── AppointmentScheduler.jsx # ✅ Agendamento jurídico
├── data/
│   ├── areas.js               # ✅ Áreas de atuação
│   ├── testimonials.js        # ✅ Depoimentos jurídicos
│   └── faq.js                 # ✅ FAQ jurídico
└── App.css                    # ✅ Paleta de cores escura
```

### Arquivos Removidos
- `content_strategy.md` - Documentação específica da fisioterapia
- `RESPONSIVIDADE_MELHORIAS.md` - Documentação do projeto modelo
- `SEO_GUIDE.md` - Guia específico da fisioterapia
- `VIDEOS_INSTAGRAM_GUIDE.md` - Guia de vídeos da fisioterapia
- `LOGO_IMPLEMENTACAO.md` - Documentação do logo anterior
- `MELHORIAS_IMPLEMENTADAS.md` - Melhorias do projeto modelo
- `REFATORACOES_MANUTENIBILIDADE.md` - Refatorações do modelo

## 🎨 Design System

### Cores Principais
```css
:root {
  --background: #0a0a0a;        /* Preto */
  --foreground: #ffffff;        /* Branco */
  --primary: #d4af37;          /* Dourado */
  --secondary: #2a2a2a;        /* Cinza escuro */
  --accent: #8b4513;           /* Marrom escuro */
  --muted: #2a2a2a;            /* Cinza escuro */
  --muted-foreground: #a0a0a0; /* Cinza claro */
}
```

### Gradientes
- `gradient-primary`: Dourado para marrom
- `gradient-soft`: Cinza escuro para preto
- `gradient-gold`: Dourado com variações

### Efeitos Especiais
- `glass-effect`: Fundo translúcido com blur
- `gold-border`: Borda dourada
- `gold-text`: Texto dourado
- `gold-bg`: Fundo dourado

## 📱 Funcionalidades Implementadas

### 1. **Áreas de Atuação**
- 6 áreas principais do direito
- Cards interativos com hover effects
- Badges para serviços específicos
- CTA para agendamento

### 2. **Dicas Jurídicas**
- 4 vídeos educativos
- Thumbnails personalizados
- Links para Instagram
- Categorização por área

### 3. **Informações Jurídicas**
- 4 seções educativas
- Orientações gerais sobre direitos
- Prevenção legal
- Documentação jurídica

### 4. **Agendamento**
- Integração com Calendly
- Orientação jurídica
- Horários flexíveis
- Atendimento presencial e online

## 🔧 Configurações Técnicas

### URLs Configuradas
- **Calendly**: `https://calendly.com/mauriciohermann/30min`
- **Instagram**: `@mauriciohermann.adv`
- **WhatsApp**: `(81) 99999-9999`
- **Email**: `contato@mauriciohermann.com`

### SEO Implementado
- Meta tags completas
- Open Graph otimizado
- Twitter Cards
- Schema markup para negócio local
- Localização: Recife, PE

### Performance
- Lazy loading de componentes
- Otimização de imagens
- Preconnect para recursos externos
- Code splitting

## 📋 Próximos Passos

### 1. **Imagens**
- [ ] Substituir imagens placeholder por fotos do Dr. Maurício Hermann
- [ ] Criar thumbnails para vídeos jurídicos
- [ ] Otimizar imagens para web

### 2. **Conteúdo**
- [ ] Adicionar vídeos reais do Instagram
- [ ] Incluir depoimentos reais de clientes
- [ ] Atualizar FAQ com perguntas específicas

### 3. **Funcionalidades**
- [ ] Implementar formulário de contato
- [ ] Adicionar blog jurídico
- [ ] Integrar Google Analytics

### 4. **Deploy**
- [ ] Configurar domínio
- [ ] Configurar SSL
- [ ] Otimizar para produção

## 🎯 Objetivos do Site

1. **Profissionalismo**: Transmitir credibilidade e expertise
2. **Educação**: Compartilhar conhecimento jurídico
3. **Informação**: Fornecer orientações jurídicas gerais
4. **Conformidade**: Seguir rigorosamente as normas éticas da OAB

## ⚖️ Conformidade com a OAB

### ✅ **Elementos Permitidos Implementados:**
- Nome, número da OAB e áreas de atuação
- Artigos e textos informativos sobre temas jurídicos
- Contato profissional e formulário de agendamento
- Informações do escritório e redes sociais
- Fotos profissionais discretas
- Certificações e especializações

### ❌ **Elementos Removidos para Conformidade:**
- ~~Depoimentos de clientes~~ → Substituído por informações jurídicas educativas
- ~~"Consulta gratuita"~~ → Removido, mantendo apenas "orientação jurídica"
- ~~Formas de pagamento~~ → Removidas completamente (proibidas pela OAB)
- ~~Preços e valores~~ → Removidos (proibidos pela OAB)
- ~~Estatísticas promocionais~~ → Removidas (casos resolvidos, taxa de sucesso)
- ~~Linguagem promocional~~ → Substituída por linguagem informativa
- ~~Autopromoção ostensiva~~ → Removida, mantendo apenas informações profissionais
- ~~Referências à "Tia Jow"~~ → Removidas completamente do projeto
- ~~FAQ promocional~~ → Adaptado para orientações jurídicas gerais

### 📋 **Avisos Legais Implementados:**
- Aviso no footer sobre conformidade com a OAB
- Aviso na seção de informações jurídicas
- Linguagem educativa e informativa
- Foco em orientação jurídica geral

### ⚖️ **Regras da OAB sobre Preços e Pagamentos:**
- ❌ **Proibido**: Divulgar preços, valores ou honorários
- ❌ **Proibido**: Mencionar formas de pagamento
- ❌ **Proibido**: Oferecer "consulta gratuita" ou "primeira consulta sem custo"
- ❌ **Proibido**: Promover descontos ou condições especiais
- ✅ **Permitido**: Informar sobre orientação jurídica
- ✅ **Permitido**: Explicar áreas de atuação
- ✅ **Permitido**: Fornecer informações de contato

## 📞 Informações de Contato

- **Advogado**: Dr. Maurício Hermann Hermann
- **WhatsApp**: (81) 99999-9999
- **Instagram**: @mauriciohermann.adv
- **Email**: contato@mauriciohermann.com
- **Localização**: Recife, PE
- **Horários**: Segunda a Sexta, 9h às 18h

---

**Projeto adaptado com sucesso para advocacia profissional** 