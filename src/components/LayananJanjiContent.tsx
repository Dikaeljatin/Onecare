"use client";

import { useState } from "react";
import {
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  XMarkIcon,
  CheckIcon,
  UserIcon,
  IdentificationIcon,
  PhoneIcon,
  ClockIcon,
  DocumentTextIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

type ServiceType = "tindakan" | "pengobatan";

const services = [
  {
    id: "tindakan" as ServiceType,
    name: "Jadwal Tindakan",
    description: "Operasi & prosedur medis",
    icon: WrenchScrewdriverIcon,
    gradient: "from-sky-400 to-sky-500",
    shadow: "shadow-sky-200",
  },
  {
    id: "pengobatan" as ServiceType,
    name: "Jadwal Pengobatan",
    description: "Pemeriksaan & terapi",
    icon: ClipboardDocumentListIcon,
    gradient: "from-cyan-400 to-cyan-500",
    shadow: "shadow-cyan-200",
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

const facilities = ["Rumah Sakit A", "Rumah Sakit B", "Klinik X", "Puskesmas X"];

const myAppointments = [
  {
    id: 1,
    serviceName: "Jadwal Pengobatan",
    serviceIcon: ClipboardDocumentListIcon,
    serviceColor: "from-cyan-400 to-cyan-500",
    doctor: "Dr. Ahmad Fauzi - Dokter Umum",
    date: "Hari ini",
    time: "14:00",
    facility: "Rumah Sakit A",
    status: "Dikonfirmasi",
    statusColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 2,
    serviceName: "Jadwal Tindakan",
    serviceIcon: WrenchScrewdriverIcon,
    serviceColor: "from-sky-400 to-sky-500",
    doctor: "Dr. Siti Rahmawati - Dokter Gigi",
    date: "27 Mei 2026",
    time: "10:30",
    facility: "Klinik X",
    status: "Menunggu Konfirmasi",
    statusColor: "bg-amber-100 text-amber-700",
  },
  {
    id: 3,
    serviceName: "Jadwal Pengobatan",
    serviceIcon: ClipboardDocumentListIcon,
    serviceColor: "from-cyan-400 to-cyan-500",
    doctor: "Dr. Budi Santoso - Dokter Anak",
    date: "20 Mei 2026",
    time: "09:00",
    facility: "Puskesmas X",
    status: "Selesai",
    statusColor: "bg-gray-100 text-gray-700",
  },
  {
    id: 4,
    serviceName: "Jadwal Tindakan",
    serviceIcon: WrenchScrewdriverIcon,
    serviceColor: "from-sky-400 to-sky-500",
    doctor: "Dr. Rina Kartika - Dokter Mata",
    date: "15 Mei 2026",
    time: "13:00",
    facility: "Rumah Sakit B",
    status: "Selesai",
    statusColor: "bg-gray-100 text-gray-700",
  },
];

export default function LayananJanjiContent() {
  const [activeService, setActiveService] = useState<ServiceType | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    nik: "",
    phone: "",
    facility: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
    // tindakan-specific
    procedureType: "",
    medicalHistory: "",
    // pengobatan-specific
    symptoms: "",
    currentMedication: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveService(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    // Reset
    setFormData({
      fullName: "",
      nik: "",
      phone: "",
      facility: "",
      doctor: "",
      date: "",
      time: "",
      notes: "",
      procedureType: "",
      medicalHistory: "",
      symptoms: "",
      currentMedication: "",
    });
  };

  const activeServiceData = services.find((s) => s.id === activeService);

  return (
    <div>
      {/* Page Title Removed */}

      {/* Service Type Cards (only 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`group relative overflow-hidden flex items-center gap-5 p-6 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg ${service.shadow} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-1/3 w-20 h-20 bg-white/10 rounded-full translate-y-1/2"></div>

              <div className="relative z-10 w-16 h-16 bg-white/25 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-sm border border-white/30 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="relative z-10 flex-1">
                <h3 className="text-xl font-bold text-white mb-1">
                  {service.name}
                </h3>
                <p className="text-sm text-white/85">{service.description}</p>
              </div>
              <div className="relative z-10 w-10 h-10 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 transition border border-white/30 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      {/* My Appointments Section */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Janji Anda</h2>
            <p className="text-base text-gray-500 mt-0.5">
              Daftar janji yang sudah Anda buat
            </p>
          </div>
          <button className="text-base text-sky-600 font-semibold hover:text-sky-700 transition">
            Riwayat →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {myAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${appointment.serviceColor} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <appointment.serviceIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-base">
                      {appointment.serviceName}
                    </p>
                    <p className="text-xs text-gray-500">{appointment.doctor}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold ${appointment.statusColor}`}
                >
                  {appointment.status}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-2 pb-4 border-b border-gray-100 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CalendarDaysIcon className="w-4 h-4 text-sky-500" />
                  <span>{appointment.date}</span>
                  <span className="text-gray-300">•</span>
                  <ClockIcon className="w-4 h-4 text-sky-500" />
                  <span>{appointment.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BuildingOffice2Icon className="w-4 h-4 text-sky-500" />
                  <span>{appointment.facility}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="flex-1 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-sm rounded-lg transition">
                  Detail
                </button>
                {appointment.status === "Menunggu Konfirmasi" && (
                  <button className="flex-1 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-sm rounded-lg transition">
                    Batalkan
                  </button>
                )}
                {appointment.status === "Dikonfirmasi" && (
                  <button className="flex-1 py-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm rounded-lg transition">
                    Lihat Detail
                  </button>
                )}
                {appointment.status === "Selesai" && (
                  <button className="flex-1 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 font-semibold text-sm rounded-lg transition">
                    Beri Ulasan
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Modal */}
      {activeService && activeServiceData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveService(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className={`flex items-center justify-between p-6 bg-gradient-to-br ${activeServiceData.gradient} relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/4"></div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/25 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                  <activeServiceData.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Form {activeServiceData.name}
                  </h3>
                  <p className="text-white/85 text-sm">
                    Isi data berikut untuk membuat janji
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveService(null)}
                className="relative z-10 w-9 h-9 bg-white/25 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition border border-white/30"
              >
                <XMarkIcon className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-5">
                {/* Section: Data Pasien */}
                <div>
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                    Data Pasien
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Nama Lengkap"
                      icon={UserIcon}
                      value={formData.fullName}
                      onChange={(v) => handleChange("fullName", v)}
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                    <FormField
                      label="NIK"
                      icon={IdentificationIcon}
                      value={formData.nik}
                      onChange={(v) => handleChange("nik", v)}
                      placeholder="16 digit NIK"
                      required
                    />
                    <div className="md:col-span-2">
                      <FormField
                        label="Nomor Telepon"
                        icon={PhoneIcon}
                        type="tel"
                        value={formData.phone}
                        onChange={(v) => handleChange("phone", v)}
                        placeholder="08xx-xxxx-xxxx"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Section: Lokasi & Dokter */}
                <div>
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                    Lokasi & Dokter
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SelectField
                      label="Fasilitas Kesehatan"
                      icon={BuildingOffice2Icon}
                      value={formData.facility}
                      onChange={(v) => handleChange("facility", v)}
                      options={facilities}
                      placeholder="Pilih fasilitas"
                      required
                    />
                    <SelectField
                      label="Pilih Dokter"
                      icon={UserIcon}
                      value={formData.doctor}
                      onChange={(v) => handleChange("doctor", v)}
                      options={doctors.map((d) => `${d.name} - ${d.specialty}`)}
                      placeholder="Pilih dokter"
                      required
                    />
                  </div>
                </div>

                {/* Section: Jadwal */}
                <div>
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                    Jadwal
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Tanggal"
                      icon={CalendarDaysIcon}
                      type="date"
                      value={formData.date}
                      onChange={(v) => handleChange("date", v)}
                      required
                    />
                    <FormField
                      label="Jam"
                      icon={ClockIcon}
                      type="time"
                      value={formData.time}
                      onChange={(v) => handleChange("time", v)}
                      required
                    />
                  </div>
                </div>

                {/* Section: Specific to service type */}
                {activeService === "tindakan" ? (
                  <div>
                    <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                      Detail Tindakan
                    </h4>
                    <div className="space-y-4">
                      <SelectField
                        label="Jenis Tindakan"
                        icon={WrenchScrewdriverIcon}
                        value={formData.procedureType}
                        onChange={(v) => handleChange("procedureType", v)}
                        options={[
                          "Operasi Minor",
                          "Operasi Mayor",
                          "Endoskopi",
                          "Bedah Mulut",
                          "Tindakan Mata",
                          "Tindakan Lainnya",
                        ]}
                        placeholder="Pilih jenis tindakan"
                        required
                      />
                      <TextAreaField
                        label="Riwayat Penyakit / Catatan Medis"
                        icon={DocumentTextIcon}
                        value={formData.medicalHistory}
                        onChange={(v) => handleChange("medicalHistory", v)}
                        placeholder="Tuliskan riwayat penyakit, alergi obat, atau kondisi medis penting yang perlu diketahui dokter"
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                      Detail Pengobatan
                    </h4>
                    <div className="space-y-4">
                      <TextAreaField
                        label="Keluhan / Gejala"
                        icon={DocumentTextIcon}
                        value={formData.symptoms}
                        onChange={(v) => handleChange("symptoms", v)}
                        placeholder="Jelaskan keluhan yang dirasakan (sejak kapan, intensitas, dll)"
                        required
                      />
                      <TextAreaField
                        label="Obat yang Sedang Dikonsumsi"
                        icon={ClipboardDocumentListIcon}
                        value={formData.currentMedication}
                        onChange={(v) => handleChange("currentMedication", v)}
                        placeholder="Daftar obat yang sedang dikonsumsi (jika ada). Tulis 'Tidak ada' jika tidak."
                      />
                    </div>
                  </div>
                )}

                {/* Catatan tambahan */}
                <div>
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                    Catatan Tambahan
                  </h4>
                  <TextAreaField
                    label="Pesan untuk Dokter"
                    icon={DocumentTextIcon}
                    value={formData.notes}
                    onChange={(v) => handleChange("notes", v)}
                    placeholder="Tulis pesan tambahan jika ada (opsional)"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50 flex items-center gap-3 sticky bottom-0">
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="flex-1 py-3 bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 font-semibold text-base rounded-xl transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold text-base rounded-xl transition shadow-md"
                >
                  Kirim Janji
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowSuccess(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition"
            >
              <XMarkIcon className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="relative mb-5">
                <div className="absolute inset-0 bg-emerald-200 rounded-full animate-ping opacity-40"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200">
                  <CheckIcon className="w-10 h-10 text-white" strokeWidth={3} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Janji Berhasil Dibuat!
              </h3>
              <p className="text-gray-500 text-base mb-6">
                Permintaan janji Anda telah terkirim. Kami akan menghubungi Anda
                untuk konfirmasi jadwal dalam 1x24 jam.
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="w-full py-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold text-base rounded-xl transition shadow-lg shadow-sky-200"
              >
                OK, Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* === Reusable form components === */

type FormFieldProps = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

function FormField({ label, icon: Icon, value, onChange, placeholder, type = "text", required }: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <Icon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 focus:bg-white transition"
        />
      </div>
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
};

function SelectField({ label, icon: Icon, value, onChange, options, placeholder, required }: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <Icon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 focus:bg-white transition appearance-none cursor-pointer"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

type TextAreaFieldProps = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
};

function TextAreaField({ label, icon: Icon, value, onChange, placeholder, required }: TextAreaFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <Icon className="w-5 h-5 text-gray-400 absolute left-4 top-3.5 pointer-events-none" />
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={3}
          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 focus:bg-white transition resize-none"
        />
      </div>
    </div>
  );
}
