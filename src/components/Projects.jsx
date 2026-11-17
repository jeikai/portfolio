import { ExternalLink } from "lucide-react";
import { projectsData } from "../data/siteData";

const gradients = [
  "from-[#a03039] via-pink-500 to-red-500",
  "from-[#4b6cb7] via-[#182848] to-[#4b6cb7]",
  "from-green-400 via-teal-500 to-green-600",
  "from-purple-500 via-fuchsia-600 to-pink-500",
  "from-yellow-400 via-yellow-500 to-orange-500",
  "from-indigo-400 via-blue-500 to-indigo-600",
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white via-red-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#a03039] mb-4 drop-shadow-sm">Dự án nổi bật</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những sản phẩm mình đã làm, và FreeCareerPath, dự án mình đang dồn tâm huyết nhất
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={project.name}
              data-aos="fade-up"
              className="group relative rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#a03039]/30 transform hover:-translate-y-2 bg-white overflow-hidden flex flex-col"
            >
              <div className={`p-6 bg-gradient-to-tr ${gradients[index % gradients.length]} text-white`}>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold w-fit">{project.category}</span>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Mở ${project.name}`}
                      className="text-white opacity-70 hover:opacity-100 transition-opacity">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2 leading-snug drop-shadow">{project.name}</h3>
                <span className={`text-xs font-semibold rounded px-3 py-1 inline-block w-fit ${project.status === "Hoàn thành" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                  {project.status}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-[#fff0f1] text-[#a03039] px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
