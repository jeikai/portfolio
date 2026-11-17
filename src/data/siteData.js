// Nội dung portfolio (nguồn: CV + FreeCareerPath). Muốn sửa nội dung thì sửa file này.
import { Code, Server, Smartphone, GraduationCap } from "lucide-react";

export const siteData = {
  name: "Phúc Trần",
  tagline: "Full-stack Developer",
  chip: "Full-stack Developer",
  slogan: "Code sản phẩm thật, và biến việc học nghề IT thành trò chơi",
  stats: [
    { number: "2+", label: "Năm kinh nghiệm" },
    { number: "6+", label: "Dự án tiêu biểu" },
    { number: "2", label: "Giải thưởng" },
    { number: "7.0", label: "IELTS" },
  ],
  fullName: "Trần Quang Phúc",
  role: "Full-stack Developer",
  mission: "Founder Fun Bug · Co-founder Ola Class · Người làm FreeCareerPath",
  description:
    "Hơn 2 năm làm web và mobile với ReactJS, VueJS, NestJS, Flutter và Spring Boot. Hiện mình làm Frontend Developer ở FPT Software, làm việc trong lab tại TKU (Đài Loan) và xây FreeCareerPath để việc học nghề IT vui như chơi game.",
};

export const nav = [
  { id: "home", label: "Trang chủ" },
  { id: "skills", label: "Kỹ năng" },
  { id: "experience", label: "Kinh nghiệm" },
  { id: "projects", label: "Dự án" },
  { id: "achievements", label: "Thành tựu" },
  { id: "contact", label: "Liên hệ" },
];

export const servicesData = [
  {
    icon: Code,
    title: "Frontend Web",
    subtitle: "Giao diện web & ứng dụng doanh nghiệp",
    features: ["ReactJS", "VueJS", "NextJS"],
    description: "ReactJS, NextJS, VueJS. Giao diện responsive, component tái sử dụng, tích hợp Salesforce và CRM.",
  },
  {
    icon: Server,
    title: "Backend & Cloud",
    subtitle: "API, database và hạ tầng deploy",
    features: ["NestJS", "Spring Boot", "Docker"],
    description: "NodeJS, NestJS, Spring Boot, Flask với PostgreSQL, MongoDB. Deploy bằng Docker, Nginx và AWS EC2.",
  },
  {
    icon: Smartphone,
    title: "Ứng dụng Mobile",
    subtitle: "App đa nền tảng iOS & Android",
    features: ["Flutter", "Firebase"],
    description: "Flutter đa nền tảng cho học sinh, phụ huynh và người dùng cuối, từ thiết kế tới phát hành.",
  },
  {
    icon: GraduationCap,
    title: "Giảng dạy & Mentor",
    subtitle: "Dạy lập trình qua dự án thực tế",
    features: ["Ola Class", "System Design"],
    description: "Co-founder Ola Class: dạy Full-stack, Software Engineering và System Design qua dự án thực tế.",
  },
];

export const experienceData = [
  {
    period: "03/2024 – nay",
    title: "Frontend Developer",
    organization: "FPT Software",
    description:
      "Phát triển ứng dụng doanh nghiệp bằng VueJS và Salesforce cho khách hàng quốc tế. Tham gia các dự án y tế, theo dõi KPI và nền tảng nghiệp vụ linh hoạt theo Agile/Scrum.",
  },
  {
    period: "03/2021 – nay",
    title: "Founder & Full-stack Developer",
    organization: "Fun Bug",
    description:
      "Nhận và triển khai dự án outsource từ lấy yêu cầu tới deploy: web, đặt lịch, thương mại điện tử, công cụ quản lý nội bộ. Thiết kế kiến trúc và dẫn dắt team.",
  },
  {
    period: "09/2024 – nay",
    title: "Co-founder & Giảng viên lập trình",
    organization: "Ola Class",
    description: "Thiết kế giáo trình lập trình, hướng dẫn học viên qua dự án thực tế và coaching System Design.",
  },
  {
    period: "06/2024 – 09/2024",
    title: "Intern Developer",
    organization: "Viettel High Tech",
    description: "Làm ứng dụng với ReactJS, Spring Boot và Flask; làm quen Docker, Nginx, message queue và pipeline deploy.",
  },
];

export const achievementsData = [
  {
    period: "2022",
    title: "Giải Nhì WebContest 2022",
    organization: "Trường ĐH Khoa học Tự nhiên",
    description: "Làm website từ thiết kế tới triển khai và giành giải Nhì cuộc thi.",
  },
  {
    period: "2024",
    title: "Giải Ba GDSC Demo Day 2024",
    organization: "Google Developer Student Clubs miền Bắc",
    description: "Sản phẩm sáng tạo xây bằng React.js và Firebase, giành giải Ba Demo Day khu vực miền Bắc.",
  },
  {
    period: "2021 – 2025",
    title: "Cử nhân Khoa học Máy tính",
    organization: "ĐH Công nghệ – ĐHQG Hà Nội",
    description: "Nền tảng thuật toán, hệ thống và kỹ nghệ phần mềm.",
  },
  {
    period: "IELTS",
    title: "IELTS 7.0",
    organization: "Tiếng Anh",
    description: "Làm việc trực tiếp với khách hàng và đồng nghiệp quốc tế.",
  },
];

export const projectsData = [
  {
    name: "FreeCareerPath",
    images: ["/img/fcp-multiverse.jpg", "/img/fcp-logo.png"],
    category: "Dự án cá nhân",
    status: "Đang phát triển",
    description:
      "Học nghề IT như chơi game: lộ trình miễn phí trong một thế giới pixel đa vũ trụ. Mỗi nhiệm vụ đi theo vòng Learn → Do → Check → Ship, kèm 120 câu hỏi luyện tập cho lộ trình Thám tử Data.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Pixel art"],
    link: "https://freecareerpath.com",
  },
  {
    name: "Happy Insight X",
    images: ["/bg_1.jpg", "/bg_2.jpg"],
    category: "Nền tảng giáo dục",
    status: "Hoàn thành",
    description:
      "Dẫn dắt phát triển web admin ReactJS và app Flutter cho học sinh, giáo viên, phụ huynh. Thiết kế backend, database và gợi ý cá nhân hoá; quản lý code review và deploy.",
    technologies: ["ReactJS", "Flutter", "NodeJS", "PostgreSQL", "AWS EC2"],
  },
  {
    name: "Light's",
    images: ["/bg_3.jpg", "/bg_4.jpg"],
    category: "Sức khoẻ tinh thần",
    status: "Hoàn thành",
    description:
      "App mobile theo dõi cảm xúc, gợi ý hoạt động và nhạc, có gamification để xây thói quen tốt mỗi ngày.",
    technologies: ["Flutter", "NodeJS"],
  },
  {
    name: "Internal KPI Tracking",
    images: ["/bg_8.jpg", "/bg_9.jpg"],
    category: "FPT Software",
    status: "Hoàn thành",
    description: "Nền tảng nội bộ theo dõi hiệu suất nhân viên: giao diện responsive, API bảo mật cho báo cáo KPI và dashboard.",
    technologies: ["NextJS", "NestJS"],
  },
  {
    name: "Adaptive Code System",
    images: ["/bg_10.jpg", "/bg_7.jpg"],
    category: "FPT Software",
    status: "Hoàn thành",
    description: "Module frontend cấu hình được cho quy trình nghiệp vụ động, tích hợp Salesforce để tự động hoá workflow.",
    technologies: ["VueJS", "Salesforce"],
  },
  {
    name: "Fun Bug",
    year: "Từ 2021",
    images: ["/bg_6.jpg", "/bg_5.jpg"],
    category: "Studio outsource",
    status: "Đang hoạt động",
    description: "Studio nhỏ mình sáng lập, nhận làm website, nền tảng đặt lịch, thương mại điện tử và công cụ quản lý nội bộ.",
    technologies: ["React", "Node.js", "Flutter"],
    link: "https://funbug-2704.netlify.app",
  },
];

export const contactData = {
  email: "tranquangphuc201203@gmail.com",
  github: "github.com/jeikai",
  githubUrl: "https://github.com/jeikai",
  address: "Tân Bắc, Đài Loan",
};
