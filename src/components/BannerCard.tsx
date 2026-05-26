import { CheckBadgeIcon, ClockIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function BannerCard() {
  return (
    <div className="bg-gradient-to-br from-sky-500 via-sky-400 to-cyan-400 rounded-3xl p-8 mb-8 overflow-hidden relative shadow-lg shadow-sky-200/50">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/4"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-white/10 rounded-full translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full"></div>

      <div className="relative z-10 flex items-center justify-between gap-8">
        {/* Text Content */}
        <div className="max-w-xl flex-1">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-4 border border-white/20">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
            <span className="text-white text-xs font-semibold">Layanan Aktif 24/7</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Kesehatan dalam Genggaman</h2>
          <p className="text-white/90 text-base leading-relaxed mb-5">
            OneCare adalah platform layanan kesehatan terintegrasi yang menghubungkan
            Anda dengan dokter, fasilitas kesehatan, dan rekam medis dalam satu aplikasi.
          </p>

          {/* Quick info badges */}
          <div className="flex flex-wrap gap-3 mb-5">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20">
              <CheckBadgeIcon className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-medium">Tepercaya</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20">
              <ClockIcon className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-medium">24/7</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20">
              <ShieldCheckIcon className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-medium">Aman</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 bg-white text-sky-600 font-semibold text-sm rounded-xl hover:bg-sky-50 transition shadow-md">
              Pelajari Selengkapnya
            </button>
            <button className="px-5 py-2.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold text-sm rounded-xl hover:bg-white/25 transition">
              Hubungi Dokter
            </button>
          </div>
        </div>

        {/* Doctor Illustration */}
        <div className="relative z-10 hidden lg:flex flex-shrink-0">
          <div className="w-48 h-48 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
            <div className="w-36 h-36 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                className="w-24 h-24 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.2}
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
