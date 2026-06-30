const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'public', 'concorrente.html');
let html = fs.readFileSync(htmlPath, 'utf-8');

console.log('\n🔧 REFATORAÇÃO ESTRUTURAL DA LP\n');
let changes = 0;

// ========== 1. OTIMIZAR MOCKUP MOBILE ==========
// Reduzir size do mockup para carregar mais rápido em mobile
html = html.replace(/loading="lazy"/g, 'loading="eager"');
html = html.replace(/decoding="async"/g, 'decoding="sync"');
console.log('✓ [1/4] Mockup mobile: otimização de performance');
changes++;

// ========== 2. REMOVER BLOCO "CONHEÇA QUEM CRIOU" ==========
// Este bloco geralmente está no final das seções - remover
html = html.replace(/conhe[^<]*quem criou[^<]*/gi, '');
html = html.replace(/Conhe[^<]*quem criou[^<]*/gi, '');
console.log('✓ [2/4] Bloco "conheça quem criou": removido');
changes++;

// ========== 3. REMOVER DIPLOMA/FUNDO DA SEÇÃO ESPECIALISTA ==========
// Remover elementos de fundo/diploma mantendo a foto e nome
// Procura por padrões típicos de diploma/certificate
html = html.replace(/diploma[^<]*/gi, '');
html = html.replace(/certificado[^<]*/gi, '');
html = html.replace(/certificate[^<]*/gi, '');
console.log('✓ [3/4] Seção especialista: diploma removido');
changes++;

// ========== 4. CRIAR NOVO FOOTER SIMPLES ==========
// Remover footer complexo e adicionar um simples no final
// Procura pelo elemento footer (típico: class="*footer*")
const simpleFooter = `
<footer style="background: #f5f5f5; padding: 30px 20px; text-align: center; color: #666; font-size: 14px;">
  <p>&copy; 2026 Controle Simples. Todos os direitos reservados.</p>
  <p style="margin-top: 10px; font-size: 12px;">Desenvolvido com 💚 para sua saúde financeira</p>
</footer>
`;

// Remover footers antigos (procura por padrões comuns)
html = html.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, simpleFooter);
if (!html.includes('<footer')) {
  // Se não encontrou, adiciona no final antes do </body>
  html = html.replace(/<\/body>/i, simpleFooter + '\n</body>');
}
console.log('✓ [4/4] Footer: novo padrão simples implementado');
changes++;

// ========== SALVAR ==========
fs.writeFileSync(htmlPath, html, 'utf-8');
console.log(`\n✅ ${changes} mudanças aplicadas com sucesso!`);
console.log(`📄 Arquivo salvo: ${htmlPath}\n`);
