import { Mail, Github, MapPin } from "lucide-react";
import { contactData } from "../data/siteData";

const cards = [
    { icon: Mail, label: "Email", value: contactData.email, href: `mailto:${contactData.email}` },
    { icon: Github, label: "GitHub", value: contactData.github, href: contactData.githubUrl },
    { icon: MapPin, label: "Địa chỉ", value: contactData.address },
];

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-[#a03039]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Liên hệ với mình</h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        Có dự án, cơ hội hợp tác hay chỉ muốn nói chuyện về code? Nhắn mình nhé!
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {cards.map(({ icon: Icon, label, value, href }) => {
                        const body = (
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 h-full">
                                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                                    <Icon className="text-white" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{label}</h3>
                                <p className="text-gray-200 break-all">{value}</p>
                            </div>
                        );
                        return (
                            <div key={label} className="text-center group">
                                {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{body}</a> : body}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Contact;
