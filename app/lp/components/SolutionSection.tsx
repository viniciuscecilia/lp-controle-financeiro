'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { COLORS, LP_CONFIG } from '@/lib/constants';

export function SolutionSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-20 sm:py-28 px-4 overflow-hidden"
      style={{ backgroundColor: COLORS.darkGreen }}
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div
          className="absolute w-96 h-96 rounded-full -top-40 -right-40"
          style={{ backgroundColor: COLORS.primary }}
        />
      </div>

      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 sm:mb-24 relative z-10"
      >
        <h2 className="text-3xl sm:text-5xl font-black tracking-wide" style={{ color: COLORS.white }}>
          E FOI POR ISSO QUE...
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center relative z-10">
        {/* Creator image - left on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-96 sm:h-[500px] order-2 md:order-1"
        >
          <Image
            src={LP_CONFIG.creator.avatar}
            alt={LP_CONFIG.creator.name}
            fill
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Text content - right on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-1 md:order-2 space-y-6"
        >
          <div>
            <h3 className="text-3xl sm:text-4xl font-black leading-tight mb-4" style={{ color: COLORS.white }}>
              <span style={{ color: COLORS.primary }} className="italic">
                {LP_CONFIG.creator.name}
              </span>{' '}
              especialista em gestão financeira criou
            </h3>
            <p className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.white }}>
              a{' '}
              <span style={{ color: COLORS.primary }} className="italic">
                {LP_CONFIG.creator.productName}
              </span>
            </p>
          </div>

          <p className="text-base sm:text-lg font-medium leading-relaxed" style={{ color: COLORS.white }}>
            Uma {LP_CONFIG.creator.productName} de fácil uso, para celular e computador, acessível para qualquer pessoa que deseje:
          </p>

          <ul className="space-y-3 py-4">
            {[
              '📋 Sair das dívidas',
              '💰 Dinheiro sobrando no fim do mês',
              '☮️ Organização e paz financeira',
            ].map((benefit, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="text-base sm:text-lg font-semibold"
                style={{ color: COLORS.white }}
              >
                {benefit}
              </motion.li>
            ))}
          </ul>

          <p className="text-sm sm:text-base leading-relaxed pt-4" style={{ color: COLORS.white }}>
            Nosso objetivo é simples e claro: Te entregar uma planilha de controle financeiro de fácil uso para você
            gerir e identificar o que mudar no seu financeiro para ter{' '}
            <span className="font-black">mais paz e prosperidade</span>.
          </p>

          <div className="space-y-3 pt-6 border-t border-opacity-20" style={{ borderColor: COLORS.primary }}>
            {[
              { icon: '✉️', text: 'Você recebe o acesso via e-mail' },
              { icon: '🎥', text: 'Vê os vídeos de uso' },
              { icon: '📊', text: 'passa a usar a planilha no dia a dia' },
              { icon: '📈', text: 'Começa a ter clareza financeira' },
            ].map((item, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.08 }}
                className="text-sm sm:text-base font-medium flex items-start gap-3"
                style={{ color: COLORS.white }}
              >
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <span>{item.text}</span>
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
