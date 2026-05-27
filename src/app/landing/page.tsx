import Image from "next/image";
import Link from "next/link";
import {
  HeartIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckBadgeIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 lg:px-16 py-4 flex items-center justify-between sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/onecare_logo.png"
            alt="OneCare Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-gray-800">One</span>
            <span className="text-sky-500">Care</span>
          </span>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden md:block text-gray-700 font-semibold text-sm hover:text-sky-600 transition"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="px-6 py-2.5 bg-sky-500 text-white font-semibold text-sm rounded-full hover:bg-sky-600 transition shadow-md shadow-sky-200"
          >
            Daftar Sekarang
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-sky-100/40 rounded-full translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-100/40 rounded-full -translate-x-1/4 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
              <span className="text-sky-700 text-xs font-semibold">
                Layanan Kesehatan #1 di Indonesia
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.15] mb-6">
              Kesehatan Anda,{" "}
              <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                Prioritas Kami
              </span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Platform kesehatan digital terintegrasi yang menghubungkan Anda
              dengan rumah sakit, dokter, dan rekam medis dalam satu aplikasi.
              Cepat, mudah, dan terpercaya.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                href="/login"
                className="px-8 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-base rounded-full transition shadow-xl shadow-sky-200 flex items-center gap-2"
              >
                Mulai Sekarang
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#layanan"
                className="px-8 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold text-base rounded-full hover:border-sky-400 hover:text-sky-600 transition shadow-sm"
              >
                Pelajari Lebih
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-500">Pengguna Aktif</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Dokter Terverifikasi</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-500">Fasilitas Kesehatan</p>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor illustration */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main card */}
              <div className="aspect-square bg-gradient-to-br from-sky-400 to-cyan-500 rounded-3xl shadow-2xl shadow-sky-300/40 relative overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/4"></div>

                {/* Doctor icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-56 h-56 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
              </div>

              {/* Floating card 1 - Top left */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl shadow-gray-200/60 p-4 flex items-center gap-3 max-w-[200px]">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckBadgeIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Konsultasi</p>
                  <p className="text-xs text-gray-500">Berhasil Dijadwalkan</p>
                </div>
              </div>

              {/* Floating card 2 - Bottom right */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-gray-200/60 p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">24/7</p>
                  <p className="text-xs text-gray-500">Layanan Online</p>
                </div>
              </div>

              {/* Floating card 3 - Right middle */}
              <div className="absolute top-1/2 -right-8 bg-white rounded-2xl shadow-xl shadow-gray-200/60 p-3 -translate-y-1/2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-sky-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">DR</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">DR</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">DR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="layanan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
              Layanan Kami
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Solusi Kesehatan Lengkap dalam Genggaman
            </h2>
            <p className="text-gray-600 text-base">
              Akses berbagai layanan kesehatan terintegrasi yang dirancang
              untuk kemudahan dan kenyamanan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <DocumentTextIcon className="w-7 h-7 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rekam Medis Digital</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Akses rekam medis Anda dari berbagai fasilitas kesehatan dalam satu platform terpadu.
              </p>
            </div>

            <div className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <CalendarDaysIcon className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Layanan Janji Temu</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Buat janji konsultasi dengan dokter pilihan secara mudah, kapan saja dan di mana saja.
              </p>
            </div>

            <div className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ChatBubbleLeftRightIcon className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Konsultasi Online</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Konsultasi langsung dengan dokter melalui chat 24/7 tanpa harus keluar rumah.
              </p>
            </div>

            <div className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <HeartIcon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Info Kesehatan</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Dapatkan informasi kesehatan terpercaya seputar gizi, edukasi, dan fakta medis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <div className="relative">
            <div className="aspect-[4/5] max-w-md bg-gradient-to-br from-sky-400 to-cyan-500 rounded-3xl shadow-2xl shadow-sky-200 relative overflow-hidden mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <ShieldCheckIcon className="w-48 h-48 text-white" />
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-2 lg:right-12 bg-white rounded-2xl shadow-xl shadow-gray-200/60 p-5 max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">100%</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 font-medium">
                Tersertifikasi & Tepercaya
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
              Tentang OneCare
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-5">
              Mendukung Kesehatan Masyarakat Indonesia
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              OneCare hadir sebagai platform kesehatan digital yang menghubungkan
              pasien, dokter, dan fasilitas kesehatan dalam satu ekosistem terintegrasi.
              Kami berkomitmen menyediakan layanan kesehatan yang cepat, tertata, dan
              efisien untuk seluruh masyarakat Indonesia.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckBadgeIcon className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Tenaga Medis Berkualitas</p>
                  <p className="text-sm text-gray-500">Dokter berlisensi dan berpengalaman</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheckIcon className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Data Aman & Terenkripsi</p>
                  <p className="text-sm text-gray-500">Privasi dan keamanan data terjamin</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Layanan 24/7</p>
                  <p className="text-sm text-gray-500">Akses kapan saja Anda butuhkan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Facility Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
              Fasilitas Mitra
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Terhubung dengan Fasilitas Kesehatan Terbaik
            </h2>
            <p className="text-gray-600 text-base">
              Kami bekerja sama dengan rumah sakit, klinik, dan puskesmas
              terpercaya di seluruh Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Hospital */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group bg-white border border-gray-100 hover:-translate-y-1 duration-300">
              <div className="aspect-[4/3] relative bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4"></div>
                <BuildingOffice2Icon className="w-24 h-24 text-white relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-5">
                <h4 className="text-gray-900 font-bold text-lg">Rumah Sakit</h4>
                <p className="text-gray-500 text-sm">Layanan medis lengkap</p>
              </div>
            </div>

            {/* Card 2 - Clinic */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group bg-white border border-gray-100 hover:-translate-y-1 duration-300">
              <div className="aspect-[4/3] relative bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4"></div>
                <HomeModernIcon className="w-24 h-24 text-white relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-5">
                <h4 className="text-gray-900 font-bold text-lg">Klinik</h4>
                <p className="text-gray-500 text-sm">Pelayanan cepat & dekat</p>
              </div>
            </div>

            {/* Card 3 - Puskesmas */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group bg-white border border-gray-100 hover:-translate-y-1 duration-300">
              <div className="aspect-[4/3] relative bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4"></div>
                <BuildingLibraryIcon className="w-24 h-24 text-white relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-5">
                <h4 className="text-gray-900 font-bold text-lg">Puskesmas</h4>
                <p className="text-gray-500 text-sm">Layanan kesehatan dasar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <div className="bg-gradient-to-br from-sky-500 to-cyan-500 rounded-3xl p-10 lg:p-16 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Siap Memulai Hidup Lebih Sehat?
              </h2>
              <p className="text-white/90 text-base mb-8 max-w-xl mx-auto">
                Bergabunglah dengan ribuan pengguna yang telah merasakan kemudahan
                layanan kesehatan bersama OneCare.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-sky-600 font-semibold text-base rounded-full hover:bg-sky-50 transition shadow-xl"
              >
                Daftar Gratis Sekarang
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/onecare_logo.png"
                  alt="OneCare Logo"
                  width={36}
                  height={36}
                />
                <span className="text-xl font-bold text-white">OneCare</span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm">
                Platform kesehatan digital terintegrasi untuk memudahkan akses
                layanan kesehatan masyarakat Indonesia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Layanan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition">Rekam Medis</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">Janji Temu</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">Konsultasi</a></li>
                <li><a href="#" className="hover:text-sky-400 transition">Info Kesehatan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Kontak</h4>
              <ul className="space-y-2 text-sm">
                <li>support@onecare.id</li>
                <li>+62 21 1234 5678</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-sm text-center">
            © 2026 OneCare. Hak cipta dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}
