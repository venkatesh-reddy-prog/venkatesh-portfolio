import { useEffect, useState } from 'react';

const links = ['About','Education','Experience','Projects','Skills','Profiles','Achievements','Contact'];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll('section[id]');
      let cur = '';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 220) cur = s.id; });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/5' : ''}`}
      style={{ backdropFilter: 'blur(14px)', background: 'rgba(5,5,8,0.75)' }}>
      <div className="flex items-center justify-between px-8 md:px-14 py-5">
        <span className="font-syne text-accent font-extrabold tracking-widest text-sm">VR_</span>
        {/* Desktop */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className={`text-xs tracking-widest uppercase transition-colors duration-200 font-mono
                  ${active === l.toLowerCase() ? 'text-accent' : 'text-muted hover:text-accent'}`}>
                {l}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile burger */}
        <button className="md:hidden text-muted hover:text-accent" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 h-px bg-current mb-1.5 transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translate(0,6px)' : '' }} />
          <div className={`w-5 h-px bg-current mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className="w-5 h-px bg-current transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translate(0,-6px)' : '' }} />
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 px-8 py-6 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="text-xs tracking-widest uppercase text-muted hover:text-accent transition-colors font-mono">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
