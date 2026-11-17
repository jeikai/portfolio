import { Github, Mail, MapPin } from "lucide-react";
import { siteData, contactData, servicesData, nav } from "../data/siteData";

const Footer = () => {
  return (
    <footer className="px-4 pb-8 pt-14 md:px-6 md:pb-10">
      <div className="mx-auto max-w-6xl card-shell offset-shadow overflow-hidden bg-[#fffdf9] text-[#141414]">
        <div className="grid gap-8 border-b-2 border-[#141414]/20 p-7 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:p-10">
          <div>
            <h3 className="text-3xl font-bold text-[#a03039]">{siteData.fullName}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#141414]/75">{siteData.mission}</p>
            <div className="mt-6 grid gap-3 text-sm text-[#141414]/85">
              <a href={`mailto:${contactData.email}`} className="flex items-center gap-2 hover:text-[#a03039]">
                <Mail size={15} className="text-[#a03039]" />
                {contactData.email}
              </a>
              <a href={contactData.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#a03039]">
                <Github size={15} className="text-[#a03039]" />
                {contactData.github}
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-[#a03039]" />
                {contactData.address}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.1em] text-[#141414]/60">Kỹ năng</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#141414]/80">
              {servicesData.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.1em] text-[#141414]/60">Liên kết</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#141414]/80">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="transition hover:text-[#a03039]">{item.label}</a>
                </li>
              ))}
              <li>
                <a href="https://freecareerpath.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#a03039]">FreeCareerPath</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-5 text-center text-xs font-semibold tracking-[0.07em] text-[#141414]/60 md:p-6">
          &copy; {new Date().getFullYear()} {siteData.fullName}. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
