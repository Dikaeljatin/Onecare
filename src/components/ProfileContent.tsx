"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarDaysIcon,
  IdentificationIcon,
  HeartIcon,
  CheckBadgeIcon,
  PencilSquareIcon,
  CameraIcon,
  CheckIcon,
  XMarkIcon,
  ShieldCheckIcon,
  KeyIcon,
  ExclamationTriangleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function ProfileContent() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "Edo Setiawan",
    nik: "3171012345678901",
    email: "edo.setiawan@email.com",
    phone: "0812-3456-7890",
    birthDate: "1995-04-15",
    gender: "Laki-laki",
    bloodType: "O+",
    address: "Jl. Sudirman No. 45, Jakarta Pusat",
    emergencyContact: "0813-9876-5432",
    emergencyName: "Siti Setiawan (Ibu)",
    allergies: "Tidak ada",
    medicalHistory: "Tidak ada",
  });

  const [tempData, setTempData] = useState(formData);

  const handleEdit = () => {
    setTempData(formData);
    setIsEditing(true);
  };

  // Show confirmation popup first
  const handleSaveClick = () => {
    setShowSaveConfirm(true);
  };

  // Confirm save
  const handleConfirmSave = () => {
    setFormData(tempData);
    setIsEditing(false);
    setShowSaveConfirm(false);
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 3000);
  };

  const handleCancel = () => {
    setTempData(formData);
    setIsEditing(false);
  };

  const handleChange = (field: string, value: string) => {
    setTempData({ ...tempData, [field]: value });
  };

  const handleLogout = () => {
    setShowLogoutConfirm(false);
    router.push("/login");
  };

  const data = isEditing ? tempData : formData;

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-lg text-gray-500 mt-1">
            Kelola informasi pribadi dan data kesehatan Anda
          </p>
        </div>

        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm rounded-xl shadow-md shadow-sky-200 transition"
          >
            <PencilSquareIcon className="w-5 h-5" />
            Edit Profile
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={handleCancel}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold text-sm rounded-xl transition"
            >
              <XMarkIcon className="w-5 h-5" />
              Batal
            </button>
            <button
              onClick={handleSaveClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl shadow-md shadow-emerald-200 transition"
            >
              <CheckIcon className="w-5 h-5" />
              Simpan Perubahan
            </button>
          </div>
        )}
      </div>

      {/* Top: Profile Card */}
      <div className="bg-gradient-to-br from-sky-500 via-sky-400 to-cyan-400 rounded-3xl p-8 mb-6 relative overflow-hidden shadow-lg shadow-sky-200/50">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white/10 rounded-full translate-y-1/2"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl">
              <div className="w-24 h-24 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-4xl">
                {formData.fullName.charAt(0)}
              </div>
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 w-9 h-9 bg-white text-sky-600 rounded-full flex items-center justify-center shadow-lg hover:bg-sky-50 transition border-2 border-sky-100">
                <CameraIcon className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3 border border-white/20">
              <CheckBadgeIcon className="w-4 h-4" />
              <span className="text-xs font-semibold">Akun Terverifikasi</span>
            </div>
            <h2 className="text-3xl font-bold mb-1">{formData.fullName}</h2>
            <p className="text-white/90 mb-3">{formData.email}</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm">
              <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                <PhoneIcon className="w-4 h-4" />
                <span>{formData.phone}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                <HeartIcon className="w-4 h-4" />
                <span>Gol. Darah {formData.bloodType}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="hidden lg:flex flex-col gap-3">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20 text-white text-center">
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-white/80">Kunjungan</p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20 text-white text-center">
              <p className="text-2xl font-bold">2</p>
              <p className="text-xs text-white/80">Janji Aktif</p>
            </div>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main column: Personal Info & Medical Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Data Pribadi */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Data Pribadi</h3>
                <p className="text-sm text-gray-500">Informasi identitas Anda</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label="Nama Lengkap"
                icon={UserIcon}
                value={data.fullName}
                isEditing={isEditing}
                onChange={(v) => handleChange("fullName", v)}
              />
              <Field
                label="NIK"
                icon={IdentificationIcon}
                value={data.nik}
                isEditing={isEditing}
                onChange={(v) => handleChange("nik", v)}
              />
              <Field
                label="Email"
                icon={EnvelopeIcon}
                type="email"
                value={data.email}
                isEditing={isEditing}
                onChange={(v) => handleChange("email", v)}
              />
              <Field
                label="Nomor Telepon"
                icon={PhoneIcon}
                type="tel"
                value={data.phone}
                isEditing={isEditing}
                onChange={(v) => handleChange("phone", v)}
              />
              <Field
                label="Tanggal Lahir"
                icon={CalendarDaysIcon}
                type="date"
                value={data.birthDate}
                isEditing={isEditing}
                onChange={(v) => handleChange("birthDate", v)}
              />
              <SelectField
                label="Jenis Kelamin"
                icon={UserIcon}
                value={data.gender}
                options={["Laki-laki", "Perempuan"]}
                isEditing={isEditing}
                onChange={(v) => handleChange("gender", v)}
              />
              <div className="md:col-span-2">
                <Field
                  label="Alamat"
                  icon={MapPinIcon}
                  value={data.address}
                  isEditing={isEditing}
                  onChange={(v) => handleChange("address", v)}
                />
              </div>
            </div>
          </div>

          {/* Data Kesehatan */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                <HeartIcon className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Data Kesehatan</h3>
                <p className="text-sm text-gray-500">Informasi medis Anda</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <SelectField
                label="Golongan Darah"
                icon={HeartIcon}
                value={data.bloodType}
                options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                isEditing={isEditing}
                onChange={(v) => handleChange("bloodType", v)}
              />
              <Field
                label="Alergi"
                icon={HeartIcon}
                value={data.allergies}
                isEditing={isEditing}
                onChange={(v) => handleChange("allergies", v)}
              />
              <div className="md:col-span-2">
                <Field
                  label="Riwayat Penyakit"
                  icon={HeartIcon}
                  value={data.medicalHistory}
                  isEditing={isEditing}
                  onChange={(v) => handleChange("medicalHistory", v)}
                />
              </div>
            </div>
          </div>

          {/* Kontak Darurat */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <PhoneIcon className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Kontak Darurat</h3>
                <p className="text-sm text-gray-500">Orang yang dapat dihubungi dalam keadaan darurat</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label="Nama Kontak Darurat"
                icon={UserIcon}
                value={data.emergencyName}
                isEditing={isEditing}
                onChange={(v) => handleChange("emergencyName", v)}
              />
              <Field
                label="Nomor Telepon Darurat"
                icon={PhoneIcon}
                type="tel"
                value={data.emergencyContact}
                isEditing={isEditing}
                onChange={(v) => handleChange("emergencyContact", v)}
              />
            </div>
          </div>
        </div>

        {/* Side column: Account Settings */}
        <div className="space-y-6">
          {/* Account */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Pengaturan Akun</h3>
                <p className="text-sm text-gray-500">Keamanan & privasi</p>
              </div>
            </div>

            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                    <KeyIcon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-800">Ubah Password</p>
                    <p className="text-xs text-gray-500">Perbarui kata sandi Anda</p>
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                    <ShieldCheckIcon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-800">Verifikasi 2 Langkah</p>
                    <p className="text-xs text-gray-500">Tingkatkan keamanan akun</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  Aktif
                </span>
              </button>

              <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                    <CheckBadgeIcon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-800">Verifikasi Email</p>
                    <p className="text-xs text-gray-500">Email sudah diverifikasi</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  Verified
                </span>
              </button>
            </div>
          </div>

          {/* Logout */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-sm rounded-xl transition"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              Keluar Akun
            </button>
          </div>
        </div>
      </div>

      {/* Save Confirmation Modal */}
      {showSaveConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowSaveConfirm(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSaveConfirm(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition"
            >
              <XMarkIcon className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="relative mb-5">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-sky-200">
                  <PencilSquareIcon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Simpan Perubahan?
              </h3>
              <p className="text-gray-500 text-base mb-6">
                Apakah Anda yakin ingin menyimpan perubahan data profile?
              </p>

              {/* Action buttons */}
              <div className="flex items-center gap-3 w-full">
                <button
                  onClick={() => setShowSaveConfirm(false)}
                  className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-base rounded-xl transition"
                >
                  Batal
                </button>
                <button
                  onClick={handleConfirmSave}
                  className="flex-1 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold text-base rounded-xl transition shadow-lg shadow-sky-200"
                >
                  Ya, Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowLogoutConfirm(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowLogoutConfirm(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition"
            >
              <XMarkIcon className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="relative mb-5">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-200">
                  <ExclamationTriangleIcon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Keluar dari Akun?
              </h3>
              <p className="text-gray-500 text-base mb-6">
                Anda akan keluar dari akun OneCare. Untuk masuk kembali, Anda perlu
                memasukkan email dan password.
              </p>

              {/* Action buttons */}
              <div className="flex items-center gap-3 w-full">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-base rounded-xl transition"
                >
                  Batal
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold text-base rounded-xl transition shadow-lg shadow-red-200"
                >
                  Ya, Keluar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowSuccessPopup(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition"
            >
              <XMarkIcon className="w-5 h-5 text-gray-600" />
            </button>

            {/* Success animation */}
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="relative mb-5">
                <div className="absolute inset-0 bg-emerald-200 rounded-full animate-ping opacity-40"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200">
                  <CheckIcon className="w-10 h-10 text-white" strokeWidth={3} />
                </div>
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Berhasil Disimpan!
              </h3>
              <p className="text-gray-500 text-base mb-6">
                Perubahan data profil Anda telah berhasil disimpan.
              </p>

              {/* Action button */}
              <button
                onClick={() => setShowSuccessPopup(false)}
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

/* Reusable field component */
type FieldProps = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  isEditing: boolean;
  onChange: (value: string) => void;
  type?: string;
};

function Field({ label, icon: Icon, value, isEditing, onChange, type = "text" }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
      </label>
      {isEditing ? (
        <div className="relative">
          <Icon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 focus:bg-white transition"
          />
        </div>
      ) : (
        <div className="relative">
          <Icon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-base text-gray-700 break-words">
            {value || <span className="text-gray-400">-</span>}
          </div>
        </div>
      )}
    </div>
  );
}

/* Reusable select field component */
type SelectFieldProps = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  options: string[];
  isEditing: boolean;
  onChange: (value: string) => void;
};

function SelectField({ label, icon: Icon, value, options, isEditing, onChange }: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
      </label>
      {isEditing ? (
        <div className="relative">
          <Icon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 focus:bg-white transition appearance-none cursor-pointer"
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="relative">
          <Icon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-base text-gray-700">
            {value}
          </div>
        </div>
      )}
    </div>
  );
}
