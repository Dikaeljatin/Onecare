"use client";

import { useState } from "react";
import {
  PaperAirplaneIcon,
  PaperClipIcon,
  FaceSmileIcon,
  EllipsisVerticalIcon,
  PhoneIcon,
  VideoCameraIcon,
  CheckBadgeIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

type Message = {
  id: number;
  sender: "cs" | "me";
  text: string;
  time: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "cs",
    text: "Halo Edo, selamat datang di OneCare! 👋 Saya Narahubung OneCare, ada yang bisa kami bantu hari ini?",
    time: "10:00",
  },
  {
    id: 2,
    sender: "cs",
    text: "Anda dapat bertanya seputar:\n• Cara membuat janji dengan dokter\n• Informasi rekam medis\n• Bantuan pendaftaran akun\n• Layanan kesehatan lainnya",
    time: "10:00",
  },
  {
    id: 3,
    sender: "me",
    text: "Halo, saya ingin tanya cara membuat janji konsultasi dengan dokter umum",
    time: "10:05",
  },
  {
    id: 4,
    sender: "cs",
    text: "Tentu, saya akan bantu. Anda dapat membuat janji melalui menu Layanan Janji di sidebar. Pilih jenis 'Jadwal Pengobatan', kemudian isi form dengan data yang diperlukan.",
    time: "10:06",
  },
  {
    id: 5,
    sender: "cs",
    text: "Apakah ada hal lain yang bisa kami bantu?",
    time: "10:06",
  },
];

const quickReplies = [
  "Cara membuat janji?",
  "Lihat rekam medis",
  "Hubungi dokter",
  "Layanan darurat",
];

export default function PesanContent() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [messageInput, setMessageInput] = useState("");

  const handleSend = (text?: string) => {
    const content = text ?? messageInput;
    if (!content.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: "me",
      text: content,
      time: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    
    setMessages((prev) => [...prev, newMessage]);
    setMessageInput("");

    // Simulate auto-reply from CS
    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        sender: "cs",
        text: "Terima kasih atas pesan Anda. Tim kami akan membantu Anda. Mohon tunggu sebentar 🙏",
        time: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <div>
      {/* Page Title Removed */}

      {/* Chat Container */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex h-[calc(100vh-220px)] min-h-[600px]">
        {/* Info Panel */}
        <div className="hidden lg:flex w-[300px] border-r border-gray-100 flex-col bg-gradient-to-br from-sky-50 to-cyan-50">
          {/* CS Profile */}
          <div className="p-6 text-center border-b border-sky-100">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg shadow-sky-200">
                CS
              </div>
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 rounded-full border-3 border-white"></div>
            </div>
            <h3 className="font-bold text-gray-800 text-lg">Narahubung OneCare</h3>
            <p className="text-sm text-emerald-600 font-medium mb-2">● Online</p>
            <p className="text-xs text-gray-500">
              Customer Service OneCare siap membantu Anda 24/7
            </p>
          </div>

          {/* Features */}
          <div className="p-5 space-y-3 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
              Layanan Kami
            </p>
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-sky-100">
              <div className="w-9 h-9 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <ClockIcon className="w-4 h-4 text-sky-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Layanan 24/7</p>
                <p className="text-xs text-gray-500">Tersedia kapan saja</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-sky-100">
              <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckBadgeIcon className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Tim Profesional</p>
                <p className="text-xs text-gray-500">Siap membantu</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-sky-100">
              <div className="w-9 h-9 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShieldCheckIcon className="w-4 h-4 text-violet-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Privasi Terjamin</p>
                <p className="text-xs text-gray-500">Data Anda aman</p>
              </div>
            </div>
          </div>

          {/* Emergency contact */}
          <div className="p-4 border-t border-sky-100">
            <a
              href="tel:08001234"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-white border border-sky-200 hover:bg-sky-50 text-sky-600 font-semibold text-sm rounded-xl transition"
            >
              <PhoneIcon className="w-4 h-4" />
              0800-1234 (Hotline)
            </a>
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-gray-50/50">
          {/* Chat Header */}
          <div className="p-4 bg-white border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  CS
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base">
                  Narahubung OneCare
                </p>
                <p className="text-xs text-gray-500">
                  <span className="text-emerald-600">● Online</span> · Customer Service
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
                {msg.sender === "cs" && (
                  <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    CS
                  </div>
                )}
                <div
                  className={`max-w-md flex flex-col gap-1 ${
                    msg.sender === "me" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2.5 rounded-2xl ${
                      msg.sender === "me"
                        ? "bg-gradient-to-br from-sky-500 to-cyan-500 text-white rounded-br-sm"
                        : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {msg.text}
                    </p>
                  </div>
                  <span className="text-[11px] text-gray-400 px-1">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick replies */}
          <div className="px-6 py-3 bg-white border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-2 font-medium">Saran cepat:</p>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleSend(reply)}
                  className="px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-medium rounded-full border border-sky-100 transition"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <button
                type="button"
                className="p-2 hover:bg-gray-50 rounded-lg transition"
                title="Lampiran"
              >
                <PaperClipIcon className="w-5 h-5 text-gray-500" />
              </button>
              <button
                type="button"
                className="p-2 hover:bg-gray-50 rounded-lg transition"
                title="Emoji"
              >
                <FaceSmileIcon className="w-5 h-5 text-gray-500" />
              </button>
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Tulis pesan..."
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-400 transition"
              />
              <button
                type="submit"
                className="p-2.5 bg-gradient-to-br from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white rounded-xl transition shadow-md shadow-sky-200"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
