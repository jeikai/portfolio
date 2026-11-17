import { Award, Briefcase } from "lucide-react";

const Achievements = ({ id, title, subtitle, items, icon = "award", tone = "red" }) => {
    const Icon = icon === "work" ? Briefcase : Award;
    const bg = tone === "white" ? "bg-gradient-to-br from-white to-red-50" : "bg-gradient-to-br from-red-50 to-white";

    return (
        <section id={id} className={`py-20 ${bg}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {items.map((item) => (
                        <div key={item.title + item.organization} className="group" data-aos="fade-up">
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#a03039] h-full">
                                <div className="flex items-start mb-4">
                                    <div className="bg-[#a03039] p-3 rounded-full mr-4">
                                        <Icon className="text-white" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-sm text-[#a03039] font-semibold">{item.period}</span>
                                        <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 font-medium">{item.organization}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
