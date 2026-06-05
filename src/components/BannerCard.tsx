import { CheckBadgeIcon, ClockIcon, ShieldCheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function BannerCard() {
  return (
    <div className="bg-gradient-to-br from-sky-500 via-sky-400 to-cyan-400 rounded-[2rem] p-6 md:p-10 mb-8 overflow-hidden relative shadow-xl shadow-sky-200/40 border border-sky-300/30">
      {/* Animated Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl mix-blend-overlay animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-200/20 rounded-full translate-y-1/3 blur-2xl mix-blend-overlay"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full hidden md:block"></div>
      <div className="absolute top-14 right-14 w-24 h-24 border border-white/20 rounded-full hidden md:block"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="max-w-xl flex-1">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/30 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse"></div>
            <span className="text-white text-xs font-semibold tracking-wide uppercase">Layanan Aktif 24/7</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-4 leading-tight tracking-tight">
            Kesehatan Anda <br className="hidden md:block" /> dalam Genggaman
          </h2>
          
          <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed mb-8 max-w-md">
            OneCare menghubungkan Anda dengan dokter ahli, fasilitas kesehatan premium, dan rekam medis yang selalu terintegrasi.
          </p>

          {/* Quick info badges */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm rounded-xl px-3 py-1.5 border border-white/10">
              <CheckBadgeIcon className="w-4 h-4 text-white" />
              <span className="text-white text-[11px] md:text-xs font-medium">Tepercaya</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm rounded-xl px-3 py-1.5 border border-white/10">
              <ClockIcon className="w-4 h-4 text-white" />
              <span className="text-white text-[11px] md:text-xs font-medium">24/7</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm rounded-xl px-3 py-1.5 border border-white/10">
              <ShieldCheckIcon className="w-4 h-4 text-white" />
              <span className="text-white text-[11px] md:text-xs font-medium">Aman</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-sky-600 font-bold text-sm rounded-2xl hover:bg-sky-50 hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto">
              Mulai Konsultasi
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3.5 bg-white/15 backdrop-blur-md border border-white/30 text-white font-bold text-sm rounded-2xl hover:bg-white/25 hover:-translate-y-0.5 transition-all w-full sm:w-auto">
              Pelajari Layanan
            </button>
          </div>
        </div>

        {/* Doctor Illustration */}
        <div className="relative z-10 hidden lg:flex flex-shrink-0 w-64 h-64 justify-center items-center">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-[3rem] rotate-6 border border-white/20 transition-transform group-hover:rotate-12"></div>
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-[3rem] -rotate-3 border border-white/30"></div>
          
          <div className="relative w-48 h-48 bg-gradient-to-tr from-white/30 to-white/10 rounded-full flex items-center justify-center border border-white/40 shadow-2xl backdrop-blur-md">
            <svg
              className="w-24 h-24 text-white drop-shadow-md"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v4m-2-2h4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
