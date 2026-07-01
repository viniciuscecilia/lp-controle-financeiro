'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdCheckCircle } from 'react-icons/md';

// GTM tracking
const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      utm_source: 'lp',
      utm_medium: 'concorrente',
      ...params,
    });
  }
};

export default function LPConcorrentePage() {
  useEffect(() => {
    trackEvent('page_view', { page_title: 'LP Concorrente - Controle Simples' });
  }, []);

  const handleCTAClick = (sku: string) => {
    trackEvent('cta_click', { sku_tier: sku });
    const urls: Record<string, string> = {
      '5.90': process.env.NEXT_PUBLIC_HUBLA_5_90 || '#',
      '17': process.env.NEXT_PUBLIC_HUBLA_17 || '#',
      '27': process.env.NEXT_PUBLIC_HUBLA_27 || '#',
    };
    window.open(urls[sku], '_blank');
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* ========== HERO SECTION ========== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16 px-4 md:py-24"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header com logo */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">CONTROLE FINANCEIRO SIMPLES</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Conteúdo Hero */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                MUDE SEU FINANCEIRO EM 2026!
              </h2>
              <p className="text-xl md:text-2xl mb-8 font-light">
                Transforme sua vida financeira com uma planilha simples, automática e eficiente! 💰
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <button
                  onClick={() => handleCTAClick('27')}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all w-fit"
                >
                  Quero a Planilha!
                </button>
              </div>

              {/* Features rápidas */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📹</span>
                  <span className="text-lg">VÍDEOS DE USO</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💳</span>
                  <span className="text-lg">PAGAMENTO ÚNICO</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <span className="text-lg">GOOGLE PLANILHAS</span>
                </div>
              </div>
            </div>

            {/* Mockup */}
            <div className="flex justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative w-full max-w-md"
              >
                <Image
                  src="/images/hero-mockup.webp"
                  alt="Dashboard Mockup"
                  width={500}
                  height={400}
                  priority
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ========== E FOI POR ISSO QUE... ========== */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">E FOI POR ISSO QUE...</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Painel de Cartões */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-green-800 rounded-2xl p-8 overflow-hidden"
            >
              <div className="relative mb-6 h-48">
                <Image
                  src="/images/feature-cartoes.png"
                  alt="Painel de Cartões"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Painel de cartões de crédito</h3>
              <p className="text-gray-200">
                Registre gastos parcelados e a vista de até 8 cartões e o painel contabiliza sozinho, na mesma planilha.
              </p>
            </motion.div>

            {/* Feature 2: Lançamento em 3 Cliques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-green-800 rounded-2xl p-8 overflow-hidden"
            >
              <div className="relative mb-6 h-48">
                <Image
                  src="/images/feature-cartoes.png"
                  alt="Lançamento em 3 Cliques"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lançamento em 3 cliques*</h3>
              <p className="text-gray-200">
                Registre gastos, rendas e parcelamentos de forma simples.
              </p>
            </motion.div>

            {/* Feature 3: Vídeos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-green-800 rounded-2xl p-8 overflow-hidden"
            >
              <div className="relative mb-6 h-48">
                <Image
                  src="/images/feature-videos.png"
                  alt="Vídeos de Como Usar"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vídeos de como usar</h3>
              <p className="text-gray-200">
                Aprenda passo a passo como usar cada recurso da planilha.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== PRICING SECTION ========== */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Escolha Seu Plano</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SKU 1: Básica */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-green-500 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-2">Básica</h3>
              <p className="text-gray-600 mb-6">Controle simples e eficiente</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-green-600">R$ 5,90</span>
              </div>
              <button
                onClick={() => handleCTAClick('5.90')}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all mb-6"
              >
                Quero Agora
              </button>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-green-500" />
                  Planilha básica
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-green-500" />
                  1 mês de acesso
                </li>
              </ul>
            </motion.div>

            {/* SKU 2: Essencial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-green-50 rounded-2xl p-8 border-4 border-green-500 relative transform md:scale-105"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                MAIOR BENEFÍCIO
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-6">Essencial</h3>
              <p className="text-gray-600 mb-6">Melhor para a maioria</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-green-600">R$ 25,00</span>
              </div>
              <button
                onClick={() => handleCTAClick('17')}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all mb-6"
              >
                Quero Agora
              </button>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-green-500" />
                  Controle de 8 cartões
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-green-500" />
                  Controle de 6 bancos
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-green-500" />
                  Lançamento de parcelas
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-green-500" />
                  Contas a pagar e receber
                </li>
              </ul>
            </motion.div>

            {/* SKU 3: Completa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-green-500 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-2">Completa</h3>
              <p className="text-gray-600 mb-6">Controle financeiro total</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-green-600">R$ 27,00</span>
              </div>
              <button
                onClick={() => handleCTAClick('27')}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all mb-6"
              >
                Quero a Planilha!
              </button>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-green-500" />
                  Controle de 8 cartões
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-green-500" />
                  Controle de 6 bancos
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-green-500" />
                  Lançamento de parcelas
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-green-500" />
                  Contas a pagar e receber
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-green-500" />
                  Controle mensal e anual
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-green-500" />
                  Uso em múltiplos dispositivos
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SPECIALIST SECTION ========== */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-green-700">Dr. Rafael Barbosa</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A Planilha Controle Simples foi criada por Rafael, empresário e especialista em automação de planilhas.
                Nascido no Mato Grosso do Sul, ele se aprofundou em organização financeira através de diversos cursos e anos de dedicação.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                O resultado? Uma ferramenta prática que já ajudou mais de 40 mil pessoas a controlarem melhor seu dinheiro.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed font-semibold">
                E como você leu até aqui, aqui vai um presente: use o cupom <span className="text-green-600">LEITOR10</span> na página de pagamento e ganhe 10% de desconto!
              </p>
              <button
                onClick={() => handleCTAClick('27')}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all"
              >
                Quero a Planilha!
              </button>
            </div>

            {/* Foto */}
            <div className="flex justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Image
                  src="/images/avatar-rafael.png"
                  alt="Dr. Rafael Barbosa"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl w-full max-w-sm"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2026 Controle Simples. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-500">Desenvolvido com 💚 para sua saúde financeira</p>
        </div>
      </footer>
    </div>
  );
}
