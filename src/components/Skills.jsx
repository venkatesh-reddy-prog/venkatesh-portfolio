import { useState, useEffect, useRef } from 'react';
import { RevealDiv } from './useReveal';
import { skills, proficiencyBars } from '../data/portfolio';

const levelColors = {
  expert: '#00e5ff',
  proficient: '#7c3aed',
  familiar: '#f59e0b',
};
const levelLabels = { expert: 'Expert', proficient: 'Proficient', familiar: 'Familiar' };

function SkillChip({ name, level }) {
  return (
    <span data-hover className="relative overflow-hidden inline-flex items-center gap-2 px-3.5 py-2
      bg-card border border-white/7 rounded-sm font-mono text-[0.75rem] text-[#e8e8f0]
      hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-200 group">
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: levelColors[level] }} />
      {name}
      <span className="text-[0.58rem] tracking-wider uppercase opacity-50 ml-0.5">{levelLabels[level]}</span>
    </span>
  );
}

function ProficiencyBars() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const half = Math.ceil(proficiencyBars.length / 2);
  const col1 = proficiencyBars.slice(0, half);
  const col2 = proficiencyBars.slice(half);

  return (
    <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      {[col1, col2].map((col, ci) => (
        <div key={ci}>
          <div className="font-mono text-[0.65rem] tracking-[0.22em] uppercase text-accent mb-6">
            {ci === 0 ? 'Backend Proficiency' : 'Infrastructure & AI'}
          </div>
          {col.map((bar, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between font-mono text-xs mb-2">
                <span className="text-muted">{bar.label}</span>
                <span className="text-accent">{bar.pct}%</span>
              </div>
              <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                <div className="skill-bar-fill h-full rounded-full"
                  style={{ width: visible ? `${bar.pct}%` : '0%', transitionDelay: `${i * 80}ms` }} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  const tabs = Object.keys(skills);
  const [active, setActive] = useState(tabs[0]);
  const current = skills[active];

  return (
    <section id="skills" className="px-8 md:px-14 py-28">
      <RevealDiv>
        <p className="section-label font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">05 — Full Stack Skills</p>
        <h2 className="font-syne font-extrabold leading-[1.03] tracking-tight mb-8"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
          Every tool<br />in the stack.
        </h2>
      </RevealDiv>

      {/* Legend */}
      <RevealDiv delay={80} className="flex gap-6 flex-wrap mb-8">
        {Object.entries(levelColors).map(([lvl, color]) => (
          <div key={lvl} className="flex items-center gap-2 font-mono text-xs text-muted">
            <span className="w-2 h-2 rounded-full" style={{ background: color }} />
            {levelLabels[lvl]}
          </div>
        ))}
      </RevealDiv>

      {/* Tabs */}
      <RevealDiv delay={120} className="flex flex-wrap gap-2 mb-10">
        {tabs.map(tab => (
          <button key={tab} data-hover onClick={() => setActive(tab)}
            className={`px-4 py-2 font-mono text-[0.68rem] tracking-widest uppercase border rounded-sm transition-all duration-200
              ${active === tab ? 'tab-active font-medium' : 'border-white/10 text-muted hover:border-accent hover:text-accent'}`}>
            {skills[tab].icon} {tab}
          </button>
        ))}
      </RevealDiv>

      {/* Skill groups */}
      <RevealDiv delay={160}>
        <div className="space-y-8">
          {current.groups.map((group, gi) => (
            <div key={gi}>
              <div className="font-mono text-[0.62rem] tracking-[0.25em] uppercase text-muted mb-4 pb-2 border-b border-white/5">
                {group.title}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item, ii) => (
                  <SkillChip key={ii} name={item.name} level={item.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </RevealDiv>

      <ProficiencyBars />
    </section>
  );
}
