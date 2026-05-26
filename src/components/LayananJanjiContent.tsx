import {
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftRightIcon,
  BeakerIcon,
  StarIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    name: "Jadwal Tindakan",
    description: "Operasi & prosedur medis",
    icon: WrenchScrewdriverIcon,
    gradient: "from-sky-400 to-sky-500",
    shadow: "shadow-sky-200",
  },
  {
    name: "Jadwal Pengobatan",
    description: "Pemeriksaan & terapi",
    icon: ClipboardDocumentListIcon,
    gradient: "from-cyan-400 to-cyan-500",
    shadow: "shadow-cyan-200",
  },
  {
    name: "Jadwal Konsultasi",
    description: "Diskusi dengan dokter",
    icon: ChatBubbleLeftRightIcon,
    gradient: "from-teal-400 to-teal-500",
    shadow: "shadow-teal-200",
  },
  {
    name: "Jadwal Vaksinasi",
    description: "Imunisasi & vaksin",
    icon: BeakerIcon,
    gradient: "from-emerald-400 to-emerald-500",
    shadow: "shadow-emerald-200",
  },
];

const doctors = [
  {
    name: "Dr. Ahmad Fauzi",
    specialty: "Dokter Umum",
    rating: 4.8,
    reviews: 142,
    available: "Hari ini",
    initial: "A",
    color: "from-sky-500 to-cyan-500",
  },
  {
    name: "Dr. Siti Rahmawati",
    specialty: "Dokter Gigi",
    rating: 4.9,
    reviews: 218,
    available: "Besok",
    initial: "S",
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "Dr. Budi Santoso",
    specialty: "Dokter Anak",
    rating: 4.7,
    reviews: 96,
    available: "Hari ini",
    initial: "B",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Dr. Rina Kartika",
    specialty: "Dokter Mata",
    rating: 4.9,
    reviews: 175,
    available: "27 Mei",
    initial: "R",
    color: "from-amber-500 to-orange-500",
  },
];

export default function LayananJanjiContent() {
  return (
    <div>
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Layanan Janji</h1>
        <p className="text-lg text-gray-500 mt-1">
          Atur jadwal kunjungan dan konsultasi dengan dokter
        </p>
      </div>

      {/* Service Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <button
              key={service.name}
              className={`group relative overflow-hidden flex flex-col gap-4 p-6 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg ${service.shadow} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/25 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-white/30 mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {service.name}
                </h3>
                <p className="text-xs text-white/80">{service.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Doctor List Section */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Dokter Tersedia
            </h2>
            <p className="text-base text-gray-500 mt-0.5">
              Pilih dokter dan atur jadwal konsultasi Anda
            </p>
          </div>
          <button className="text-base text-sky-600 font-semibold hover:text-sky-700 transition">
            Filter →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all"
            >
              {/* Doctor Avatar */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${doctor.color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-md`}
              >
                {doctor.initial}
              </div>

              {/* Doctor Info */}
              <div className="flex-1 min-w-0">
                <p className="text-base font-bold text-gray-800">
                  {doctor.name}
                </p>
                <p className="text-sm text-gray-500 mb-1.5">
                  {doctor.specialty}
                </p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="font-semibold text-gray-700">
                      {doctor.rating}
                    </span>
                    <span className="text-gray-400">({doctor.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 font-medium">
                    <CalendarDaysIcon className="w-3.5 h-3.5" />
                    <span>Tersedia {doctor.available}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm shadow-sky-200 flex-shrink-0">
                Atur Jadwal
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
