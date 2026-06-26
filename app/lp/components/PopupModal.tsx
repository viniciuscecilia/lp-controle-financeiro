'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { COLORS, LP_CONFIG } from '@/lib/constants';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgradeClick: () => void;
  onSkipClick: () => void;
}

export function PopupModal({
  isOpen,
  onClose,
  onUpgradeClick,
  onSkipClick,
}: PopupModalProps) {
  const { completa } = LP_CONFIG.skus;
  const discountedPrice = completa.price * (1 - LP_CONFIG.popup.discount);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
            style={{ opacity: 0.7 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 sm:p-10 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative circle background */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
                style={{ backgroundColor: COLORS.primary }}
              />

              {/* Close button */}
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <MdClose size={24} color={COLORS.dark} />
              </motion.button>

              <div className="relative text-center space-y-6">
                {/* Emoji alert */}
                <div className="text-5xl">🎁</div>

                {/* Title */}
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: COLORS.dark }}>
                    {LP_CONFIG.popup.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold" style={{ color: COLORS.gray }}>
                    Apenas para quem está na página agora
                  </p>
                </motion.div>

                {/* Pricing section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 space-y-3"
                >
                  <div className="text-sm font-medium" style={{ color: COLORS.gray }}>
                    Planilha Completa + Extras
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span
                        className="text-lg line-through font-semibold"
                        style={{ color: COLORS.gray }}
                      >
                        R$ {completa.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span
                        className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-black"
                        style={{}}
                      >
                        -30%
                      </span>
                    </div>

                    <div className="text-5xl font-black" style={{ color: COLORS.primary }}>
                      R$ {discountedPrice.toFixed(2).replace('.', ',')}
                    </div>

                    <div className="text-xs font-medium" style={{ color: COLORS.gray }}>
                      Pagamento único
                    </div>
                  </div>

                  {/* Coupon */}
                  <div className="border-t border-gray-300 pt-4">
                    <p className="text-xs font-medium mb-2" style={{ color: COLORS.gray }}>
                      Use o cupom:
                    </p>
                    <div
                      className="font-mono font-black text-lg p-3 rounded-lg"
                      style={{
                        backgroundColor: COLORS.primary,
                        color: COLORS.white,
                        letterSpacing: '0.1em',
                      }}
                    >
                      {LP_CONFIG.popup.cupom}
                    </div>
                  </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3 pt-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onUpgradeClick();
                      onClose();
                    }}
                    className="w-full py-4 px-6 rounded-full font-black text-white text-lg transition-all"
                    style={{
                      backgroundColor: COLORS.primary,
                      boxShadow: `0 8px 24px rgba(0, 208, 132, 0.3)`,
                    }}
                  >
                    QUERO APROVEITAR! 🚀
                  </motion.button>

                  <button
                    onClick={() => {
                      onSkipClick();
                      onClose();
                    }}
                    className="w-full py-3 px-6 rounded-full font-bold text-sm transition-all hover:bg-gray-100"
                    style={{
                      color: COLORS.dark,
                      border: `2px solid ${COLORS.gray}`,
                    }}
                  >
                    Não, quero apenas a básica
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
