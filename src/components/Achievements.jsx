import { RevealDiv } from './useReveal';
import { achievements } from '../data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="px-8 md:px-14 py-28">
      <RevealDiv>
        <p className="section-label font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">07 — Achievements</p>
        <h2 className="font-syne font-extrabold leading-[1.03] tracking-tight mb-14"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
          Recognition<br />&amp; Research
        </h2>
      </RevealDiv>
      <RevealDiv delay={80} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {achievements.map((a, i) => (
          <div key={i} data-hover
            className="flex gap-6 items-start p-9 bg-card border border-white/7 rounded-sm
              hover:border-accent3 hover:-translate-y-1 transition-all duration-300">
            <span className="text-4xl shrink-0">{a.icon}</span>
            <div>
              <div className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-accent3 mb-2">{a.type}</div>
              <div className="font-syne font-bold text-base leading-snug mb-3">{a.title}</div>
              <p className="font-mono text-xs text-muted leading-relaxed">{a.desc}</p>
            </div>
          </div>
        ))}
      </RevealDiv>
    </section>
  );
}
