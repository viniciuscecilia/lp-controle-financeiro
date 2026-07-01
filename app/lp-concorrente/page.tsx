'use client';

import { useEffect } from 'react';

export default function LPConcorrentePage() {
  useEffect(() => {
    // GTM tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: '/lp-concorrente',
        page_title: 'LP Concorrente - Controle Simples',
        utm_source: 'lp',
        utm_medium: 'concorrente',
      });
    }

    // Carregar e processar o HTML
    const loadHTML = async () => {
      try {
        const response = await fetch('/concorrente.html');
        let html = await response.text();

        // Substituir URLs de imagens do domínio antigo por locais
        // Estratégia: mapear padrões conhecidos
        html = html.replace(/https:\/\/financasimples\.com\/wp-content\/uploads\/[^"']*/g, (match) => {
          // Identificar tipo de imagem pelo URL
          if (match.includes('set-1') || match.includes('cartao') || match.includes('credit')) {
            return '/images/feature-cartoes.png';
          } else if (match.includes('lancamento') || match.includes('3-cliques')) {
            return '/images/feature-lançamento.png';
          } else if (match.includes('mockup') || match.includes('dashboard')) {
            return '/images/hero-mockup.webp';
          } else if (match.includes('erasebg') || match.includes('rafael') || match.includes('avatar')) {
            return '/images/avatar-rafael.png';
          } else if (match.includes('video') || match.includes('tutorial')) {
            return '/images/feature-videos.png';
          } else if (match.includes('depoimento') || match.includes('testimonial')) {
            return '/images/avatar-rafael.png';
          } else {
            // Para outras imagens, tenta usar placeholder ou manter original
            return '/images/placeholder.png';
          }
        });

        const container = document.getElementById('html-container');
        if (container) {
          container.innerHTML = html;

          // Force reload de imagens após injetar HTML
          const images = container.querySelectorAll('img');
          images.forEach((img) => {
            img.loading = 'lazy';
            // Trigger reflow
            img.src = img.src;
          });
        }
      } catch (error) {
        console.error('Erro ao carregar LP:', error);
      }
    };

    loadHTML();
  }, []);

  return (
    <div id="html-container" className="w-full">
      {/* Conteúdo será injetado aqui */}
      <div className="text-center py-8 text-gray-500">Carregando página...</div>
    </div>
  );
}
