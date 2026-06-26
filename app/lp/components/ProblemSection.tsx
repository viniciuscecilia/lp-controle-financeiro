'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { COLORS } from '@/lib/constants';

export function ProblemSection() {
  const problems = [
    {
      image: '/images/news-1.png',
      text: 'A maioria dos Brasileiros contam moedas no fim do mês…',
    },
    {
      image: '/images/news-2.png',
      text: 'Deixam até de fazer viagens nas férias…',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="pt-24 sm:pt-32 md:pt-40 pb-20 sm:pb-28 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div
            className="p-3 rounded-full border-2 flex items-center justify-center"
            style={{ borderColor: COLORS.primary, opacity: 0.7 }}
          >
            <svg
              className="w-5 h-5"
              style={{ color: COLORS.primary }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>

        {/* Problems grid - VERTICAL STACK */}
        <div className="flex flex-col gap-8 sm:gap-12 mb-16 sm:mb-24 max-w-2xl mx-auto">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="flex flex-col items-center group"
            >
              {/* Notícia screenshot - VERTICAL */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full mb-8 overflow-hidden rounded-2xl transition-shadow"
              >
                <div className="relative mx-auto w-full max-w-lg" style={{ aspectRatio: '9/11' }}>
                  <Image
                    src={problem.image}
                    alt="Notícia financeira"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </motion.div>

              {/* Red box with text */}
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 12px 24px rgba(211, 47, 47, 0.3)' }}
                className="w-full py-6 sm:py-8 px-6 sm:px-8 rounded-full text-center font-black text-white text-base sm:text-lg leading-relaxed transition-all"
                style={{
                  backgroundColor: COLORS.red,
                  boxShadow: '0 6px 16px rgba(211, 47, 47, 0.2)',
                }}
              >
                {problem.text}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-black leading-relaxed" style={{ color: COLORS.dark }}>
            Todos esses problemas derivam da falta de{' '}
            <span style={{ color: COLORS.red }} className="inline-block">
              organização financeira...
            </span>
          </h2>
        </motion.div>
      </div>
    </motion.section>
  );
}
