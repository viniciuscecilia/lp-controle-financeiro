// Design tokens
export const COLORS = {
  primary: '#00d084',
  darkGreen: '#1a4d3e',
  white: '#ffffff',
  dark: '#111111',
  gray: '#636363',
  lightGray: '#f5f5f5',
  red: '#d32f2f',
};

export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
  '2xl': '3rem',
  '3xl': '4rem',
};

// Configuração da LP
export const LP_CONFIG = {
  creator: {
    name: 'Dr. Rafael Barbosa',
    title: 'Especialista em Gestão Financeira',
    avatar: '/images/avatar-rafael.png',
    productName: 'Planilha Financeira Premium',
  },
  skus: {
    basica: {
      name: 'Planilha Básica',
      price: 5.9,
      checkoutUrl: process.env.NEXT_PUBLIC_HUBLA_BASICA || 'https://hubla.com/checkout/basica',
      features: [
        '✓ Planilha básica sem cartões',
        '✓ 1 mês de controle',
      ],
    },
    essencial: {
      name: 'Planilha Essencial',
      price: 15.99,
      checkoutUrl: process.env.NEXT_PUBLIC_HUBLA_ESSENCIAL || 'https://hubla.com/checkout/essencial',
      features: [
        '✓ Controle de 3 cartões',
        '✓ Controle de 3 bancos',
        '✓ Controlar pagar e receber',
        '✓ Controle mensal e anual',
        '✉ Acesso no e-mail',
      ],
      badge: 'MAIOR BENEFÍCIO',
    },
    completa: {
      name: 'Planilha Completa',
      price: 25,
      checkoutUrl: process.env.NEXT_PUBLIC_HUBLA_COMPLETA || 'https://hubla.com/checkout/completa',
      features: [
        '✓ Controle de 8 cartões',
        '✓ Controle de 6 bancos',
        '✓ Lançamento de Parcelas',
        '✓ Contas a pagar e receber',
        '✓ Controle mensal e anual',
        '✓ Tutorial de acesso e uso',
        '✓ Uso em múltiplos dispositivos',
        '✉ Acesso no e-mail',
      ],
    },
  },
  popup: {
    title: 'Aproveite 30% OFF na Completa!',
    subtitle: 'Use o cupom',
    cupom: 'COMPLETA30',
    discount: 0.30,
    fromPrice: 25,
    toPrice: 17.5,
  },
};
