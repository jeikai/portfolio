import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { experienceData, achievementsData } from "./data/siteData";

function App() {
  return (
    <div className="min-h-screen text-[#141414]">
      <Header />
      <main className="pt-7 md:pt-8">
        <Hero />
        <Services />
        <Achievements
          id="experience"
          chip="Experience"
          title="Kinh nghiệm làm việc"
          subtitle="Những nơi mình đã và đang đóng góp, từ công ty lớn tới studio của riêng mình."
          items={experienceData}
          icon="work"
        />
        <Projects />
        <Achievements
          id="achievements"
          chip="Highlights"
          title="Thành tựu & học vấn"
          subtitle="Giải thưởng và cột mốc trên hành trình làm nghề."
          items={achievementsData}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
