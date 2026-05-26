import {
  HeartIcon,
  SparklesIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

const tips = [
  {
    title: "Minum air 8 gelas sehari",
    description: "Jaga hidrasi tubuh Anda",
    icon: BeakerIcon,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    title: "Olahraga 30 menit sehari",
    description: "Aktivitas fisik untuk kesehatan jantung",
    icon: HeartIcon,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    title: "Tidur 7-9 jam per malam",
    description: "Istirahat berkualitas untuk tubuh",
    icon: SparklesIcon,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

export default function HealthTips() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Tips Kesehatan</h3>
          <p className="text-sm text-gray-500 mt-0.5">
            Hidup sehat setiap hari
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {tips.map((tip) => {
          const Icon = tip.icon;
          return (
            <div
              key={tip.title}
              className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
            >
              <div className={`w-10 h-10 ${tip.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${tip.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm">
                  {tip.title}
                </p>
                <p className="text-xs text-gray-500">{tip.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
