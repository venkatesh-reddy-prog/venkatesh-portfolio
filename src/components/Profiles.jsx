import { RevealDiv } from './useReveal';
import { codingProfiles } from '../data/portfolio';

export default function Profiles() {
  return (
    <section id="profiles" className="px-8 md:px-14 py-28">
      <RevealDiv>
        <p className="section-label font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">06 — Coding Profiles</p>
        <h2 className="font-syne font-extrabold leading-[1.03] tracking-tight mb-14"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
          Where I<br />compete & learn.
        </h2>
      </RevealDiv>
      <RevealDiv delay={80} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {codingProfiles.map((p, i) => (
          <div key={i} data-hover
            className="bg-card border border-white/7 rounded-sm p-8 text-center
              hover:border-accent hover:-translate-y-1 transition-all duration-300">
            <div className="font-syne font-extrabold text-2xl mb-1" style={{ color: p.color }}>{p.platform}</div>
            <div className="font-mono text-xs text-muted mb-6">{p.handle}</div>
            <div className="space-y-2 mb-7">
              {(p.stats ?? []).map((s, j) => (
                <div key={j} className="flex justify-between font-mono text-xs">
                  <span className="text-muted">{s.label}</span>
                  <span className="text-accent">{s.value}</span>
                </div>
              ))}
            </div>
            <a href={p.link} target="_blank" rel="noreferrer" data-hover
              className="font-mono text-[0.68rem] tracking-widest uppercase text-accent border border-accent/40 px-5 py-2 rounded-sm inline-block hover:bg-accent hover:text-black transition-all duration-200">
              View Profile
            </a>
          </div>
        ))}
      </RevealDiv>
    </section>
  );
}
