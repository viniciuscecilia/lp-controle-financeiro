'use client';

export default function ConcorrentePage() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Finança Simples - Cópia</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

    /* Hero */
    .hero { background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%); color: white; padding: 60px 20px; text-align: center; }
    .hero h1 { font-size: 3rem; font-weight: 700; margin-bottom: 20px; }
    .hero p { font-size: 1.3rem; margin-bottom: 30px; max-width: 800px; margin-left: auto; margin-right: auto; }

    /* Red banner */
    .red-banner { background: #d32f2f; color: white; padding: 15px 20px; text-align: center; font-weight: 600; margin-bottom: 40px; }

    /* Section */
    .section { padding: 60px 20px; }
    .section h2 { font-size: 2.5rem; text-align: center; margin-bottom: 40px; color: #1a472a; }

    /* Grid */
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }

    /* Card */
    .card { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; }
    .card h3 { font-size: 1.5rem; margin-bottom: 15px; }
    .card p { font-size: 0.95rem; color: #666; margin-bottom: 20px; }
    .card .price { font-size: 2.5rem; font-weight: 700; color: #d32f2f; margin-bottom: 20px; }
    .card button { background: #00d084; color: white; border: none; padding: 12px 30px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1rem; }
    .card button:hover { background: #00b86b; }

    /* Image section */
    .image-section { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; margin-bottom: 60px; }
    .image-section img { max-width: 100%; height: auto; border-radius: 12px; }

    /* Footer */
    .footer { background: #f5f5f5; padding: 40px 20px; text-align: center; color: #666; margin-top: 60px; }

    @media (max-width: 768px) {
      .hero h1 { font-size: 2rem; }
      .hero p { font-size: 1rem; }
      .image-section { grid-template-columns: 1fr; }
      .grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="red-banner">
    MUDE SEU FINANCEIRO EM 2026!
  </div>

  <section class="hero">
    <div class="container">
      <h1>CONTROLE SIMPLES</h1>
      <p>Transforme sua vida financeira com uma planilha simples, automática e eficiente 💰</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2>Por que a maioria dos brasileiros sofre?</h2>
      <div class="image-section">
        <div>
          <h3>A maioria contam moedas no fim do mês...</h3>
          <p>Sem controle financeiro, o dinheiro some sem você saber para onde foi.</p>
        </div>
        <img src="/images/news-1.png" alt="Notícia 1">
      </div>

      <div class="image-section" style="grid-template-columns: 1fr 1fr; direction: rtl;">
        <div style="direction: ltr;">
          <h3>Deixam até de fazer viagens nas férias...</h3>
          <p>Sem planejamento financeiro, sonhos viram luxos inalcançáveis.</p>
        </div>
        <img src="/images/news-2.png" alt="Notícia 2">
      </div>
    </div>
  </section>

  <section class="section" style="background: #f9f9f9;">
    <div class="container">
      <h2>A Solução: Planilha Controle Simples</h2>
      <p style="text-align: center; font-size: 1.1rem; margin-bottom: 40px; max-width: 800px; margin-left: auto; margin-right: auto;">
        Uma planilha inteligente que organiza suas finanças em 3 cliques. Sem complicação, sem fórmulas complexas. Só clareza.
      </p>

      <div class="grid">
        <div class="card">
          <h3>📊 Painel Completo</h3>
          <p>Veja seu dinheiro de forma clara e objetiva</p>
          <button>Saiba Mais</button>
        </div>
        <div class="card">
          <h3>🎥 Vídeos Tutoriais</h3>
          <p>Aprenda a usar em minutos com vídeos passo a passo</p>
          <button>Saiba Mais</button>
        </div>
        <div class="card">
          <h3>💳 Controle de Cartões</h3>
          <p>Acompanhe todos os seus cartões em um só lugar</p>
          <button>Saiba Mais</button>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2>Escolha sua versão</h2>
      <div class="grid" style="max-width: 900px; margin: 0 auto;">
        <div class="card">
          <h3>Básica</h3>
          <div class="price">R$ 17</div>
          <p>✓ Planilha de controle<br>✓ 1 mês de suporte<br>✓ Vídeos tutoriais</p>
          <button>COMPRAR AGORA</button>
        </div>

        <div class="card" style="background: #00d084; color: white; transform: scale(1.05);">
          <h3>Essencial</h3>
          <div class="price" style="color: white;">R$ 37</div>
          <p style="color: rgba(255,255,255,0.9);">✓ Tudo da Básica<br>✓ 3 meses de suporte<br>✓ Atualizações mensais</p>
          <button style="background: white; color: #00d084; font-weight: 700;">MELHOR OFERTA</button>
        </div>

        <div class="card">
          <h3>Premium</h3>
          <div class="price">R$ 67</div>
          <p>✓ Tudo da Essencial<br>✓ Suporte VIP<br>✓ Consultoria 1:1</p>
          <button>COMPRAR AGORA</button>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background: #f9f9f9; text-align: center;">
    <div class="container">
      <h2>O que dizem nossos clientes</h2>
      <div class="grid">
        <div class="card">
          <p>"Mudou minha vida financeira! Finalmente entendo para onde vai meu dinheiro."</p>
          <strong>Maria S.</strong>
        </div>
        <div class="card">
          <p>"Simples e eficiente. Recomendo para todos os meus amigos!"</p>
          <strong>João P.</strong>
        </div>
        <div class="card">
          <p>"Economizei R$ 2.000 no primeiro mês usando a planilha."</p>
          <strong>Ana R.</strong>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2>Dúvidas Frequentes</h2>
      <div style="max-width: 700px; margin: 0 auto;">
        <div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #ddd;">
          <h3 style="margin-bottom: 10px;">É realmente simples?</h3>
          <p>Sim! Você consegue configurar tudo em menos de 5 minutos.</p>
        </div>
        <div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #ddd;">
          <h3 style="margin-bottom: 10px;">Funciona em celular?</h3>
          <p>Perfeito! Funciona em qualquer dispositivo com acesso ao Google Planilhas.</p>
        </div>
        <div style="margin-bottom: 30px;">
          <h3 style="margin-bottom: 10px;">Tem garantia?</h3>
          <p>30 dias de garantia total. Se não gostar, devolvemos seu dinheiro.</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2026 Controle Simples. Todos os direitos reservados.</p>
    </div>
  </footer>
</body>
</html>`,
      }}
    />
  );
}
