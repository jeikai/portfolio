const SectionHeading = ({ chip, title, subtitle }) => (
  <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
    <div>
      <span className="section-title-chip">{chip}</span>
      <h2 className="mt-4 text-4xl font-bold text-[#141414] md:text-5xl">{title}</h2>
    </div>
    <p className="max-w-2xl text-base leading-relaxed text-[#141414]/70 md:text-lg">{subtitle}</p>
  </div>
);

export default SectionHeading;
