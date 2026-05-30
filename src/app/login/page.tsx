"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex bg-gradient-to-br from-sky-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/40 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl pointer-events-none"></div>

      {/* Back to home */}
      <Link
        href="/landing"
        className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md hover:bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 transition shadow-sm"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Kembali
      </Link>

      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-center p-4 lg:p-8 relative z-10">
        <div className="w-full bg-white rounded-3xl shadow-2xl shadow-sky-200/40 overflow-hidden flex flex-col lg:flex-row min-h-[640px] border border-gray-100">
          {/* Left Side - Form */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-12">
            {/* Logo */}
            <div className="flex justify-center mb-10">
              <Image
                src="/images/onecare_logo.png"
                alt="OneCare Logo"
                width={120}
                height={120}
              />
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contoh@email.com"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-base text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 focus:bg-white transition"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password Anda"
                    className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-base text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 focus:bg-white transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-600 transition"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500 focus:ring-offset-0"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800">
                    Ingat saya
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-sky-600 hover:text-sky-700 font-semibold transition"
                >
                  Lupa Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold text-base rounded-xl transition-all shadow-lg shadow-sky-200 hover:shadow-xl hover:shadow-sky-300 mt-2"
              >
                Masuk
              </button>
            </form>

            {/* Register Link */}
            <p className="text-center text-base text-gray-500 mt-8">
              Belum punya akun?{" "}
              <Link
                href="/register"
                className="text-sky-600 hover:text-sky-700 font-semibold transition"
              >
                Daftar Sekarang
              </Link>
            </p>
          </div>

          {/* Right Side - Branding Panel */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sky-500 via-sky-400 to-cyan-500 rounded-l-[60px] flex-col items-center justify-center px-12 py-16 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/10 rounded-full -translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/5 rounded-full"></div>

            <div className="relative z-10 text-center max-w-sm">
              {/* Heading */}
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Kesehatan Anda, Prioritas Kami
              </h2>
              <p className="text-white/90 text-base leading-relaxed mb-10">
                Akses layanan kesehatan terintegrasi dalam satu platform.
                Cepat, mudah, dan terpercaya.
              </p>

              {/* Feature list */}
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckBadgeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Dokter Terpercaya</p>
                    <p className="text-white/70 text-xs">Konsultasi dengan dokter berlisensi</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Data Aman & Terenkripsi</p>
                    <p className="text-white/70 text-xs">Privasi dan keamanan data terjamin</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Layanan 24/7</p>
                    <p className="text-white/70 text-xs">Akses kapan saja Anda butuhkan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
