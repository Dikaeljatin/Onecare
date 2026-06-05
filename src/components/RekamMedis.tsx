import {
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  HomeModernIcon,
  BuildingLibraryIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const facilities = [
  {
    name: "Rumah Sakit A",
    type: "Rumah Sakit Umum",
    location: "Jakarta Pusat",
    visits: 5,
    icon: BuildingOffice2Icon,
    color: "from-sky-500 to-sky-600",
    bg: "bg-sky-50",
  },
  {
    name: "Rumah Sakit B",
    type: "Rumah Sakit Khusus",
    location: "Jakarta Selatan",
    visits: 3,
    icon: BuildingOfficeIcon,
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
  },
  {
    name: "Klinik X",
    type: "Klinik Pratama",
    location: "Jakarta Barat",
    visits: 2,
    icon: HomeModernIcon,
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    name: "Puskesmas X",
    type: "Layanan Kesehatan Dasar",
    location: "Jakarta Timur",
    visits: 2,
    icon: BuildingLibraryIcon,
    color: "from-amber-500 to-amber-600",
    bg: "bg-amber-50",
  },
];

export default function RekamMedis() {
  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Rekam Medis</h2>
          <p className="text-sm md:text-base text-gray-500 mt-0.5">
            Pilih fasilitas kesehatan untuk melihat rekam medis
          </p>
        </div>
        <button className="text-sm md:text-base text-sky-600 font-semibold hover:text-sky-700 transition flex items-center gap-1 self-start sm:self-auto">
          Lihat Semua
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {facilities.map((facility) => {
          const Icon = facility.icon;
          return (
            <button
              key={facility.name}
              className="group flex flex-col gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left w-full"
            >
              {/* Icon */}
              <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${facility.color} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>

              {/* Info */}
              <div>
                <h3 className="text-base font-bold text-gray-800 mb-1">
                  {facility.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{facility.type}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPinIcon className="w-3.5 h-3.5" />
                  <span>{facility.location}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100 w-full">
                <span className="text-xs text-gray-500">
                  <span className="font-semibold text-gray-700">{facility.visits}</span> kunjungan
                </span>
                <span className="text-xs font-semibold text-sky-600 group-hover:text-sky-700">
                  Lihat →
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
