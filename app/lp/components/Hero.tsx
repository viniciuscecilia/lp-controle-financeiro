'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { COLORS } from '@/lib/constants';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full overflow-visible"
      style={{ backgroundColor: COLORS.darkGreen }}
    >
      {/* Red banner (sticky top) */}
      <div className="w-full bg-red-600 py-3 px-4 text-center">
        <h1 className="text-white font-black text-base sm:text-lg tracking-wide">
          MUDE SEU FINANCEIRO EM 2026!
        </h1>
      </div>

      {/* Main hero content */}
      <div className="relative py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Logo & Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-4xl sm:text-6xl font-black mb-6" style={{ color: COLORS.white }}>
              CONTROLE <span style={{ color: COLORS.primary }}>SIMPLES</span>
            </h2>

            <p className="text-lg sm:text-2xl font-semibold leading-relaxed mx-auto max-w-3xl" style={{ color: COLORS.white }}>
              Transforme sua vida financeira com uma{' '}
              <span style={{ color: COLORS.primary }} className="font-black">
                planilha
              </span>
              <br />
              <span style={{ color: COLORS.primary }} className="font-black">
                simples, automática e eficiente!
              </span>{' '}
              💰
            </p>
          </motion.div>

          {/* Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16"
          >
            {[
              { icon: '🎥', label: 'VÍDEOS DE USO' },
              { icon: '💳', label: 'PAGAMENTO ÚNICO' },
              { icon: '📊', label: 'GOOGLE PLANILHAS' },
            ].map((pill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold text-xs sm:text-sm"
                style={{
                  backgroundColor: 'rgba(0, 208, 132, 0.15)',
                  color: COLORS.primary,
                  border: `2px solid ${COLORS.primary}`,
                  whiteSpace: 'nowrap',
                }}
              >
                {pill.icon} {pill.label}
              </motion.div>
            ))}
          </motion.div>

          {/* Mockup image - positioned at transition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="relative mx-auto -mb-32 sm:-mb-40 md:-mb-48 z-20"
          >
            <div className="relative mx-auto max-w-5xl" style={{ aspectRatio: '16/9' }}>
              <Image
                src="/images/hero-mockup.webp"
                alt="Planilha Financeira Premium - Desktop, Tablet e Mobile"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
