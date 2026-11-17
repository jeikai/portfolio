import { Award, Briefcase, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Achievements = ({ id, chip, title, subtitle, items, icon = "award" }) => {
  const Icon = icon === "work" ? Briefcase : Award;

  return (
    <section id={id} className="px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading chip={chip} title={title} subtitle={subtitle} />

        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((item) => (
            <article key={item.title + item.organization} className="card-shell offset-shadow p-7">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-[#141414]/70">
                    <Sparkles size={14} className="text-[#a03039]" />
                    {item.period}
                  </p>
                  <h3 className="text-2xl font-bold text-[#141414]">{item.title}</h3>
                  <p className="mt-2 font-semibold text-[#141414]/70">{item.organization}</p>
                </div>
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-[#141414] bg-[#a03039] text-white">
                  <Icon size={22} />
                </span>
              </div>
              <p className="leading-relaxed text-[#141414]/80">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
