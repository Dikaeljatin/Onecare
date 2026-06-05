"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  HeartIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  HeartIcon as HeartIconSolid,
  CalendarDaysIcon as CalendarDaysIconSolid,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const menuItems = [
  { name: "Rekam Medis", icon: HomeIcon, activeIcon: HomeIconSolid, href: "/dashboard" },
  { name: "Info Kesehatan", icon: HeartIcon, activeIcon: HeartIconSolid, href: "/info-kesehatan" },
  { name: "Layanan Janji", icon: CalendarDaysIcon, activeIcon: CalendarDaysIconSolid, href: "/layanan-janji" },
  { name: "Pesan", icon: ChatBubbleLeftRightIcon, activeIcon: ChatBubbleLeftRightIconSolid, href: "/pesan" },
  { name: "Profile", icon: UserIcon, activeIcon: UserIconSolid, href: "/profile" },
];

export default function Sidebar({
  isMobileOpen,
  setIsMobileOpen,
}: {
  isMobileOpen?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
} = {}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`bg-white border-r border-gray-200 flex flex-col h-screen transition-all duration-300 z-50 fixed lg:sticky top-0 left-0 ${
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } w-64 ${isOpen ? "lg:w-64" : "lg:w-20"}`}
    >
      {/* Mobile Close Button */}
      {isMobileOpen && (
        <button
          onClick={() => setIsMobileOpen?.(false)}
          className="absolute top-4 right-4 lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-xl"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      )}

      {/* Toggle Button - hidden on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8 bg-sky-500 hover:bg-sky-600 rounded-full items-center justify-center shadow-md shadow-sky-200 transition-colors z-50"
      >
        {isOpen ? (
          <ChevronLeftIcon className="w-4 h-4 text-white" />
        ) : (
          <ChevronRightIcon className="w-4 h-4 text-white" />
        )}
      </button>

      {/* Logo */}
      <div className="px-4 py-5 flex items-center justify-center min-h-[80px]">
        <Image
          src="/images/onecare_logo.png"
          alt="OneCare Logo"
          width={!isMobileOpen && !isOpen ? 44 : 120}
          height={!isMobileOpen && !isOpen ? 44 : 120}
          className="transition-all duration-300"
        />
      </div>

      {/* Divider */}
      <div className="mx-4 h-px bg-gray-100"></div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 overflow-y-auto">
        {(isMobileOpen || isOpen) && (
          <p className="px-3 mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap">
            Menu
          </p>
        )}
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = isActive ? item.activeIcon : item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  title={item.name}
                  onClick={() => setIsMobileOpen?.(false)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-sky-50 text-sky-600 border border-sky-100"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  } ${!isMobileOpen && !isOpen ? "justify-center" : ""}`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {(isMobileOpen || isOpen) && (
                    <span className="font-medium text-[15px] whitespace-nowrap">{item.name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Card */}
      <div className="p-3 border-t border-gray-100">
        <div className={`flex items-center gap-3 px-2 ${!isMobileOpen && !isOpen ? "justify-center" : ""}`}>
          <div className="w-9 h-9 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-sm flex-shrink-0">
            E
          </div>
          {(isMobileOpen || isOpen) && (
            <div className="flex-1 min-w-0 flex flex-row items-center justify-between">
              <div className="overflow-hidden">
                <p className="text-[15px] font-semibold text-gray-800 truncate">Edo</p>
                <p className="text-sm text-gray-400 truncate">Pasien</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
