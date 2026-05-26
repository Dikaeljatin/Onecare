"use client";

import { useState } from "react";
import {
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  FaceSmileIcon,
  EllipsisVerticalIcon,
  PhoneIcon,
  VideoCameraIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const conversations = [
  {
    id: 1,
    name: "Dr. Ahmad Fauzi",
    role: "Dokter Umum",
    lastMessage: "Bagaimana Anda mengenal tubuh Anda?",
    time: "10:30",
    unread: 2,
    online: true,
    initial: "A",
    color: "from-sky-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Dr. Siti Rahmawati",
    role: "Dokter Gigi",
    lastMessage: "Jangan lupa kontrol bulan depan ya.",
    time: "09:15",
    unread: 0,
    online: true,
    initial: "S",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 3,
    name: "Dr. Budi Santoso",
    role: "Dokter Anak",
    lastMessage: "Hasil pemeriksaan sudah saya kirim.",
    time: "Kemarin",
    unread: 0,
    online: false,
    initial: "B",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    name: "Dr. Rina Kartika",
    role: "Dokter Mata",
    lastMessage: "Terima kasih atas kunjungannya.",
    time: "Kemarin",
    unread: 1,
    online: false,
    initial: "R",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 5,
    name: "Narahubung OneCare",
    role: "Customer Service",
    lastMessage: "Ada yang bisa kami bantu?",
    time: "Senin",
    unread: 0,
    online: true,
    initial: "N",
    color: "from-rose-500 to-pink-500",
  },
];

const messages = [
  {
    id: 1,
    sender: "doctor",
    text: "Halo Edo, selamat siang. Bagaimana kondisi Anda hari ini?",
    time: "10:25",
  },
  {
    id: 2,
    sender: "me",
    text: "Selamat siang dokter. Saya merasa lebih baik dari kemarin.",
    time: "10:26",
  },
  {
    id: 3,
    sender: "doctor",
    text: "Bagus sekali. Apakah obat yang saya resepkan masih dikonsumsi secara teratur?",
    time: "10:27",
  },
  {
    id: 4,
    sender: "me",
    text: "Iya dok, saya minum 3 kali sehari sesuai anjuran.",
    time: "10:28",
  },
  {
    id: 5,
    sender: "doctor",
    text: "Bagaimana Anda mengenal tubuh Anda? Apakah ada keluhan lain yang dirasakan?",
    time: "10:30",
  },
];

export default function PesanContent() {
  const [activeChat, setActiveChat] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState("");

  return (
    <div>
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Pesan</h1>
        <p className="text-lg text-gray-500 mt-1">
          Konsultasi dan komunikasi dengan dokter
        </p>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex h-[calc(100vh-220px)] min-h-[600px]">
        {/* Conversations List */}
        <div className="w-full lg:w-[360px] border-r border-gray-100 flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari pesan..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-400 transition"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 px-4 py-3 border-b border-gray-100">
            <button className="flex-1 px-3 py-1.5 bg-sky-100 text-sky-700 font-semibold text-xs rounded-lg">
              Semua
            </button>
            <button className="flex-1 px-3 py-1.5 text-gray-500 hover:bg-gray-50 font-semibold text-xs rounded-lg transition">
              Belum Baca
            </button>
            <button className="flex-1 px-3 py-1.5 text-gray-500 hover:bg-gray-50 font-semibold text-xs rounded-lg transition">
              Dokter
            </button>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setActiveChat(conv)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 ${
                  activeChat.id === conv.id ? "bg-sky-50/50 border-l-4 border-l-sky-500" : ""
                }`}
              >
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${conv.color} rounded-full flex items-center justify-center text-white font-bold text-base`}
                  >
                    {conv.initial}
                  </div>
                  {conv.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="font-bold text-gray-800 text-sm truncate">
                      {conv.name}
                    </p>
                    <span className="text-[11px] text-gray-400 flex-shrink-0 ml-2">
                      {conv.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500 truncate">
                      {conv.lastMessage}
                    </p>
                    {conv.unread > 0 && (
                      <span className="ml-2 w-5 h-5 bg-sky-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center flex-shrink-0">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-gray-50/50">
          {/* Chat Header */}
          <div className="p-4 bg-white border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className={`w-11 h-11 bg-gradient-to-br ${activeChat.color} rounded-full flex items-center justify-center text-white font-bold`}
                >
                  {activeChat.initial}
                </div>
                {activeChat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base">
                  {activeChat.name}
                </p>
                <p className="text-xs text-gray-500">
                  {activeChat.online ? (
                    <span className="text-emerald-600">● Online</span>
                  ) : (
                    "Terakhir aktif beberapa waktu lalu"
                  )}{" "}
                  · {activeChat.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-2 hover:bg-gray-50 rounded-lg transition" title="Telepon">
                <PhoneIcon className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition" title="Video Call">
                <VideoCameraIcon className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition" title="Profil">
                <UserCircleIcon className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition" title="Lainnya">
                <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {/* Date divider */}
            <div className="flex items-center justify-center gap-3 my-2">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400 font-medium px-3 py-1 bg-white rounded-full border border-gray-100">
                Hari Ini
              </span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.sender === "me" ? "flex-row-reverse" : ""
                }`}
              >
                {msg.sender === "doctor" && (
                  <div
                    className={`w-9 h-9 bg-gradient-to-br ${activeChat.color} rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}
                  >
                    {activeChat.initial}
                  </div>
                )}
                <div
                  className={`max-w-md ${
                    msg.sender === "me" ? "items-end" : "items-start"
                  } flex flex-col gap-1`}
                >
                  <div
                    className={`px-4 py-2.5 rounded-2xl ${
                      msg.sender === "me"
                        ? "bg-gradient-to-br from-sky-500 to-cyan-500 text-white rounded-br-sm"
                        : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                  <span className="text-[11px] text-gray-400 px-1">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-50 rounded-lg transition" title="Lampiran">
                <PaperClipIcon className="w-5 h-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition" title="Emoji">
                <FaceSmileIcon className="w-5 h-5 text-gray-500" />
              </button>
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Tulis pesan..."
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-400 transition"
              />
              <button className="p-2.5 bg-gradient-to-br from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white rounded-xl transition shadow-md shadow-sky-200">
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
