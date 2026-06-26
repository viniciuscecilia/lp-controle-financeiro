'use client';

import { usePopup } from './hooks/usePopup';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { SKUCards } from './components/SKUCards';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PopupModal } from './components/PopupModal';
import { LP_CONFIG } from '@/lib/constants';

export default function LPPage() {
  const popup = usePopup();
  const { basica, completa } = LP_CONFIG.skus;

  const handleBasicaClick = () => {
    popup.open();
  };

  const handleUpgradeClick = () => {
    window.open(completa.checkoutUrl, '_blank');
  };

  const handleSkipBasica = () => {
    window.open(basica.checkoutUrl, '_blank');
  };

  return (
    <main className="bg-white">
      {/* BLOCO 1: Hero */}
      <Hero />

      {/* BLOCO 2: Problemas (com imagens de notícias - VERTICAL) */}
      <ProblemSection />

      {/* BLOCO 3: Solução (apresentação de especialista) */}
      <SolutionSection />

      {/* BLOCO 4: Features Grid (entregas da planilha) */}
      <FeaturesGrid />

      {/* BLOCO 5: Depoimentos Sociais (ANTES dos preços - como no concorrente) */}
      <SocialProof />

      {/* BLOCO 6: Preços (SKUs) */}
      <div id="skus">
        <SKUCards onBasicaClick={handleBasicaClick} />
      </div>

      {/* BLOCO 7: FAQ */}
      <FAQ />

      {/* BLOCO 8: Footer */}
      <Footer />

      {/* Modal popup para Básica upgrade */}
      <PopupModal
        isOpen={popup.isOpen}
        onClose={popup.close}
        onUpgradeClick={handleUpgradeClick}
        onSkipClick={handleSkipBasica}
      />
    </main>
  );
}
