'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { COLORS } from '@/lib/constants';

export function FeaturesGrid() {
  const features = [
    {
      image: '/images/feature-cartoes.png',
      title: 'Vídeos de como usar',
      description: 'Haverão vídeos gravados de forma didática por Dr. Rafael Barbosa mostrando como acessar, copiar e usar a planilha.',
    },
    {
      image: '/images/feature-videos.png',
      title: 'Painel financeiro completo mês a mês',
      description: 'Basta registrar suas transações e o painel contabiliza e atualiza sozinho!',
    },
    {
      image: '/images/feature-cartoes.png',
      title: 'Painel de cartões de crédito',
      description: 'Registre gastos parcelados e a vista de até 8 cartões e o painel contabiliza sozinho, na mesma planilha.',
    },
    {
      image: '/images/feature-videos.png',
      title: 'Lançamento em 3 cliques*',
      description: 'Registre gastos, rendas e parcelamentos de forma simples.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-20 sm:py-28 px-4 overflow-hidden"
      style={{ backgroundColor: COLORS.darkGreen }}
    >
      {/* Decorative diagonal shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        <div
          className="absolute w-96 h-96 transform -rotate-45 -top-48 -left-48"
          style={{ backgroundColor: COLORS.primary }}
        />
        <div
          className="absolute w-96 h-96 transform -rotate-45 -bottom-48 -right-48"
          style={{ backgroundColor: COLORS.primary }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-5xl font-black tracking-wide" style={{ color: COLORS.white }}>
            Veja o que irá receber 🎁
          </h2>
        </motion.div>

        <div className="space-y-16 sm:space-y-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center ${
                idx % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image with card styling */}
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
                className={`relative overflow-hidden rounded-3xl border-2 border-opacity-30 shadow-xl group ${
                  idx % 2 === 1 ? 'md:order-2' : ''
                }`}
                style={{
                  borderColor: COLORS.primary,
                  backgroundColor: 'rgba(0, 208, 132, 0.08)',
                }}
              >
                <div className="relative aspect-video bg-gray-800">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-30" />
                </div>
              </motion.div>

              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 + 0.2 }}
                className={idx % 2 === 1 ? 'md:order-1' : ''}
              >
                <h3 className="text-2xl sm:text-4xl font-black mb-4 leading-tight" style={{ color: COLORS.white }}>
                  {feature.title}
                </h3>

                <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: COLORS.white, opacity: 0.95 }}>
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
