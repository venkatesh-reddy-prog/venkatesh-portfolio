import { RevealDiv } from "./useReveal";
import { projects } from "../data/portfolio";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-14 py-28">
      <RevealDiv>
        <p className="section-label font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">
          04 — Projects
        </p>

        <h2
          className="font-syne font-extrabold leading-[1.03] tracking-tight mb-14"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          Systems I've
          <br />
          architected.
        </h2>
      </RevealDiv>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <RevealDiv
            key={i}
            delay={i * 80}
            className="relative group bg-card border border-white/10 rounded-xl p-9 overflow-hidden
            transition-all duration-300 hover:-translate-y-2 hover:border-accent
            hover:shadow-[0_12px_60px_rgba(0,229,255,0.12)]"
          >
            {/* Hover Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Large Background Number */}
            <span className="absolute top-4 right-6 font-syne font-black text-6xl text-white/[0.04] select-none">
              {p.num}
            </span>

            <div className="relative">

              {/* Project Type */}
              <div className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-accent mb-3">
                {p.type}
              </div>

              {/* Title */}
              <div className="font-syne font-bold text-xl leading-snug mb-4">
                {p.name}
              </div>

              {/* Description */}
              <p className="font-mono text-xs text-muted leading-relaxed mb-6">
                {p.desc}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-7">
                {p.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="font-mono text-[0.72rem] text-muted pl-4 relative
                    before:content-['⚡'] before:absolute before:left-0 before:text-[0.65rem]"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              {/* Bottom Section */}
              <div className="flex justify-between items-center">

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.58rem] tracking-wider uppercase px-2.5 py-1
                      border border-white/10 text-muted rounded-sm
                      hover:border-accent hover:text-accent transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[0.7rem] uppercase tracking-widest text-accent
                  flex items-center gap-2 hover:gap-3 transition-all duration-200 ml-3"
                >
                  <FaGithub size={16} />
                  Code →
                </a>

              </div>
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  );
}