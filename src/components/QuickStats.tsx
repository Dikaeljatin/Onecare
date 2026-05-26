import {
  DocumentTextIcon,
  CalendarDaysIcon,
  ClockIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    label: "Total Kunjungan",
    value: "12",
    trend: "+2 bulan ini",
    icon: DocumentTextIcon,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    label: "Janji Mendatang",
    value: "2",
    trend: "Hari ini & besok",
    icon: CalendarDaysIcon,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    label: "Terakhir Periksa",
    value: "3",
    trend: "Hari yang lalu",
    icon: ClockIcon,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    label: "Status Kesehatan",
    value: "Baik",
    trend: "Terjaga dengan baik",
    icon: HeartIcon,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export default function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="p-5 bg-white rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-11 h-11 ${stat.iconBg} rounded-xl flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-xs text-gray-400">{stat.trend}</p>
          </div>
        );
      })}
    </div>
  );
}
