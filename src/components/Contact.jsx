import { RevealDiv } from './useReveal';
import { personalInfo } from '../data/portfolio';

const contactLinks = [
  {
    label: 'bvenkateshreddy87@gmail.com',
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: personalInfo.linkedin,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: personalInfo.github,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
  {
    label: '+91 98321 20176',
    href: `tel:${personalInfo.phone}`,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-8 md:px-14 py-28 overflow-hidden">
      {/* Glow blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.10), transparent 70%)' }} />

      <RevealDiv>
        <p className="section-label font-mono text-accent text-xs tracking-[0.3em] uppercase mb-8">08 — Contact</p>
        <div className="font-syne font-extrabold leading-[0.95] tracking-tight mb-12"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
          Let's build<br />
          <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.14)', color: 'transparent' }}>something</span><br />
          great.
        </div>
        <p className="font-mono text-sm text-muted max-w-md leading-relaxed mb-12">
          Open to Backend Engineer, SDE, and distributed systems roles at product-based companies.
          I reply to every message — no screeners, no ghosting.
        </p>
        <div className="flex flex-wrap gap-4">
          {contactLinks.map((c, i) => (
            <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer" data-hover
              className="flex items-center gap-3 px-6 py-4 bg-card border border-white/7 rounded-sm font-mono text-sm text-[#e8e8f0]
                hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300">
              {c.icon}
              {c.label}
            </a>
          ))}
        </div>
      </RevealDiv>
    </section>
  );
}
