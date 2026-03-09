import { RevealDiv } from './useReveal';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-14 py-28">
      <RevealDiv>
        <p className="section-label font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">04 — Projects</p>
        <h2 className="font-syne font-extrabold leading-[1.03] tracking-tight mb-14"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
          Systems I've<br />architected.
        </h2>
      </RevealDiv>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <RevealDiv key={i} delay={i * 60}
            className="relative group bg-card border border-white/7 rounded-sm p-9 overflow-hidden
              hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_8px_40px_rgba(0,229,255,0.07)] transition-all duration-300">
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            {/* Big number bg */}
            <span className="absolute top-4 right-5 font-syne font-black text-5xl text-white/[0.04] leading-none select-none">
              {p.num}
            </span>
            <div className="relative">
              <div className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-accent mb-3">{p.type}</div>
              <div className="font-syne font-bold text-xl leading-snug mb-4">{p.name}</div>
              <p className="font-mono text-xs text-muted leading-relaxed mb-5">{p.desc}</p>
              <ul className="space-y-2 mb-6">
                {p.highlights.map((h, j) => (
                  <li key={j} className="font-mono text-[0.72rem] text-muted pl-4 relative
                    before:content-['⚡'] before:absolute before:left-0 before:text-[0.6rem]">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 4).map(t => (
                    <span key={t} className="font-mono text-[0.58rem] tracking-wider uppercase px-2.5 py-1 border border-white/7 text-muted rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" data-hover
                  className="font-mono text-[0.68rem] uppercase tracking-widest text-accent flex items-center gap-2
                    hover:gap-3 transition-all duration-200 shrink-0 ml-3">
                  GitHub →
                </a>
              </div>
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  );
}
