'use client';

import { useState } from 'react';
import { Check, Star } from 'lucide-react';

export default function PlanosPage() {
  const [cycle, setCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Básico',
      price: cycle === 'monthly' ? 49 : 39,
      period: cycle === 'monthly' ? 'mês' : 'mês (anual)',
      description: 'Visibilidade padrão para começar',
      features: [
        '1 foto de destaque',
        'Descrição simples',
        'Listagem na página principal',
        'Suporte por e-mail',
      ],
      popular: false,
      cta: 'Escolher Básico',
    },
    {
      name: 'Premium',
      price: cycle === 'monthly' ? 99 : 79,
      period: cycle === 'monthly' ? 'mês' : 'mês (anual)',
      description: 'O mais escolhido por acompanhantes',
      features: [
        'Até 6 fotos premium',
        'Destaque na homepage (7 dias)',
        'Prioridade na busca',
        'Descrição rica + localização exata',
        'Suporte prioritário',
      ],
      popular: true,
      cta: 'Escolher Premium',
    },
    {
      name: 'VIP Luxo',
      price: cycle === 'monthly' ? 199 : 159,
      period: cycle === 'monthly' ? 'mês' : 'mês (anual)',
      description: 'Experiência completa de luxo',
      features: [
        'Fotos ilimitadas + vídeo',
        'Destaque em banner rotativo',
        'Posição fixa no topo por 30 dias',
        'Verificação VIP + badge ouro',
        'Suporte 24h + relatórios de visualizações',
      ],
      popular: false,
      cta: 'Tornar-se VIP',
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans">
      {/* Hero */}
      <div className="pt-24 pb-16 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            Anúncios de luxo.<br />
            Preços simples.
          </h1>
          <p className="text-2xl text-zinc-400 max-w-2xl mx-auto">
            Planos feitos para acompanhantes de alto padrão — do iniciante ao VIP.
          </p>
        </div>
      </div>

      {/* Toggle Mensal / Anual */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center bg-zinc-900 rounded-full p-1">
          <button
            onClick={() => setCycle('monthly')}
            className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
              cycle === 'monthly'
                ? 'bg-white text-black shadow-lg'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Mensal
          </button>
          <button
            onClick={() => setCycle('annual')}
            className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
              cycle === 'annual'
                ? 'bg-white text-black shadow-lg'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Anual <span className="text-emerald-500 text-xs">(-20%)</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-zinc-900/80 backdrop-blur-xl border rounded-3xl p-8 flex flex-col h-full transition-all hover:scale-[1.02] ${
                plan.popular
                  ? 'border-emerald-500 shadow-2xl shadow-emerald-500/20'
                  : 'border-zinc-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-xs font-bold px-6 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4" /> MAIS POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-zinc-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-7xl font-bold tracking-tighter">
                  R$ {plan.price}
                </span>
                <span className="text-zinc-500">/{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all ${
                  plan.popular
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-black'
                    : 'bg-white/10 hover:bg-white/20 border border-white/20'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer simples para teste */}
      <footer className="border-t border-zinc-800 py-12 text-center text-zinc-500 text-sm">
        Lux Companions © 2026 • Pagamentos processados com segurança via Paddle / Stripe
      </footer>
    </div>
  );
}