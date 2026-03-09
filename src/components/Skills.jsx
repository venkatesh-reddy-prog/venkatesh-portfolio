import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-8 md:px-14 py-24 max-w-6xl mx-auto"
    >
      <h2
        className="font-syne font-bold mb-16"
        style={{
          fontSize: "clamp(2rem,4vw,3rem)"
        }}
      >
        Skills & Technologies
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {skills.map((group, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-white/10 backdrop-blur-sm"
          >
            <h3
              className="font-syne font-semibold mb-5 text-lg"
              style={{ color: "#00e5ff" }}
            >
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-md font-mono"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#e8e8f0"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}