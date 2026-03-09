import './index.css';
import Cursor from './components/Cursor';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Profiles from './components/Profiles';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import GithubStats from './components/GithubStats';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-[#e8e8f0]">
      <Cursor />
      <ParticleCanvas />

      {/* Noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-[2]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <GithubStats />
          <Skills />
          <Profiles />
          <Achievements />
          <Contact />
        </main>

        <footer className="border-t border-white/5 px-8 md:px-14 py-8 flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-xs text-muted">
          <span>© 2025 B. Venkatesh Reddy.</span>
          <span className="text-accent">Open to Work · Bengaluru, India</span>
        </footer>
      </div>
    </div>
  );
}