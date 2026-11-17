import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteData, nav } from "../data/siteData";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="flex items-center space-x-3">
                        <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
                        <div className="text-2xl font-bold text-[#a03039] whitespace-nowrap">{siteData.name}</div>
                    </a>

                    <div className="hidden md:flex space-x-8">
                        {nav.map((item) => (
                            <a key={item.id} href={`#${item.id}`}
                                className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-[#a03039] transition-colors font-medium`}>
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <button
                        className={`md:hidden ${isScrolled ? "text-gray-800" : "text-white"}`}
                        aria-label="Mở menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
                        {nav.map((item) => (
                            <a key={item.id} href={`#${item.id}`} onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-gray-700 hover:text-[#a03039] hover:bg-gray-50 transition-colors">
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
