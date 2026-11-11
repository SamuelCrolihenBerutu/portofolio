// ✏️ Semua konten portofolio diedit di file ini.
export const profile = {
  name: "Samuel Crolihen Berutu",
  roles: ["Informatika", "Full-Stack Developer", "Machine Learning Enthusiast"],
  tagline: "Mahasiswa Informatika yang membangun aplikasi web, API, dan model ML yang rapi dan berguna.",
  bio: "Mahasiswa Informatika dengan fokus Full-Stack Development, perancangan RESTful API, dan Machine Learning. Terbiasa bekerja dalam tim, menjadi mentor study group, dan menyelesaikan project dari ide sampai deploy.",
  status: "Available for Internship / Projects",
  email: "samuelcrolihenberutu11111@gmail.com",
  github: "https://github.com/SamuelCrolihenBerutu",
  linkedin: "https://www.linkedin.com/in/Samuel Crolihen Berutu",
  resume: "/resume-ats.pdf",
  site: "https://samuelcrolihenberutu.vercel.app",
};

export const techStack = [
  {
    group: "Frontend",
    items: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
      { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Laravel", icon: "https://skillicons.dev/icons?i=laravel" },
      { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
      { name: "REST API", icon: "https://skillicons.dev/icons?i=postman" },
    ],
  },
  {
    group: "ML / AI",
    items: [
      { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
      { name: "TensorFlow", icon: "https://skillicons.dev/icons?i=tensorflow" },
      { name: "scikit-learn", icon: "https://skillicons.dev/icons?i=sklearn" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/pandas.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/numpy.svg" },
      { name: "Jupyter", icon: "https://skillicons.dev/icons?i=jupyter" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
      { name: "PhpStorm", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/phpstorm.svg" },
      { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
      { name: "Swagger", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/swagger.svg" },
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    ],
  },
];

export type Category = "Web App" | "Machine Learning" | "Microservices";
export const categories: ("Semua" | Category)[] = ["Semua", "Web App", "Machine Learning", "Microservices"];

export const projects: {
  title: string; category: Category; image: string; desc: string;
  tags: string[]; github: string; demo: string;
}[] = [
  { title: "Sistem Informasi Absensi Berbasis Face Recognition", category: "Web App", image: "/projects/webai.png", desc: "Mengintegrasikan layanan deteksi wajah berbasis FastAPI dengan backend Laravel untuk pengelolaan data kehadiran, jadwal kuliah, dan rekapitulasi presensi.", tags: ["Python", "FastAPI", "OpenCV", "InsightFace", "Laravel", "MySQL"], github: "https://github.com/username/akademik", demo: "https://example.com" },
  { title: "Portal Resmi Informasi & Layanan Desa", category: "Web App", image: "/projects/desa.png", desc: "Membangun aplikasi web portal resmi desa untuk mempublikasikan berita lokal, pengumuman publik, serta struktur organisasi pemerintahan desa.", tags: ["laravel", "php", "mysql","Tailwind CSS"], github: "https://github.com/username/toko", demo: "https://example.com" },
  { title: "Sistem Informasi Puskesmas", category: "Web App", image: "/projects/puskesmas.png", desc: "Sistem Informasi Puskesmas Danau Paris adalah aplikasi berbasis web yang dirancang untuk mengoptimalisasi manajemen operasional pelayanan kesehatan publik secara modern dan efisien. Aplikasi ini mengintegrasikan alur pendaftaran pasien, verifikasi kepesertaan BPJS, hingga pemanggilan antrean otomatis berbasis pemrosesan audio/suara (Text-to-Speech) di meja antrean loket.", tags: ["Laravel", "WebSockets", "mysql"], github: "https://github.com/username/house-ml", demo: "https://example.com" },
  { title: "Platform Manajemen Diri & Produktivitas Mahasiswa", category: "Web App", image: "/projects/teman.png", desc: "TEMAN 2.0 adalah web aplikasi manajemen diri (self-awareness & productivity platform) yang dirancang khusus untuk membantu mahasiswa mengelola kehidupan kampus secara seimbang dan terstruktur. Aplikasi ini menyatukan pelacakan kebiasaan (habit tracking), manajemen tugas (task management), manajemen waktu & sesi fokus, pelacakan streak produktivitas, hingga penganggaran keuangan pribadi (student financial tracker) dalam satu dashboard modern berkonsep Synthwave.", tags: ["laravel", "mysql", "Alpine.js"], github: "https://github.com/username/sentiment", demo: "https://example.com" },
  { title: "Order Service API", category: "Microservices", image: "/projects/p5.jpg", desc: "Layanan pesanan terpisah dengan dokumentasi Swagger dan komunikasi antar-service.", tags: ["Node.js", "Docker", "Swagger"], github: "https://github.com/username/order-service", demo: "https://example.com" },
  { title: "Auth Gateway", category: "Microservices", image: "/projects/p6.jpg", desc: "API gateway dengan JWT, rate limiting, dan routing ke beberapa service.", tags: ["Express", "JWT", "Redis"], github: "https://github.com/username/gateway", demo: "https://example.com" },
];

export const certificates: { title: string; issuer: string; year: string; type: string; image: string; verify: string }[] = [
  { title: "Belajar Dasar Pemrograman Web", issuer: "Dicoding", year: "2024", type: "Pelatihan", image: "/certs/c1.jpg", verify: "https://example.com" },
  { title: "Machine Learning Specialization", issuer: "Coursera", year: "2024", type: "Pelatihan", image: "/certs/c2.jpg", verify: "https://example.com" },
  { title: "Finalis Hackathon Kampus", issuer: "Fakultas Informatika", year: "2025", type: "Hackathon", image: "/certs/c3.jpg", verify: "https://example.com" },
  { title: "Backend Developer Path", issuer: "Dicoding", year: "2025", type: "Lisensi", image: "/certs/c4.jpg", verify: "https://example.com" },
  { title: "Dasar Cloud & DevOps", issuer: "AWS Academy", year: "2025", type: "Pelatihan", image: "/certs/c5.jpg", verify: "https://example.com" },
  { title: "Juara 2 Web Design Competition", issuer: "Himpunan Mahasiswa", year: "2025", type: "Hackathon", image: "/certs/c6.jpg", verify: "https://example.com" },
];

export const activities: { year: string; title: string; role: string; desc: string; image: string }[] = [
  { year: "2025", title: "Koordinator Divisi Desain", role: "Organisasi Kampus", desc: "Memimpin tim desain untuk seluruh publikasi dan UI acara tahunan.", image: "/activities/a1.jpg" },
  { year: "2025", title: "Mentor Study Group", role: "Komunitas Belajar", desc: "Membimbing 20+ anggota belajar web development dan Git.", image: "/activities/a2.jpg" },
  { year: "2024", title: "Pengabdian Masyarakat", role: "KKN / Pengabdian", desc: "Pelatihan literasi digital dan pembuatan website untuk UMKM desa.", image: "/activities/a3.jpg" },
  { year: "2024", title: "Field Trip Teknis", role: "Kunjungan Industri", desc: "Kunjungan ke perusahaan teknologi untuk mempelajari alur DevOps dan data center.", image: "/activities/a4.jpg" },
];