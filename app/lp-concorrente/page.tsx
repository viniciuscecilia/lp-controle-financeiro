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

    // Carregar o HTML original dinamicamente
    const loadHTML = async () => {
      try {
        const response = await fetch('/concorrente.html');
        const html = await response.text();
        const container = document.getElementById('html-container');
        if (container) {
          container.innerHTML = html;
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
    </div>
  );
}
