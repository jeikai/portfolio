import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Github, Mail, Menu, X, Sparkles, Trophy, Clock } from "lucide-react";
import { profile, featured, experience, projects, skills, achievements, links } from "./data/profile";

const NAV = [
  { id: "freecareerpath", label: "FreeCareerPath" },
  { id: "about", label: "Về mình" },
  { id: "experience", label: "Kinh nghiệm" },
  { id: "projects", label: "Dự án" },
  { id: "links", label: "Kênh" },
];

const accentText = { cyan: "text-cyan", pink: "text-pink", gold: "text-gold" };
const accentBorder = { cyan: "border-cyan/40", pink: "border-pink/40", gold: "border-gold/40" };

function SectionTitle({ kicker, children }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{kicker}</p>
      <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">{children}</h2>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? "bg-ink/90 backdrop-blur border-b border-line" : ""}`}>
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-mono font-bold text-white">
          <img src="/img/player.png" alt="" className="pixel h-7 w-7" />
          <span>phuc<span className="text-gold">.dev</span></span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-mute">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-white transition-colors">{n.label}</a>
          ))}
        </div>
        <button className="md:hidden p-2 -mr-2 text-white" aria-label="Mở menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-line px-4 pb-4">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 text-base text-white border-b border-line/60 last:border-0">
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div className="flex items-center gap-3">
        <div className="bob rounded-xl border border-line bg-panel p-2">
          <img src="/img/player.png" alt="Nhân vật pixel của Phúc" className="pixel h-12 w-12" />
        </div>
        <div className="font-mono text-xs text-mute leading-relaxed">
          <p><span className="text-gold">●</span> {profile.role}</p>
          <p>{profile.location}</p>
        </div>
      </div>

      <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-[1.1] text-white">
        Chào, mình là <span className="text-gold">{profile.shortName}</span>.
      </h1>
      <p className="mt-4 max-w-2xl text-lg sm:text-xl text-mute leading-relaxed">{profile.tagline}</p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a href={featured.url} target="_blank" rel="noopener" className="glow inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 font-bold text-ink hover:brightness-110 transition">
          <Sparkles size={18} /> Chơi thử FreeCareerPath
        </a>
        <a href="#links" className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-panel px-6 py-4 font-semibold text-white hover:border-gold/60 transition">
          Theo dõi mình <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section id="freecareerpath" className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <div className="overflow-hidden rounded-2xl border border-gold/40 bg-panel">
        <a href={featured.url} target="_blank" rel="noopener" className="block">
          <img src={featured.image} alt={featured.imageAlt} className="w-full aspect-[16/9] object-cover" loading="eager" />
        </a>
        <div className="p-5 sm:p-8">
          <div className="flex items-center gap-3">
            <img src="/img/fcp-logo.png" alt="" className="h-10 w-10 rounded-lg bg-[#f8f5ee]" />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Dự án chính · đang xây</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{featured.name}</h2>
            </div>
          </div>
          <p className="mt-4 text-xl font-semibold text-white">{featured.pitch}</p>
          <p className="mt-2 text-mute leading-relaxed">{featured.description}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {featured.highlights.map((h) => (
              <div key={h.label} className="rounded-xl border border-line bg-ink/60 p-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-mute">{h.label}</p>
                <p className="mt-1 text-xl font-extrabold text-gold">{h.value}</p>
                <p className="text-sm text-mute">{h.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {featured.stack.map((s) => (
              <span key={s} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-mute">{s}</span>
            ))}
          </div>

          <a href={featured.url} target="_blank" rel="noopener" className="mt-7 flex w-full sm:w-auto sm:inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 font-bold text-ink hover:brightness-110 transition">
            Vào freecareerpath.com <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <SectionTitle kicker="01 · Về mình">Code, dạy code, và làm sản phẩm</SectionTitle>
      <p className="max-w-3xl text-lg text-mute leading-relaxed">{profile.summary}</p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {achievements.map((a) => (
          <div key={a.title} className="rounded-xl border border-line bg-panel p-4">
            <Trophy size={18} className="text-gold" />
            <p className="mt-2 font-bold text-white">{a.title}</p>
            <p className="text-sm text-mute">{a.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <SectionTitle kicker="02 · Kinh nghiệm">Mình đã làm ở đâu</SectionTitle>
      <ol className="relative border-l border-line ml-2">
        {experience.map((e) => (
          <li key={e.company} className="mb-8 ml-6 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-sm bg-gold" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-lg font-bold text-white">
                {e.company} <span className="font-medium text-mute">· {e.role}</span>
              </h3>
              <p className="font-mono text-xs text-mute">{e.period}</p>
            </div>
            <ul className="mt-2 space-y-1.5 text-mute">
              {e.points.map((p) => (
                <li key={p} className="flex gap-2"><span className="text-gold">›</span><span>{p}</span></li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <SectionTitle kicker="03 · Dự án">Những thứ mình đã build</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className={`rounded-2xl border ${accentBorder[p.accent]} bg-panel p-5 sm:p-6`}>
            <p className={`font-mono text-xs uppercase tracking-wider ${accentText[p.accent]}`}>{p.kind}</p>
            <h3 className="mt-1 text-xl font-bold text-white">{p.name}</h3>
            <p className="mt-3 text-mute leading-relaxed">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-md bg-ink px-2.5 py-1 font-mono text-xs text-mute">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-4">Kỹ năng</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="rounded-xl border border-line bg-panel p-4">
              <p className="font-semibold text-white">{s.group}</p>
              <p className="mt-1 text-sm text-mute">{s.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Links() {
  return (
    <section id="links" className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <SectionTitle kicker="04 · Kênh">Theo dõi hành trình của mình</SectionTitle>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((l) =>
          l.url ? (
            <a key={l.name} href={l.url} target="_blank" rel="noopener"
              className={`flex items-center justify-between rounded-xl border px-5 py-4 transition ${l.primary ? "border-gold bg-gold text-ink hover:brightness-110" : "border-line bg-panel text-white hover:border-gold/60"}`}>
              <span>
                <span className="block font-bold">{l.name}</span>
                <span className={`block text-sm ${l.primary ? "text-ink/70" : "text-mute"}`}>{l.handle}</span>
              </span>
              <ArrowUpRight size={20} />
            </a>
          ) : (
            <div key={l.name} className="flex items-center justify-between rounded-xl border border-dashed border-line px-5 py-4 text-mute">
              <span>
                <span className="block font-bold text-white/70">{l.name}</span>
                <span className="block text-sm">{l.handle}</span>
              </span>
              <Clock size={18} />
            </div>
          )
        )}
      </div>

      <div className="mt-10 rounded-2xl border border-line bg-panel p-6 text-center">
        <img src="/img/data-chip.png" alt="" className="pixel mx-auto h-12 w-12" />
        <p className="mt-3 text-lg font-bold text-white">Muốn hợp tác hoặc hỏi về FreeCareerPath?</p>
        <p className="mt-1 text-mute">Gửi mail cho mình, mình đọc hết.</p>
        <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-ink hover:bg-gold transition">
            <Mail size={18} /> Email cho mình
          </a>
          <a href={profile.github} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-xl border border-line px-5 py-3 font-semibold text-white hover:border-gold/60 transition">
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`md:hidden fixed inset-x-0 bottom-0 z-40 p-3 transition-transform ${show ? "translate-y-0" : "translate-y-full"}`}>
      <a href={featured.url} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 rounded-xl bg-gold py-3.5 font-bold text-ink shadow-2xl shadow-black/60">
        <Sparkles size={18} /> Chơi thử FreeCareerPath
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Featured />
        <About />
        <Experience />
        <Projects />
        <Links />
      </main>
      <footer className="mx-auto max-w-5xl px-4 sm:px-6 py-10 font-mono text-xs text-mute border-t border-line">
        © {new Date().getFullYear()} {profile.name} · Ảnh và nhân vật pixel lấy từ FreeCareerPath
      </footer>
      <StickyCta />
    </div>
  );
}
