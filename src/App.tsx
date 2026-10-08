/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { siteContent } from './content.ts';
import { MotionProvider } from './components/ui/MotionContext.tsx';
import { Header } from './sections/Header.tsx';
import { Hero } from './sections/Hero.tsx';
import { Cardapio } from './sections/Cardapio.tsx';
import { Ambiente } from './sections/Ambiente.tsx';
import { Reservas } from './sections/Reservas.tsx';
import { Visite } from './sections/Visite.tsx';
import { Faq } from './sections/Faq.tsx';
import { Rodape } from './sections/Rodape.tsx';

export default function App() {
  return (
    <MotionProvider>
      <div className="min-h-screen bg-tema-bg text-tema-text flex flex-col selection:bg-tema-accent selection:text-tema-on-accent">
        {/* Link acessível para pular direto para o conteúdo principal */}
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-tema focus:border-tema focus:bg-tema-surface focus:text-tema-accent-ink focus:shadow-md focus:text-sm focus:font-semibold"
          style={{
            borderColor: 'var(--tema-color-accent)',
            backgroundColor: 'var(--tema-color-surface)',
            color: 'var(--tema-color-accent-ink)',
            fontFamily: 'var(--tema-font-label)',
          }}
        >
          {siteContent.meta.skipLinkText}
        </a>

        {/* 1. Header */}
        <Header content={siteContent.header} />

        {/* Conteúdo Principal com Landmarks */}
        <main id="conteudo-principal" className="flex-1">
          {/* 2. Hero (Contém o único <h1>) */}
          <Hero content={siteContent.hero} />

          {/* 3. Cardápio (O centro do site com abas e pontilhado) */}
          <Cardapio content={siteContent.cardapio} />

          {/* 4. Ambiente (Grade assimétrica de 3 imagens com revelação) */}
          <Ambiente content={siteContent.ambiente} />

          {/* 5. Reservas (Dois botões de contato, sem formulário) */}
          <Reservas content={siteContent.reservas} />

          {/* 6. Visite (Endereço, 4 horários em lista, retângulo do mapa) */}
          <Visite content={siteContent.visite} />

          {/* 7. FAQ (5 dúvidas respondidas via accordion) */}
          <Faq content={siteContent.faq} />
        </main>

        {/* 8. Rodapé (Marca, marcadores, links e botão de reduzir animações) */}
        <Rodape content={siteContent.rodape} />
      </div>
    </MotionProvider>
  );
}
