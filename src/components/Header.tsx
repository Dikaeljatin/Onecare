"use client";

import Image from "next/image";
import { BellIcon, MagnifyingGlassIcon, EnvelopeIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Header({
  setIsMobileOpen,
}: {
  setIsMobileOpen?: (open: boolean) => void;
} = {}) {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 py-3 md:py-4 flex items-center justify-between sticky top-0 z-30 gap-4">
      <div className="flex items-center gap-2 md:gap-4 flex-1">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen?.(true)}
          className="lg:hidden p-2 -ml-2 rounded-xl hover:bg-gray-100 text-gray-600 transition"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>

        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center">
          <Image
            src="/images/onecare_logo.png"
            alt="OneCare Logo"
            width={80}
            height={80}
            className="w-auto h-8"
          />
        </div>

        {/* Search Bar */}
        <div className="relative hidden md:block w-full max-w-md">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Cari layanan, dokter, atau fasilitas..."
            className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm md:text-base text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-400 transition"
          />
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-2">
        {/* Messages */}
        <button className="relative p-2 md:p-2.5 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition">
          <EnvelopeIcon className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 md:top-1.5 md:right-1.5 w-4 h-4 bg-sky-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
            3
          </span>
        </button>

        {/* Notification */}
        <button className="relative p-2 md:p-2.5 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition">
          <BellIcon className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* Divider */}
        <div className="hidden md:block h-8 w-px bg-gray-200 mx-2"></div>

        {/* Date */}
        <div className="hidden md:block px-4 py-2.5 rounded-xl bg-sky-50 border border-sky-100">
          <p className="text-sm text-sky-700 font-semibold">
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </header>
  );
}
