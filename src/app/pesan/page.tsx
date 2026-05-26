import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import PesanContent from "@/components/PesanContent";

export default function Pesan() {
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 min-h-screen">
        <Header />

        <div className="p-8">
          <PesanContent />
        </div>
      </main>
    </div>
  );
}
