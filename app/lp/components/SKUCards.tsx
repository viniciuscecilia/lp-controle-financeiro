'use client';

import { motion } from 'framer-motion';
import { MdCheckCircle } from 'react-icons/md';
import { COLORS, LP_CONFIG } from '@/lib/constants';

interface SKUCardsProps {
  onBasicaClick: () => void;
}

export function SKUCards({ onBasicaClick }: SKUCardsProps) {
  const { basica, essencial, completa } = LP_CONFIG.skus;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  interface SKUCardProps {
    sku: {
      name: string;
      price: number;
      checkoutUrl: string;
      features: string[];
      badge?: string;
    };
    onBuyClick?: () => void;
    variant: 'gray' | 'white' | 'green';
  }

  const SKUCard = ({ sku, onBuyClick, variant }: SKUCardProps) => {
    const isGreen = variant === 'green';
    const isWhite = variant === 'white';
    const isGray = variant === 'gray';

    const bgColor = isGreen ? COLORS.darkGreen : isWhite ? COLORS.white : '#f5f5f5';
    const textColor = isGreen ? COLORS.white : COLORS.dark;
    const borderColor = isGreen
      ? COLORS.darkGreen
      : isWhite
        ? '#d0d0d0'
        : '#999999';
    const borderWidth = isGreen ? '3px' : '2px';
    const buttonBgColor = COLORS.primary;
    const buttonHoverBgColor = '#00b86b';
    const shadowStyle = isGreen
      ? '0 10px 30px rgba(0, 208, 132, 0.2)'
      : '0 4px 12px rgba(0, 0, 0, 0.08)';

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: isGreen ? -8 : -4, boxShadow: `0 20px 40px rgba(0, 0, 0, 0.15)` }}
        className={`flex flex-col rounded-3xl relative h-full group ${isWhite ? 'overflow-visible pt-12 sm:pt-14 pb-8 sm:pb-10 px-8 sm:px-10' : 'overflow-hidden p-8 sm:p-10'}`}
        style={{
          backgroundColor: bgColor,
          border: `${borderWidth} solid ${borderColor}`,
          boxShadow: shadowStyle,
          transition: 'all 0.3s ease',
        }}
      >
        {/* Fundo decorativo para card Completa */}
        {isGreen && (
          <div
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
            style={{ backgroundColor: COLORS.primary, pointerEvents: 'none' }}
          />
        )}

        {/* Badge */}
        {sku.badge && isGreen && (
          <motion.div
            initial={{ scale: 0, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-6 py-2.5 rounded-full text-white text-xs font-black tracking-wide"
            style={{ backgroundColor: COLORS.primary, zIndex: 10 }}
          >
            {sku.badge}
          </motion.div>
        )}

        {/* Badge para Essencial (branco) */}
        {sku.badge && isWhite && (
          <motion.div
            initial={{ scale: 0, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-6 py-2.5 rounded-full text-white text-xs font-black tracking-wide"
            style={{ backgroundColor: COLORS.primary, zIndex: 10 }}
          >
            {sku.badge}
          </motion.div>
        )}

        {/* Padding top para badge */}
        <div className={sku.badge ? 'mt-2' : ''} />

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: textColor }}>
          {sku.name}
        </h3>

        {/* Subtitle (apenas para Básica/gray) */}
        {isGray && (
          <p className="text-xs font-medium mb-6 leading-tight" style={{ color: COLORS.gray }}>
            Planilha básica sem cartões · 1 mês de controle
          </p>
        )}

        {/* Price */}
        <div className="mb-8 py-8 rounded-2xl" style={{ backgroundColor: isGreen ? 'rgba(0, 208, 132, 0.1)' : '#f9f9f9' }}>
          <div
            className="text-6xl sm:text-7xl font-black tracking-tight"
            style={{ color: isGreen ? COLORS.primary : COLORS.dark }}
          >
            R$ {sku.price.toFixed(2).replace('.', ',')}
          </div>
          <div className="text-sm sm:text-base font-bold mt-4" style={{ color: textColor, opacity: 0.85 }}>
            Pagamento único
          </div>
        </div>

        {/* Features */}
        <ul className="mb-10 flex-1 space-y-3">
          {sku.features.map((feature, idx) => {
            const icon = feature.substring(0, 2);
            const text = feature.substring(2).trim();
            return (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.05 }}
                className="flex items-center gap-2"
              >
                <span className="text-lg flex-shrink-0">{icon}</span>
                <span className="text-sm leading-snug" style={{ color: isGreen ? COLORS.white : isWhite ? COLORS.dark : COLORS.gray }}>
                  {text}
                </span>
              </motion.li>
            );
          })}
        </ul>

        {/* Button */}
        <motion.button
          onClick={onBuyClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 sm:py-5 px-6 rounded-full font-black text-white text-sm sm:text-base tracking-wide transition-all duration-300"
          style={{
            backgroundColor: buttonBgColor,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = buttonHoverBgColor;
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 208, 132, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = buttonBgColor;
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {isGray ? 'QUERO A BÁSICA' : isWhite ? 'QUERO A ESSENCIAL' : 'QUERO A MELHOR!'}
        </motion.button>
      </motion.div>
    );
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="py-16 sm:py-24 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-black mb-6" style={{ color: COLORS.dark }}>
            Escolha a melhor versão para você! 👇
          </h2>
          <p className="text-base sm:text-lg font-medium max-w-2xl mx-auto" style={{ color: COLORS.gray }}>
            Todas as versões possuem acesso via e-mail, vídeos de como usar e começar a ter clareza financeira.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <SKUCard sku={basica} onBuyClick={onBasicaClick} variant="gray" />
          <SKUCard sku={essencial} onBuyClick={() => window.open(essencial.checkoutUrl, '_blank')} variant="white" />
          <SKUCard sku={completa} onBuyClick={() => window.open(completa.checkoutUrl, '_blank')} variant="green" />
        </div>
      </div>
    </motion.section>
  );
}
