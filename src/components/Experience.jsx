import { RevealDiv } from './useReveal';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="px-8 md:px-14 py-28">
      <RevealDiv>
        <p className="section-label font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">03 — Experience</p>
        <h2 className="font-syne font-extrabold leading-[1.03] tracking-tight mb-14"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
          Where I've<br />shipped code.
        </h2>
      </RevealDiv>

      {experiences.map((exp, i) => (
        <RevealDiv key={i} delay={i * 80}
          className="relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-14 py-14 border-b border-white/7
            before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5
            before:bg-gradient-to-b before:from-accent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity">
          <div className="font-mono text-muted text-xs leading-loose">
            {exp.date}<br /><br className="hidden md:block" />{exp.location}
          </div>
          <div>
            <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-accent mb-2">{exp.company}</div>
            <div className="font-syne font-bold text-2xl leading-tight mb-6">
              {exp.role}<br />
              <span className="text-muted font-normal text-lg">{exp.sub}</span>
            </div>
            <ul className="space-y-3 mb-6">
              {exp.bullets.map((b, j) => (
                <li key={j} className="font-mono text-xs text-muted leading-relaxed pl-5 relative
                  before:content-['→'] before:absolute before:left-0 before:text-accent">
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map(t => (
                <span key={t} className="font-mono text-[0.62rem] tracking-widest uppercase px-3 py-1
                  border border-white/7 text-muted hover:border-accent hover:text-accent transition-all duration-200 rounded-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </RevealDiv>
      ))}
    </section>
  );
}
