import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { experienceData, achievementsData } from "./data/siteData";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Achievements
        id="experience"
        title="Kinh nghiệm làm việc"
        subtitle="Những nơi mình đã và đang đóng góp, từ công ty lớn tới studio của riêng mình"
        items={experienceData}
        icon="work"
      />
      <Projects />
      <Achievements
        id="achievements"
        title="Thành tựu & học vấn"
        subtitle="Giải thưởng và cột mốc trên hành trình làm nghề"
        items={achievementsData}
        icon="award"
        tone="white"
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
