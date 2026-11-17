import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteData, nav } from "../data/siteData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        className={`mx-auto max-w-6xl rounded-[2rem] border-2 border-[#141414] transition-all duration-300 ${
          isScrolled ? "bg-[#fffdf9]/95 backdrop-blur-md offset-shadow-sm" : "bg-[#fffdf9]"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 md:px-7">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-11 w-11 rounded-full border-2 border-[#141414]" />
            <div>
              <p className="text-xl font-bold leading-none text-[#a03039]">{siteData.name}</p>
              <p className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#141414]/60 md:block">
                {siteData.tagline}
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full border-2 border-transparent px-3 py-2 text-sm font-bold text-[#141414] transition hover:border-[#141414] hover:bg-[#f8e6e8]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border-2 border-[#141414] bg-[#a03039] px-5 py-2 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
            >
              Hợp tác với mình
            </a>
          </div>

          <button
            className="rounded-full border-2 border-[#141414] bg-white p-2 lg:hidden"
            aria-label="Mở menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t-2 border-[#141414] px-4 pb-4 pt-3 lg:hidden">
            <div className="grid gap-2">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-xl border-2 border-[#141414] bg-white px-4 py-2 text-sm font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
