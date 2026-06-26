'use client';

import { motion } from 'framer-motion';
import { COLORS, LP_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="relative py-16 sm:py-24 px-4" style={{ backgroundColor: COLORS.dark }}>
      <div className="max-w-6xl mx-auto">
        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          {/* Links */}
          <div className="flex justify-center gap-4 sm:gap-8 flex-wrap mb-6">
            {[
              { label: 'Política de Privacidade', href: '#' },
              { label: 'Termos de Uso', href: '#' },
              { label: 'Contato', href: '#' },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs sm:text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: COLORS.lightGray }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm font-medium" style={{ color: COLORS.gray }}>
            © 2026 {LP_CONFIG.creator.productName}. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
