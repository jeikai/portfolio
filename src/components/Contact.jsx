import { useState } from "react";
import { Github, Mail, MapPin } from "lucide-react";
import { contactData } from "../data/siteData";
import SectionHeading from "./SectionHeading";

const cards = [
  { icon: Mail, label: "Email", value: contactData.email, href: `mailto:${contactData.email}` },
  { icon: Github, label: "GitHub", value: contactData.github, href: contactData.githubUrl },
  { icon: MapPin, label: "Địa chỉ", value: contactData.address },
];

const inputClass = "rounded-xl border-2 border-[#141414] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#a03039]";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Liên hệ từ portfolio: ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`);
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          chip="Contact"
          title="Liên hệ với mình"
          subtitle="Có dự án, cơ hội hợp tác hay chỉ muốn nói chuyện về code? Nhắn mình nhé!"
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {cards.map(({ icon: CardIcon, label, value, href }) => (
              <div key={label} className="card-shell offset-shadow-sm p-5">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#141414] bg-[#f8e6e8]">
                  <CardIcon className="text-[#a03039]" size={20} />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#141414]/60">{label}</p>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="mt-1 block break-all text-lg font-bold text-[#141414] hover:text-[#a03039]">
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 text-lg font-bold text-[#141414]">{value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="card-shell offset-shadow p-6 md:p-8">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm font-bold">
                Họ và tên
                <input type="text" required value={form.name} onChange={update("name")} placeholder="Nguyễn Văn A" className={inputClass} />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Email
                <input type="email" required value={form.email} onChange={update("email")} placeholder="you@example.com" className={inputClass} />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Nội dung
                <textarea rows="5" required value={form.message} onChange={update("message")} placeholder="Bạn muốn trao đổi về điều gì?" className={inputClass} />
              </label>
              <button type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full border-2 border-[#141414] bg-[#a03039] px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5">
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
