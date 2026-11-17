import { ArrowUpRight } from "lucide-react";
import { servicesData } from "../data/siteData";
import SectionHeading from "./SectionHeading";

const Services = () => {
  return (
    <section id="skills" className="px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          chip="What I do"
          title="Mình làm được gì"
          subtitle="Từ giao diện web, backend, cloud tới app mobile, và cả việc dạy lại cho người mới bắt đầu."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {servicesData.map(({ icon: Icon, title, subtitle, description, features }) => (
            <article
              key={title}
             
              className="card-shell offset-shadow group flex h-full flex-col justify-between p-7 transition duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#141414] bg-[#f8e6e8]">
                  <Icon className="text-[#a03039]" size={30} />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-[#141414]">{title}</h3>
                <p className="mb-5 font-semibold text-[#141414]/65">{subtitle}</p>
                <p className="text-[#141414]/75">{description}</p>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <span key={feature} className="rounded-full border-2 border-[#141414] bg-white px-3 py-1 text-xs font-bold">
                      {feature}
                    </span>
                  ))}
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#141414] bg-[#a03039] text-white">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
