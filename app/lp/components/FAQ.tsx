'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { COLORS } from '@/lib/constants';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: '- Posso usar nos próximos anos?',
    answer: 'Sim! A planilha é sua para sempre. Você pode reutilizá-la ou garantir a versão do próximo ano com funções e datas atualizadas.',
  },
  {
    question: '+ Preciso pagar mensalidade?',
    answer: 'Não! É um pagamento único. Após a compra, a planilha é sua para sempre sem cobranças adicionais.',
  },
  {
    question: '+ Como irei acessar?',
    answer: 'Após a compra, você acessa via Google Sheets, Excel ou qualquer programa compatível com arquivos .xlsx. Simples assim!',
  },
  {
    question: '+ A planilha é privada?',
    answer: 'Sim! A planilha é completamente privada. Apenas você tem acesso. Ninguém consegue ver seus dados financeiros pessoais.',
  },
  {
    question: '+ Tem lançamento de parcelas?',
    answer: 'Sim! Nas versões Essencial e Completa você consegue registrar parcelamentos. A Básica não possui essa funcionalidade.',
  },
  {
    question: '+ Posso usar para minha empresa?',
    answer: 'Sim! Você pode usar a planilha tanto para controle pessoal quanto para sua empresa. É versátil e adaptável.',
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-20 sm:py-28 px-4 overflow-hidden"
      style={{ backgroundColor: COLORS.darkGreen }}
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div
          className="absolute w-96 h-96 transform -rotate-45 -bottom-48 -left-48"
          style={{ backgroundColor: COLORS.primary }}
        />
        <div
          className="absolute w-96 h-96 transform -rotate-45 -top-48 -right-48"
          style={{ backgroundColor: COLORS.primary }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-black tracking-wide" style={{ color: COLORS.white }}>
            Dúvidas frequentes
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="overflow-hidden rounded-2xl border-2 transition-all duration-300"
              style={{
                borderColor: openIdx === idx ? COLORS.primary : 'rgba(0, 208, 132, 0.3)',
                backgroundColor: 'rgba(0, 208, 132, 0.08)',
                boxShadow: openIdx === idx ? `0 8px 24px rgba(0, 208, 132, 0.2)` : 'none',
              }}
            >
              <motion.button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between group hover:opacity-90 transition-opacity"
              >
                <h3 className="text-base sm:text-lg font-black text-left flex-1 pr-4" style={{ color: COLORS.white }}>
                  {item.question}
                </h3>

                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <MdExpandMore size={28} style={{ color: COLORS.primary }} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 sm:px-8 pb-6 border-t-2"
                    style={{ borderColor: COLORS.primary }}
                  >
                    <p className="text-sm sm:text-base leading-relaxed font-medium" style={{ color: COLORS.white }}>
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
