import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import BannerCard from "@/components/BannerCard";
import RekamMedis from "@/components/RekamMedis";
import QuickStats from "@/components/QuickStats";
import UpcomingAppointments from "@/components/UpcomingAppointments";
import HealthTips from "@/components/HealthTips";

export default function Dashboard() {
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 min-h-screen">
        <Header />

        <div className="p-8">
          {/* Greeting */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Selamat Datang, <span className="text-sky-600">Edo</span>! 👋
            </h1>
            <p className="text-lg text-gray-500 mt-1">
              Apa kabarmu hari ini? Semoga kamu baik-baik saja.
            </p>
          </div>

          {/* Quick Stats */}
          <QuickStats />

          {/* Banner */}
          <BannerCard />

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <UpcomingAppointments />
            </div>
            <div>
              <HealthTips />
            </div>
          </div>

          {/* Rekam Medis Section */}
          <RekamMedis />
        </div>
      </main>
    </div>
  );
}
