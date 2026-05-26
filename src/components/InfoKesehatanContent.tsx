import {
  CakeIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  HeartIcon,
  SparklesIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

const categories = [
  {
    name: "Gizi",
    description: "Informasi seputar nutrisi dan pola makan sehat",
    icon: CakeIcon,
    gradient: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-200",
    articles: 24,
  },
  {
    name: "Edukasi",
    description: "Edukasi kesehatan untuk masyarakat umum",
    icon: AcademicCapIcon,
    gradient: "from-sky-400 to-cyan-500",
    shadow: "shadow-sky-200",
    articles: 36,
  },
  {
    name: "Mitos dan Fakta",
    description: "Membedakan mitos dan fakta seputar kesehatan",
    icon: QuestionMarkCircleIcon,
    gradient: "from-violet-400 to-purple-500",
    shadow: "shadow-violet-200",
    articles: 18,
  },
];

const articles = [
  {
    title: "Manfaat Sarapan Pagi untuk Kesehatan",
    category: "Gizi",
    readTime: "5 menit",
    icon: CakeIcon,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Cara Mengatasi Stres Sehari-hari",
    category: "Edukasi",
    readTime: "7 menit",
    icon: SparklesIcon,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    title: "Apakah Vitamin C Mencegah Flu?",
    category: "Mitos dan Fakta",
    readTime: "4 menit",
    icon: QuestionMarkCircleIcon,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Olahraga yang Aman untuk Pemula",
    category: "Edukasi",
    readTime: "6 menit",
    icon: FireIcon,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

export default function InfoKesehatanContent() {
  return (
    <div>
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Info Kesehatan</h1>
        <p className="text-lg text-gray-500 mt-1">
          Temukan informasi kesehatan terpercaya untuk keluarga Anda
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.name}
              className={`group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${category.gradient} text-left shadow-lg ${category.shadow} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
            >
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/25 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-white/30">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-white/80 text-xs font-medium">
                    {category.articles} artikel tersedia
                  </span>
                  <div className="w-8 h-8 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 transition border border-white/30">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Latest Articles */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Artikel Terbaru</h2>
            <p className="text-base text-gray-500 mt-0.5">
              Bacaan kesehatan pilihan untuk Anda
            </p>
          </div>
          <button className="text-base text-sky-600 font-semibold hover:text-sky-700 transition">
            Lihat Semua →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article) => {
            const Icon = article.icon;
            return (
              <button
                key={article.title}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all text-left cursor-pointer group"
              >
                <div className={`w-14 h-14 ${article.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-7 h-7 ${article.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[11px] font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded mb-1">
                    {article.category}
                  </span>
                  <p className="font-bold text-gray-800 text-base mb-1 group-hover:text-sky-600 transition">
                    {article.title}
                  </p>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    <HeartIcon className="w-3.5 h-3.5" />
                    Baca {article.readTime}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
