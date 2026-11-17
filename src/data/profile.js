// Nội dung portfolio. Nguồn: CV (Anti_CV.pdf) + thông tin về FreeCareerPath.
// Muốn cập nhật nội dung thì chỉ cần sửa file này.

export const profile = {
  name: "Trần Quang Phúc",
  shortName: "Phúc",
  role: "Full-stack Developer",
  location: "Đài Loan · TKU lab",
  tagline: "Mình code sản phẩm thật, và đang biến việc học nghề IT thành một trò chơi.",
  summary:
    "Full-stack developer với hơn 2 năm kinh nghiệm làm web và mobile bằng ReactJS, VueJS, NestJS, Flutter, Spring Boot và cloud. Mình làm Frontend Developer ở FPT Software, sáng lập Fun Bug (nhận dự án outsource) và đồng sáng lập Ola Class để dạy lập trình. Hiện mình ở Đài Loan, làm việc trong lab tại TKU, và dồn tâm huyết vào FreeCareerPath.",
  email: "tranquangphuc201203@gmail.com",
  github: "https://github.com/jeikai",
};

export const featured = {
  name: "FreeCareerPath",
  url: "https://freecareerpath.com",
  pitch: "Học nghề IT như chơi game.",
  description:
    "Lộ trình nghề nghiệp miễn phí, được thiết kế như một thế giới pixel để khám phá: mỗi vũ trụ là một con đường, mỗi nhiệm vụ đưa bạn gần hơn tới buổi phỏng vấn. Vòng học là Learn → Do → Check → Ship, không phải đọc lý thuyết suông.",
  highlights: [
    { label: "Lộ trình nổi bật", value: "Thám tử Data", note: "Từ SQL tới Machine Learning" },
    { label: "Câu hỏi luyện tập", value: "120", note: "Học xong là kiểm tra ngay" },
    { label: "Trải nghiệm", value: "3D + Pixel", note: "Đi qua bản đồ đa vũ trụ" },
  ],
  stack: ["Next.js", "NestJS", "PostgreSQL", "Pixel art"],
  image: "/img/fcp-multiverse.jpg",
  imageAlt: "Bản đồ đa vũ trụ trong FreeCareerPath với các thế giới The Origin, Glitch City và Machine Realm",
};

export const experience = [
  {
    company: "FPT Software",
    role: "Frontend Developer",
    period: "03/2024 – nay",
    points: [
      "Phát triển ứng dụng doanh nghiệp bằng VueJS và Salesforce cho khách hàng quốc tế",
      "Xây module frontend tái sử dụng, tích hợp quy trình nghiệp vụ với hệ thống CRM",
      "Tham gia các dự án y tế, theo dõi KPI và nền tảng nghiệp vụ linh hoạt theo Agile/Scrum",
    ],
  },
  {
    company: "Fun Bug",
    role: "Founder & Full-stack Developer",
    period: "03/2021 – nay",
    points: [
      "Nhận và triển khai dự án outsource từ lấy yêu cầu tới deploy",
      "Thiết kế kiến trúc, làm việc trực tiếp với khách hàng, dẫn dắt team phát triển",
      "Làm hệ thống web, nền tảng đặt lịch, thương mại điện tử và công cụ quản lý nội bộ",
    ],
  },
  {
    company: "Ola Class",
    role: "Co-founder & Giảng viên lập trình",
    period: "09/2024 – nay",
    points: [
      "Thiết kế giáo trình lập trình và hướng dẫn học viên qua dự án thực tế",
      "Coaching Full-stack, Software Engineering và System Design",
    ],
  },
  {
    company: "Viettel High Tech",
    role: "Intern Developer",
    period: "06/2024 – 09/2024",
    points: [
      "Phát triển ứng dụng với ReactJS, Spring Boot và Flask",
      "Làm việc với Docker, Nginx, message queue và pipeline deploy",
    ],
  },
];

export const projects = [
  {
    name: "Happy Insight X",
    kind: "Nền tảng giáo dục đa nền tảng",
    description:
      "Mình dẫn dắt phát triển hệ thống gồm web admin ReactJS và app Flutter cho học sinh, giáo viên, phụ huynh. Thiết kế backend và database cho quản lý người dùng, theo dõi hành vi và gợi ý cá nhân hoá; quản lý code review, phân task và deploy.",
    tech: ["ReactJS", "Flutter", "NodeJS", "PostgreSQL", "AWS EC2"],
    accent: "cyan",
  },
  {
    name: "Light's",
    kind: "App hỗ trợ sức khoẻ tinh thần",
    description:
      "App mobile giúp cải thiện tinh thần và xây thói quen: theo dõi cảm xúc, gợi ý hoạt động, gợi ý nhạc và yếu tố gamification. Backend lo hồ sơ người dùng và luồng gợi ý cá nhân.",
    tech: ["Flutter", "NodeJS"],
    accent: "pink",
  },
  {
    name: "Internal KPI Tracking",
    kind: "FPT Software",
    description:
      "Nền tảng nội bộ theo dõi hiệu suất nhân viên. Mình làm giao diện responsive, tích hợp API bảo mật cho báo cáo KPI và dashboard.",
    tech: ["NextJS", "NestJS"],
    accent: "gold",
  },
  {
    name: "Adaptive Code System",
    kind: "FPT Software",
    description:
      "Module frontend cấu hình được cho quy trình nghiệp vụ động, tích hợp Salesforce để tuỳ biến và tự động hoá workflow, giảm code lặp nhờ kiến trúc component tái sử dụng.",
    tech: ["VueJS", "Salesforce"],
    accent: "gold",
  },
];

export const skills = [
  { group: "Ngôn ngữ", items: ["JavaScript", "TypeScript", "Java", "Python", "Dart", "SQL"] },
  { group: "Frontend", items: ["ReactJS", "NextJS", "VueJS"] },
  { group: "Backend", items: ["NodeJS", "NestJS", "Spring Boot", "Flask"] },
  { group: "Mobile", items: ["Flutter"] },
  { group: "Database", items: ["PostgreSQL", "MongoDB"] },
  { group: "Cloud & DevOps", items: ["AWS EC2", "Docker", "Nginx", "Git"] },
];

export const achievements = [
  { title: "Giải Nhì", detail: "WContest 2022" },
  { title: "Giải Ba", detail: "GDSC Demo Day khu vực miền Bắc 2024" },
  { title: "IELTS 7.0", detail: "Tiếng Anh" },
  { title: "Cử nhân KHMT", detail: "ĐH Công nghệ – ĐHQGHN, 2021–2025" },
];

// Kênh mạng xã hội. Điền `url` khi kênh đã sẵn sàng; để null sẽ hiện "Sắp ra mắt".
export const links = [
  { name: "FreeCareerPath", handle: "freecareerpath.com", url: "https://freecareerpath.com", primary: true },
  { name: "GitHub", handle: "@jeikai", url: "https://github.com/jeikai" },
  { name: "TikTok", handle: "Sắp ra mắt", url: null },
  { name: "YouTube", handle: "Sắp ra mắt", url: null },
  { name: "Facebook", handle: "Sắp ra mắt", url: null },
  { name: "Beacons", handle: "Tất cả link ở một nơi", url: null },
];
