"use client";

import { useState } from "react";
import {
  CakeIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  HeartIcon,
  SparklesIcon,
  FireIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ClockIcon,
  XMarkIcon,
  ArrowLeftIcon,
  BeakerIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

type Article = {
  title: string;
  category: string;
  readTime: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  content: string;
};

// Articles per category
const giziArticles: Article[] = [
  {
    title: "Manfaat Sarapan Pagi untuk Kesehatan",
    category: "Gizi",
    readTime: "5 menit",
    icon: CakeIcon,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    content: `Sarapan pagi adalah salah satu kebiasaan paling penting untuk menjaga kesehatan tubuh.

Manfaat utama sarapan:
• Menjaga kadar gula darah tetap stabil
• Meningkatkan konsentrasi dan fokus
• Membantu mengontrol berat badan
• Memberikan energi untuk aktivitas pagi
• Mencegah kebiasaan ngemil tidak sehat

Menu sarapan sehat yang disarankan:
• Karbohidrat kompleks (oatmeal, roti gandum, nasi merah)
• Protein (telur, susu, kacang-kacangan)
• Buah-buahan segar
• Air putih atau teh tanpa gula

Hindari sarapan dengan kandungan gula tinggi, gorengan berminyak, dan minuman bersoda. Idealnya sarapan dilakukan 1-2 jam setelah bangun tidur.`,
  },
  {
    title: "Pentingnya Asupan Protein Harian",
    category: "Gizi",
    readTime: "6 menit",
    icon: FireIcon,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    content: `Protein adalah salah satu zat gizi makro yang sangat penting bagi tubuh.

Fungsi protein:
• Membangun dan memperbaiki jaringan tubuh
• Membentuk enzim dan hormon
• Memperkuat sistem imun
• Sumber energi cadangan

Kebutuhan protein harian:
• Dewasa sehat: 0,8 - 1 gram per kg berat badan
• Atlet/aktif berolahraga: 1,2 - 2 gram per kg berat badan
• Lansia: 1 - 1,2 gram per kg berat badan

Sumber protein berkualitas:
• Hewani: telur, ikan, daging tanpa lemak, ayam, susu
• Nabati: tahu, tempe, kacang-kacangan, kedelai

Tips: bagi asupan protein dalam beberapa kali makan agar penyerapan optimal. Jangan berlebihan karena dapat membebani ginjal.`,
  },
  {
    title: "Sayur dan Buah: Konsumsi 5 Porsi Sehari",
    category: "Gizi",
    readTime: "5 menit",
    icon: SparklesIcon,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    content: `WHO merekomendasikan konsumsi minimal 400 gram sayur dan buah per hari, atau setara 5 porsi.

Manfaat sayur dan buah:
• Kaya serat untuk pencernaan
• Sumber vitamin dan mineral
• Antioksidan untuk melawan radikal bebas
• Menurunkan risiko penyakit kronis (jantung, diabetes, kanker)

Tips konsumsi 5 porsi sehari:
1. Tambahkan buah saat sarapan (pisang, apel, jeruk)
2. Sayur lalapan saat makan siang
3. Snack buah di sore hari
4. Sayur tumis atau sup saat makan malam
5. Smoothie buah & sayur untuk menambah variasi

Pilih warna yang beragam — semakin warna-warni, semakin banyak nutrisi berbeda yang masuk. Contoh: hijau (bayam), merah (tomat), kuning (jagung), ungu (terong).`,
  },
  {
    title: "Kebutuhan Air Putih Harian",
    category: "Gizi",
    readTime: "4 menit",
    icon: BeakerIcon,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    content: `Air membentuk sekitar 60% dari berat tubuh dan berperan penting dalam hampir semua fungsi tubuh.

Fungsi air:
• Mengatur suhu tubuh
• Membantu pencernaan
• Membuang racun melalui keringat & urine
• Melumasi sendi
• Menjaga kulit tetap sehat

Kebutuhan harian:
• Dewasa: 8 gelas (sekitar 2 liter)
• Lebih banyak saat cuaca panas atau berolahraga
• Wanita hamil/menyusui: tambah 1-2 gelas

Tanda dehidrasi:
• Mulut kering
• Pusing dan lelah
• Urine berwarna kuning pekat
• Kulit kehilangan elastisitas

Tips minum cukup air:
1. Minum segelas air saat bangun tidur
2. Bawa botol minum ke mana-mana
3. Set alarm pengingat setiap 1-2 jam
4. Konsumsi buah berkadar air tinggi (semangka, mentimun)`,
  },
];

const edukasiArticles: Article[] = [
  {
    title: "Cara Mengatasi Stres Sehari-hari",
    category: "Edukasi",
    readTime: "7 menit",
    icon: SparklesIcon,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    content: `Stres adalah respons alami tubuh, namun stres berkepanjangan dapat memengaruhi kesehatan fisik dan mental.

Tanda-tanda stres:
• Sulit tidur atau insomnia
• Mudah marah atau cemas
• Sakit kepala dan ketegangan otot
• Nafsu makan terganggu
• Sulit berkonsentrasi

Cara efektif mengatasi stres:
• Olahraga rutin minimal 30 menit per hari
• Latihan pernapasan dalam (deep breathing)
• Meditasi atau mindfulness
• Tidur cukup 7-9 jam per malam
• Berbagi cerita dengan orang terdekat
• Batasi konsumsi kafein dan alkohol
• Lakukan hobi yang menyenangkan

Jika stres mengganggu aktivitas sehari-hari, segera konsultasikan ke psikolog atau psikiater.`,
  },
  {
    title: "Olahraga yang Aman untuk Pemula",
    category: "Edukasi",
    readTime: "6 menit",
    icon: FireIcon,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    content: `Memulai olahraga tidak harus berat. Yang terpenting adalah konsistensi dan teknik yang benar.

Olahraga yang cocok untuk pemula:
• Jalan kaki cepat (30 menit, 5x seminggu)
• Bersepeda santai
• Berenang
• Yoga atau stretching
• Senam aerobik ringan

Tips memulai olahraga:
1. Mulai dari intensitas ringan
2. Lakukan pemanasan 5-10 menit
3. Tingkatkan durasi secara bertahap
4. Dengarkan tubuh — jangan paksakan
5. Pendinginan setelah olahraga
6. Minum cukup air

Aturan 10%: tingkatkan intensitas atau durasi maksimal 10% per minggu untuk menghindari cedera.

Konsultasikan ke dokter sebelum mulai olahraga jika Anda memiliki kondisi medis tertentu seperti hipertensi, diabetes, atau penyakit jantung.`,
  },
  {
    title: "Tidur Berkualitas untuk Kesehatan Optimal",
    category: "Edukasi",
    readTime: "5 menit",
    icon: ClockIcon,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    content: `Tidur bukan hanya istirahat — ini adalah waktu tubuh memperbaiki diri.

Manfaat tidur cukup:
• Meningkatkan sistem imun
• Memperbaiki memori dan fokus
• Menstabilkan emosi
• Menyeimbangkan hormon
• Mengurangi risiko penyakit jantung & diabetes

Kebutuhan tidur per usia:
• Bayi: 14-17 jam
• Anak-anak: 9-12 jam
• Remaja: 8-10 jam
• Dewasa: 7-9 jam
• Lansia: 7-8 jam

Tips tidur berkualitas:
1. Tidur dan bangun di jam yang sama setiap hari
2. Hindari layar (HP, TV) 1 jam sebelum tidur
3. Buat kamar gelap, sejuk, dan tenang
4. Hindari kafein setelah jam 2 siang
5. Olahraga teratur (tapi jangan dekat waktu tidur)
6. Jangan makan berat menjelang tidur

Jika sulit tidur lebih dari 3 minggu, konsultasikan ke dokter.`,
  },
  {
    title: "Pentingnya Cuci Tangan yang Benar",
    category: "Edukasi",
    readTime: "4 menit",
    icon: ShieldCheckIcon,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    content: `Mencuci tangan adalah cara paling sederhana namun efektif untuk mencegah penyakit.

Kapan harus cuci tangan:
• Sebelum dan sesudah makan
• Setelah dari toilet
• Setelah batuk atau bersin
• Sebelum menyentuh wajah
• Setelah menyentuh hewan
• Setelah pulang dari luar rumah
• Sebelum dan sesudah merawat orang sakit

Langkah cuci tangan yang benar (20 detik):
1. Basahi tangan dengan air mengalir
2. Tuang sabun secukupnya
3. Gosok kedua telapak tangan
4. Gosok punggung tangan kiri & kanan
5. Gosok sela-sela jari
6. Gosok ujung jari & kuku
7. Gosok ibu jari memutar
8. Gosok pergelangan tangan
9. Bilas dengan air mengalir
10. Keringkan dengan tisu/handuk bersih

Jika tidak ada air dan sabun, gunakan hand sanitizer dengan kandungan alkohol minimal 60%.`,
  },
  {
    title: "Bahaya Merokok untuk Kesehatan",
    category: "Edukasi",
    readTime: "6 menit",
    icon: ExclamationTriangleIcon,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    content: `Merokok adalah penyebab utama berbagai penyakit kronis dan kematian dini di dunia.

Dampak merokok pada tubuh:
• Paru-paru: kanker paru, PPOK, bronkitis kronis
• Jantung: serangan jantung, stroke, hipertensi
• Mulut & tenggorokan: kanker mulut, lidah, laring
• Kulit: penuaan dini, keriput
• Reproduksi: gangguan kesuburan, impotensi
• Kehamilan: kelainan janin, BBLR

Zat berbahaya dalam rokok:
• Nikotin — menyebabkan kecanduan
• Tar — menyebabkan kanker
• Karbon monoksida — mengurangi oksigen darah
• Lebih dari 7000 zat kimia (250 di antaranya beracun)

Manfaat berhenti merokok:
• 20 menit: tekanan darah normal
• 12 jam: kadar CO darah normal
• 2 minggu - 3 bulan: fungsi paru meningkat
• 1 tahun: risiko jantung turun 50%
• 10 tahun: risiko kanker paru turun 50%

Cara berhenti: tetapkan tanggal berhenti, hindari pemicu, minta dukungan keluarga, konsultasi ke dokter untuk terapi.`,
  },
];

const mitosFaktaArticles: Article[] = [
  {
    title: "Apakah Vitamin C Mencegah Flu?",
    category: "Mitos dan Fakta",
    readTime: "4 menit",
    icon: QuestionMarkCircleIcon,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    content: `Mitos: Mengonsumsi vitamin C dosis tinggi dapat mencegah flu.

Faktanya:
Vitamin C memang penting untuk sistem imun, tetapi tidak terbukti dapat mencegah flu pada orang sehat. Penelitian menunjukkan vitamin C hanya dapat mempersingkat durasi flu sekitar 8% pada orang dewasa.

Kebenaran tentang vitamin C:
• Membantu tubuh menyerap zat besi
• Mendukung produksi kolagen
• Antioksidan alami
• Kebutuhan harian: 75-90 mg

Sumber vitamin C alami:
• Jeruk, lemon, dan jeruk nipis
• Stroberi dan kiwi
• Brokoli dan paprika
• Pepaya dan jambu biji

Cara mencegah flu yang lebih efektif:
• Cuci tangan dengan sabun
• Jaga jarak dari orang sakit
• Tidur cukup dan hindari stres
• Vaksinasi flu tahunan`,
  },
  {
    title: "Benarkah Mandi Malam Bikin Rematik?",
    category: "Mitos dan Fakta",
    readTime: "3 menit",
    icon: QuestionMarkCircleIcon,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    content: `Mitos: Mandi malam menyebabkan rematik atau encok.

Faktanya:
Tidak ada bukti ilmiah yang menghubungkan mandi malam dengan rematik. Rematik (rheumatoid arthritis) adalah penyakit autoimun, sedangkan asam urat dan osteoarthritis disebabkan faktor lain.

Penyebab nyeri sendi:
• Faktor genetik
• Usia (degenerasi sendi)
• Cedera atau aktivitas berulang
• Berat badan berlebih
• Asam urat tinggi
• Penyakit autoimun

Mengapa muncul mitos ini?
Air dingin memang dapat menyebabkan otot dan sendi terasa kaku sementara, terutama bagi orang dengan masalah sendi yang sudah ada. Tapi ini bukan penyebab rematik.

Saran mandi malam:
• Gunakan air hangat jika lebih nyaman
• Keringkan tubuh dengan baik
• Hindari langsung tidur dengan rambut basah
• Konsultasi dokter jika nyeri sendi sering kambuh`,
  },
  {
    title: "Mitos Kolesterol: Telur Penyebab Utama?",
    category: "Mitos dan Fakta",
    readTime: "5 menit",
    icon: QuestionMarkCircleIcon,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    content: `Mitos: Makan telur tiap hari menyebabkan kolesterol tinggi.

Faktanya:
Penelitian terbaru menunjukkan telur tidak meningkatkan kolesterol darah secara signifikan pada kebanyakan orang. Kolesterol dalam makanan hanya berkontribusi sekitar 25% pada kolesterol darah.

Penyebab utama kolesterol tinggi:
• Lemak jenuh berlebihan (gorengan, makanan cepat saji)
• Lemak trans (margarin, kue kemasan)
• Kurang serat
• Kurang olahraga
• Kelebihan berat badan
• Faktor genetik

Fakta tentang telur:
• Mengandung protein berkualitas tinggi
• Sumber vitamin D, B12, dan kolin
• Aman dikonsumsi 1-2 butir per hari untuk orang sehat
• Putih telur bebas kolesterol

Yang perlu hati-hati:
Penderita diabetes atau penyakit jantung sebaiknya batasi konsumsi telur dan konsultasi ke dokter.

Tips menurunkan kolesterol:
• Konsumsi serat (oatmeal, kacang-kacangan)
• Olahraga 30 menit/hari
• Hindari gorengan dan makanan olahan
• Konsumsi ikan kaya omega-3 (salmon, tuna)`,
  },
  {
    title: "Apakah Berjemur Aman untuk Kulit?",
    category: "Mitos dan Fakta",
    readTime: "4 menit",
    icon: SunIcon,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    content: `Mitos: Berjemur lama akan membuat kulit lebih sehat dan tubuh dapat vitamin D banyak.

Faktanya:
Berjemur memang penting untuk produksi vitamin D, tetapi terlalu lama justru berbahaya bagi kulit.

Manfaat berjemur (waktu tepat):
• Membantu produksi vitamin D
• Meningkatkan mood
• Memperbaiki kualitas tidur
• Memperkuat tulang

Waktu yang aman:
• Pagi: 06.00 - 09.00 (UV index rendah)
• Durasi: 10-15 menit cukup
• Hindari jam 10.00 - 16.00 (UV tinggi)

Bahaya berjemur berlebihan:
• Kulit terbakar (sunburn)
• Penuaan dini & keriput
• Kerusakan DNA sel kulit
• Risiko kanker kulit (melanoma)
• Katarak pada mata

Tips berjemur aman:
1. Pilih waktu pagi sebelum jam 9
2. Gunakan sunscreen SPF 30+ saat aktivitas siang
3. Pakai topi dan kacamata hitam
4. Tutup area sensitif dengan pakaian
5. Hindari berjemur saat bayang lebih pendek dari tubuh
6. Minum cukup air

Untuk vitamin D, 10-15 menit berjemur 3x seminggu sudah cukup bagi kebanyakan orang.`,
  },
];

// Combine all articles for "latest articles" section
const latestArticles: Article[] = [
  giziArticles[0],
  edukasiArticles[0],
  mitosFaktaArticles[0],
  edukasiArticles[1],
];

const categories = [
  {
    name: "Gizi",
    description: "Informasi seputar nutrisi dan pola makan sehat",
    icon: CakeIcon,
    gradient: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-200",
    articles: giziArticles,
  },
  {
    name: "Edukasi",
    description: "Edukasi kesehatan untuk masyarakat umum",
    icon: AcademicCapIcon,
    gradient: "from-sky-400 to-cyan-500",
    shadow: "shadow-sky-200",
    articles: edukasiArticles,
  },
  {
    name: "Mitos dan Fakta",
    description: "Membedakan mitos dan fakta seputar kesehatan",
    icon: QuestionMarkCircleIcon,
    gradient: "from-violet-400 to-purple-500",
    shadow: "shadow-violet-200",
    articles: mitosFaktaArticles,
  },
];

const healthTips = [
  {
    title: "Cuci Tangan Rutin",
    description: "Cuci tangan dengan sabun selama 20 detik untuk mencegah penularan penyakit",
    icon: ShieldCheckIcon,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Minum Air Putih",
    description: "Minimal 8 gelas (2 liter) per hari untuk menjaga hidrasi tubuh",
    icon: SparklesIcon,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Tidur Berkualitas",
    description: "7-9 jam per malam untuk pemulihan tubuh dan kesehatan mental",
    icon: ClockIcon,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Periksa Kesehatan",
    description: "Lakukan medical check-up rutin minimal 1 kali per tahun",
    icon: HeartIcon,
    color: "bg-rose-100 text-rose-600",
  },
];

type Category = (typeof categories)[number];

export default function InfoKesehatanContent() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  // === CATEGORY DETAIL VIEW ===
  if (selectedCategory) {
    const Icon = selectedCategory.icon;
    return (
      <div>
        {/* Breadcrumb / Back button */}
        <button
          onClick={() => setSelectedCategory(null)}
          className="inline-flex items-center gap-2 mb-6 text-sky-600 hover:text-sky-700 font-semibold text-sm transition"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Kembali ke Info Kesehatan
        </button>

        {/* Category Header */}
        <div
          className={`relative overflow-hidden bg-gradient-to-br ${selectedCategory.gradient} rounded-3xl p-8 mb-8 shadow-lg ${selectedCategory.shadow}`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-white/10 rounded-full translate-y-1/2"></div>

          <div className="relative z-10 flex items-center gap-5">
            <div className="w-16 h-16 bg-white/25 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 flex-shrink-0">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">
                {selectedCategory.name}
              </h1>
              <p className="text-white/90 text-base">
                {selectedCategory.description}
              </p>
              <p className="text-white/80 text-sm mt-2">
                {selectedCategory.articles.length} artikel tersedia
              </p>
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedCategory.articles.map((article) => {
            const ArticleIcon = article.icon;
            return (
              <button
                key={article.title}
                onClick={() => setSelectedArticle(article)}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all text-left cursor-pointer group"
              >
                <div
                  className={`w-14 h-14 ${article.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                >
                  <ArticleIcon className={`w-7 h-7 ${article.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[11px] font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded mb-1">
                    {article.category}
                  </span>
                  <p className="font-bold text-gray-800 text-base mb-1 group-hover:text-sky-600 transition">
                    {article.title}
                  </p>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    <HeartIcon className="w-3.5 h-3.5" />
                    Baca {article.readTime}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Article Detail Modal */}
        <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      </div>
    );
  }

  // === MAIN VIEW ===
  return (
    <div>
      {/* Page Title Removed */}

      {/* Category Cards (clickable) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category)}
              className={`group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${category.gradient} text-left shadow-lg ${category.shadow} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/25 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-white/30">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-white/80 text-xs font-medium">
                    {category.articles.length} artikel tersedia
                  </span>
                  <div className="w-8 h-8 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/40 transition border border-white/30">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Important Health Tips */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Tips Kesehatan Penting</h2>
            <p className="text-base text-gray-500 mt-0.5">
              Kebiasaan harian untuk menjaga kesehatan tubuh
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {healthTips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.title}
                className="p-5 bg-white rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 ${tip.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-800 text-base mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{tip.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Latest Articles */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Artikel Terbaru</h2>
            <p className="text-base text-gray-500 mt-0.5">
              Bacaan kesehatan pilihan untuk Anda
            </p>
          </div>
          <button className="text-base text-sky-600 font-semibold hover:text-sky-700 transition">
            Lihat Semua →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {latestArticles.map((article) => {
            const Icon = article.icon;
            return (
              <button
                key={article.title}
                onClick={() => setSelectedArticle(article)}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all text-left cursor-pointer group"
              >
                <div
                  className={`w-14 h-14 ${article.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${article.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[11px] font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded mb-1">
                    {article.category}
                  </span>
                  <p className="font-bold text-gray-800 text-base mb-1 group-hover:text-sky-600 transition">
                    {article.title}
                  </p>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    <HeartIcon className="w-3.5 h-3.5" />
                    Baca {article.readTime}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Article Detail Modal */}
      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </div>
  );
}

/* Reusable article modal */
function ArticleModal({ article, onClose }: { article: Article | null; onClose: () => void }) {
  if (!article) return null;
  const Icon = article.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100">
          <div className="flex items-start gap-4 flex-1 min-w-0 pr-4">
            <div className={`w-12 h-12 ${article.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <Icon className={`w-6 h-6 ${article.iconColor}`} />
            </div>
            <div className="min-w-0">
              <span className="inline-block text-[11px] font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded mb-1">
                {article.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{article.title}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <HeartIcon className="w-3.5 h-3.5" />
                Baca {article.readTime}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition flex-shrink-0"
          >
            <XMarkIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="text-gray-700">
            {article.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="mb-4 whitespace-pre-line leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold text-base rounded-xl transition shadow-md"
          >
            Tutup Artikel
          </button>
        </div>
      </div>
    </div>
  );
}
