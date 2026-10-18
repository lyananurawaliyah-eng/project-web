/**
 * ==========================================================================
 * SISTEM DIGITALISASI ARSIP TERPADU - PT BUMI STATIONERY
 * Modern Vanilla JavaScript Application Logic
 * Separated JavaScript File
 * ==========================================================================
 */

// Global Application State & Storage
const APP_STORAGE_KEY = 'PT_BUMI_STATIONERY_ARCHIVES_V2';
const APP_USER_KEY = 'PT_BUMI_USER_SESSION_V2';
const APP_REVIEWS_KEY = 'PT_BUMI_REVIEWS_V2';
const APP_TICKETS_KEY = 'PT_BUMI_CS_TICKETS_V2';

// --------------------------------------------------------------------------
// 1. INITIAL MOCK DATA (Realistic PT BUMI STATIONERY Archival Records)
// --------------------------------------------------------------------------
const INITIAL_LETTERS = [
  {
    id: 'BS-2026-001',
    noSurat: '012/BS-EXT/I/2026',
    tanggal: '2026-01-14',
    jenis: 'Surat Masuk',
    indeksAbjad: 'A',
    pengirim: 'PT Asahi Kertas Nusantara',
    penerima: 'Direktur Operasional PT Bumi Stationery',
    perihal: 'Penawaran Kerjasama Suplai Kertas HVS 75gsm & 80gsm Ekspor',
    statusRetensi: 'Aktif',
    tahun: '2026',
    kerahasiaan: 'Biasa / Terbuka',
    lokasiFisik: 'Laci A-01 / Bantex Kertas 01',
    isiDokumen: 'Sehubungan dengan pembukaan pabrik baru PT Asahi Kertas Nusantara di Cikarang, kami mengajukan penawaran harga grosir khusus produk kertas continuous form dan HVS rim untuk kebutuhan PT Bumi Stationery tahun anggaran 2026.',
    unitFiling: 'Asahi Kertas Nusantara, PT'
  },
  {
    id: 'BS-2026-002',
    noSurat: '045/BS-PO/II/2026',
    tanggal: '2026-02-08',
    jenis: 'Surat Keluar',
    indeksAbjad: 'B',
    pengirim: 'PT Bumi Stationery (Bagian Logistik)',
    penerima: 'PT Berkah Grafika Mandiri',
    perihal: 'Surat Pesanan (PO) 5.000 Rim Kertas Manila & Map Arsip Folio',
    statusRetensi: 'Aktif',
    tahun: '2026',
    kerahasiaan: 'Biasa / Terbuka',
    lokasiFisik: 'Laci B-02 / Bantex Pengadaan 04',
    isiDokumen: 'Bersama ini PT Bumi Stationery menerbitkan Purchase Order resmi nomor PO-2026-089 untuk pemesanan 5.000 rim kertas manila warna dan map arsip gantung sesuai spesifikasi terlampir.',
    unitFiling: 'Berkah Grafika Mandiri, PT'
  },
  {
    id: 'BS-2026-003',
    noSurat: '088/BS-SK/III/2026',
    tanggal: '2026-03-02',
    jenis: 'Surat Keputusan',
    indeksAbjad: 'B',
    pengirim: 'Direksi Utama PT Bumi Stationery',
    penerima: 'Seluruh Kepala Divisi & Karyawan',
    perihal: 'SK Direksi tentang Standarisasi Abjad Filing System & Jadwal Retensi Arsip',
    statusRetensi: 'Permanen',
    tahun: '2026',
    kerahasiaan: 'Terbatas',
    lokasiFisik: 'Lemari Besi Rahasia / Box SK-01',
    isiDokumen: 'Menetapkan pedoman tata kelola kearsipan digital dan manual bagi seluruh unit kerja di lingkungan PT Bumi Stationery berbasis kaidah ANRI serta audit berkala setiap 6 bulan.',
    unitFiling: 'Bumi Stationery, PT (SK Direksi)'
  },
  {
    id: 'BS-2026-004',
    noSurat: '102/GRA-M/IV/2026',
    tanggal: '2026-04-18',
    jenis: 'Surat Masuk',
    indeksAbjad: 'G',
    pengirim: 'PT Gramedia Asri Media',
    penerima: 'Divisi Pemasaran PT Bumi Stationery',
    perihal: 'Permohonan Pengiriman Tambahan Produk Binder & Filling Cabinet',
    statusRetensi: 'Aktif',
    tahun: '2026',
    kerahasiaan: 'Biasa / Terbuka',
    lokasiFisik: 'Laci G-01 / Bantex Ritel 02',
    isiDokumen: 'Menindaklanjuti tingginya permintaan perlengkapan kearsipan di gerai Jabodetabek, kami mengajukan permohonan suplai tambahan binder ordner ukuran F4 dan A4 sebanyak 2.500 unit.',
    unitFiling: 'Gramedia Asri Media, PT'
  },
  {
    id: 'BS-2026-005',
    noSurat: '133/BS-PKS/V/2026',
    tanggal: '2026-05-12',
    jenis: 'Perjanjian Kerja Sama',
    indeksAbjad: 'I',
    pengirim: 'PT Indah Kiat Pulp & Paper Tbk & PT Bumi Stationery',
    penerima: 'Direksi & Legal Corporate',
    perihal: 'Perjanjian Kerjasama Distribusi Eksklusif Kertas Fotokopi Ramah Lingkungan',
    statusRetensi: 'Permanen',
    tahun: '2026',
    kerahasiaan: 'Rahasia',
    lokasiFisik: 'Brankas Legal Lt. 2 / Map PKS-2026',
    isiDokumen: 'Perjanjian kerjasama kemitraan eksklusif selama 3 tahun dalam mendistribusikan produk kertas premium bersertifikasi FSC di wilayah Jakarta Selatan dan Depok.',
    unitFiling: 'Indah Kiat Pulp & Paper Tbk, PT'
  },
  {
    id: 'BS-2026-006',
    noSurat: 'S-240/WPJ.06/KP.04/2026',
    tanggal: '2026-06-20',
    jenis: 'Surat Masuk',
    indeksAbjad: 'K',
    pengirim: 'Kantor Pajak Pratama Jakarta Kebayoran Baru',
    penerima: 'Bagian Keuangan & Pajak PT Bumi Stationery',
    perihal: 'Konfirmasi Penerimaan SPT Tahunan PPh Badan Tahun Pajak 2025',
    statusRetensi: 'Aktif',
    tahun: '2026',
    kerahasiaan: 'Rahasia',
    lokasiFisik: 'Laci K-01 / Bantex Pajak & Keuangan',
    isiDokumen: 'Surat konfirmasi formal penerimaan laporan Surat Pemberitahuan Tahunan (SPT) PPh Badan Tahun Pajak 2025 nomor tanda terima BPS-89218201.',
    unitFiling: 'Kantor Pajak Pratama Jakarta Kebayoran Baru'
  },
  {
    id: 'BS-2026-007',
    noSurat: '178/BS-PNT/VII/2026',
    tanggal: '2026-07-09',
    jenis: 'Surat Keluar',
    indeksAbjad: 'K',
    pengirim: 'PT Bumi Stationery',
    penerima: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
    perihal: 'Penawaran Paket Perlengkapan Alat Tulis & Kertas Ujian Nasional',
    statusRetensi: 'Aktif',
    tahun: '2026',
    kerahasiaan: 'Biasa / Terbuka',
    lokasiFisik: 'Laci K-02 / Dokumen Pengadaan Pemerintah',
    isiDokumen: 'Pengajuan proposal teknis dan komersial paket alat tulis lengkap, pensil 2B terverifikasi komputer, dan lembar jawab komputer ramah arsip untuk program pendidikan nasional.',
    unitFiling: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi'
  },
  {
    id: 'BS-2026-008',
    noSurat: '021/MTR-INV/VIII/2026',
    tanggal: '2026-08-15',
    jenis: 'Surat Masuk',
    indeksAbjad: 'M',
    pengirim: 'PT Mitra Jaya Stationery Distributor',
    penerima: 'Divisi Akuntansi PT Bumi Stationery',
    perihal: 'Pengiriman Invoice dan Faktur Pajak Pembelian Ballpoint & Spidol',
    statusRetensi: 'Aktif',
    tahun: '2026',
    kerahasiaan: 'Biasa / Terbuka',
    lokasiFisik: 'Laci M-01 / Bantex Faktur Tagihan 08',
    isiDokumen: 'Faktur penagihan pembayaran atas pengiriman 200 karton ballpoint dan 150 karton spidol whiteboard tanggal 10 Agustus 2026 nomor inv INV-2026-0994.',
    unitFiling: 'Mitra Jaya Stationery Distributor, PT'
  },
  {
    id: 'BS-2026-009',
    noSurat: '215/BS-TGS/IX/2026',
    tanggal: '2026-09-04',
    jenis: 'Surat Keluar',
    indeksAbjad: 'S',
    pengirim: 'Direksi PT Bumi Stationery',
    penerima: 'Sdr. Hendra Setiawan (Supervisor Logistik)',
    perihal: 'Surat Perintah Tugas (SPT) Audit Stok Fisik Gudang Kertas Sentul',
    statusRetensi: 'Inaktif',
    tahun: '2026',
    kerahasiaan: 'Terbatas',
    lokasiFisik: 'Laci S-01 / Arsip Personalia',
    isiDokumen: 'Memberikan mandat kepada tim logistik untuk melaksanakan stock opname dan audit fisik persediaan kertas kontinu serta map ordner di Gudang Pusat Sentul tanggal 7-10 September 2026.',
    unitFiling: 'Setiawan, Hendra (Surat Tugas)'
  },
  {
    id: 'BS-2026-010',
    noSurat: '098/TG-M/X/2026',
    tanggal: '2026-10-02',
    jenis: 'Surat Masuk',
    indeksAbjad: 'T',
    pengirim: 'Toko Buku Gunung Agung Sentosa',
    penerima: 'Manajer Penjualan PT Bumi Stationery',
    perihal: 'Permohonan Kerjasama Retur dan Penggantian Stok Perlengkapan Sekolah',
    statusRetensi: 'Aktif',
    tahun: '2026',
    kerahasiaan: 'Biasa / Terbuka',
    lokasiFisik: 'Laci T-01 / Berkas Mitra Toko',
    isiDokumen: 'Pengajuan klaim penggantian atas 3 karton map kancing plastik yang mengalami cacat kemasan saat distribusi ekspedisi tanggal 28 September 2026.',
    unitFiling: 'Toko Buku Gunung Agung Sentosa'
  },
  {
    id: 'BS-2026-011',
    noSurat: '241/BS-UND/X/2026',
    tanggal: '2026-10-10',
    jenis: 'Surat Keluar',
    indeksAbjad: 'B',
    pengirim: 'Sekretariat Direksi PT Bumi Stationery',
    penerima: 'Seluruh Pimpinan Unit Kerja',
    perihal: 'Undangan Rapat Evaluasi Kinerja Kearsipan & Audit ISO 9001 Triwulan III',
    statusRetensi: 'Aktif',
    tahun: '2026',
    kerahasiaan: 'Biasa / Terbuka',
    lokasiFisik: 'Laci B-01 / Undangan Internal',
    isiDokumen: 'Mengundang bapak/ibu kepala unit dalam rapat koordinasi kearsipan dan persiapan surveillance audit ISO 9001:2015 yang akan diselenggarakan pada Kamis, 22 Oktober 2026 di Ruang Rapat Melawai.',
    unitFiling: 'Bumi Stationery, PT (Undangan Rapat)'
  },
  {
    id: 'BS-2026-012',
    noSurat: '034/SLM-M/XI/2025',
    tanggal: '2025-11-14',
    jenis: 'Surat Masuk',
    indeksAbjad: 'S',
    pengirim: 'PT Sinar Logam Makmur (Pabrik Rak Arsip)',
    penerima: 'Manajer Umum PT Bumi Stationery',
    perihal: 'Berita Acara Serah Terima (BAST) 20 Unit Mobile File System / Roll O Pack',
    statusRetensi: 'Inaktif',
    tahun: '2025',
    kerahasiaan: 'Biasa / Terbuka',
    lokasiFisik: 'Laci S-03 / Aset dan Sarana',
    isiDokumen: 'Berita acara serah terima pekerjaan pengadaan dan instalasi 20 unit rak lemari dorong kearsipan (mobile file) di ruang rekam arsip PT Bumi Stationery Lantai 3.',
    unitFiling: 'Sinar Logam Makmur, PT'
  },
  {
    id: 'BS-2026-013',
    noSurat: '112/BS-PNT/XII/2024',
    tanggal: '2024-12-05',
    jenis: 'Surat Keluar',
    indeksAbjad: 'U',
    pengirim: 'PT Bumi Stationery',
    penerima: 'Universitas Indonesia (Biro Logistik Kampus)',
    perihal: 'Penawaran Kerjasama Penyediaan Kertas Skripsi & Perlengkapan Wisuda',
    statusRetensi: 'Siap Musnah',
    tahun: '2024',
    kerahasiaan: 'Biasa / Terbuka',
    lokasiFisik: 'Gudang Inaktif Box 2024-08',
    isiDokumen: 'Surat penawaran harga penyediaan map ijazah beledu dan kertas sertifikat cetak emas untuk kebutuhan wisuda tahun akademik 2024/2025. Telah melampaui masa aktif 2 tahun.',
    unitFiling: 'Universitas Indonesia (Biro Logistik Kampus)'
  }
];

// Initial Documentation Media Items (Photos and Video Highlights)
const INITIAL_DOCUMENTATION = [
  {
    id: 'doc-01',
    judul: 'Pameran Stationery & Paper Expo Indonesia 2026',
    kategori: 'pameran',
    mediaType: 'foto',
    tanggal: '2026-03-24',
    lokasi: 'Jakarta International Expo (JIExpo) Kemayoran',
    deskripsi: 'Partisipasi PT Bumi Stationery memamerkan inovasi sistem filling map ordner ergonomis, kertas ramah lingkungan bersertifikasi eco-label, dan solusi kearsipan instansi.',
    thumbnail: 'pameran'
  },
  {
    id: 'doc-02',
    judul: 'CSR Peduli Pendidikan: Donasi 5.000 Paket Alat Tulis Sekolah',
    kategori: 'csr',
    mediaType: 'foto',
    tanggal: '2026-05-18',
    lokasi: 'Kecamatan Tenjo, Kabupaten Bogor, Jawa Barat',
    deskripsi: 'Program sosial tahunan PT Bumi Stationery membagikan paket buku tulis, pensil, tas, dan perlengkapan menggambar untuk siswa-siswi SD di 12 sekolah pelosok.',
    thumbnail: 'csr'
  },
  {
    id: 'doc-03',
    judul: 'Video Rekapitulasi: Pelatihan Kearsipan Digital Standar ANRI',
    kategori: 'pelatihan',
    mediaType: 'video',
    tanggal: '2026-06-15',
    lokasi: 'Auditorium PT Bumi Stationery, Melawai Jakarta Selatan',
    deskripsi: 'Dokumentasi video berdurasi 10 menit seputar workshop staf administrasi dalam implementasi abjad filing system terpadu dan sistem temu balik arsip cepat.',
    thumbnail: 'pelatihan'
  },
  {
    id: 'doc-04',
    judul: 'Peresmian Gudang Distribusi Kertas & ATK Sentul Seluas 4.000 m²',
    kategori: 'pameran',
    mediaType: 'foto',
    tanggal: '2026-08-10',
    lokasi: 'Kawasan Industri Sentul, Bogor',
    deskripsi: 'Upacara pemotongan tumpeng dan penandatanganan prasasti gudang logistik berteknologi barcoding otomatis guna mempercepat rantai pasok ke seluruh pulau Jawa.',
    thumbnail: 'gudang'
  },
  {
    id: 'doc-05',
    judul: 'Rapat Kerja Tahunan Direksi & Penilaian Kinerja Kearsipan',
    kategori: 'pelatihan',
    mediaType: 'foto',
    tanggal: '2026-01-20',
    lokasi: 'Hotel Melawai Grand Ballroom, Jakarta Selatan',
    deskripsi: 'Pemaparan roadmap digitalisasi arsip nol kertas (towards paperless archive) dan evaluasi keselamatan dokumen legal perusahaan.',
    thumbnail: 'rapat'
  },
  {
    id: 'doc-06',
    judul: 'Video Kunjungan Audit & Sertifikasi ISO Kearsipan Modern',
    kategori: 'pelatihan',
    mediaType: 'video',
    tanggal: '2026-09-12',
    lokasi: 'Pusat Kearsipan PT Bumi Stationery',
    deskripsi: 'Dokumentasi video pelaksanaan audit berkala standar ISO 9001 dan ISO 27001 untuk keamanan informasi berkas digital.',
    thumbnail: 'pelatihan'
  }
];

// Initial JRA (Jadwal Retensi Arsip) Rules
const INITIAL_RETENTION_RULES = [
  {
    id: 'JRA-01',
    seri: 'Surat Penawaran & Surat Pesanan (PO)',
    aktif: '2 Tahun',
    inaktif: '3 Tahun',
    nasib: 'Siap Musnah',
    regulasi: 'Pedoman Kearsipan Umum & Kepka ANRI No. 07/2001'
  },
  {
    id: 'JRA-02',
    seri: 'Faktur Tagihan, Bukti Kas, & Berkas Pajak',
    aktif: '5 Tahun',
    inaktif: '5 Tahun',
    nasib: 'Siap Musnah',
    regulasi: 'UU No. 8 Tahun 1997 tentang Dokumen Perusahaan (Pasal 11)'
  },
  {
    id: 'JRA-03',
    seri: 'Surat Perjanjian Kerja Sama (PKS) & Kontrak Distributor',
    aktif: '5 Tahun (Setelah Masa Berlaku Habis)',
    inaktif: '10 Tahun',
    nasib: 'Permanen',
    regulasi: 'Aspek Hukum Perikatan KUHPerdata & UU Kearsipan'
  },
  {
    id: 'JRA-04',
    seri: 'Surat Keputusan (SK) Direksi & Akta Perusahaan',
    aktif: '10 Tahun',
    inaktif: 'Permanen',
    nasib: 'Permanen',
    regulasi: 'UU No. 43 Tahun 2009 tentang Kearsipan'
  },
  {
    id: 'JRA-05',
    seri: 'Surat Perjalanan Tugas & Absensi Personalia',
    aktif: '1 Tahun',
    inaktif: '2 Tahun',
    nasib: 'Siap Musnah',
    regulasi: 'Peraturan Tata Tertib Internal PT Bumi Stationery'
  }
];

// Initial Anonymous Reviews
const INITIAL_REVIEWS = [
  {
    id: 'REV-8201',
    nama: 'Pengunjung Anonim #8201',
    rating: 5,
    aspek: 'Kecepatan & Kemudahan Akses Arsip',
    tanggal: '16 Oktober 2026',
    komentar: 'Sistem pencarian di buku agendanya sangat cepat! Filter abjadnya memudahkan melacak dokumen suplai kertas lama tanpa repot bongkar map fisik.'
  },
  {
    id: 'REV-7419',
    nama: 'Pengunjung Anonim #7419',
    rating: 5,
    aspek: 'Kelengkapan Template & Dokumen',
    tanggal: '12 Oktober 2026',
    komentar: 'Template suratnya sangat rapi dengan kop resmi PT Bumi Stationery. Sangat praktis langsung cetak atau simpan ke agenda digital.'
  },
  {
    id: 'REV-6102',
    nama: 'Pengunjung Anonim #6102',
    rating: 4.8,
    aspek: 'Keramahan & Respon Pelayanan CS',
    tanggal: '05 Oktober 2026',
    komentar: 'Keluhan permohonan salinan faktur kami langsung dijawab oleh tim kearsipan via email dalam waktu kurang dari 2 jam. Sangat responsif!'
  },
  {
    id: 'REV-5940',
    nama: 'Pengunjung Anonim #5940',
    rating: 5,
    aspek: 'Kualitas Produk Alat Tulis & Kertas',
    tanggal: '28 September 2026',
    komentar: 'PT Bumi Stationery selalu menjadi rekanan pengadaan ATK terpercaya kami selama 5 tahun terakhir. Kualitas kertas dan binder mapnya nomor satu.'
  }
];

// Initial CS Tickets Tracker
const INITIAL_TICKETS = [
  {
    id: 'TCK-2026-091',
    nama: 'Surya Wibowo',
    kategori: 'Permohonan Salinan Arsip Resmi',
    subjek: 'Permohonan Salinan Faktur Pengadaan Kertas April 2026',
    tanggal: '17 Oktober 2026, 14:20 WIB',
    status: 'Diproses'
  },
  {
    id: 'TCK-2026-088',
    nama: 'Ibu Rahmawati (CV Sinar Grafika)',
    kategori: 'Pengadaan Kertas & ATK Perusahaan',
    subjek: 'Konfirmasi Jadwal Kirim 500 Rim HVS A4',
    tanggal: '16 Oktober 2026, 09:45 WIB',
    status: 'Selesai'
  }
];

// --------------------------------------------------------------------------
// 2. STATE MANAGER (LocalStorage Persistence)
// --------------------------------------------------------------------------
class ArchiveStore {
  constructor() {
    this.letters = this.load(APP_STORAGE_KEY, INITIAL_LETTERS);
    this.reviews = this.load(APP_REVIEWS_KEY, INITIAL_REVIEWS);
    this.tickets = this.load(APP_TICKETS_KEY, INITIAL_TICKETS);
    this.user = this.load(APP_USER_KEY, { role: 'guest', username: 'Tamu Publik' });
    this.documentation = INITIAL_DOCUMENTATION;
    this.retentionRules = INITIAL_RETENTION_RULES;
    this.uploadQueue = [];
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn('Storage read failed:', e);
      return fallback;
    }
  }

  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Storage write error:', e);
    }
  }

  saveLetters() { this.save(APP_STORAGE_KEY, this.letters); }
  saveReviews() { this.save(APP_REVIEWS_KEY, this.reviews); }
  saveTickets() { this.save(APP_TICKETS_KEY, this.tickets); }
  saveUser() { this.save(APP_USER_KEY, this.user); }
}

const store = new ArchiveStore();

// --------------------------------------------------------------------------
// 3. UI TAB SWITCHING & ROUTING
// --------------------------------------------------------------------------
function switchTab(tabId) {
  // Update desktop nav links
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  // Update mobile drawer links
  document.querySelectorAll('.drawer-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  // Update mobile bottom nav items
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  // Toggle tab pane visibility
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });

  const targetPane = document.getElementById(`pane-${tabId}`);
  if (targetPane) {
    targetPane.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Specific tab render triggers
  if (tabId === 'agenda') {
    renderAgendaTable();
  } else if (tabId === 'statistik') {
    renderStatistics();
  } else if (tabId === 'abjad') {
    renderAbjadExplorer();
  } else if (tabId === 'dokumentasi') {
    renderDocumentation();
  } else if (tabId === 'retensi') {
    renderRetentionTables();
  } else if (tabId === 'ulasan') {
    renderReviews();
  } else if (tabId === 'template') {
    updateLiveLetterPreview();
  }
}

function toggleMobileMenu(forceState) {
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const isActive = forceState !== undefined ? forceState : !drawer.classList.contains('active');
  
  drawer.classList.toggle('active', isActive);
  overlay.classList.toggle('active', isActive);
}

// --------------------------------------------------------------------------
// 4. AUTHENTICATION & ACCESS CONTROL (Item #6 & #8)
// --------------------------------------------------------------------------
function updateAuthUI() {
  const role = store.user.role;
  const userPill = document.getElementById('userPill');
  const userRoleBadge = document.getElementById('userRoleBadge');
  const userActionText = document.getElementById('userActionText');
  const userAvatar = document.getElementById('userAvatar');
  const drawerRoleTitle = document.getElementById('drawerRoleTitle');
  const bottomNavRoleText = document.getElementById('bottomNavRoleText');
  const footerActiveRole = document.getElementById('footerActiveRole');
  const heroAuthBtnText = document.getElementById('heroAuthBtnText');
  const accessNoticeText = document.getElementById('accessNoticeText');

  if (role === 'admin') {
    userRoleBadge.textContent = 'Administrator';
    userRoleBadge.className = 'user-role-label text-terracotta';
    userActionText.textContent = 'Akses Penuh (Keluar)';
    userAvatar.innerHTML = '<i class="fa-solid fa-user-gear"></i>';
    userAvatar.style.color = 'var(--earth-terracotta)';
    if (drawerRoleTitle) drawerRoleTitle.textContent = 'Administrator (Aktif)';
    if (bottomNavRoleText) bottomNavRoleText.textContent = 'Admin';
    if (footerActiveRole) footerActiveRole.textContent = 'Administrator';
    if (heroAuthBtnText) heroAuthBtnText.textContent = 'Kelola Arsip (Admin)';
    if (accessNoticeText) {
      accessNoticeText.innerHTML = '<i class="fa-solid fa-shield-check text-success"></i> <strong>Mode Admin:</strong> Anda memiliki hak penuh untuk menambah, mengedit, menghapus, dan mencadangkan arsip.';
      accessNoticeText.className = 'access-notice-chip bg-sage-light text-sage';
    }
  } else if (role === 'user') {
    userRoleBadge.textContent = 'Staf Kearsipan';
    userRoleBadge.className = 'user-role-label text-sage';
    userActionText.textContent = 'Akses Lihat & Unduh (Keluar)';
    userAvatar.innerHTML = '<i class="fa-solid fa-user-check"></i>';
    userAvatar.style.color = 'var(--earth-sage)';
    if (drawerRoleTitle) drawerRoleTitle.textContent = 'Staf Kearsipan (Aktif)';
    if (bottomNavRoleText) bottomNavRoleText.textContent = 'Staf';
    if (footerActiveRole) footerActiveRole.textContent = 'Staf Kearsipan';
    if (heroAuthBtnText) heroAuthBtnText.textContent = 'Ruang Staf Kearsipan';
    if (accessNoticeText) {
      accessNoticeText.innerHTML = '<i class="fa-solid fa-check-double text-sage"></i> <strong>Mode Staf:</strong> Anda dapat melihat isi dokumen, mencetak surat, dan mengunduh berkas.';
      accessNoticeText.className = 'access-notice-chip bg-sand-light text-espresso';
    }
  } else {
    // Guest
    userRoleBadge.textContent = 'Pengunjung Tamu';
    userRoleBadge.className = 'user-role-label';
    userActionText.textContent = 'Klik untuk Login';
    userAvatar.innerHTML = '<i class="fa-solid fa-user-lock"></i>';
    userAvatar.style.color = 'var(--earth-taupe)';
    if (drawerRoleTitle) drawerRoleTitle.textContent = 'Pengunjung Tamu';
    if (bottomNavRoleText) bottomNavRoleText.textContent = 'Login';
    if (footerActiveRole) footerActiveRole.textContent = 'Pengunjung Tamu';
    if (heroAuthBtnText) heroAuthBtnText.textContent = 'Masuk Akun Pengelola';
    if (accessNoticeText) {
      accessNoticeText.innerHTML = '<i class="fa-solid fa-circle-info"></i> <strong>Mode Tamu:</strong> Anda melihat katalog publik. Klik "Pratinjau" surat untuk membuka gerbang login.';
      accessNoticeText.className = 'access-notice-chip';
    }
  }
}

function openAuthModal(triggeredByProtectedAction = false) {
  const modal = document.getElementById('authModal');
  const alertBox = document.getElementById('loginGateAlert');
  if (alertBox) {
    alertBox.style.display = triggeredByProtectedAction ? 'flex' : 'none';
  }
  modal.classList.remove('d-none');
}

function quickLoginRole(role) {
  if (role === 'admin') {
    store.user = { role: 'admin', username: 'Administrator Pusat' };
    showToast('Berhasil login sebagai Administrator!', 'success');
  } else if (role === 'user') {
    store.user = { role: 'user', username: 'Staf Kearsipan (Budi Utomo)' };
    showToast('Berhasil login sebagai Staf Kearsipan!', 'success');
  }
  store.saveUser();
  updateAuthUI();
  closeModal('authModal');
  renderAgendaTable();
  renderAbjadExplorer();
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const username = document.getElementById('authUsername').value.trim();
  const password = document.getElementById('authPassword').value.trim();
  const requestedRole = document.getElementById('authRoleSelect').value;

  if (requestedRole === 'admin' && username === 'admin' && password === 'admin123') {
    store.user = { role: 'admin', username: 'Administrator' };
    showToast('Selamat datang kembali, Administrator!', 'success');
  } else if (requestedRole === 'user' && (username === 'staf' || username === 'user') && (password === 'staf123' || password === 'user123')) {
    store.user = { role: 'user', username: 'Staf Kearsipan' };
    showToast('Login berhasil sebagai Staf Kearsipan!', 'success');
  } else {
    // Tolerant demo check
    if (username.length >= 3 && password.length >= 4) {
      store.user = { role: requestedRole, username: username };
      showToast(`Login berhasil sebagai ${requestedRole === 'admin' ? 'Administrator' : 'Staf'}!`, 'success');
    } else {
      showToast('Kredensial tidak valid. Gunakan admin/admin123 atau staf/staf123', 'error');
      return;
    }
  }

  store.saveUser();
  updateAuthUI();
  closeModal('authModal');
  renderAgendaTable();
  renderAbjadExplorer();
}

function logoutToGuest() {
  store.user = { role: 'guest', username: 'Pengunjung Tamu' };
  store.saveUser();
  updateAuthUI();
  closeModal('authModal');
  showToast('Anda telah keluar. Mode pengunjung aktif.', 'info');
  renderAgendaTable();
  renderAbjadExplorer();
}

// --------------------------------------------------------------------------
// 5. BUKU AGENDA SURAT MODULE (Item #1)
// --------------------------------------------------------------------------
function populateAbjadDropdowns() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const filterSelect = document.getElementById('filterAbjad');
  const formSelect = document.getElementById('formIndeksAbjad');

  if (filterSelect && filterSelect.options.length <= 1) {
    letters.forEach(char => {
      const opt = document.createElement('option');
      opt.value = char;
      opt.textContent = `Huruf [${char}]`;
      filterSelect.appendChild(opt);
    });
  }

  if (formSelect && formSelect.options.length === 0) {
    letters.forEach(char => {
      const opt = document.createElement('option');
      opt.value = char;
      opt.textContent = `[${char}] - Folder ${char}`;
      formSelect.appendChild(opt);
    });
  }
}

function renderAgendaTable() {
  const tbody = document.getElementById('agendaTableBody');
  const emptyState = document.getElementById('agendaEmptyState');
  const filteredCountEl = document.getElementById('agendaFilteredCount');
  const totalCountEl = document.getElementById('agendaTotalCount');
  const homeTotalLetters = document.getElementById('homeTotalLetters');
  const homeIncomingLetters = document.getElementById('homeIncomingLetters');
  const homeOutgoingLetters = document.getElementById('homeOutgoingLetters');

  if (!tbody) return;

  const searchKeyword = (document.getElementById('agendaSearchInput')?.value || '').toLowerCase().trim();
  const filterJenis = document.getElementById('filterJenis')?.value || 'semua';
  const filterAbjad = document.getElementById('filterAbjad')?.value || 'semua';
  const filterStatus = document.getElementById('filterStatus')?.value || 'semua';
  const filterTahun = document.getElementById('filterTahun')?.value || 'semua';

  let filtered = store.letters.filter(item => {
    // Search match
    const matchSearch = !searchKeyword ||
      item.noSurat.toLowerCase().includes(searchKeyword) ||
      item.pengirim.toLowerCase().includes(searchKeyword) ||
      item.penerima.toLowerCase().includes(searchKeyword) ||
      item.perihal.toLowerCase().includes(searchKeyword) ||
      item.unitFiling.toLowerCase().includes(searchKeyword);

    // Filter matches
    const matchJenis = filterJenis === 'semua' || item.jenis === filterJenis;
    const matchAbjad = filterAbjad === 'semua' || item.indeksAbjad === filterAbjad;
    const matchStatus = filterStatus === 'semua' || item.statusRetensi === filterStatus;
    const matchTahun = filterTahun === 'semua' || item.tahun === filterTahun;

    return matchSearch && matchJenis && matchAbjad && matchStatus && matchTahun;
  });

  // Update Counters
  if (filteredCountEl) filteredCountEl.textContent = filtered.length;
  if (totalCountEl) totalCountEl.textContent = store.letters.length;
  if (homeTotalLetters) homeTotalLetters.textContent = store.letters.length;
  
  const inCount = store.letters.filter(l => l.jenis === 'Surat Masuk').length;
  const outCount = store.letters.filter(l => l.jenis === 'Surat Keluar').length;
  if (homeIncomingLetters) homeIncomingLetters.textContent = inCount;
  if (homeOutgoingLetters) homeOutgoingLetters.textContent = outCount;

  tbody.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.classList.remove('d-none');
    return;
  }
  emptyState.classList.add('d-none');

  filtered.forEach((item, index) => {
    const tr = document.createElement('tr');

    // Retention Badge Class
    let retClass = 'badge-sand';
    if (item.statusRetensi === 'Aktif') retClass = 'badge-sage';
    else if (item.statusRetensi === 'Permanen') retClass = 'badge-terracotta';
    else if (item.statusRetensi === 'Siap Musnah') retClass = 'badge-accent';

    // Jenis Badge
    const isMasuk = item.jenis === 'Surat Masuk';
    const jenisBadge = `<span class="badge ${isMasuk ? 'badge-sage' : 'badge-terracotta'}">${item.jenis}</span>`;

    // Action buttons depending on role
    const isAdmin = store.user.role === 'admin';
    const isGuest = store.user.role === 'guest';

    let actionButtons = `
      <div class="table-action-btns">
        <button class="table-icon-btn" onclick="handleDocumentPreview('${item.id}')" title="Pratinjau Dokumen">
          <i class="fa-solid fa-eye"></i>
        </button>
        <button class="table-icon-btn" onclick="handleDownloadLetter('${item.id}')" title="Unduh Berkas">
          <i class="fa-solid fa-download"></i>
        </button>
        ${isAdmin ? `
          <button class="table-icon-btn" onclick="openEditLetterModal('${item.id}')" title="Edit Arsip">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="table-icon-btn btn-danger" onclick="deleteLetter('${item.id}')" title="Hapus Arsip">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        ` : ''}
      </div>
    `;

    tr.innerHTML = `
      <td style="font-weight: 600; color: var(--earth-taupe);">${index + 1}</td>
      <td><span class="filing-code-tag">[${item.indeksAbjad}] ${item.indeksAbjad}-0${(index % 9) + 1}</span></td>
      <td><strong>${item.noSurat}</strong></td>
      <td>${formatIndonesianDate(item.tanggal)}</td>
      <td>${jenisBadge}</td>
      <td>${item.pengirim}</td>
      <td>${item.penerima}</td>
      <td style="max-width: 240px; font-weight: 500;">${item.perihal}</td>
      <td><span class="badge ${retClass}">${item.statusRetensi}</span></td>
      <td style="text-align: center;">${actionButtons}</td>
    `;
    tbody.appendChild(tr);
  });
}

function handleAgendaSearch() {
  const clearBtn = document.getElementById('clearSearchBtn');
  const input = document.getElementById('agendaSearchInput');
  if (clearBtn && input) {
    clearBtn.style.display = input.value.trim().length > 0 ? 'block' : 'none';
  }
  renderAgendaTable();
}

function clearAgendaSearch() {
  const input = document.getElementById('agendaSearchInput');
  if (input) input.value = '';
  handleAgendaSearch();
}

function applyAgendaFilters() {
  renderAgendaTable();
}

function resetAgendaFilters() {
  const sInput = document.getElementById('agendaSearchInput');
  const fJenis = document.getElementById('filterJenis');
  const fAbjad = document.getElementById('filterAbjad');
  const fStatus = document.getElementById('filterStatus');
  const fTahun = document.getElementById('filterTahun');

  if (sInput) sInput.value = '';
  if (fJenis) fJenis.value = 'semua';
  if (fAbjad) fAbjad.value = 'semua';
  if (fStatus) fStatus.value = 'semua';
  if (fTahun) fTahun.value = 'semua';

  handleAgendaSearch();
}

// --------------------------------------------------------------------------
// 6. DOCUMENT PREVIEW IN BROWSER (Item #8 & #12)
// --------------------------------------------------------------------------
let currentPreviewDoc = null;

function handleDocumentPreview(docId) {
  const doc = store.letters.find(l => l.id === docId);
  if (!doc) return;

  // Requirement #8: Munculkan tulisan login ketika para pengunjung ingin melihat isi surat arsip
  if (store.user.role === 'guest') {
    openAuthModal(true); // Open modal with access restriction alert!
    return;
  }

  currentPreviewDoc = doc;
  renderDocumentPreviewModal(doc);
}

function renderDocumentPreviewModal(doc) {
  const modal = document.getElementById('docPreviewModal');
  const docPaper = document.getElementById('previewDocPaper');
  const modalTitle = document.getElementById('previewModalDocTitle');
  const modalMeta = document.getElementById('previewModalDocMeta');

  // Metadata sidebar elements
  document.getElementById('metaFilingCode').textContent = `[${doc.indeksAbjad}] ${doc.indeksAbjad}-01/BS`;
  document.getElementById('metaDocType').textContent = doc.jenis;
  document.getElementById('metaDocDate').textContent = formatIndonesianDate(doc.tanggal);
  document.getElementById('metaDocSender').textContent = doc.pengirim;
  document.getElementById('metaDocRecipient').textContent = doc.penerima;
  document.getElementById('metaDocSecurity').textContent = doc.kerahasiaan;
  document.getElementById('metaDocLocation').textContent = doc.lokasiFisik || 'Laci Berkas Standar';
  document.getElementById('metaDocRetention').textContent = doc.statusRetensi;
  document.getElementById('metaViewerRole').textContent = store.user.role === 'admin' ? 'Administrator' : 'Staf Kearsipan';

  if (modalTitle) modalTitle.textContent = doc.perihal;
  if (modalMeta) modalMeta.textContent = `${doc.noSurat} • Klasifikasi Abjad [${doc.indeksAbjad}]`;

  // Render paper view with authentic Kop Surat
  docPaper.innerHTML = `
    <div class="letter-paper-wrapper" style="margin: 0; min-height: 700px; width: 100%;">
      <!-- Official Kop Surat -->
      <div class="kop-surat">
        <div class="kop-logo-circle">
          <img src="logo.png" alt="Logo PT BUMI STATIONERY" style="width: 100%; height: 100%; object-fit: contain;">
        </div>
        <div class="kop-text-box">
          <h2 class="kop-company-name">PT BUMI STATIONERY</h2>
          <p class="kop-subline">PUSAT DOKUMENTASI DAN KEARSIPAN PERUSAHAAN</p>
          <p class="kop-address">
            Jl. Bahtera No. 114 Blok L, Semarang, Jawa Tengah, Indonesia<br>
            Telepon: (0553) 756685 | Website: www.bumistationery.co.id | Email: justforexampleyea@gmail.com
          </p>
        </div>
      </div>
      <div class="kop-divider-double"></div>

      <!-- Letter Header Metadata -->
      <div class="letter-meta-grid">
        <div class="meta-left">
          <p><strong>Nomor Surat</strong> : ${doc.noSurat}</p>
          <p><strong>Sifat</strong> : ${doc.kerahasiaan}</p>
          <p><strong>Perihal</strong> : <u>${doc.perihal}</u></p>
        </div>
        <div class="meta-right">
          <p>Semarang, ${formatIndonesianDate(doc.tanggal)}</p>
          <p><strong>Klasifikasi</strong> : [${doc.indeksAbjad}]</p>
        </div>
      </div>

      <!-- Recipient -->
      <div class="letter-recipient-box">
        <p>Kepada Yth.</p>
        <p><strong>${doc.penerima}</strong></p>
        <p>Di Tempat</p>
      </div>

      <!-- Letter Content -->
      <div class="letter-body-content">
        <p>${doc.isiDokumen || 'Isi teks dokumen ini terekam dalam database kearsipan digital terpusat PT BUMI STATIONERY dan telah diverifikasi keabsahannya sesuai naskah dinas resmi.'}</p>
        <p>Demikian surat ini kami sampaikan untuk menjadi perhatian dan dipergunakan sebagaimana mestinya sesuai ketentuan kearsipan yang berlaku.</p>
      </div>

      <!-- Signature Section -->
      <div class="letter-signature-area">
        <div class="sig-box">
          <p>PT BUMI STATIONERY</p>
          <div class="sig-space">
            <div class="digital-stamp">
              <i class="fa-solid fa-certificate"></i>
              <span>ARSIP RESMI TERVERIFIKASI<br>PT BUMI STATIONERY</span>
            </div>
          </div>
          <p class="sig-name"><strong><u>H. Bambang Hartono, S.E.</u></strong></p>
          <p class="sig-title">Direktur Utama</p>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('d-none');
}

function printModalDoc() {
  window.print();
}

function downloadCurrentPreviewDoc() {
  if (!currentPreviewDoc) return;
  handleDownloadLetter(currentPreviewDoc.id);
}

function handleDownloadLetter(docId) {
  const doc = store.letters.find(l => l.id === docId);
  if (!doc) return;

  if (store.user.role === 'guest') {
    openAuthModal(true);
    return;
  }

  // Generate downloadable text representation
  const content = `=====================================================
PT BUMI STATIONERY - ARSIP RESMI PERUSAHAAN
Jl. Bahtera No. 114 Blok L, Semarang, Jawa Tengah, Indonesia | Telp: (0553) 756685
=====================================================
Nomor Surat     : ${doc.noSurat}
Tanggal         : ${doc.tanggal}
Jenis           : ${doc.jenis}
Klasifikasi     : Abjad [${doc.indeksAbjad}]
Pengirim        : ${doc.pengirim}
Penerima        : ${doc.penerima}
Perihal         : ${doc.perihal}
Status Retensi  : ${doc.statusRetensi}
Lokasi Fisik    : ${doc.lokasiFisik}
-----------------------------------------------------
ISI DOKUMEN:
${doc.isiDokumen}
-----------------------------------------------------
Dicetak & Diunduh oleh: ${store.user.username} (${store.user.role})
Waktu Pengunduhan: ${new Date().toLocaleString('id-ID')}
Integritas Berkas Terjamin Sistem Kearsipan PT Bumi Stationery.
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Arsip_${doc.indeksAbjad}_${doc.noSurat.replace(/[\/\\]/g, '-')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(`Dokumen ${doc.noSurat} berhasil diunduh!`, 'success');
}

// --------------------------------------------------------------------------
// 7. ADD / EDIT / DELETE LETTERS (Admin Actions)
// --------------------------------------------------------------------------
function openAddLetterModal() {
  if (store.user.role === 'guest') {
    openAuthModal(true);
    return;
  }

  document.getElementById('letterModalTitle').textContent = 'Tambah Arsip Surat Baru';
  document.getElementById('letterEditId').value = '';
  document.getElementById('letterEntryForm').reset();
  document.getElementById('formTanggalSurat').value = new Date().toISOString().split('T')[0];

  populateAbjadDropdowns();
  document.getElementById('letterModal').classList.remove('d-none');
}

function openEditLetterModal(docId) {
  if (store.user.role !== 'admin') {
    showToast('Hanya Administrator yang memiliki akses mengubah dokumen!', 'error');
    return;
  }

  const doc = store.letters.find(l => l.id === docId);
  if (!doc) return;

  populateAbjadDropdowns();
  document.getElementById('letterModalTitle').textContent = 'Edit Data Arsip Surat';
  document.getElementById('letterEditId').value = doc.id;
  document.getElementById('formNomorSurat').value = doc.noSurat;
  document.getElementById('formTanggalSurat').value = doc.tanggal;
  document.getElementById('formJenisSurat').value = doc.jenis;
  document.getElementById('formIndeksAbjad').value = doc.indeksAbjad;
  document.getElementById('formPengirim').value = doc.pengirim;
  document.getElementById('formPenerima').value = doc.penerima;
  document.getElementById('formPerihal').value = doc.perihal;
  document.getElementById('formStatusRetensi').value = doc.statusRetensi;
  document.getElementById('formKerahasiaan').value = doc.kerahasiaan;
  document.getElementById('formLokasiFisik').value = doc.lokasiFisik || '';
  document.getElementById('formIsiDokumen').value = doc.isiDokumen || '';

  document.getElementById('letterModal').classList.remove('d-none');
}

function handleLetterFormSubmit(event) {
  event.preventDefault();

  const editId = document.getElementById('letterEditId').value;
  const noSurat = document.getElementById('formNomorSurat').value.trim();
  const tanggal = document.getElementById('formTanggalSurat').value;
  const jenis = document.getElementById('formJenisSurat').value;
  const indeksAbjad = document.getElementById('formIndeksAbjad').value;
  const pengirim = document.getElementById('formPengirim').value.trim();
  const penerima = document.getElementById('formPenerima').value.trim();
  const perihal = document.getElementById('formPerihal').value.trim();
  const statusRetensi = document.getElementById('formStatusRetensi').value;
  const kerahasiaan = document.getElementById('formKerahasiaan').value;
  const lokasiFisik = document.getElementById('formLokasiFisik').value.trim();
  const isiDokumen = document.getElementById('formIsiDokumen').value.trim();

  const tahun = tanggal ? tanggal.split('-')[0] : '2026';

  if (editId) {
    // Update existing
    const index = store.letters.findIndex(l => l.id === editId);
    if (index !== -1) {
      store.letters[index] = {
        ...store.letters[index],
        noSurat, tanggal, jenis, indeksAbjad, pengirim, penerima,
        perihal, statusRetensi, kerahasiaan, lokasiFisik, isiDokumen, tahun
      };
      showToast('Data arsip berhasil diperbarui!', 'success');
    }
  } else {
    // Add new
    const newId = `BS-${tahun}-${String(store.letters.length + 1).padStart(3, '0')}`;
    const newDoc = {
      id: newId,
      noSurat,
      tanggal,
      jenis,
      indeksAbjad,
      pengirim,
      penerima,
      perihal,
      statusRetensi,
      tahun,
      kerahasiaan,
      lokasiFisik: lokasiFisik || `Laci ${indeksAbjad}-01`,
      isiDokumen: isiDokumen || `Surat resmi terdaftar mengenai ${perihal}.`,
      unitFiling: pengirim
    };
    store.letters.unshift(newDoc);
    showToast('Arsip surat baru berhasil didaftarkan!', 'success');
  }

  store.saveLetters();
  closeModal('letterModal');
  renderAgendaTable();
  renderAbjadExplorer();
}

function deleteLetter(docId) {
  if (store.user.role !== 'admin') {
    showToast('Akses ditolak: Hanya Administrator yang boleh menghapus arsip!', 'error');
    return;
  }

  const doc = store.letters.find(l => l.id === docId);
  if (!doc) return;

  if (confirm(`Apakah Anda yakin ingin menghapus arsip surat nomor: ${doc.noSurat} (${doc.perihal})? Tindakan ini akan dicatat dalam audit trail.`)) {
    store.letters = store.letters.filter(l => l.id !== docId);
    store.saveLetters();
    showToast(`Arsip surat ${doc.noSurat} berhasil dihapus.`, 'info');
    renderAgendaTable();
    renderAbjadExplorer();
  }
}

// --------------------------------------------------------------------------
// 8. ABJAD FILING SYSTEM (Item #5 & #12)
// --------------------------------------------------------------------------
let activeAbjadFilterLetter = 'semua';

function renderAbjadExplorer() {
  renderAlphabetBar();
  renderAbjadFoldersTree();
  renderAbjadFiles();
}

function renderAlphabetBar() {
  const container = document.getElementById('alphabetNavBar');
  if (!container) return;

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let html = `
    <button class="alphabet-letter-btn ${activeAbjadFilterLetter === 'semua' ? 'active' : ''}" onclick="selectAbjadFilter('semua')">
      SEMUA
    </button>
  `;

  alphabet.forEach(letter => {
    const hasFiles = store.letters.some(l => l.indeksAbjad === letter);
    const count = store.letters.filter(l => l.indeksAbjad === letter).length;
    html += `
      <button class="alphabet-letter-btn ${activeAbjadFilterLetter === letter ? 'active' : ''}" 
              onclick="selectAbjadFilter('${letter}')"
              title="Huruf [${letter}]: ${count} berkas arsip">
        ${letter}
      </button>
    `;
  });

  container.innerHTML = html;
}

function selectAbjadFilter(letter) {
  activeAbjadFilterLetter = letter;
  renderAlphabetBar();
  renderAbjadFoldersTree();
  renderAbjadFiles();
}

function renderAbjadFoldersTree() {
  const container = document.getElementById('abjadTreeContainer');
  const badge = document.getElementById('activeGuideBadge');
  if (!container) return;

  if (badge) badge.textContent = activeAbjadFilterLetter === 'semua' ? 'Semua Guide A-Z' : `Guide Huruf [${activeAbjadFilterLetter}]`;

  // Get distinct letters present or active
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const targetLetters = activeAbjadFilterLetter === 'semua' ? alphabet : [activeAbjadFilterLetter];

  let html = '';
  targetLetters.forEach(letter => {
    const lettersInThisGuide = store.letters.filter(l => l.indeksAbjad === letter);
    if (lettersInThisGuide.length > 0 || activeAbjadFilterLetter === letter) {
      // Guide Primer
      html += `
        <div class="folder-tree-item">
          <button class="folder-item-btn ${activeAbjadFilterLetter === letter ? 'active' : ''}" onclick="selectAbjadFilter('${letter}')">
            <div class="folder-label-group">
              <i class="fa-solid fa-folder-closed"></i>
              <span><strong>Guide Primer [${letter}]</strong></span>
            </div>
            <span class="badge badge-sand text-xs">${lettersInThisGuide.length} Berkas</span>
          </button>
        </div>
      `;
    }
  });

  if (!html) {
    html = `<p class="text-sm text-muted p-2">Belum ada folder berkas di huruf ini.</p>`;
  }

  container.innerHTML = html;
}

function renderAbjadFiles() {
  const grid = document.getElementById('abjadFilesGrid');
  const title = document.getElementById('abjadCurrentFolderTitle');
  const subtitle = document.getElementById('abjadCurrentFolderSubtitle');
  const countBadge = document.getElementById('abjadFolderCountBadge');

  if (!grid) return;

  const filtered = activeAbjadFilterLetter === 'semua'
    ? store.letters
    : store.letters.filter(l => l.indeksAbjad === activeAbjadFilterLetter);

  if (title) title.innerHTML = `<i class="fa-solid fa-folder-open text-terracotta"></i> Berkas Arsip: Abjad [${activeAbjadFilterLetter === 'semua' ? 'Semua A-Z' : activeAbjadFilterLetter}]`;
  if (subtitle) subtitle.textContent = `Menampilkan ${filtered.length} arsip terindeks menurut nama koresponden`;
  if (countBadge) countBadge.textContent = `${filtered.length} Berkas`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state w-100" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-folder-open empty-icon"></i>
        <h3>Folder Abjad [${activeAbjadFilterLetter}] Kosong</h3>
        <p>Belum ada surat yang didaftarkan pada huruf ini.</p>
        <button class="btn btn-sm btn-terracotta mt-2" onclick="openAddLetterModal()">
          <i class="fa-solid fa-plus"></i> Tambah Berkas ke Abjad ${activeAbjadFilterLetter}
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="abjad-file-card" onclick="handleDocumentPreview('${item.id}')">
      <div class="card-abjad-badge">
        <span class="filing-code-tag">[${item.indeksAbjad}] ${item.indeksAbjad}-01</span>
        <span class="badge ${item.jenis === 'Surat Masuk' ? 'badge-sage' : 'badge-terracotta'} text-xs">${item.jenis}</span>
      </div>
      <h4 class="abjad-card-title">${item.perihal}</h4>
      <p class="abjad-card-correspondent">
        <i class="fa-solid fa-building"></i> ${item.unitFiling || item.pengirim}
      </p>
      <div class="abjad-card-footer">
        <span><i class="fa-regular fa-calendar"></i> ${item.tanggal}</span>
        <span><i class="fa-solid fa-box-archive"></i> ${item.lokasiFisik || 'Laci Arsip'}</span>
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// 9. CATATAN SURAT MASUK & KELUAR (STATISTIK) (Item #2)
// --------------------------------------------------------------------------
function renderStatistics() {
  const inLetters = store.letters.filter(l => l.jenis === 'Surat Masuk');
  const outLetters = store.letters.filter(l => l.jenis === 'Surat Keluar');

  document.getElementById('statIncomingTotal').textContent = inLetters.length;
  document.getElementById('statOutgoingTotal').textContent = outLetters.length;

  const ratio = outLetters.length > 0 ? (inLetters.length / outLetters.length).toFixed(2) : '1.0';
  document.getElementById('statRatio').textContent = `${ratio} : 1`;

  renderMonthlyCanvasChart();
  renderCategoryBreakdown();
  renderMonthlyRecapTable();
}

function renderMonthlyCanvasChart() {
  const canvas = document.getElementById('monthlyTrafficChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Monthly data Jan - Oct 2026
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt'];
  const dataMasuk = [6, 8, 9, 7, 11, 8, 10, 9, 12, 14];
  const dataKeluar = [4, 5, 6, 5, 8, 7, 6, 8, 9, 11];

  // Set canvas resolution
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  const paddingLeft = 45;
  const paddingBottom = 40;
  const paddingTop = 25;
  const paddingRight = 20;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;
  const maxVal = 18;

  // Draw grid lines
  ctx.strokeStyle = '#E5DDD0';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#786C60';
  ctx.font = '11px Plus Jakarta Sans, sans-serif';

  for (let i = 0; i <= 4; i++) {
    const yVal = Math.round((maxVal / 4) * i);
    const y = height - paddingBottom - (chartHeight / 4) * i;
    ctx.beginPath();
    ctx.moveTo(paddingLeft, y);
    ctx.lineTo(width - paddingRight, y);
    ctx.stroke();

    ctx.fillText(yVal.toString(), 15, y + 4);
  }

  // Draw Bars
  const barGroupWidth = chartWidth / months.length;
  const barWidth = 14;

  months.forEach((month, idx) => {
    const groupX = paddingLeft + idx * barGroupWidth;

    // Month label
    ctx.fillStyle = '#443B33';
    ctx.font = '12px Plus Jakarta Sans, sans-serif';
    ctx.fillText(month, groupX + (barGroupWidth / 2) - 10, height - 15);

    // Bar Surat Masuk (Sage Green)
    const valMasuk = dataMasuk[idx];
    const barHeightMasuk = (valMasuk / maxVal) * chartHeight;
    const barXMasuk = groupX + (barGroupWidth / 2) - barWidth - 2;
    const barYMasuk = height - paddingBottom - barHeightMasuk;

    ctx.fillStyle = '#45624E'; // Sage
    ctx.beginPath();
    ctx.roundRect(barXMasuk, barYMasuk, barWidth, barHeightMasuk, [4, 4, 0, 0]);
    ctx.fill();

    // Bar Surat Keluar (Terracotta)
    const valKeluar = dataKeluar[idx];
    const barHeightKeluar = (valKeluar / maxVal) * chartHeight;
    const barXKeluar = groupX + (barGroupWidth / 2) + 2;
    const barYKeluar = height - paddingBottom - barHeightKeluar;

    ctx.fillStyle = '#9C4A2F'; // Terracotta
    ctx.beginPath();
    ctx.roundRect(barXKeluar, barYKeluar, barWidth, barHeightKeluar, [4, 4, 0, 0]);
    ctx.fill();
  });
}

function renderCategoryBreakdown() {
  const container = document.getElementById('categoryBarsList');
  if (!container) return;

  const categories = [
    { label: 'Surat Masuk (Korespondensi Umum)', count: 86, color: '#45624E', total: 148 },
    { label: 'Surat Keluar (Penawaran & PO)', count: 62, color: '#9C4A2F', total: 148 },
    { label: 'Perjanjian Kerjasama (PKS)', count: 18, color: '#C47C2B', total: 148 },
    { label: 'Surat Keputusan (SK Direksi)', count: 12, color: '#2A221C', total: 148 },
    { label: 'Dokumen Pajak & Keuangan', count: 24, color: '#3E7352', total: 148 }
  ];

  container.innerHTML = categories.map(cat => {
    const pct = Math.round((cat.count / cat.total) * 100);
    return `
      <div class="cat-bar-row">
        <div class="cat-bar-labels">
          <span>${cat.label}</span>
          <span><strong>${cat.count}</strong> (${pct}%)</span>
        </div>
        <div class="cat-track">
          <div class="cat-fill" style="width: ${pct}%; background-color: ${cat.color};"></div>
        </div>
      </div>
    `;
  }).join('');
}

function renderMonthlyRecapTable() {
  const tbody = document.getElementById('rekapTableBody');
  if (!tbody) return;

  const recapData = [
    { bulan: 'Oktober 2026', masuk: 14, keluar: 11, total: 25, ket: 'Tingginya permintaan kertas ujian akhir semester' },
    { bulan: 'September 2026', masuk: 12, keluar: 9, total: 21, ket: 'Audit kearsipan internal dan stock opname' },
    { bulan: 'Agustus 2026', masuk: 9, keluar: 8, total: 17, ket: 'Peresmian gudang distribusi Sentul' },
    { bulan: 'Juli 2026', masuk: 10, keluar: 6, total: 16, ket: 'Tahun ajaran baru dan pesanan ATK sekolah' },
    { bulan: 'Juni 2026', masuk: 8, keluar: 7, total: 15, ket: 'Laporan pajak tahunan dan PKS distributor' },
    { bulan: 'Mei 2026', masuk: 11, keluar: 8, total: 19, ket: 'Program CSR donasi perlengkapan sekolah' }
  ];

  tbody.innerHTML = recapData.map(row => {
    const pctMasuk = Math.round((row.masuk / row.total) * 100);
    return `
      <tr>
        <td><strong>${row.bulan}</strong></td>
        <td><span class="badge badge-sage">${row.masuk} Surat</span></td>
        <td><span class="badge badge-terracotta">${row.keluar} Surat</span></td>
        <td><strong>${row.total} Berkas</strong></td>
        <td>${pctMasuk}%</td>
        <td class="text-sm text-muted">${row.ket}</td>
      </tr>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 10. TEMPLATE SURAT DIGITAL RESMI (Item #3)
// --------------------------------------------------------------------------
const LETTER_PRESETS = {
  penawaran: {
    nomor: '089/BS-PNT/X/2026',
    lampiran: '1 (Satu) Berkas Katalog & Daftar Harga Produk',
    perihal: 'Penawaran Pengadaan Kertas HVS & ATK Kantor',
    tujuanNama: 'Yth. Manajer Pengadaan & Logistik',
    tujuanInstansi: 'PT Graha Mandiri Nusantara',
    tujuanAlamat: 'Jl. Sudirman Kav. 28, Jakarta Pusat',
    isi: 'Dengan hormat,\n\nSehubungan dengan kebutuhan perlengkapan administrasi dan percetakan di perusahaan Bapak/Ibu, bersama ini PT BUMI STATIONERY bermaksud mengajukan penawaran harga khusus untuk produk kertas fotokopi HVS 75/80gsm, binder ordner, map kearsipan, dan aneka perlengkapan alat tulis kantor berkualitas prima.\n\nKami menjamin ketersediaan stok tepat waktu, mutu kertas standar ISO 9001, serta layanan pengiriman bebas biaya kirim untuk area Jabodetabek. Daftar harga dan spesifikasi teknis lengkap telah kami lampirkan bersama surat ini.\n\nBesar harapan kami agar penawaran ini dapat ditindaklanjuti dalam bentuk kerjasama yang saling menguntungkan. Atas perhatian dan kerjasamanya, kami sampaikan terima kasih.'
  },
  pesanan: {
    nomor: '104/BS-PO/X/2026',
    lampiran: '1 (Satu) Lembar Purchase Order (PO-2026-104)',
    perihal: 'Surat Pesanan 3.000 Rim Kertas Continuous Form & Map Bantex',
    tujuanNama: 'Yth. Pimpinan Bagian Penjualan',
    tujuanInstansi: 'PT Indah Kiat Pulp & Paper Tbk',
    tujuanAlamat: 'Jl. M.H. Thamrin No. 51, Jakarta Pusat',
    isi: 'Dengan hormat,\n\nMenindaklanjuti surat penawaran harga nomor 220/IKPP/IX/2026 tanggal 28 September 2026, dengan ini PT BUMI STATIONERY menerbitkan pesanan resmi atas produk berikut:\n\n1. Kertas Continuous Form 3 Ply NCR : 1.500 Box\n2. Map Bantex Ordner Folio 7cm : 1.500 Pcs\n\nBarang tersebut mohon dapat dikirimkan paling lambat hari Selasa, 27 Oktober 2026 ke alamat Gudang Logistik PT Bumi Stationery di Sentul. Pembayaran akan diselesaikan sesuai syarat tempo 30 hari kalender.'
  },
  perjanjian: {
    nomor: '018/BS-PKS/X/2026',
    lampiran: '2 (Dua) Rangkap Naskah Perjanjian Asli Bermeterai',
    perihal: 'Penyampaian Naskah Perjanjian Kemitraan Toko Buku',
    tujuanNama: 'Yth. Direktur Operasional',
    tujuanInstansi: 'CV Mitra Buku Cerdas',
    tujuanAlamat: 'Jl. Pemuda No. 12, Rawamangun, Jakarta Timur',
    isi: 'Dengan hormat,\n\nMerujuk pada kesepakatan kerjasama keagenan perlengkapan alat tulis dan produk kearsipan PT Bumi Stationery, bersama ini kami sampaikan 2 (dua) eksemplar naskah Perjanjian Kerja Sama (PKS) yang telah ditandatangani oleh Direksi kami di atas meterai cukup.\n\nMohon salah satu naskah asli yang telah ditandatangani oleh pihak CV Mitra Buku Cerdas dapat dikirimkan kembali kepada Bagian Arsip & Legal PT Bumi Stationery untuk disimpan sebagai arsip permanen perusahaan.'
  },
  undangan: {
    nomor: '055/BS-UND/X/2026',
    lampiran: '1 (Satu) Lembar Rundown Acara',
    perihal: 'Undangan Rapat Evaluasi Kinerja Kearsipan & Tata Kelola Dokumen',
    tujuanNama: 'Yth. Seluruh Kepala Departemen & Staf Arsip',
    tujuanInstansi: 'PT Bumi Stationery (Internal)',
    tujuanAlamat: 'Gedung Bumi Stationery Lt. 2, Ruang Rapat Melawai',
    isi: 'Dengan hormat,\n\nDalam rangka meningkatkan akuntabilitas, standarisasi penataan berkas abjad filing system, dan persiapan audit kearsipan akhir tahun 2026, kami mengundang Bapak/Ibu untuk hadir dalam rapat koordinasi yang akan diselenggarakan pada:\n\nHari / Tanggal : Kamis, 29 Oktober 2026\nWaktu          : Pukul 09.00 - 12.00 WIB\nTempat         : Ruang Rapat Melawai Lt. 2, Gedung PT Bumi Stationery\nAgenda         : Evaluasi Jadwal Retensi Arsip & Pemindahan Berkas Inaktif\n\nMengingat pentingnya agenda ini, dimohon kehadiran tepat waktu.'
  },
  tugas: {
    nomor: '072/BS-SPT/X/2026',
    lampiran: '-',
    perihal: 'Surat Perintah Tugas Verifikasi & Stock Opname Kertas',
    tujuanNama: 'Yth. Tim Verifikasi Kearsipan & Persediaan',
    tujuanInstansi: 'PT Bumi Stationery',
    tujuanAlamat: 'Gudang Pusat Sentul & Kantor Cabang Melawai',
    isi: 'Yang bertanda tangan di bawah ini Direktur Utama PT BUMI STATIONERY dengan ini menugaskan kepada:\n\n1. Sdr. Budi Santoso (Koordinator Verifikasi)\n2. Sdri. Siti Nurhaliza (Staf Kearsipan Dokumen)\n\nUntuk melaksanakan tugas verifikasi fisik dokumen kearsipan, pencocokan buku agenda surat keluar, serta sensus persediaan kertas HVS pada tanggal 23 s/d 25 Oktober 2026. Laporan hasil audit wajib diserahkan kepada Direksi paling lambat 3 hari setelah penugasan selesai.'
  },
  keterangan: {
    nomor: '115/BS-KET/X/2026',
    lampiran: '-',
    perihal: 'Surat Keterangan Karyawan Aktif & Pengelola Arsip',
    tujuanNama: 'Yth. Pihak Yang Berkepentingan',
    tujuanInstansi: 'Instansi Terkait',
    tujuanAlamat: 'Di Tempat',
    isi: 'Yang bertanda tangan di bawah ini menerangkan bahwa:\n\nNama        : Ahmad Fauzan, A.Md.Ars.\nNIK         : BS-2022-094\nJabatan     : Staf Pengelola Kearsipan & Administrasi Dokumen\nAlamat      : Jl. Fatmawati Raya No. 18, Jakarta Selatan\n\nAdalah benar saat ini berstatus sebagai karyawan tetap di PT BUMI STATIONERY terhitung sejak 1 Maret 2022 sampai saat ini dengan kinerja dan dedikasi yang sangat baik.\n\nSurat keterangan ini diberikan atas permintaan yang bersangkutan untuk keperluan verifikasi sertifikasi kompetensi kearsipan ANRI.'
  }
};

function loadTemplatePreset(type) {
  const preset = LETTER_PRESETS[type];
  if (!preset) return;

  // Update preset buttons active state
  document.querySelectorAll('.btn-preset').forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');

  document.getElementById('tplNomorSurat').value = preset.nomor;
  document.getElementById('tplLampiran').value = preset.lampiran;
  document.getElementById('tplPerihal').value = preset.perihal;
  document.getElementById('tplTujuanNama').value = preset.tujuanNama;
  document.getElementById('tplTujuanInstansi').value = preset.tujuanInstansi;
  document.getElementById('tplTujuanAlamat').value = preset.tujuanAlamat;
  document.getElementById('tplIsiSurat').value = preset.isi;

  updateLiveLetterPreview();
}

function updateLiveLetterPreview() {
  const nomor = document.getElementById('tplNomorSurat')?.value || '089/BS-PNT/X/2026';
  const lampiran = document.getElementById('tplLampiran')?.value || '-';
  const perihal = document.getElementById('tplPerihal')?.value || 'Surat Resmi';
  const tujuanNama = document.getElementById('tplTujuanNama')?.value || 'Yth. Pimpinan';
  const tujuanInstansi = document.getElementById('tplTujuanInstansi')?.value || 'Instansi Terkait';
  const tujuanAlamat = document.getElementById('tplTujuanAlamat')?.value || 'Di Tempat';
  const isi = document.getElementById('tplIsiSurat')?.value || '';
  const namaTtd = document.getElementById('tplPenandatanganNama')?.value || 'H. Bambang Hartono, S.E.';
  const jabatanTtd = document.getElementById('tplPenandatanganJabatan')?.value || 'Direktur Utama PT Bumi Stationery';

  document.getElementById('prevNomor').textContent = nomor;
  document.getElementById('prevLampiran').textContent = lampiran;
  document.getElementById('prevPerihal').textContent = perihal;
  document.getElementById('prevTujuanNama').textContent = tujuanNama;
  document.getElementById('prevTujuanInstansi').textContent = tujuanInstansi;
  document.getElementById('prevTujuanAlamat').textContent = tujuanAlamat;
  document.getElementById('prevPenandatanganNama').textContent = namaTtd;
  document.getElementById('prevPenandatanganJabatan').textContent = jabatanTtd;

  const prevIsi = document.getElementById('prevIsiSurat');
  if (prevIsi) {
    const paragraphs = isi.split('\n\n').filter(p => p.trim().length > 0);
    prevIsi.innerHTML = paragraphs.map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
  }
}

function printLetterPreview() {
  window.print();
}

function copyLetterText() {
  const paper = document.getElementById('printableLetterPaper');
  if (!paper) return;

  const text = paper.innerText;
  navigator.clipboard.writeText(text).then(() => {
    showToast('Teks surat berhasil disalin ke clipboard!', 'success');
  }).catch(() => {
    showToast('Gagal menyalin teks.', 'error');
  });
}

function saveTemplateToAgenda() {
  if (store.user.role === 'guest') {
    openAuthModal(true);
    return;
  }

  const noSurat = document.getElementById('tplNomorSurat').value.trim();
  const perihal = document.getElementById('tplPerihal').value.trim();
  const penerima = `${document.getElementById('tplTujuanNama').value.trim()} - ${document.getElementById('tplTujuanInstansi').value.trim()}`;
  const isi = document.getElementById('tplIsiSurat').value.trim();

  // Determine alphabetical classification based on recipient company
  const firstLetter = (document.getElementById('tplTujuanInstansi').value.trim()[0] || 'B').toUpperCase();

  const newDoc = {
    id: `BS-2026-${String(store.letters.length + 1).padStart(3, '0')}`,
    noSurat,
    tanggal: new Date().toISOString().split('T')[0],
    jenis: 'Surat Keluar',
    indeksAbjad: firstLetter,
    pengirim: 'PT BUMI STATIONERY',
    penerima,
    perihal,
    statusRetensi: 'Aktif',
    tahun: '2026',
    kerahasiaan: 'Biasa / Terbuka',
    lokasiFisik: `Laci ${firstLetter}-01 / Template Output`,
    isiDokumen: isi,
    unitFiling: document.getElementById('tplTujuanInstansi').value.trim()
  };

  store.letters.unshift(newDoc);
  store.saveLetters();
  showToast(`Surat ${noSurat} berhasil diarsipkan ke Buku Agenda & Folder Abjad [${firstLetter}]!`, 'success');
  switchTab('agenda');
}

function resetLetterForm() {
  loadTemplatePreset('penawaran');
  showToast('Form surat direset ke template default.', 'info');
}

// --------------------------------------------------------------------------
// 11. DOKUMENTASI KEGIATAN PERUSAHAAN (Item #4)
// --------------------------------------------------------------------------
let activeDocCategory = 'semua';

function filterDocumentation(category) {
  activeDocCategory = category;
  document.querySelectorAll('.doc-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === category);
  });
  renderDocumentation();
}

function renderDocumentation() {
  const grid = document.getElementById('docGalleryGrid');
  if (!grid) return;

  const filtered = activeDocCategory === 'semua'
    ? store.documentation
    : store.documentation.filter(d => d.kategori === activeDocCategory || d.mediaType === activeDocCategory);

  grid.innerHTML = filtered.map(item => {
    // Generate beautiful SVG/Canvas thumbnail illustration
    const thumbSvg = getMediaIllustration(item.thumbnail);
    const isVideo = item.mediaType === 'video';

    return `
      <div class="doc-item-card" onclick="openLightboxModal('${item.id}')">
        <div class="doc-media-thumbnail">
          ${thumbSvg}
          <span class="doc-type-badge">
            <i class="fa-solid ${isVideo ? 'fa-video' : 'fa-camera'}"></i> ${isVideo ? 'Video Arsip' : 'Foto'}
          </span>
          ${isVideo ? `
            <div class="video-play-overlay">
              <div class="play-circle"><i class="fa-solid fa-play"></i></div>
            </div>
          ` : ''}
        </div>
        <div class="doc-card-body">
          <span class="doc-date-meta"><i class="fa-regular fa-calendar"></i> ${formatIndonesianDate(item.tanggal)} • ${item.lokasi}</span>
          <h4 class="doc-title">${item.judul}</h4>
          <p class="doc-excerpt">${item.deskripsi}</p>
          <div class="mt-auto">
            <span class="btn btn-xs btn-outline-terracotta">
              <i class="fa-solid fa-magnifying-glass-plus"></i> Buka Detail
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getMediaIllustration(type) {
  // Rich inline SVG illustrations for responsive, crisp loading
  switch (type) {
    case 'pameran':
      return `<svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="background:#EFE6DB;">
        <rect width="400" height="240" fill="#E8DFD1"/>
        <path d="M40 200L200 80L360 200H40Z" fill="#9C4A2F" opacity="0.3"/>
        <rect x="80" y="110" width="100" height="90" fill="#45624E" rx="8"/>
        <rect x="220" y="90" width="120" height="110" fill="#C47C2B" rx="8"/>
        <circle cx="200" cy="60" r="30" fill="#853D25" opacity="0.8"/>
        <text x="200" y="225" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" fill="#443B33" text-anchor="middle">STATIONERY & PAPER EXPO</text>
      </svg>`;
    case 'csr':
      return `<svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="background:#EBF2ED;">
        <rect width="400" height="240" fill="#E2EBE5"/>
        <circle cx="200" cy="100" r="50" fill="#45624E" opacity="0.4"/>
        <path d="M160 130 C160 80, 240 80, 240 130 Z" fill="#9C4A2F"/>
        <rect x="130" y="140" width="140" height="70" fill="#C47C2B" rx="10"/>
        <text x="200" y="225" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" fill="#32493A" text-anchor="middle">CSR PEDULI PENDIDIKAN</text>
      </svg>`;
    case 'pelatihan':
      return `<svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="background:#F4EDE2;">
        <rect width="400" height="240" fill="#EFE5D7"/>
        <rect x="90" y="60" width="220" height="130" fill="#FFFFFF" rx="6" stroke="#D4C8B8" stroke-width="2"/>
        <line x1="120" y1="90" x2="280" y2="90" stroke="#9C4A2F" stroke-width="6" stroke-linecap="round"/>
        <line x1="120" y1="120" x2="250" y2="120" stroke="#45624E" stroke-width="4" stroke-linecap="round"/>
        <line x1="120" y1="145" x2="220" y2="145" stroke="#C47C2B" stroke-width="4" stroke-linecap="round"/>
        <text x="200" y="225" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" fill="#443B33" text-anchor="middle">WORKSHOP KEARSIPAN ANRI</text>
      </svg>`;
    case 'gudang':
      return `<svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="background:#EBE3D7;">
        <rect width="400" height="240" fill="#E4DBCF"/>
        <path d="M50 180 L200 70 L350 180 Z" fill="#9C4A2F" opacity="0.6"/>
        <rect x="110" y="140" width="180" height="70" fill="#443B33" rx="4"/>
        <rect x="170" y="160" width="60" height="50" fill="#EBE3D7"/>
        <text x="200" y="225" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" fill="#443B33" text-anchor="middle">GUDANG LOGISTIK SENTUL</text>
      </svg>`;
    default:
      return `<svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="background:#EFECE6;">
        <rect width="400" height="240" fill="#EAE5DE"/>
        <circle cx="200" cy="110" r="45" fill="#C47C2B" opacity="0.5"/>
        <rect x="120" y="160" width="160" height="40" fill="#9C4A2F" rx="6"/>
        <text x="200" y="225" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="700" fill="#443B33" text-anchor="middle">DOKUMENTASI KEARSIPAN</text>
      </svg>`;
  }
}

function openLightboxModal(docId) {
  const item = store.documentation.find(d => d.id === docId);
  if (!item) return;

  const modal = document.getElementById('mediaLightboxModal');
  const title = document.getElementById('lightboxTitle');
  const area = document.getElementById('lightboxDisplayArea');
  const desc = document.getElementById('lightboxDescription');
  const dateTag = document.getElementById('lightboxDateTag');
  const locTag = document.getElementById('lightboxLocTag');
  const catTag = document.getElementById('lightboxCatTag');

  title.textContent = item.judul;
  desc.textContent = item.deskripsi;
  dateTag.textContent = formatIndonesianDate(item.tanggal);
  locTag.textContent = item.lokasi;
  catTag.textContent = item.mediaType === 'video' ? 'Video Arsip Perusahaan' : 'Foto Resmi';

  if (item.mediaType === 'video') {
    area.innerHTML = `
      <div style="text-align: center; color: #FFFFFF; padding: 3rem;">
        <i class="fa-regular fa-circle-play" style="font-size: 4rem; color: var(--earth-terracotta); margin-bottom: 1rem;"></i>
        <h4>Pemutar Video Arsip Beresolusi Tinggi</h4>
        <p class="text-xs text-muted mt-1">Format MP4 (H.264) • Durasi 08:42 • Arsip Disimpan di Cloud S3 PT Bumi Stationery</p>
        <button class="btn btn-sm btn-terracotta mt-3" onclick="showToast('Memutar stream video dokumentasi...', 'info')">
          <i class="fa-solid fa-play"></i> Putar Video Kegiatan
        </button>
      </div>
    `;
  } else {
    area.innerHTML = `
      <div style="width: 100%; height: 100%; max-height: 480px; display: flex; align-items: center; justify-content: center;">
        ${getMediaIllustration(item.thumbnail)}
      </div>
    `;
  }

  modal.classList.remove('d-none');
}

function openAddDocumentationModal() {
  if (store.user.role !== 'admin') {
    showToast('Hanya Administrator yang dapat menambahkan dokumentasi kegiatan baru!', 'error');
    return;
  }
  document.getElementById('mediaEntryForm').reset();
  document.getElementById('mediaTanggal').value = new Date().toISOString().split('T')[0];
  document.getElementById('addDocMediaModal').classList.remove('d-none');
}

function handleMediaFormSubmit(event) {
  event.preventDefault();

  const judul = document.getElementById('mediaJudul').value.trim();
  const kategori = document.getElementById('mediaKategori').value;
  const tanggal = document.getElementById('mediaTanggal').value;
  const lokasi = document.getElementById('mediaLokasi').value.trim() || 'Jakarta';
  const deskripsi = document.getElementById('mediaDeskripsi').value.trim();
  const thumbType = document.getElementById('mediaImageSelect').value;

  const newItem = {
    id: `doc-${Date.now()}`,
    judul,
    kategori,
    mediaType: kategori === 'video' ? 'video' : 'foto',
    tanggal,
    lokasi,
    deskripsi,
    thumbnail: thumbType
  };

  store.documentation.unshift(newItem);
  showToast('Dokumentasi kegiatan baru berhasil ditambahkan!', 'success');
  closeModal('addDocMediaModal');
  renderDocumentation();
}

// --------------------------------------------------------------------------
// 12. PENCADANGAN (BACKUP) & JADWAL RETENSI ARSIP (Item #7 & #12)
// --------------------------------------------------------------------------
function renderRetentionTables() {
  renderJRADataTable();
  renderRetentionAlertsTable();
  renderBackupHistoryList();
}

function renderJRADataTable() {
  const tbody = document.getElementById('retentionRulesBody');
  if (!tbody) return;

  tbody.innerHTML = store.retentionRules.map((rule, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td><strong>${rule.seri}</strong></td>
      <td><span class="badge badge-sage">${rule.aktif}</span></td>
      <td><span class="badge badge-sand">${rule.inaktif}</span></td>
      <td><span class="badge ${rule.nasib === 'Permanen' ? 'badge-terracotta' : 'badge-accent'}">${rule.nasib}</span></td>
      <td class="text-sm text-muted">${rule.regulasi}</td>
      <td>
        <button class="btn btn-xs btn-outline" onclick="showToast('Aturan ${rule.seri} terverifikasi standar ANRI', 'info')">
          <i class="fa-solid fa-check"></i> Audit
        </button>
      </td>
    </tr>
  `).join('');
}

function renderRetentionAlertsTable() {
  const tbody = document.getElementById('retentionAlertBody');
  if (!tbody) return;

  // Filter letters nearing retention limit
  const readyLetters = store.letters.filter(l => l.statusRetensi === 'Siap Musnah' || l.statusRetensi === 'Inaktif');

  if (readyLetters.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted p-3">Tidak ada arsip yang melewati batas retensi saat ini.</td></tr>`;
    return;
  }

  tbody.innerHTML = readyLetters.map(item => `
    <tr>
      <td><strong>${item.noSurat}</strong></td>
      <td>${item.perihal}</td>
      <td>${item.tahun}</td>
      <td class="text-danger font-weight-bold">Telah Melewati Batas</td>
      <td><span class="badge ${item.statusRetensi === 'Siap Musnah' ? 'badge-accent' : 'badge-sand'}">${item.statusRetensi}</span></td>
      <td>${item.statusRetensi === 'Siap Musnah' ? 'Rekomendasi Pemusnahan Berita Acara' : 'Alihkan ke Gudang Inaktif'}</td>
      <td>
        ${store.user.role === 'admin' ? `
          <button class="btn btn-xs btn-outline-terracotta" onclick="executeAppraisalAction('${item.id}')">
            <i class="fa-solid fa-stamp"></i> Eksekusi
          </button>
        ` : `
          <span class="text-xs text-muted">Perlu Akses Admin</span>
        `}
      </td>
    </tr>
  `).join('');
}

function renderBackupHistoryList() {
  const container = document.getElementById('backupLogList');
  if (!container) return;

  const logs = [
    { tanggal: 'Hari ini, 03:00 WIB', tipe: 'Pencadangan Otomatis Cloud S3 & NAS', status: 'Sukses (148 Berkas, 42.8 MB)', hash: 'SHA256: 48bf9...d21' },
    { tanggal: 'Kemarin, 03:00 WIB', tipe: 'Pencadangan Otomatis Harian', status: 'Sukses (146 Berkas, 41.5 MB)', hash: 'SHA256: 31ca7...e90' },
    { tanggal: '11 Oktober 2026, 23:00 WIB', tipe: 'Pencadangan Mingguan Penuh (Full Snapshot)', status: 'Sukses (142 Berkas, 39.8 MB)', hash: 'SHA256: 82df1...b33' }
  ];

  container.innerHTML = logs.map(l => `
    <div class="backup-log-item">
      <div>
        <strong><i class="fa-solid fa-circle-check text-success"></i> ${l.tipe}</strong>
        <p class="text-xs text-muted">${l.tanggal} • ${l.status}</p>
      </div>
      <code class="text-xs">${l.hash}</code>
    </div>
  `).join('');
}

function downloadBackupJSON() {
  if (store.user.role === 'guest') {
    openAuthModal(true);
    return;
  }

  const backupData = {
    metadata: {
      perusahaan: 'PT BUMI STATIONERY',
      alamat: 'Jl. Bahtera No. 114 Blok L, Semarang, Jawa Tengah, Indonesia',
      telepon: '(0553) 756685',
      sistem: 'Digitalisasi Arsip Terpadu',
      waktuCadangan: new Date().toISOString(),
      dibuatOleh: store.user.username,
      totalDokumen: store.letters.length
    },
    letters: store.letters,
    retentionRules: store.retentionRules,
    reviews: store.reviews
  };

  const jsonStr = JSON.stringify(backupData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Backup_Arsip_PT_BUMI_STATIONERY_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('File pencadangan (Backup JSON) berhasil diunduh!', 'success');
}

function triggerRestoreInput() {
  if (store.user.role !== 'admin') {
    showToast('Hanya Administrator yang memiliki wewenang memulihkan data!', 'error');
    return;
  }
  document.getElementById('restoreFileInput').click();
}

function handleRestoreFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data && data.letters && Array.isArray(data.letters)) {
        if (confirm(`Pulihkan ${data.letters.length} data arsip dari file cadangan ini? Data saat ini akan digabungkan.`)) {
          store.letters = data.letters;
          store.saveLetters();
          showToast('Data arsip berhasil dipulihkan secara penuh!', 'success');
          renderAgendaTable();
          renderAbjadExplorer();
          renderRetentionTables();
        }
      } else {
        showToast('Format file JSON cadangan tidak sesuai skema kearsipan PT Bumi Stationery.', 'error');
      }
    } catch (err) {
      showToast('Gagal membaca file JSON backup.', 'error');
    }
  };
  reader.readAsText(file);
}

function simulateStoragePing(type) {
  showToast(`Menguji koneksi ke ${type === 'lokal' ? 'Server On-Premise NAS RAID-5' : 'AWS S3 Vault Jakarta'}...`, 'info');
  setTimeout(() => {
    showToast(`Koneksi ke ${type === 'lokal' ? 'NAS Lokal' : 'Cloud AWS S3'} stabil. Latency: 12ms. Integritas data 100%.`, 'success');
  }, 700);
}

function executeAppraisalAction(docId) {
  const doc = store.letters.find(l => l.id === docId);
  if (!doc) return;

  if (confirm(`Laksanakan Berita Acara Pemusnahan Arsip untuk surat nomor: ${doc.noSurat} (${doc.perihal}) sesuai ketentuan ANRI?`)) {
    store.letters = store.letters.filter(l => l.id !== docId);
    store.saveLetters();
    showToast(`Dokumen ${doc.noSurat} telah dimusnahkan secara legal dan dicatat dalam Berita Acara.`, 'info');
    renderRetentionTables();
    renderAgendaTable();
  }
}

function exportAppraisalReport() {
  window.print();
}

function openAddRetentionRuleModal() {
  if (store.user.role !== 'admin') {
    showToast('Hanya Administrator yang dapat menambah aturan JRA!', 'error');
    return;
  }
  const seri = prompt('Masukkan Nama Seri / Jenis Dokumen:');
  if (!seri) return;
  const aktif = prompt('Masa Simpan Aktif (contoh: 3 Tahun):', '3 Tahun');
  const inaktif = prompt('Masa Simpan Inaktif (contoh: 5 Tahun):', '5 Tahun');
  const nasib = prompt('Nasib Akhir (Siap Musnah / Permanen):', 'Siap Musnah');

  store.retentionRules.push({
    id: `JRA-${Date.now()}`,
    seri,
    aktif: aktif || '2 Tahun',
    inaktif: inaktif || '3 Tahun',
    nasib: nasib || 'Siap Musnah',
    regulasi: 'Pedoman Internal Kearsipan PT Bumi Stationery'
  });

  showToast('Aturan JRA baru berhasil didaftarkan.', 'success');
  renderJRADataTable();
}

// --------------------------------------------------------------------------
// 13. PENILAIAN TERHADAP PERUSAHAAN (REVIEW ANONIM) (Item #10)
// --------------------------------------------------------------------------
let selectedStarRating = 5;

function setStarRating(rating) {
  selectedStarRating = rating;
  const stars = document.querySelectorAll('#starRatingPicker .star-btn');
  stars.forEach(star => {
    const starVal = parseInt(star.dataset.rating, 10);
    star.classList.toggle('active', starVal <= rating);
  });

  const label = document.getElementById('ratingScoreText');
  if (label) {
    const descriptions = ['', '1.0 (Kecewa)', '2.0 (Kurang Puas)', '3.0 (Cukup)', '4.0 (Puas)', '5.0 (Sangat Puas)'];
    label.textContent = descriptions[rating] || `${rating}.0`;
  }
}

function handleReviewSubmit(event) {
  event.preventDefault();

  const aspek = document.getElementById('reviewAspek').value;
  const komentar = document.getElementById('reviewKomentar').value.trim();

  // Generate anonymous identifier to protect identity
  const anonNumber = Math.floor(1000 + Math.random() * 9000);
  const anonName = `Pengunjung Anonim #${anonNumber}`;

  const newReview = {
    id: `REV-${anonNumber}`,
    nama: anonName,
    rating: selectedStarRating,
    aspek,
    tanggal: formatIndonesianDate(new Date().toISOString().split('T')[0]),
    komentar
  };

  store.reviews.unshift(newReview);
  store.saveReviews();

  document.getElementById('reviewSubmitForm').reset();
  setStarRating(5);

  showToast('Terima kasih! Penilaian anonim Anda berhasil diterbitkan.', 'success');
  renderReviews();
}

function renderReviews() {
  const container = document.getElementById('reviewsList');
  const avgDisplay = document.getElementById('avgRatingDisplay');
  const totalDisplay = document.getElementById('totalReviewersDisplay');
  const homeScore = document.getElementById('homeSatisfactionScore');
  const homeCount = document.getElementById('homeReviewCount');

  if (!container) return;

  const total = store.reviews.length;
  const avg = total > 0 ? (store.reviews.reduce((acc, r) => acc + r.rating, 0) / total).toFixed(1) : '5.0';

  if (avgDisplay) avgDisplay.textContent = avg;
  if (totalDisplay) totalDisplay.textContent = total;
  if (homeScore) homeScore.textContent = `${avg} / 5.0`;
  if (homeCount) homeCount.textContent = `Berdasarkan ${total} ulasan anonim`;

  container.innerHTML = store.reviews.map(rev => {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      starsHtml += `<i class="fa-solid fa-star ${i <= rev.rating ? 'text-ochre' : 'text-muted'}" style="font-size: 0.8rem;"></i> `;
    }

    return `
      <div class="review-item-card">
        <div class="review-item-header">
          <div>
            <span class="reviewer-anonymous-name">
              <i class="fa-solid fa-user-secret text-terracotta"></i> ${rev.nama}
            </span>
            <div class="mt-1">${starsHtml}</div>
          </div>
          <span class="text-xs text-muted">${rev.tanggal}</span>
        </div>
        <span class="review-aspect-badge">${rev.aspek}</span>
        <p class="review-text-body">"${rev.komentar}"</p>
      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 14. LAYANAN CS & PENGADUAN EMAIL (Item #9)
// --------------------------------------------------------------------------
function handleCSFormSubmit(event) {
  event.preventDefault();

  const nama = document.getElementById('csNama').value.trim();
  const email = document.getElementById('csEmail').value.trim();
  const telepon = document.getElementById('csTelepon').value.trim();
  const kategori = document.getElementById('csKategori').value;
  const subjek = document.getElementById('csSubjek').value.trim();
  const pesan = document.getElementById('csPesan').value.trim();

  // Create local ticket
  const ticketId = `TCK-${new Date().getFullYear()}-${String(store.tickets.length + 1).padStart(3, '0')}`;
  const newTicket = {
    id: ticketId,
    nama,
    kategori,
    subjek,
    tanggal: `${formatIndonesianDate(new Date().toISOString().split('T')[0])}, ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB`,
    status: 'Diproses'
  };

  store.tickets.unshift(newTicket);
  store.saveTickets();

  renderCSTickets();
  document.getElementById('csContactForm').reset();

  showToast(`Pesan Anda berhasil diteruskan ke tim kearsipan (justforexampleyea@gmail.com) dengan Nomor Tiket: ${ticketId}!`, 'success');

  // Option to launch email client directly to justforexampleyea@gmail.com
  const mailSubject = encodeURIComponent(`[${ticketId}] Pengaduan Kearsipan PT BUMI STATIONERY: ${subjek}`);
  const mailBody = encodeURIComponent(`Halo Tim Kearsipan PT BUMI STATIONERY,\n\nNama Pengirim: ${nama}\nEmail: ${email}\nTelepon/WA: ${telepon}\nKategori: ${kategori}\nNomor Tiket: ${ticketId}\n\nDetail Pesan/Keluhan:\n${pesan}\n\n---\nDikirim melalui Portal Digitalisasi Kearsipan PT BUMI STATIONERY`);
  
  if (confirm(`Pesan pengaduan telah dicatat (${ticketId}). Ingin membuka aplikasi email untuk mengirim tembusan langsung ke justforexampleyea@gmail.com?`)) {
    window.location.href = `mailto:justforexampleyea@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  }
}

function openDirectMailClient() {
  const mailto = 'mailto:justforexampleyea@gmail.com?subject=Permohonan%20Layanan%20Kearsipan%20PT%20Bumi%20Stationery';
  window.location.href = mailto;
}

function renderCSTickets() {
  const container = document.getElementById('csTicketMiniList');
  if (!container) return;

  container.innerHTML = store.tickets.slice(0, 5).map(t => `
    <div class="ticket-mini-item">
      <div class="d-flex justify-content-between align-items-center">
        <strong>${t.id}</strong>
        <span class="badge ${t.status === 'Selesai' ? 'badge-sage' : 'badge-accent'} text-xs">${t.status}</span>
      </div>
      <p class="text-xs text-muted mt-1"><strong>${t.nama}</strong>: ${t.subjek}</p>
      <span class="text-xs text-muted"><i class="fa-regular fa-clock"></i> ${t.tanggal}</span>
    </div>
  `).join('');
}

// Interactive Floating CS Chat Widget
function toggleCSChatBox(forceState) {
  const box = document.getElementById('csChatBox');
  if (!box) return;
  const isHidden = box.classList.contains('d-none');
  const show = forceState !== undefined ? forceState : isHidden;
  box.classList.toggle('d-none', !show);
}

function handleSendCSChat(event) {
  event.preventDefault();
  const input = document.getElementById('csChatInput');
  const message = input.value.trim();
  if (!message) return;

  appendChatMessage(message, 'user');
  input.value = '';

  // Simulate intelligent auto-responder from archive team
  setTimeout(() => {
    const reply = generateCSBotReply(message);
    appendChatMessage(reply, 'bot');
  }, 600);
}

function sendQuickReply(text) {
  appendChatMessage(text, 'user');
  setTimeout(() => {
    const reply = generateCSBotReply(text);
    appendChatMessage(reply, 'bot');
  }, 500);
}

function appendChatMessage(text, sender) {
  const container = document.getElementById('csChatMessages');
  if (!container) return;

  const div = document.createElement('div');
  div.className = `chat-msg ${sender}-msg`;
  div.innerHTML = `
    <p>${text.replace(/\n/g, '<br>')}</p>
    <span class="msg-time">${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</span>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function generateCSBotReply(userText) {
  const lower = userText.toLowerCase();

  if (lower.includes('isi surat') || lower.includes('lihat surat') || lower.includes('login') || lower.includes('akses')) {
    return 'Untuk melihat isi lengkap surat arsip, silakan klik tombol "Login" di pojok kanan atas. Akun dibagi 2 yaitu Admin (akses edit & kelola penuh) dan User/Staf (baca & cetak). Tamu publik hanya dapat melihat katalog metadata.';
  } else if (lower.includes('pengadaan') || lower.includes('atk') || lower.includes('kertas') || lower.includes('pesan')) {
    return 'PT BUMI STATIONERY melayani suplai kertas HVS (70, 75, 80 gsm), continuous form, map ordner Bantex, dan ATK grosir. Anda bisa membuat Surat Pesanan resmi langsung di menu "Template Surat"!';
  } else if (lower.includes('email') || lower.includes('kontak') || lower.includes('telepon')) {
    return 'Anda dapat menghubungi tim kearsipan kami langsung melalui email resmi justforexampleyea@gmail.com atau telepon kantor (0553) 756685 pada hari kerja Senin-Jumat (08:00 - 17:00 WIB).';
  } else if (lower.includes('abjad') || lower.includes('filling') || lower.includes('arsip')) {
    return 'Sistem penyimpanan kami mengadopsi standar ANRI Abjad Filing System, di mana berkas dikelompokkan berdasarkan nama badan usaha/instansi (Guide Primer A-Z). Anda dapat menjelajahinya di menu "Abjad Filing".';
  } else {
    return `Terima kasih atas pesan Anda. Pertanyaan Anda mengenai "${userText}" telah kami teruskan ke staf arsip PT Bumi Stationery. Jika membutuhkan respons cepat, silakan isi formulir di tab Layanan CS atau kirim email langsung ke justforexampleyea@gmail.com.`;
  }
}

// --------------------------------------------------------------------------
// 15. BATCH UPLOAD (DRAG & DROP) & CSV METADATA IMPORT (Item #14)
// --------------------------------------------------------------------------
function openBatchUploadModal() {
  if (store.user.role === 'guest') {
    openAuthModal(true);
    return;
  }
  document.getElementById('batchUploadModal').classList.remove('d-none');
  setupDropzone();
}

function switchBatchTab(tab) {
  document.querySelectorAll('.batch-tab-btn').forEach(b => b.classList.remove('active'));
  event.currentTarget.classList.add('active');

  document.getElementById('batchTabFiles').classList.toggle('d-none', tab !== 'files');
  document.getElementById('batchTabCSV').classList.toggle('d-none', tab !== 'csv');
}

function setupDropzone() {
  const dropzone = document.getElementById('dropzoneArea');
  if (!dropzone || dropzone.dataset.initialized) return;

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, () => dropzone.classList.add('dragover'), false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, () => dropzone.classList.remove('dragover'), false);
  });

  dropzone.addEventListener('drop', handleFileDrop, false);
  dropzone.dataset.initialized = 'true';
}

function handleFileDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleBatchFiles(files);
}

function handleBatchFileSelect(e) {
  const files = e.target.files;
  handleBatchFiles(files);
}

function handleBatchFiles(fileList) {
  if (!fileList || fileList.length === 0) return;

  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    store.uploadQueue.push({
      id: `queue-${Date.now()}-${i}`,
      name: file.name,
      size: (file.size / 1024).toFixed(1) + ' KB',
      type: file.type || 'Dokumen Arsip',
      progress: 100
    });
  }

  renderUploadQueue();
}

function renderUploadQueue() {
  const container = document.getElementById('uploadQueueContainer');
  const itemsBox = document.getElementById('queueItemsBox');
  const countEl = document.getElementById('queueCount');

  if (!container || !itemsBox) return;

  if (store.uploadQueue.length === 0) {
    container.classList.add('d-none');
    return;
  }

  container.classList.remove('d-none');
  countEl.textContent = store.uploadQueue.length;

  itemsBox.innerHTML = store.uploadQueue.map(item => `
    <div class="queue-item-row">
      <div class="d-flex align-items-center gap-2">
        <i class="fa-solid fa-file-pdf text-terracotta"></i>
        <span><strong>${item.name}</strong> (${item.size})</span>
      </div>
      <span class="badge badge-sage text-xs"><i class="fa-solid fa-check"></i> Siap Diimpor</span>
    </div>
  `).join('');
}

function clearUploadQueue() {
  store.uploadQueue = [];
  renderUploadQueue();
}

function processBatchUpload() {
  if (store.uploadQueue.length === 0) return;

  const count = store.uploadQueue.length;

  // Generate synthetic letter records from uploaded files
  store.uploadQueue.forEach((item, idx) => {
    const cleanName = item.name.replace(/\.[^/.]+$/, '');
    const firstLetter = cleanName.charAt(0).toUpperCase();

    const newDoc = {
      id: `BS-BATCH-${Date.now()}-${idx}`,
      noSurat: `0${idx + 10}/MIGRASI/${new Date().getFullYear()}`,
      tanggal: new Date().toISOString().split('T')[0],
      jenis: 'Surat Masuk',
      indeksAbjad: firstLetter >= 'A' && firstLetter <= 'Z' ? firstLetter : 'B',
      pengirim: `Instansi Terkait (${cleanName})`,
      penerima: 'PT Bumi Stationery (Arsip Migrasi)',
      perihal: `Berkas Hasil Migrasi: ${cleanName}`,
      statusRetensi: 'Aktif',
      tahun: new Date().getFullYear().toString(),
      kerahasiaan: 'Biasa / Terbuka',
      lokasiFisik: 'Box Migrasi Batch-01',
      isiDokumen: `Dokumen digital hasil migrasi massal dari berkas fisik file ${item.name}.`,
      unitFiling: cleanName
    };
    store.letters.unshift(newDoc);
  });

  store.saveLetters();
  clearUploadQueue();
  closeModal('batchUploadModal');
  showToast(`Berhasil memproses dan mengarsipkan ${count} file secara massal!`, 'success');
  renderAgendaTable();
  renderAbjadExplorer();
}

// CSV Metadata Import & Export
function downloadSampleCSVTemplate() {
  const csvContent = `nomorSurat,tanggal,jenis,indeksAbjad,pengirim,penerima,perihal,statusRetensi,tahun,lokasiFisik
125/EXT/X/2026,2026-10-15,Surat Masuk,G,PT Gramedia Asri Media,PT Bumi Stationery,Pemesanan Kertas Manila A4,Aktif,2026,Laci G-01
099/BS-PO/X/2026,2026-10-16,Surat Keluar,S,PT Bumi Stationery,PT Sinar Kertas Utama,Pesanan Kertas Continuous Form,Aktif,2026,Laci S-02
`;

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Format_Impor_Metadata_Arsip_BUMI_STATIONERY.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Template CSV berhasil diunduh.', 'info');
}

let parsedCSVData = [];

function handleCSVFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    parseCSVText(text);
  };
  reader.readAsText(file);
}

function parseCSVText(csvText) {
  const lines = csvText.split('\n').filter(line => line.trim().length > 0);
  if (lines.length < 2) {
    showToast('File CSV tidak memiliki data yang cukup.', 'error');
    return;
  }

  const headers = lines[0].split(',').map(h => h.trim());
  parsedCSVData = [];

  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',').map(c => c.trim());
    if (cols.length >= 7) {
      parsedCSVData.push({
        noSurat: cols[0],
        tanggal: cols[1],
        jenis: cols[2],
        indeksAbjad: cols[3].toUpperCase(),
        pengirim: cols[4],
        penerima: cols[5],
        perihal: cols[6],
        statusRetensi: cols[7] || 'Aktif',
        tahun: cols[8] || '2026',
        lokasiFisik: cols[9] || 'Laci Arsip Umum'
      });
    }
  }

  renderCSVPreview();
}

function renderCSVPreview() {
  const box = document.getElementById('csvPreviewBox');
  const countEl = document.getElementById('csvRowCount');
  const table = document.getElementById('csvPreviewTable');

  if (!box || !table) return;

  box.classList.remove('d-none');
  countEl.textContent = parsedCSVData.length;

  table.querySelector('thead').innerHTML = `
    <tr>
      <th>No Surat</th>
      <th>Tanggal</th>
      <th>Jenis</th>
      <th>Abjad</th>
      <th>Pengirim</th>
      <th>Penerima</th>
      <th>Perihal</th>
    </tr>
  `;

  table.querySelector('tbody').innerHTML = parsedCSVData.slice(0, 5).map(row => `
    <tr>
      <td>${row.noSurat}</td>
      <td>${row.tanggal}</td>
      <td>${row.jenis}</td>
      <td><strong>[${row.indeksAbjad}]</strong></td>
      <td>${row.pengirim}</td>
      <td>${row.penerima}</td>
      <td>${row.perihal}</td>
    </tr>
  `).join('');
}

function confirmImportCSV() {
  if (parsedCSVData.length === 0) return;

  parsedCSVData.forEach((row, idx) => {
    store.letters.unshift({
      id: `BS-CSV-${Date.now()}-${idx}`,
      noSurat: row.noSurat,
      tanggal: row.tanggal,
      jenis: row.jenis,
      indeksAbjad: row.indeksAbjad,
      pengirim: row.pengirim,
      penerima: row.penerima,
      perihal: row.perihal,
      statusRetensi: row.statusRetensi,
      tahun: row.tahun,
      kerahasiaan: 'Biasa / Terbuka',
      lokasiFisik: row.lokasiFisik,
      isiDokumen: `Metadata diimpor via CSV untuk perihal: ${row.perihal}`,
      unitFiling: row.pengirim
    });
  });

  store.saveLetters();
  const count = parsedCSVData.length;
  parsedCSVData = [];
  closeModal('batchUploadModal');
  showToast(`Berhasil mengimpor ${count} metadata surat ke Buku Agenda!`, 'success');
  renderAgendaTable();
  renderAbjadExplorer();
}

// --------------------------------------------------------------------------
// 16. EKSPOR & LAPORAN REPORTING (Item #13)
// --------------------------------------------------------------------------
function exportLettersToCSV() {
  if (store.letters.length === 0) {
    showToast('Tidak ada data arsip untuk diekspor.', 'error');
    return;
  }

  let csvContent = 'ID,Nomor Surat,Tanggal,Jenis,Indeks Abjad,Pengirim,Penerima,Perihal,Status Retensi,Tahun,Lokasi Fisik\n';

  store.letters.forEach(item => {
    const row = [
      `"${item.id}"`,
      `"${item.noSurat}"`,
      `"${item.tanggal}"`,
      `"${item.jenis}"`,
      `"${item.indeksAbjad}"`,
      `"${item.pengirim.replace(/"/g, '""')}"`,
      `"${item.penerima.replace(/"/g, '""')}"`,
      `"${item.perihal.replace(/"/g, '""')}"`,
      `"${item.statusRetensi}"`,
      `"${item.tahun}"`,
      `"${item.lokasiFisik || ''}"`
    ].join(',');
    csvContent += row + '\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Buku_Agenda_Arsip_PT_BUMI_STATIONERY_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Daftar Buku Agenda berhasil diekspor ke format Excel/CSV!', 'success');
}

function exportMonthlyReportCSV() {
  const recapData = [
    ['Periode Bulan', 'Surat Masuk', 'Surat Keluar', 'Total Berkas', 'Keterangan Operasional'],
    ['Oktober 2026', '14', '11', '25', 'Tingginya permintaan kertas ujian akhir semester'],
    ['September 2026', '12', '9', '21', 'Audit kearsipan internal dan stock opname'],
    ['Agustus 2026', '9', '8', '17', 'Peresmian gudang distribusi Sentul'],
    ['Juli 2026', '10', '6', '16', 'Tahun ajaran baru dan pesanan ATK sekolah'],
    ['Juni 2026', '8', '7', '15', 'Laporan pajak tahunan dan PKS distributor']
  ];

  let csv = recapData.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Rekapitulasi_Arsip_Bulanan_PT_BUMI_STATIONERY_2026.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Laporan Rekapitulasi Bulanan berhasil diunduh.', 'success');
}

// --------------------------------------------------------------------------
// 17. UTILITIES & MODAL HELPERS
// --------------------------------------------------------------------------
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('d-none');
}

function openArchivalRulesModal() {
  document.getElementById('archivalRulesModal').classList.remove('d-none');
}

function formatIndonesianDate(dateStr) {
  if (!dateStr) return '-';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;

  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const day = parseInt(parts[2], 10);
  const monthIdx = parseInt(parts[1], 10) - 1;
  const year = parts[0];

  return `${day} ${months[monthIdx] || ''} ${year}`;
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = 'fa-solid fa-circle-info';
  if (type === 'success') icon = 'fa-solid fa-circle-check';
  else if (type === 'error') icon = 'fa-solid fa-triangle-exclamation';

  toast.innerHTML = `
    <i class="${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// --------------------------------------------------------------------------
// 18. INITIALIZATION ON DOM READY
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Setup dropdown options
  populateAbjadDropdowns();

  // Load and apply Auth UI state
  updateAuthUI();

  // Populate Default Views
  renderAgendaTable();
  renderAbjadExplorer();
  renderReviews();
  renderCSTickets();
  updateLiveLetterPreview();

  // Set today's date in form fields
  const today = new Date().toISOString().split('T')[0];
  const dateInputs = ['formTanggalSurat', 'tplTanggalSurat', 'mediaTanggal'];
  dateInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el && !el.value) el.value = today;
  });

  // Close modals on clicking backdrop
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('d-none');
      }
    });
  });

  console.log('PT BUMI STATIONERY - Sistem Digitalisasi Arsip Terpadu Aktif & Terverifikasi.');
});
