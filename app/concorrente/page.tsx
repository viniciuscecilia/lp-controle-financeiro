'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MdCheckCircle } from 'react-icons/md';
import { COLORS } from '@/lib/constants';

// GTM tracking function
const trackPageView = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_path: '/concorrente',
      page_title: 'Concorrente LP - Controle Simples',
      utm_source: 'lp',
      utm_medium: 'concorrente',
    });
  }
};

const trackCTAClick = (ctaName: string, sku: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', {
      cta_name: ctaName,
      sku_tier: sku,
      page_location: '/concorrente',
    });
  }
};

export default function ConcorrenteLPPage() {
  useEffect(() => {
    trackPageView();
  }, []);

  const handleCTAClick = (sku: string, url: string) => {
    trackCTAClick('hero_cta', sku);
    window.open(url, '_blank');
  };

  const checkoutUrl17 = process.env.NEXT_PUBLIC_HUBLA_17 || 'https://pay.hub.la/a4ljlLq1umBAa2OlTlcH';
  const checkoutUrl27 = process.env.NEXT_PUBLIC_HUBLA_27 || 'https://pay.hub.la/uy1xHmiehjoq86eowi16';

  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full"
        style={{ backgroundColor: '#FF4444' }}
      >
        {/* Headline Banner */}
        <div className="w-full py-6 px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white font-black text-2xl sm:text-4xl tracking-wide leading-tight"
          >
            MUDE SEU FINANCEIRO EM 2026!
          </motion.h1>
        </div>

        {/* Main Hero Content */}
        <div className="relative py-12 sm:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-10 sm:mb-14"
            >
              <p className="text-lg sm:text-2xl font-semibold text-white leading-relaxed">
                Transforme sua vida financeira com uma planilha simples, automática e eficiente! 💰
              </p>
            </motion.div>

            {/* Mockup Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative mx-auto -mb-32 sm:-mb-40 md:-mb-48 z-20 max-w-5xl"
            >
              <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/images/hero-mockup.webp"
                  alt="Dashboard financeiro - Controle Simples"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Button positioned over transition */}
        <div className="relative z-30 flex justify-center -mt-16 sm:-mt-20 pb-12 sm:pb-16 px-4">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCTAClick('hero', checkoutUrl27)}
            className="px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-green-500 text-white font-black text-lg sm:text-xl shadow-lg hover:bg-green-600 transition-colors"
            style={{ backgroundColor: COLORS.primary }}
          >
            Quero a Planilha!
          </motion.button>
        </div>
      </motion.section>

      {/* FEATURES GRID */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black text-center mb-16"
            style={{ color: COLORS.dark }}
          >
            O que você vai receber:
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {[
              {
                icon: '📹',
                title: 'Vídeos de Uso',
                description: 'Tutorials passo a passo para dominar a planilha em minutos',
                image: '/images/feature-videos.png',
              },
              {
                icon: '💳',
                title: 'Painel de Cartões',
                description: 'Controle todos seus cartões de crédito em um só lugar',
                image: '/images/feature-cartoes.png',
              },
              {
                icon: '✅',
                title: 'Lançamento em 3 Cliques',
                description: 'Registre suas despesas de forma rápida e simples',
                image: '/images/feature-cartoes.png',
              },
              {
                icon: '📊',
                title: 'Painel Financeiro',
                description: 'Acompanhe sua saúde financeira mês a mês, ano a ano',
                image: '/images/feature-videos.png',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-green-100">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-black mb-2" style={{ color: COLORS.dark }}>
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg" style={{ color: COLORS.gray }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PRICING SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24 px-4"
        style={{ backgroundColor: COLORS.lightGray }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-black mb-6" style={{ color: COLORS.dark }}>
              Escolha sua versão:
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: COLORS.gray }}>
              Todas possuem suporte via email e garantia de 30 dias.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* SKU 1: R$5.90 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="rounded-3xl p-8 sm:p-10 bg-white border-2"
              style={{
                borderColor: '#ddd',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-black mb-6" style={{ color: COLORS.dark }}>
                Básica
              </h3>
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="text-5xl sm:text-6xl font-black" style={{ color: COLORS.dark }}>
                  R$ 5,90
                </div>
                <p className="text-sm font-semibold mt-4" style={{ color: COLORS.gray }}>
                  Pagamento único
                </p>
              </div>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3">
                  <MdCheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span style={{ color: COLORS.dark }}>Controle simples</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdCheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span style={{ color: COLORS.dark }}>1 mês de acesso</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCTAClick('skus_basica', checkoutUrl17)}
                className="w-full py-4 font-black text-white rounded-full transition-colors"
                style={{ backgroundColor: COLORS.primary }}
              >
                Quero
              </motion.button>
            </motion.div>

            {/* SKU 2: R$25 - DESTAQUE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl p-8 sm:p-10 relative -my-4 sm:-my-6 md:-my-0"
              style={{
                backgroundColor: COLORS.darkGreen,
                border: `3px solid ${COLORS.primary}`,
                boxShadow: `0 10px 30px rgba(0, 208, 132, 0.2)`,
              }}
            >
              {/* Badge */}
              <div
                className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-white text-xs font-black tracking-wide"
                style={{ backgroundColor: COLORS.primary }}
              >
                MAIOR BENEFÍCIO
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-6 text-white mt-4">
                Essencial
              </h3>
              <div className="mb-8 pb-8 border-b border-green-800">
                <div className="text-5xl sm:text-6xl font-black text-green-400">
                  R$ 25,00
                </div>
                <p className="text-sm font-semibold mt-4 text-green-200">
                  Pagamento único
                </p>
              </div>
              <ul className="space-y-3 mb-10 text-white">
                <li className="flex items-center gap-3">
                  <MdCheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>8 cartões de crédito</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdCheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>6 bancos integrados</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdCheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>Controle de parcelas</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdCheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>Relatórios mensais</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCTAClick('skus_essencial', checkoutUrl27)}
                className="w-full py-4 font-black text-white rounded-full transition-colors"
                style={{
                  backgroundColor: COLORS.primary,
                }}
              >
                Quero a Essencial!
              </motion.button>
            </motion.div>

            {/* SKU 3: R$27 - COMPLETA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl p-8 sm:p-10 bg-white border-2"
              style={{
                borderColor: '#ddd',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-black mb-6" style={{ color: COLORS.dark }}>
                Completa
              </h3>
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="text-5xl sm:text-6xl font-black" style={{ color: COLORS.dark }}>
                  R$ 27,00
                </div>
                <p className="text-sm font-semibold mt-4" style={{ color: COLORS.gray }}>
                  Pagamento único
                </p>
              </div>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3">
                  <MdCheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span style={{ color: COLORS.dark }}>Tudo da Essencial</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdCheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span style={{ color: COLORS.dark }}>Suporte prioritário</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdCheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span style={{ color: COLORS.dark }}>Updates vitalícios</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdCheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span style={{ color: COLORS.dark }}>Comunidade exclusiva</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCTAClick('skus_completa', checkoutUrl27)}
                className="w-full py-4 font-black text-white rounded-full transition-colors"
                style={{ backgroundColor: COLORS.primary }}
              >
                Quero a Melhor!
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SPECIALIST SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24 px-4 bg-white"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 mx-auto rounded-full overflow-hidden border-4 border-green-500">
              <Image
                src="/images/avatar-rafael.png"
                alt="Dr. Rafael Barbosa - especialista em gestão financeira"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: COLORS.dark }}>
              Dr. Rafael Barbosa
            </h3>
            <p className="text-lg font-semibold mb-6" style={{ color: COLORS.primary }}>
              Especialista em Gestão Financeira
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: COLORS.gray }}>
              Criei essa planilha para ajudar milhares de pessoas a recuperar o controle de suas finanças. Com uma metodologia comprovada e ferramentas simples, qualquer pessoa consegue sair do vermelho e construir uma vida financeira saudável.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCTAClick('specialist_cta', checkoutUrl27)}
              className="px-8 sm:px-12 py-4 sm:py-5 rounded-full font-black text-white text-lg sm:text-xl transition-colors"
              style={{ backgroundColor: COLORS.primary }}
            >
              Quero a Planilha!
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-8 px-4 text-center border-t border-gray-200"
        style={{ backgroundColor: COLORS.lightGray }}
      >
        <p style={{ color: COLORS.gray }}>
          © 2026 Controle Simples. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-sm hover:underline" style={{ color: COLORS.primary }}>
            Privacidade
          </a>
          <a href="#" className="text-sm hover:underline" style={{ color: COLORS.primary }}>
            Termos
          </a>
          <a href="mailto:contato@controlesimples.com" className="text-sm hover:underline" style={{ color: COLORS.primary }}>
            Contato
          </a>
        </div>
      </motion.footer>
    </main>
  );
}
