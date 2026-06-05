import DashboardLayout from "@/components/DashboardLayout";
import BannerCard from "@/components/BannerCard";
import RekamMedis from "@/components/RekamMedis";
import QuickStats from "@/components/QuickStats";
import UpcomingAppointments from "@/components/UpcomingAppointments";
import HealthTips from "@/components/HealthTips";

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Selamat Datang, <span className="text-sky-600">Edo</span>! 👋
        </h1>
        <p className="text-base md:text-lg text-gray-500 mt-1">
          Apa kabarmu hari ini? Semoga kamu baik-baik saja.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="mb-6">
        <QuickStats />
      </div>

      {/* Banner */}
      <div className="mb-8">
        <BannerCard />
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <UpcomingAppointments />
        </div>
        <div>
          <HealthTips />
        </div>
      </div>

      <div className="mb-8">
        <RekamMedis />
      </div>
    </DashboardLayout>
  );
}
