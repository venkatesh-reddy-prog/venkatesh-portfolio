import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolio';

const floatingTags = [
  { text: 'Java', top: '22%', right: '14%', delay: 0 },
  { text: 'Spring Boot', top: '36%', right: '7%', delay: 1500 },
  { text: 'Microservices', top: '58%', right: '18%', delay: 800 },
  { text: 'AWS', top: '72%', right: '6%', delay: 2200 },
  { text: 'RAG / AI', top: '48%', right: '32%', delay: 3000 },
  { text: 'Docker', top: '28%', right: '28%', delay: 1200 },
];

function FadeIn({ children, delay, className, style }) {
  const d = delay || 0;
  const cn = className || '';
  const s = style || {};
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), d);
    return () => clearTimeout(t);
  }, [d]);

  return (
    <div
      className={cn}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(22px)',
        transition: 'opacity 0.75s ease, transform 0.75s ease',
        ...s,
      }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  const [typedStatus, setTypedStatus] = useState('');
  const [glitch, setGlitch] = useState(false);
  const fullStatus = personalInfo.status;

  useEffect(() => {
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setTypedStatus(fullStatus.slice(0, i));
        if (i >= fullStatus.length) clearInterval(iv);
      }, 48);
      return () => clearInterval(iv);
    }, 1800);
    return () => clearTimeout(t);
  }, [fullStatus]);

  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-14 pt-36 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {floatingTags.map((tag, i) => (
        <div
          key={i}
          className="hidden lg:block absolute font-mono text-xs tracking-wider pointer-events-none px-2.5 py-1"
          style={{
            top: tag.top,
            right: tag.right,
            color: 'rgba(0,229,255,0.35)',
            border: '1px solid rgba(0,229,255,0.18)',
            animation: 'float 6s ease-in-out infinite',
            animationDelay: tag.delay + 'ms',
          }}
        >
          {tag.text}
        </div>
      ))}

      <FadeIn delay={200} className="mb-8" style={{ display: 'inline-flex', width: 'fit-content' }}>
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs tracking-widest"
          style={{
            border: '1px solid rgba(0,229,255,0.28)',
            background: 'rgba(0,229,255,0.07)',
            color: '#00e5ff',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#00e5ff', animation: 'pulseDot 2s ease-in-out infinite' }}
          />
          {typedStatus}
          <span className="opacity-60 animate-pulse">|</span>
        </div>
      </FadeIn>

      <FadeIn delay={400}>
        <p
          className="font-mono text-xs tracking-[0.3em] uppercase mb-5 flex items-center gap-3"
          style={{ color: '#00e5ff' }}
        >
          <span className="inline-block w-8 h-px" style={{ background: '#00e5ff' }} />
          Software Engineer · Bengaluru, India
        </p>

        <h1
          className="font-syne font-extrabold leading-none mb-1"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            letterSpacing: '-0.03em',
            textShadow: glitch ? '3px 0 #00e5ff' : 'none',
            transition: 'text-shadow 0.1s',
          }}
        >
          B. Venkatesh
        </h1>

        <h1
          className="font-syne font-extrabold leading-none"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            letterSpacing: '-0.03em',
            WebkitTextStroke: '1px rgba(255,255,255,0.2)',
            color: 'transparent',
          }}
        >
          Red<span style={{ WebkitTextStroke: '1px #00e5ff', color: 'transparent' }}>dy</span>
        </h1>
      </FadeIn>

      <FadeIn delay={650}>
        <div className="flex items-center gap-10 mt-7 flex-wrap">
          <p
            className="font-serif italic max-w-lg leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.32rem)', color: '#6b6b80' }}
          >
            {personalInfo.tagline}
          </p>

          <img
            src="/profile.jpg"
            alt="B Venkatesh Reddy"
            className="w-44 h-44 object-cover rounded-full border-4 border-cyan-400 shadow-xl"
          />
        </div>
      </FadeIn>

      <FadeIn delay={850} className="flex gap-10 mt-12 flex-wrap">
        {personalInfo.stats.map((s, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span className="font-syne font-bold" style={{ fontSize: '2rem' }}>
              {s.num}
              <span style={{ color: '#00e5ff', fontSize: '1.5rem' }}>{s.unit}</span>
            </span>
            <span
              className="font-mono uppercase"
              style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: '#6b6b80' }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </FadeIn>

      <FadeIn delay={1050} className="flex gap-4 mt-14 flex-wrap">

        <a
          href="#projects"
          className="px-8 py-3.5 font-mono text-xs tracking-widest uppercase rounded-sm transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: '#00e5ff', color: '#000', fontWeight: 500 }}
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 font-mono text-xs tracking-widest uppercase rounded-sm transition-all duration-200 hover:-translate-y-0.5"
          style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#e8e8f0' }}
        >
          Download Resume
        </a>

        <a
          href={'mailto:' + personalInfo.email}
          className="px-8 py-3.5 font-mono text-xs tracking-widest uppercase rounded-sm transition-all duration-200 hover:-translate-y-0.5"
          style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#e8e8f0' }}
        >
          Get In Touch
        </a>

      </FadeIn>

      <FadeIn
        delay={1600}
        className="absolute bottom-10 left-8 md:left-14 flex items-center gap-3 font-mono uppercase"
        style={{ fontSize: '0.62rem', letterSpacing: '0.22em', color: '#6b6b80' }}
      >
        <div
          className="w-px h-14"
          style={{
            background: 'linear-gradient(to bottom, transparent, #00e5ff)',
            animation: 'scrollLine 2s ease-in-out infinite',
          }}
        />
        Scroll to explore
      </FadeIn>
    </section>
  );
}