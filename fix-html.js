const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'public', 'concorrente.html');
let html = fs.readFileSync(htmlPath, 'utf-8');

// Contagem inicial
const countBefore = html.length;
console.log(`\n📄 Arquivo original: ${countBefore} caracteres\n`);

// ========== MUDANÇA 1: Avatar do especialista (Helder → Rafael) ==========
// Procura por diferentes padrões de URLs de imagem do especialista
const avatarPatterns = [
  /https:\/\/financasimples\.com\/wp-content\/uploads\/[^"]*\.webp[^"]*(?="|')/gi,
  /https:\/\/financasimples\.com\/wp-content\/uploads\/[^"]*\.png[^"]*(?="|')/gi,
  /https:\/\/financasimples\.com\/wp-content\/uploads\/[^"]*\.jpg[^"]*(?="|')/gi,
];

// Helder é a imagem do especialista - procura por altura 1024 ou padrão conhecido
html = html.replace(/https:\/\/financasimples\.com\/wp-content\/uploads\/2026\/02\/erasebg-transformed-1024x1024\.webp/gi,
  '/images/avatar-rafael.png');
console.log('✓ Avatar especialista (Helder) → avatar-rafael.png');

// ========== MUDANÇA 2: Mockup (reduzir tamanho) ==========
html = html.replace(/https:\/\/financasimples\.com\/wp-content\/uploads\/2025\/05\/[^"]*mockup[^"]*\.png/gi,
  '/images/hero-mockup.webp');
console.log('✓ Mockup → hero-mockup.webp (reduzido)');

// ========== MUDANÇA 3: Feature Cartões ==========
html = html.replace(/https:\/\/financasimples\.com\/wp-content\/uploads\/[^"]*(?:cartao|card|credit)[^"]*\.(?:png|jpg|webp)/gi,
  '/images/feature-cartoes.png');
console.log('✓ Feature Cartões → feature-cartoes.png');

// ========== MUDANÇA 4: Feature Vídeos ==========
html = html.replace(/https:\/\/financasimples\.com\/wp-content\/uploads\/[^"]*(?:video|vide|tutorial)[^"]*\.(?:png|jpg|webp)/gi,
  '/images/feature-videos.png');
console.log('✓ Feature Vídeos → feature-videos.png');

// ========== VERIFICAÇÃO ==========
const countAfter = html.length;
console.log(`\n✅ Arquivo processado: ${countAfter} caracteres (diferença: ${countBefore - countAfter})`);

// Salvar
fs.writeFileSync(htmlPath, html, 'utf-8');
console.log(`\n✔️ Alterações salvas em: ${htmlPath}\n`);
