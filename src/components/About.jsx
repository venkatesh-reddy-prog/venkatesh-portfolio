import { RevealDiv } from './useReveal';

const cards = [
  { icon: '🏢', label: 'Current', value: 'SAP Labs India' },
  { icon: '🎓', label: 'Education', value: 'M.Tech AI/ML · SRM Univ.' },
  { icon: '📍', label: 'Location', value: 'Bengaluru, India' },
  { icon: '🏛', label: 'Patent', value: 'No. 565143 — Granted' },
];

export default function About() {
  return (
    <section id="about" className="px-8 md:px-14 py-28">
      <RevealDiv>
        <p className="section-label font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">01 — About</p>
        <h2 className="font-syne font-extrabold leading-[1.03] tracking-tight mb-14"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
          The person<br />behind the code.
        </h2>
      </RevealDiv>

      <RevealDiv delay={100} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-5 font-mono text-muted leading-[1.85] text-sm">
          <p>I'm a <strong className="text-[#e8e8f0] font-medium">Backend-focused Software Engineer</strong> who spent 10 months at <strong className="text-[#e8e8f0] font-medium">SAP Labs India</strong> engineering scalable microservices and production-grade distributed systems. I bring the same rigor to code that I bring to system design — clean, testable, observable.</p>
          <p>My work spans <strong className="text-[#e8e8f0] font-medium">real-time collaboration systems</strong> (sub-100ms WebSocket sync), <strong className="text-[#e8e8f0] font-medium">AI-powered RAG platforms</strong> using vector embeddings and OpenAI, and <strong className="text-[#e8e8f0] font-medium">CI/CD automation</strong> that ships faster with zero regression debt.</p>
          <p>I hold an M.Tech in <strong className="text-[#e8e8f0] font-medium">AI & Machine Learning</strong> from SRM University, which fuels my curiosity about intelligent systems beyond just CRUD. I also hold a granted <strong className="text-[#e8e8f0] font-medium">Indian Patent</strong> and have a research publication in 5G-enabled IoT security.</p>
          <p>I believe great backend engineering is invisible — fast, reliable, and forgotten by the users it serves.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <div key={i} data-hover
              className="flex items-center gap-4 p-6 bg-card border border-white/7 rounded-sm hover:border-accent hover:translate-x-1.5 transition-all duration-300">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <div className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted mb-1">{c.label}</div>
                <div className="font-syne font-semibold text-sm">{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </RevealDiv>
    </section>
  );
}
