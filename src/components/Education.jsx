import { RevealDiv } from './useReveal';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="px-8 md:px-14 py-28">
      <RevealDiv>
        <p className="section-label font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">02 — Education</p>
        <h2 className="font-syne font-extrabold leading-[1.03] tracking-tight mb-14"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
          Academic<br />Foundation
        </h2>
      </RevealDiv>
      <RevealDiv delay={100} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((e, i) => (
          <div key={i} data-hover
            className="p-8 bg-card border border-white/7 rounded-sm hover:border-accent2 transition-all duration-300">
            <div className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-accent2 mb-3">{e.degree}</div>
            <div className="font-syne font-bold text-lg mb-2 leading-snug">{e.field}</div>
            <div className="font-mono text-muted text-sm mb-6">{e.school}</div>
            <div className="flex gap-10">
              <div>
                <div className="font-mono text-[0.6rem] tracking-widest uppercase text-muted mb-1">CGPA</div>
                <div className="font-syne font-bold text-accent text-lg">{e.cgpa}</div>
              </div>
              <div>
                <div className="font-mono text-[0.6rem] tracking-widest uppercase text-muted mb-1">Duration</div>
                <div className="font-syne font-bold text-base">{e.duration}</div>
              </div>
            </div>
          </div>
        ))}
      </RevealDiv>
    </section>
  );
}
