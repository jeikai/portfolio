import { Mail, Github, MapPin } from "lucide-react";
import { siteData, contactData, servicesData, nav } from "../data/siteData";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-[#a03039] mb-4">{siteData.fullName}</h3>
                        <p className="text-gray-400 mb-6 max-w-md">{siteData.mission}</p>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Mail size={16} className="mr-3 text-[#a03039]" />
                                <a href={`mailto:${contactData.email}`} className="hover:text-[#a03039]">{contactData.email}</a>
                            </div>
                            <div className="flex items-center">
                                <Github size={16} className="mr-3 text-[#a03039]" />
                                <a href={contactData.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#a03039]">{contactData.github}</a>
                            </div>
                            <div className="flex items-center">
                                <MapPin size={16} className="mr-3 text-[#a03039]" />
                                <span>{contactData.address}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Kỹ năng</h4>
                        <ul className="space-y-2 text-gray-400">
                            {servicesData.map((s) => (
                                <li key={s.title}>{s.title}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Liên kết</h4>
                        <ul className="space-y-2 text-gray-400">
                            {nav.map((item) => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`} className="hover:text-[#a03039] transition-colors">{item.label}</a>
                                </li>
                            ))}
                            <li>
                                <a href="https://freecareerpath.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#a03039] transition-colors">FreeCareerPath</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} {siteData.fullName}. Tất cả quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
