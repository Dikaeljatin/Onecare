import { CalendarDaysIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";

const appointments = [
  {
    doctor: "Dr. Ahmad Fauzi",
    specialty: "Dokter Umum",
    date: "Hari ini",
    time: "14:00 - 15:00",
    location: "Rumah Sakit A",
    status: "Dikonfirmasi",
    statusColor: "bg-emerald-100 text-emerald-700",
  },
  {
    doctor: "Dr. Siti Rahmawati",
    specialty: "Dokter Gigi",
    date: "27 Mei 2026",
    time: "10:30 - 11:30",
    location: "Klinik X",
    status: "Menunggu",
    statusColor: "bg-amber-100 text-amber-700",
  },
];

export default function UpcomingAppointments() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Janji Mendatang</h3>
          <p className="text-sm text-gray-500 mt-0.5">
            Jadwal pemeriksaan Anda
          </p>
        </div>
        <button className="text-sm text-sky-600 font-semibold hover:text-sky-700 transition">
          Semua →
        </button>
      </div>

      <div className="space-y-3">
        {appointments.map((appointment) => (
          <div
            key={appointment.doctor}
            className="p-4 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl border border-sky-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {appointment.doctor.split(" ").pop()?.charAt(0) || "D"}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">
                    {appointment.doctor}
                  </p>
                  <p className="text-xs text-gray-500">
                    {appointment.specialty}
                  </p>
                </div>
              </div>
              <span
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${appointment.statusColor}`}
              >
                {appointment.status}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
              <div className="flex items-center gap-1.5">
                <CalendarDaysIcon className="w-3.5 h-3.5 text-sky-600" />
                <span>{appointment.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ClockIcon className="w-3.5 h-3.5 text-sky-600" />
                <span>{appointment.time}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPinIcon className="w-3.5 h-3.5 text-sky-600" />
                <span>{appointment.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
