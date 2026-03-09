import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="px-8 md:px-14 py-24 max-w-6xl mx-auto">
      <h2
        className="font-syne font-bold mb-16"
        style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
      >
        Skills & Technologies
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.entries(skills).map(([category, { icon, groups }]) => (
          <div
            key={category}
            className="p-6 rounded-xl border border-white/10 backdrop-blur-sm"
          >
            <h3
              className="font-syne font-semibold mb-5 text-lg"
              style={{ color: "#00e5ff" }}
            >
              {icon} {category}
            </h3>

            {groups.map((group, gi) => (
              <div key={gi} className="mb-4">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, ii) => (
                    <span
                      key={ii}
                      className="px-3 py-1 text-sm rounded-md font-mono"
                      style={{
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#e8e8f0",
                      }}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}