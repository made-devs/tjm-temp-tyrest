// Data dikelompokkan berdasarkan brand untuk digunakan di halaman layanan dengan tab.
export const serviceGroups = [
  {
    brand: 'TJM Auto Care',
    description: 'Solusi lengkap untuk mesin, kaki-kaki, dan servis umum.',
    services: [
      {
        slug: 'paket-combo-kaki-kaki',
        href: '/layanan/paket-combo-kaki-kaki',
        title: 'Paket Combo Kaki Kaki',
        description:
          'Solusi lengkap untuk kenyamanan dan keamanan kaki-kaki mobil Anda.',
        image: 'https://i.imgur.com/MDDAasV.png',
      },
      {
        slug: 'paket-combo-super-komplit',
        href: '/layanan/paket-combo-super-komplit',
        title: 'Paket Combo Super Komplit',
        description:
          'Perawatan menyeluruh dari mesin hingga kaki-kaki untuk performa maksimal.',
        image: 'https://i.imgur.com/cAfOdfV.png',
      },
      {
        slug: 'paket-custom-suspension',
        href: '/layanan/paket-custom-suspension',
        title: 'Paket Custom Suspension',
        description:
          'Tingkatkan handling dan gaya dengan suspensi yang disesuaikan.',
        image: 'https://i.imgur.com/tzKLRrz.png',
      },
      {
        slug: 'paket-diesel',
        href: '/layanan/paket-diesel',
        title: 'Paket Diesel',
        description:
          'Perawatan khusus untuk mesin diesel agar tetap bertenaga dan efisien.',
        image: 'https://i.imgur.com/yIFOPHI.png',
      },
      {
        slug: 'paket-kaki-kaki',
        href: '/layanan/paket-kaki-kaki',
        title: 'Paket Kaki Kaki',
        description:
          'Fokus pada perbaikan dan perawatan komponen suspensi dan kemudi.',
        image: 'https://i.imgur.com/zPeuknD.png',
      },
      {
        slug: 'paket-overhaul-engine',
        href: '/layanan/paket-overhaul-engine',
        title: 'Paket Overhaul Engine',
        description:
          'Mengembalikan kondisi mesin seperti baru untuk performa puncak.',
        image: 'https://i.imgur.com/1JQxDIu.png',
      },
      {
        slug: 'paket-racksteer-hemat',
        href: '/layanan/paket-racksteer-hemat',
        title: 'Paket Racksteer Hemat',
        description:
          'Solusi ekonomis untuk perbaikan sistem kemudi rack steer.',
        image: 'https://i.imgur.com/i2D6YLu.png',
      },
      {
        slug: 'paket-special',
        href: '/layanan/paket-special',
        title: 'Paket Special',
        description:
          'Penawaran khusus dengan kombinasi layanan paling populer.',
        image: 'https://i.imgur.com/Q4G7rpP.png',
      },
      {
        slug: 'paket-steering',
        href: '/layanan/paket-steering',
        title: 'Paket Steering',
        description:
          'Perbaikan dan perawatan sistem kemudi untuk handling yang presisi.',
        image: 'https://i.imgur.com/GpBwT2l.png',
      },
      {
        slug: 'paket-super-hemat',
        href: '/layanan/paket-super-hemat',
        title: 'Paket Super Hemat',
        description:
          'Pilihan cerdas untuk perawatan rutin dengan harga terbaik.',
        image: 'https://i.imgur.com/n18zKaQ.png',
      },
    ],
  },
  {
    brand: 'TJM AC Mobil',
    description:
      'Spesialis perawatan dan perbaikan sistem pendingin mobil Anda.',
    services: [
      {
        slug: 'paket-ac-mobil',
        href: '/layanan/paket-ac-mobil',
        title: 'Paket AC Mobil',
        description:
          'Layanan lengkap untuk memastikan AC mobil Anda selalu dingin dan segar.',
        image: '/services/ac1.webp',
      },
    ],
  },
  {
    brand: 'TJM Auto Detailing',
    description: 'Mengembalikan kilau dan melindungi penampilan mobil Anda.',
    services: [
      {
        slug: 'paket-detailing',
        href: '/layanan/paket-detailing',
        title: 'Paket Detailing',
        description:
          'Layanan lengkap untuk merawat eksterior maupun interior mobil Anda.',
        image: '/services/detailing1.webp',
      },
      {
        slug: 'paket-nano-ceramic-coating',
        href: '/layanan/paket-nano-ceramic-coating',
        title: 'Paket Nano Ceramic Coating',
        description:
          'Proteksi cat superior dengan teknologi nano-ceramic untuk kilau maksimal.',
        image: '/services/nano1.webp',
      },
    ],
  },
  {
    brand: 'TJM Undercarriage & Rust Protection+',
    description: 'Perlindungan total dari ancaman karat dan korosi.',
    services: [
      {
        slug: 'paket-anti-karat',
        href: '/layanan/paket-anti-karat',
        title: 'Paket Anti Karat',
        description:
          'Proteksi lengkap untuk kolong mobil dengan material berkualitas tinggi.',
        image: '/services/karat1.webp',
      },
    ],
  },
];

// Data dalam format array tunggal untuk digunakan di halaman detail ([slug]/page.js).
// JANGAN HAPUS INI.
export const servicesData = [
  {
    slug: 'paket-combo-kaki-kaki',
    href: '/layanan/paket-combo-kaki-kaki',
    title: 'Paket Combo Kaki Kaki',
    description:
      'Solusi lengkap untuk kenyamanan dan keamanan kaki-kaki mobil Anda.',
    image: '/services/service1.webp',
    details:
      'Paket ini mencakup pemeriksaan dan perbaikan menyeluruh pada komponen suspensi, steering, dan roda untuk mengembalikan stabilitas dan kenyamanan berkendara seperti semula.',
    variants: [
      {
        slug: 'kaki-kaki-ac',
        title: 'Kaki-Kaki Komplit + AC',
        description:
          'Solusi lengkap mencakup 27 item pengerjaan, mulai dari tune-up 65 komponen, servis kaki-kaki 25 titik, hingga servis dan pembersihan AC.',
        image: 'https://i.imgur.com/MElDzNi.jpeg',
        details: [
          {
            title: 'Tune Up 65 Komponen',
            description: 'Termasuk Engine Scanner untuk diagnosis akurat.',
          },
          {
            title: 'Gurah Mesin & Injector Cleaning',
            description: 'Membersihkan ruang bakar dan sistem injeksi.',
          },
          {
            title: 'General Check Up Kaki-Kaki 25 Titik',
            description: 'Inspeksi mendalam pada sistem suspensi dan kemudi.',
          },
          {
            title: 'Servis Rem Komplit 4 Roda',
            description: 'Pemeriksaan dan pembersihan sistem pengereman.',
          },
          {
            title: 'Servis & Cleaning AC',
            description: 'Termasuk freon, kondensor, dan filter AC.',
          },
        ],
      },
      {
        slug: 'kaki-kaki-rust-protection',
        title: 'Kaki-Kaki Komplit + Rust Protection',
        description:
          'Perawatan kaki-kaki komplit dipadukan dengan restorasi kolong dan aplikasi lapisan anti karat berteknologi tinggi.',
        image: 'https://i.imgur.com/2PpQutl.jpeg',
        details: [
          {
            title: 'Tune Up 65 Komponen',
            description: 'Mengembalikan performa mesin ke kondisi optimal.',
          },
          {
            title: 'General Check Up Kaki-Kaki 25 Titik',
            description: 'Inspeksi dan perbaikan menyeluruh pada suspensi.',
          },
          {
            title: 'Rust Protection Plus',
            description: 'Aplikasi anti karat, anti panas, dan peredam suara.',
          },
          {
            title: 'Undercarriage Detailing',
            description: 'Pembersihan menyeluruh bagian bawah mobil.',
          },
          {
            title: 'Painting Metal Exhaust',
            description: 'Melapisi dan melindungi knalpot dari korosi.',
          },
        ],
      },
      {
        slug: 'kaki-kaki-engine-tune-up',
        title: 'Kaki-Kaki Komplit + Engine Pro Tune Up',
        description:
          'Kombinasi sempurna antara servis kaki-kaki 25 titik dengan tune-up mesin 65 komponen.',
        image: 'https://i.imgur.com/So4KJRN.jpeg',
        details: [
          {
            title: 'Tune Up 65 Komponen',
            description: 'Pemeriksaan dan pembersihan menyeluruh.',
          },
          {
            title: 'Gurah Mesin Carbon Cleaner',
            description: 'Khusus untuk mobil bensin, membersihkan ruang bakar.',
          },
          {
            title: 'General Check Up Kaki-Kaki 25 Titik',
            description: 'Inspeksi mendalam pada sistem suspensi.',
          },
          {
            title: 'Octane Booster & Stel Klep',
            description: 'Meningkatkan performa dan efisiensi mesin.',
          },
          {
            title: 'Injector Cleaning',
            description: 'Membersihkan injektor untuk pembakaran sempurna.',
          },
        ],
      },
      {
        slug: 'kaki-kaki-auto-detailing',
        title: 'Kaki-Kaki Komplit + Full Auto Detailing',
        description:
          'Paket perawatan total yang menggabungkan servis kaki-kaki komplit dengan detailing eksterior 3-langkah.',
        image: 'https://i.imgur.com/CPaOMIW.jpeg',
        details: [
          {
            title: 'Tune Up 65 Komponen',
            description: 'Mengembalikan performa mesin ke kondisi prima.',
          },
          {
            title: 'General Check Up Kaki-Kaki 25 Titik',
            description: 'Memastikan keamanan dan kenyamanan suspensi.',
          },
          {
            title: 'Full Detailing Eksterior 3 Step',
            description: 'Mengembalikan kilau cat mobil seperti baru.',
          },
          {
            title: 'Detailing Interior',
            description: 'Pembersihan menyeluruh bagian dalam kabin mobil.',
          },
          {
            title: 'Glass Treatment / Jamur Kaca',
            description: 'Menghilangkan jamur dan kotoran pada kaca.',
          },
        ],
      },
    ],
  },
  {
    slug: 'paket-combo-super-komplit',
    href: '/layanan/paket-combo-super-komplit',
    title: 'Paket Combo Super Komplit',
    description:
      'Perawatan menyeluruh dari mesin hingga kaki-kaki untuk performa maksimal.',
    image: '/services/service2.webp',
    details:
      'Layanan terlengkap kami yang mencakup tune-up mesin, servis AC, spooring, balancing, hingga pembersihan ruang bakar. Mobil Anda akan kembali ke kondisi prima.',
    variants: [
      {
        slug: 'super-komplit-1',
        title: 'Super Komplit 1',
        description:
          'Paket servis terlengkap yang mencakup tune-up 65 komponen, servis kaki-kaki, ganti oli Shell, rubberized undercoat, dan servis rem komplit untuk performa dan proteksi menyeluruh.',
        image: 'https://i.imgur.com/HGHqEUJ.jpeg',
        details: [
          {
            title: 'Tune Up 65 Komponen',
            description: 'Pemeriksaan dan pembersihan mesin secara menyeluruh.',
          },
          {
            title: 'Rubberized Undercoat',
            description: 'Aplikasi pelapis anti karat dan peredam suara.',
          },
          {
            title: 'Oli Shell HX 7 / Bardahl USA',
            description: 'Penggantian oli mesin dengan produk berkualitas.',
          },
          {
            title: 'Service Lower Arm & Ball Joint',
            description: 'Perawatan dan perbaikan komponen suspensi vital.',
          },
          {
            title: 'Transfusi Darah',
            description:
              'Mengganti dan membersihkan semua cairan vital kendaraan.',
          },
        ],
      },
      {
        slug: 'super-komplit-2',
        title: 'Super Komplit 2',
        description:
          'Semua layanan dari Super Komplit 1 ditambah dengan Full Detailing interior & eksterior, glass coating, dan Nano Ceramic Coating 3 lapis untuk tampilan mobil seperti baru.',
        image: 'https://i.imgur.com/JbaCFqf.jpeg',
        details: [
          {
            title: 'Nano Ceramic Coating 3 Layer',
            description:
              'Proteksi cat premium dengan tiga lapisan kilau dan daya tahan.',
          },
          {
            title: 'Full Detailing (Interior & Eksterior)',
            description:
              'Pembersihan total untuk mengembalikan kondisi mobil seperti baru.',
          },
          {
            title: 'Glass Coating',
            description:
              'Memberikan efek daun talas dan visibilitas jernih pada kaca.',
          },
          {
            title: 'Engine Detailing',
            description:
              'Pembersihan dan proteksi detail pada area ruang mesin.',
          },
          {
            title: 'Back to Black Permanent',
            description:
              'Mengembalikan warna hitam pekat pada trim plastik yang pudar.',
          },
        ],
      },
      {
        slug: 'combo-all-in-1',
        title: 'Combo All in 1',
        description:
          'Paket ultimate yang menggabungkan semua layanan terbaik: tune-up, servis kaki-kaki, full detailing, nano ceramic coating, dan rekondisi per/spring untuk kondisi mobil yang sempurna luar dan dalam.',
        image: 'https://i.imgur.com/CPefCHL.jpeg',
        details: [
          {
            title: 'Full Detailing + Nano Ceramic Coating',
            description:
              'Kombinasi perawatan penampilan terbaik luar dan dalam.',
          },
          {
            title: 'Rekondisi Per / Spring',
            description:
              'Mengembalikan ketinggian dan kenyamanan suspensi standar.',
          },
          {
            title: 'Service Kaki-Kaki Komplit',
            description:
              'Mencakup Lower Arm, Tie Rod, Bearing, dan Link Stabilizer.',
          },
          {
            title: 'Tune Up 65 Komponen',
            description: 'Pemeriksaan dan pembersihan mesin secara menyeluruh.',
          },
          {
            title: 'Rubberized Undercoat',
            description: 'Aplikasi pelapis anti karat dan peredam suara.',
          },
        ],
      },
    ],
  },
  {
    slug: 'paket-custom-suspension',
    href: '/layanan/paket-custom-suspension',
    title: 'Paket Custom Suspension',
    description:
      'Tingkatkan handling dan gaya dengan suspensi yang disesuaikan.',
    image: '/services/service3.webp',
    details:
      'Modifikasi sistem suspensi sesuai dengan preferensi Anda, baik untuk kebutuhan harian, balap, maupun off-road. Kami menggunakan produk berkualitas untuk hasil terbaik.',
    variants: [
      {
        slug: 'custom-suspension-hemat',
        title: 'Custom Suspension Hemat',
        description:
          'Paket ekonomis untuk mendapatkan tampilan ceper (lowering) melalui custom suspensi dan cutting per, sudah termasuk inspeksi kaki-kaki dan tune up 65 komponen.',
        image: 'https://i.imgur.com/e0ZVPJE.jpeg',
        details: [
          {
            title: 'Custom Suspensi (Ceper)',
            description:
              'Modifikasi suspensi dengan metode cutting per pada 4 roda.',
          },
          {
            title: 'Custom Ceper Sesuai Keinginan',
            description: 'Bisa disesuaikan untuk harian maupun custom extreme.',
          },
          {
            title: 'Free Fitting & Uji Coba',
            description: 'Pemasangan dan pengetesan suspensi hingga pas.',
          },
          {
            title: 'Tune Up 65 Komponen',
            description: 'Termasuk pembersihan mesin dan injector cleaner.',
          },
          {
            title: 'Pengisian Nitrogen Shockbreaker',
            description: 'Meningkatkan stabilitas dan kenyamanan suspensi.',
          },
        ],
      },
      {
        slug: 'custom-suspension-spring',
        title: 'Custom Suspension + Custom Spring',
        description:
          'Solusi kustomisasi tinggi/ceper mobil sesuai keinginan (harian/extreme) dengan custom spring, termasuk painting shockbreaker, tune up, dan spooring balancing.',
        image: 'https://i.imgur.com/2Oz0SRo.jpeg',
        details: [
          {
            title: 'Custom Spring / Per 4 Roda',
            description:
              'Kustomisasi per untuk mengatur tinggi/ceper tanpa memotong per ori.',
          },
          {
            title: 'Custom Shockbreaker + Painting',
            description:
              'Penyesuaian tingkat kekerasan (keras/empuk) shockbreaker.',
          },
          {
            title: 'Custom Stopper Shock',
            description:
              'Melindungi shockbreaker dari benturan saat suspensi bekerja penuh.',
          },
          {
            title: 'Spooring + Balancing',
            description:
              'Memastikan kelurusan dan keseimbangan roda setelah modifikasi.',
          },
          {
            title: 'Tune Up 65 Komponen',
            description: 'Termasuk pembersihan mesin dan injector cleaner.',
          },
        ],
      },
      {
        slug: 'combo-suspension-coil-over',
        title: 'Combo Suspension + Custom Coil Over',
        description:
          'Paket suspensi ultimate dengan custom coil over yang bisa diatur tinggi dan cepernya, dipadukan dengan custom spring, tune up, spooring, dan inspeksi AC.',
        image: 'https://i.imgur.com/1AAq6y0.jpeg',
        details: [
          {
            title: 'Custom Coil Over',
            description:
              'Suspensi yang bisa diatur tinggi dan cepernya secara mandiri.',
          },
          {
            title: 'Custom Spring / Per 4 Roda',
            description: 'Dipadukan dengan coil over untuk performa maksimal.',
          },
          {
            title: 'Custom Shockbreaker (Keras/Empuk)',
            description: 'Penyesuaian tingkat redaman sesuai preferensi.',
          },
          {
            title: 'Free Fitting & Uji Coba',
            description: 'Pemasangan dan pengetesan suspensi hingga pas.',
          },
          {
            title: 'Jamur Kaca / Nano Burn Headlamp',
            description:
              'Bonus perawatan kaca atau restorasi lampu depan (pilih salah satu).',
          },
        ],
      },
    ],
  },
  {
    slug: 'paket-diesel',
    href: '/layanan/paket-diesel',
    title: 'Paket Diesel',
    description:
      'Perawatan khusus untuk mesin diesel agar tetap bertenaga dan efisien.',
    image: '/services/service4.webp',
    details:
      'Layanan ini berfokus pada sistem injeksi, filter bahan bakar, dan komponen vital lainnya pada mesin diesel untuk memastikan tenaga maksimal dan emisi yang rendah.',
    variants: [
      {
        slug: 'tune-up-diesel-komplit',
        title: 'Tune Up Diesel Komplit',
        description:
          'Perawatan esensial untuk mesin diesel, meliputi tune up 65 komponen, general check up kaki-kaki & AC, serta service purging untuk membersihkan sistem bahan bakar.',
        image: 'https://i.imgur.com/5LRkj4q.jpeg',
        details: [
          {
            title: 'Tune Up 65 Komponen',
            description: 'Pemeriksaan mesin diesel menyeluruh.',
          },
          {
            title: 'Service Purging Diesel',
            description: 'Membersihkan jalur bahan bakar tanpa bongkar.',
          },
          {
            title: 'Gurah EGR & Intercooler',
            description:
              'Membersihkan sistem resirkulasi gas buang dan pendingin udara.',
          },
          {
            title: 'Service Pembersihan Intake Manifold',
            description: 'Mengembalikan aliran udara yang optimal ke mesin.',
          },
          {
            title: 'Free Cetane Booster + Smokeless Booster',
            description: 'Meningkatkan kualitas solar dan mengurangi asap.',
          },
        ],
      },
      {
        slug: 'tune-up-diesel-super-komplit',
        title: 'Tune Up Diesel Super Komplit',
        description:
          'Lebih dari sekadar tune up, paket ini mencakup kalibrasi injector & common rail untuk pembakaran sempurna, irit BBM, dan tenaga yang lebih buas.',
        image: 'https://i.imgur.com/gje0dom.jpeg',
        details: [
          {
            title: 'Service Kalibrasi Injector',
            description: 'Mengembalikan semprotan bahan bakar yang presisi.',
          },
          {
            title: 'Pencabutan Nozzle Bahan Bakar',
            description: 'Pembersihan mendalam untuk pembakaran sempurna.',
          },
          {
            title: 'Service Kalibrasi Common Rail',
            description:
              'Memastikan tekanan bahan bakar yang stabil dan optimal.',
          },
          {
            title: 'Gurah Turbo',
            description: 'Membersihkan, menyetel, dan mengecek komponen turbo.',
          },
          {
            title: 'Engine Scanner',
            description:
              'Diagnosa elektronik untuk mendeteksi masalah tersembunyi.',
          },
        ],
      },
      {
        slug: 'tune-up-diesel-ultimate',
        title: 'Tune Up Diesel Ultimate',
        description:
          'Paket perawatan diesel terlengkap dengan tambahan ganti oli mesin Shell HX 7, filter oli, dan transfusi darah untuk performa mesin yang paling puncak.',
        image: 'https://i.imgur.com/Rjqjt1e.jpeg',
        details: [
          {
            title: 'Oli Mesin Shell HX 7 / Bardahl Diesel',
            description: 'Penggantian oli dengan produk khusus mesin diesel.',
          },
          {
            title: 'Transfusi Darah + Engine Flush',
            description:
              'Mengganti total cairan vital dan membersihkan sirkulasi oli.',
          },
          {
            title: 'Service Kuras Tangki',
            description:
              'Membersihkan tangki bahan bakar dari endapan dan kotoran.',
          },
          {
            title: 'Service Kalibrasi Injector & Common Rail',
            description: 'Paket kalibrasi lengkap untuk performa puncak.',
          },
          {
            title: 'Gurah Turbo',
            description: 'Membersihkan, menyetel, dan mengecek komponen turbo.',
          },
        ],
      },
      {
        slug: 'pasti-puas-1-diesel',
        title: 'Pasti Puas 1 Diesel',
        description:
          'Kombinasi servis kaki-kaki komplit dengan tune up diesel super komplit. Solusi total untuk performa mesin dan kenyamanan berkendara.',
        image: 'https://i.imgur.com/dfDqwQc.jpeg',
        details: [
          {
            title: 'Service Kaki-Kaki Komplit',
            description:
              'Perawatan menyeluruh 25 komponen suspensi dan kemudi.',
          },
          {
            title: 'Tune Up Diesel Super Komplit',
            description: 'Termasuk kalibrasi injector dan common rail.',
          },
          {
            title: 'Rubberized Undercoat',
            description: 'Aplikasi pelapis anti karat dan peredam suara.',
          },
          {
            title: 'Gurah Turbo & Intercooler',
            description:
              'Membersihkan sistem forced induction untuk tenaga maksimal.',
          },
          {
            title: 'Service CV Joint / Joint Kopel',
            description: 'Perawatan komponen penggerak roda.',
          },
        ],
      },
      {
        slug: 'pasti-puas-2-diesel',
        title: 'Pasti Puas 2 Diesel',
        description:
          'Gabungan servis kaki-kaki komplit dan tune up diesel komplit, ditambah ganti oli Shell, transfusi darah, dan engine flush untuk kesehatan mesin jangka panjang.',
        image: 'https://i.imgur.com/V33LrVi.jpeg',
        details: [
          {
            title: 'Service Kaki-Kaki Komplit',
            description:
              'Perawatan menyeluruh 25 komponen suspensi dan kemudi.',
          },
          {
            title: 'Tune Up Diesel Komplit',
            description: 'Termasuk service purging diesel dan gurah EGR.',
          },
          {
            title: 'Oli Mesin Shell HX 7 / Bardahl Diesel',
            description: 'Penggantian oli dengan produk khusus mesin diesel.',
          },
          {
            title: 'Transfusi Darah + Engine Flush',
            description:
              'Mengganti total cairan vital dan membersihkan sirkulasi oli.',
          },
          {
            title: 'Service Kuras Tangki',
            description:
              'Membersihkan tangki bahan bakar dari endapan dan kotoran.',
          },
        ],
      },
      {
        slug: 'pasti-puas-3-diesel',
        title: 'Pasti Puas 3 Diesel',
        description:
          'Perawatan premium yang menggabungkan tune up diesel super komplit dengan full detailing, glass coating, dan nano ceramic coating 3 lapis.',
        image: 'https://i.imgur.com/GTiUK9h.jpeg',
        details: [
          {
            title: 'Nano Ceramic Coating 3 Layer',
            description:
              'Proteksi cat premium dengan tiga lapisan kilau dan daya tahan.',
          },
          {
            title: 'Full Detailing (Interior & Eksterior)',
            description:
              'Pembersihan total untuk mengembalikan kondisi mobil seperti baru.',
          },
          {
            title: 'Tune Up Diesel Super Komplit',
            description: 'Termasuk kalibrasi injector dan common rail.',
          },
          {
            title: 'Glass Coating + Treatment',
            description:
              'Memberikan efek daun talas dan visibilitas jernih pada kaca.',
          },
          {
            title: 'Engine Detailing',
            description:
              'Pembersihan dan proteksi detail pada area ruang mesin.',
          },
        ],
      },
      {
        slug: 'pasti-puas-4-diesel',
        title: 'Pasti Puas 4 Diesel',
        description:
          'Paket paling ultimate: servis kaki-kaki komplit, tune up diesel ultimate, ganti oli, full detailing, dan nano ceramic coating 3 lapis. Kondisi mobil kembali seperti baru.',
        image: 'https://i.imgur.com/qqRjtvw.jpeg',
        details: [
          {
            title: 'Service Kaki-Kaki Komplit',
            description:
              'Perawatan menyeluruh 25 komponen suspensi dan kemudi.',
          },
          {
            title: 'Tune Up Diesel Ultimate',
            description:
              'Paket tune up terlengkap termasuk penggantian oli dan semua cairan.',
          },
          {
            title: 'Full Detailing (Interior & Eksterior)',
            description:
              'Pembersihan total untuk mengembalikan kondisi mobil seperti baru.',
          },
          {
            title: 'Nano Ceramic Coating 3 Layer',
            description:
              'Proteksi cat premium dengan tiga lapisan kilau dan daya tahan.',
          },
          {
            title: 'Engine Detailing',
            description:
              'Pembersihan dan proteksi detail pada area ruang mesin.',
          },
        ],
      },
    ],
  },
  {
    slug: 'paket-kaki-kaki',
    href: '/layanan/paket-kaki-kaki',
    title: 'Paket Kaki Kaki',
    description:
      'Fokus pada perbaikan dan perawatan komponen suspensi dan kemudi.',
    image: '/services/service5.webp',
    details:
      'Perbaikan spesifik pada komponen seperti tie rod, ball joint, shock absorber, dan bushing untuk mengatasi masalah handling dan kenyamanan.',
    variants: [
      {
        slug: 'kaki-kaki-super-hemat',
        title: 'Kaki-Kaki Super Hemat',
        description:
          'Paket servis kaki-kaki esensial yang mencakup 17 item pengerjaan, termasuk servis link stabilizer, ball joint, tie rod, dan general check up 25 titik.',
        image: 'https://i.imgur.com/uqcyd3F.jpeg',
        details: [
          {
            title: 'Service Link Stabilizer',
            description:
              'Rekondisi dan press untuk mengembalikan fungsi stabilizer.',
          },
          {
            title: 'Service Ball Joint & Tie Rod',
            description:
              'Perbaikan komponen kemudi untuk handling yang presisi.',
          },
          {
            title: 'Service Rem Komplit 4 Roda',
            description: 'Pemeriksaan dan pembersihan sistem pengereman.',
          },
          {
            title: 'General Check Up Kaki-Kaki 25 Titik',
            description: 'Inspeksi menyeluruh pada sistem suspensi.',
          },
          {
            title: 'Engine Scanner',
            description: 'Diagnosa elektronik untuk mendeteksi masalah mesin.',
          },
        ],
      },
      {
        slug: 'kaki-kaki-komplit',
        title: 'Kaki-Kaki Komplit',
        description:
          'Perawatan kaki-kaki menyeluruh dengan tambahan tune up 65 komponen, gurah mesin, injector cleaning, dan rubberized undercoat untuk proteksi ekstra.',
        image: 'https://i.imgur.com/GvrY6ki.jpeg',
        details: [
          {
            title: 'Tune Up 65 Komponen',
            description: 'Pemeriksaan dan pembersihan mesin secara menyeluruh.',
          },
          {
            title: 'Gurah Mesin / Injector Cleaning',
            description: 'Membersihkan ruang bakar dan sistem injeksi.',
          },
          {
            title: 'Rubberized Undercoat',
            description: 'Aplikasi pelapis anti karat dan peredam suara.',
          },
          {
            title: 'Service Kaki-Kaki 25 Titik',
            description: 'Termasuk service ball joint, tie rod, dan bearing.',
          },
          {
            title: 'Wheel Dressing',
            description: 'Memberi kilau dan proteksi pada ban.',
          },
        ],
      },
      {
        slug: 'kaki-kaki-super-komplit',
        title: 'Kaki-Kaki Super Komplit',
        description:
          'Semua layanan dari paket Komplit ditambah dengan rekondisi CV joint, inspeksi AC, dan rekondisi per/spring untuk kenyamanan suspensi yang maksimal.',
        image: 'https://i.imgur.com/g0bGkJo.jpeg',
        details: [
          {
            title: 'Rekondisi CV Joint / Joint Kopel',
            description: 'Perawatan komponen penggerak roda luar dan dalam.',
          },
          {
            title: 'Service Racksteer (EPS)',
            description: 'Rekondisi dan setel ulang sistem kemudi elektronik.',
          },
          {
            title: 'Rekondisi Per / Spring',
            description: 'Mengembalikan ketinggian dan kenyamanan suspensi.',
          },
          {
            title: 'Rematching / Bubut Disk Brake',
            description:
              'Meratakan permukaan piringan cakram untuk pengereman optimal.',
          },
          {
            title: 'Purging Diesel (Khusus Mobil Diesel)',
            description: 'Membersihkan sistem bahan bakar mesin diesel.',
          },
        ],
      },
      {
        slug: 'kaki-kaki-ultimate',
        title: 'Kaki-Kaki Ultimate',
        description:
          'Paket paling lengkap yang mencakup semua layanan dari Super Komplit ditambah dengan service + ganti oli shock breaker dan rekondisi idle arm.',
        image: 'https://i.imgur.com/Jv7Mx0E.jpeg',
        details: [
          {
            title: 'Service + Ganti Oli Shock Breaker',
            description:
              'Mengembalikan fungsi redaman shockbreaker seperti baru.',
          },
          {
            title: 'Rekondisi Idle Arm',
            description: 'Perbaikan komponen penting pada sistem kemudi.',
          },
          {
            title: 'Rekondisi CV Joint / Joint Kopel',
            description: 'Perawatan komponen penggerak roda luar dan dalam.',
          },
          {
            title: 'Service Racksteer (EPS)',
            description: 'Rekondisi dan setel ulang sistem kemudi elektronik.',
          },
          {
            title: 'Rekondisi Per / Spring',
            description: 'Mengembalikan ketinggian dan kenyamanan suspensi.',
          },
        ],
      },
    ],
  },
  {
    slug: 'paket-overhaul-engine',
    href: '/layanan/paket-overhaul-engine',
    title: 'Paket Overhaul Engine',
    description:
      'Mengembalikan kondisi mesin seperti baru untuk performa puncak.',
    image: '/services/service6.webp',
    details:
      'Proses pembongkaran mesin total untuk pembersihan, pemeriksaan, dan penggantian komponen internal yang aus. Mesin Anda akan diremajakan sepenuhnya.',
    variants: [
      {
        slug: 'overhaul-engine',
        title: 'Overhaul Engine',
        description:
          'Paket esensial untuk restorasi mesin, mencakup turun 1/2 mesin, sandblasting karat, pembersihan oil sludge, dan servis komponen internal seperti crankshaft dan silinder head.',
        image: 'https://i.imgur.com/Eg6TUkr.jpeg',
        details: [
          {
            title: 'Turun 1/2 Mesin',
            description:
              'Pembongkaran sebagian mesin untuk pembersihan internal.',
          },
          {
            title: 'Cleaning Seluruh Oil Sludge',
            description: 'Membersihkan lumpur dan kerak oli di seluruh mesin.',
          },
          {
            title: 'Sandblasting Karat Mesin',
            description: 'Menghilangkan karat pada komponen mesin.',
          },
          {
            title: 'Service Crankshaft & Silinder Head',
            description: 'Pemeriksaan dan servis komponen vital mesin.',
          },
          {
            title: 'Transfusi Darah / Oil Extractor',
            description: 'Mengganti dan membersihkan semua cairan vital.',
          },
        ],
      },
      {
        slug: 'overhaul-engine-komplit',
        title: 'Overhaul Engine Komplit',
        description:
          'Semua layanan dari paket Overhaul Engine, ditambah dengan ganti oli Shell HX 7, oil treatment, engine flush, dan catalytic cleaner untuk pembersihan dan proteksi menyeluruh.',
        image: 'https://i.imgur.com/jrpnX3f.jpeg',
        details: [
          {
            title: 'Oli Shell HX 7 / Bardahl',
            description: 'Penggantian oli mesin dengan produk berkualitas.',
          },
          {
            title: 'Engine Flush + Oil Treatment',
            description:
              'Membersihkan sirkulasi oli dan memberikan aditif pelindung.',
          },
          {
            title: 'Catalytic Cleaner',
            description:
              'Membersihkan catalytic converter untuk emisi lebih baik.',
          },
          {
            title: 'Turun 1/2 Mesin',
            description:
              'Mencakup semua layanan dari paket Overhaul Engine dasar.',
          },
          {
            title: 'Pengeboran Kerak Mesin',
            description:
              'Membersihkan kerak membandel di jalur internal mesin.',
          },
        ],
      },
      {
        slug: 'super-overhaul-engine',
        title: 'Super Overhaul Engine',
        description:
          'Paket paling premium yang mencakup semua layanan dari paket Komplit, ditambah servis bearing crankshaft, connecting rod, washer crankshaft, dan rust remover area kaki-kaki.',
        image: 'https://i.imgur.com/OF3Pqnb.jpeg',
        details: [
          {
            title: 'Service Bearing Crankshaft',
            description:
              'Servis metal duduk untuk performa poros engkol optimal.',
          },
          {
            title: 'Service Connecting Rod Bearing',
            description:
              'Servis metal jalan untuk pergerakan piston yang mulus.',
          },
          {
            title: 'Service Karter Oli + Pompa Oli',
            description: 'Pembersihan dan pemeriksaan sistem sirkulasi oli.',
          },
          {
            title: 'Rust Remover Area Kaki Kaki',
            description:
              'Menghilangkan karat pada area kaki-kaki sebagai bonus.',
          },
          {
            title: 'Oli Shell HX 7 + Filter Oli',
            description: 'Paket penggantian oli dan filter oli lengkap.',
          },
        ],
      },
    ],
  },
  {
    slug: 'paket-racksteer-hemat',
    href: '/layanan/paket-racksteer-hemat',
    title: 'Paket Racksteer Hemat',
    description: 'Solusi ekonomis untuk perbaikan sistem kemudi rack steer.',
    image: '/services/service7.webp',
    details:
      'Mengatasi masalah pada sistem kemudi seperti setir berat atau bunyi dengan solusi efektif dan terjangkau, termasuk garansi pengerjaan.',
    variants: [
      {
        slug: 'kaki-kaki-racksteer-hemat',
        title: 'Kaki-Kaki Racksteer Hemat',
        description:
          'Perawatan terlengkap dan bergaransi, mencakup 21 item pengerjaan termasuk service rekondisi & setel ulang racksteer (EPS), tune up, gurah mesin, dan inspeksi kaki-kaki 25 titik.',
        image: 'https://i.imgur.com/FgKZnof.jpeg',
        details: [
          {
            title: 'Service Racksteer (EPS)',
            description: 'Rekondisi dan setel ulang sistem kemudi elektronik.',
          },
          {
            title: 'Bushing Racksteer Custom',
            description:
              'Penggantian bushing custom untuk durabilitas lebih baik.',
          },
          {
            title: 'Tune Up 65 Komponen',
            description: 'Pemeriksaan dan pembersihan mesin secara menyeluruh.',
          },
          {
            title: 'Rubberized Undercoat',
            description: 'Aplikasi pelapis anti karat dan peredam suara.',
          },
          {
            title: 'General Check Up Kaki Kaki 25 Titik',
            description: 'Inspeksi menyeluruh pada sistem suspensi dan kemudi.',
          },
        ],
      },
    ],
  },
  {
    slug: 'paket-special',
    href: '/layanan/paket-special',
    title: 'Paket Special',
    description: 'Penawaran khusus dengan kombinasi layanan paling populer.',
    image: '/services/service8.webp',
    details:
      'Paket ini dirancang khusus untuk memberikan perawatan esensial yang paling sering dibutuhkan oleh pelanggan kami, dengan harga yang lebih terjangkau.',
    variants: [
      {
        slug: 'paket-special1',
        title: 'Paket Special 1',
        description:
          'Perawatan premium yang mencakup tune up 65 komponen, gurah mesin, injector cleaning, catalytic cleaner, dan servis fuel system lengkap dengan penggantian oli Shell HX 8.',
        image: 'https://i.imgur.com/XpF9v7W.jpeg',
        details: [
          {
            title: 'Tune Up 65 Komponen',
            description: 'Pemeriksaan dan pembersihan mesin secara menyeluruh.',
          },
          {
            title: 'Paket Fuel System',
            description:
              'Termasuk kuras tangki dan pembersihan filter bahan bakar.',
          },
          {
            title: 'Paket Rem Komplit',
            description: 'Pemeriksaan dan servis menyeluruh sistem pengereman.',
          },
          {
            title: 'Paket AC All In',
            description:
              'Perawatan dan pembersihan total sistem pendingin kabin.',
          },
          {
            title: 'Oli Shell HX 8 + Filter Oli',
            description:
              'Penggantian oli mesin full synthetic dan filter baru.',
          },
        ],
      },
      {
        slug: 'paket-special2',
        title: 'Paket Special 2',
        description:
          'Paket yang berfokus pada keamanan, meliputi tune up 65 komponen, gurah mesin/injector cleaning, servis purging diesel, dan pengecekan serta servis sistem pengereman.',
        image: 'https://i.imgur.com/teQJFur.jpeg',
        details: [
          {
            title: 'Tune Up 65 Komponen',
            description: 'Pemeriksaan dan pembersihan mesin secara menyeluruh.',
          },
          {
            title: 'Gurah Mesin / Purging Diesel',
            description: 'Membersihkan ruang bakar dan jalur bahan bakar.',
          },
          {
            title: 'Paket Radiator',
            description: 'Perawatan sistem pendingin untuk mencegah overheat.',
          },
          {
            title: 'Paket Rem',
            description:
              'Pemeriksaan dan servis sistem pengereman untuk keamanan.',
          },
          {
            title: 'General Check Up',
            description:
              'Inspeksi umum untuk memastikan semua komponen berfungsi baik.',
          },
        ],
      },
    ],
  },
  {
    slug: 'paket-steering',
    href: '/layanan/paket-steering',
    title: 'Paket Steering',
    description:
      'Perbaikan dan perawatan sistem kemudi untuk handling yang presisi.',
    image: '/services/service9.webp',
    details:
      'Layanan lengkap untuk semua jenis sistem kemudi, dari power steering hidrolik hingga EPS modern, untuk memastikan kontrol penuh dan respons akurat.',
    variants: [
      {
        slug: 'steering-komplit',
        title: 'Steering Komplit',
        description:
          'Servis kaki-kaki dan rekondisi steering terlengkap, mencakup 20 item pengerjaan termasuk tune up, gurah mesin, dan pengecekan sensor-sensor kelistrikan.',
        image: 'https://i.imgur.com/jidnpzM.jpeg',
        details: [
          {
            title: 'Rekondisi Joint Steer & Column Steer',
            description:
              'Perbaikan sendi dan kolom setir untuk handling presisi.',
          },
          {
            title: 'Pergantian Teflon Bearing Column Steer',
            description: 'Mengganti bearing untuk putaran setir yang mulus.',
          },
          {
            title: 'Pengecekan Sensor-Sensor Kelistrikan',
            description: 'Inspeksi sensor EPS, airbag, dan sensor angle.',
          },
          {
            title: 'Penyetelan Ulang (Enteng / Sedang)',
            description: 'Menyesuaikan bobot putaran setir sesuai preferensi.',
          },
          {
            title: 'Tune Up 65 Komponen',
            description: 'Pemeriksaan dan pembersihan mesin secara menyeluruh.',
          },
        ],
      },
      {
        slug: 'combo-kaki-kaki-steering-super-komplit',
        title: 'Combo Kaki-Kaki + Steering Super Komplit',
        description:
          'Kombinasi servis kaki-kaki dan steering dengan tambahan service racksteer, rekondisi cross joint, dan rubberized undercoat untuk perlindungan maksimal.',
        image: 'https://i.imgur.com/cfMDPKc.jpeg',
        details: [
          {
            title: 'Service Racksteer Rekondisi + Stel Ulang',
            description: 'Perbaikan dan penyesuaian ulang sistem racksteer.',
          },
          {
            title: 'Rekondisi Cross Joint',
            description: 'Memperbaiki sendi universal pada sistem kemudi.',
          },
          {
            title: 'Rekondisi Joint Steer Atas & Bawah',
            description: 'Perbaikan menyeluruh pada sendi-sendi setir.',
          },
          {
            title: 'Rubberized Undercoat',
            description: 'Aplikasi pelapis anti karat dan peredam suara.',
          },
          {
            title: 'Tune Up 65 Komponen + Engine Scanner',
            description: 'Paket tune up lengkap dengan diagnosa elektronik.',
          },
        ],
      },
      {
        slug: 'combo-kaki-kaki-steering-ultimate',
        title: 'Combo Kaki-Kaki + Steering Ultimate',
        description:
          'Paket terlengkap yang menggabungkan semua layanan dari paket Super Komplit ditambah dengan service shockbreaker, rekondisi CV joint, dan rekondisi per/spring.',
        image: 'https://i.imgur.com/eF4hAcS.jpeg',
        details: [
          {
            title: 'Service Shockbreaker dan Ganti Oli',
            description: 'Mengembalikan fungsi redaman suspensi seperti baru.',
          },
          {
            title: 'Rekondisi Per / Spring',
            description: 'Mengembalikan ketinggian dan kenyamanan suspensi.',
          },
          {
            title: 'Rematching Disk Brake 4 Roda',
            description:
              'Meratakan permukaan piringan cakram untuk pengereman optimal.',
          },
          {
            title: 'Rekondisi Cross Joint dan Idle Arm',
            description:
              'Perbaikan komponen vital pada sistem kemudi dan suspensi.',
          },
          {
            title: 'Service Racksteer Rekondisi dan Lower Arm',
            description:
              'Perbaikan menyeluruh pada sistem kemudi dan suspensi bawah.',
          },
        ],
      },
    ],
  },
  {
    slug: 'paket-super-hemat',
    href: '/layanan/paket-super-hemat',
    title: 'Paket Super Hemat',
    description: 'Pilihan cerdas untuk perawatan rutin dengan harga terbaik.',
    image: '/services/service10.webp',
    details:
      'Solusi perawatan berkala yang dirancang untuk menjaga kondisi mobil Anda tetap prima tanpa menguras kantong. Mencakup pengecekan dan servis esensial.',
    variants: [
      {
        slug: 'super-hemat-1',
        title: 'Super Hemat 1',
        description:
          'Paket terlengkap & terhemat, mencakup 15 item pengerjaan termasuk tune up, gurah mesin, ganti oli Shell HX 7, dan general check up kaki-kaki 25 titik.',
        image: 'https://i.imgur.com/i8sucn8.jpeg',
        details: [
          {
            title: 'Tune Up 65 Komponen',
            description: 'Pemeriksaan dan pembersihan mesin secara menyeluruh.',
          },
          {
            title: 'Oli Shell HX 7 + Filter Oli',
            description: 'Penggantian oli mesin dan filter oli baru.',
          },
          {
            title: 'Transfusi Darah',
            description:
              'Mengganti dan membersihkan semua cairan vital kendaraan.',
          },
          {
            title: 'General Check Up Kaki-Kaki 25 Titik',
            description: 'Inspeksi menyeluruh pada sistem suspensi.',
          },
          {
            title: 'Rust Remover Anti Karat',
            description:
              'Membersihkan dan melindungi dari karat pada area tertentu.',
          },
        ],
      },
      {
        slug: 'super-hemat-2',
        title: 'Super Hemat 2',
        description:
          'Semua layanan dari Super Hemat 1 dengan tambahan service AC All In + AC Cleaner untuk memastikan kesejukan kabin yang maksimal.',
        image: 'https://i.imgur.com/3kfLc0c.jpeg',
        details: [
          {
            title: 'Service AC All In + AC Cleaner',
            description:
              'Perawatan dan pembersihan total sistem pendingin kabin.',
          },
          {
            title: 'Tune Up 65 Komponen',
            description: 'Pemeriksaan dan pembersihan mesin secara menyeluruh.',
          },
          {
            title: 'Oli Shell HX 7 + Filter Oli',
            description: 'Penggantian oli mesin dan filter oli baru.',
          },
          {
            title: 'Transfusi Darah',
            description:
              'Mengganti dan membersihkan semua cairan vital kendaraan.',
          },
          {
            title: 'Paket Radiator',
            description: 'Perawatan sistem pendingin untuk mencegah overheat.',
          },
        ],
      },
      {
        slug: 'super-hemat-3',
        title: 'Super Hemat 3',
        description:
          'Paket Super Hemat dengan fokus pada sistem bahan bakar, mencakup kuras tangki dan service fuel pump untuk efisiensi pembakaran yang lebih baik.',
        image: 'https://i.imgur.com/IQTDrf2.jpeg',
        details: [
          {
            title: 'Kuras Tangki + Service Fuel Pump',
            description:
              'Membersihkan tangki dan pompa bahan bakar dari kotoran.',
          },
          {
            title: 'Tune Up 65 Komponen',
            description: 'Pemeriksaan dan pembersihan mesin secara menyeluruh.',
          },
          {
            title: 'Oli Shell HX 7 + Filter Oli',
            description: 'Penggantian oli mesin dan filter oli baru.',
          },
          {
            title: 'Transfusi Darah',
            description:
              'Mengganti dan membersihkan semua cairan vital kendaraan.',
          },
          {
            title: 'General Check Up Kaki-Kaki 25 Titik',
            description: 'Inspeksi menyeluruh pada sistem suspensi.',
          },
        ],
      },
      {
        slug: 'combo-super-hemat-auto-detailing',
        title: 'Combo Super Hemat + Auto Detailing',
        description:
          'Kombinasi perawatan mesin dan kaki-kaki dari paket Super Hemat dengan tambahan auto detailing seperti glass treatment, waxing, dan nano burn coating headlamp.',
        image: 'https://i.imgur.com/HQV7VyO.jpeg',
        details: [
          {
            title: 'Glass Treatment Jamur Kaca',
            description:
              'Menghilangkan jamur dan mengembalikan kejernihan kaca.',
          },
          {
            title: 'Nano Burn Coating Headlamp',
            description:
              'Restorasi lampu depan agar kembali bening (pilih salah satu).',
          },
          {
            title: 'Waxing + Eksterior 1 Step Polish',
            description:
              'Memberikan lapisan pelindung dan kilau pada cat mobil.',
          },
          {
            title: 'Inner Fender Detailing',
            description: 'Pembersihan detail pada bagian dalam spatbor.',
          },
          {
            title: 'Tune Up 65 Komponen + Engine Scanner',
            description: 'Paket tune up lengkap dengan diagnosa elektronik.',
          },
        ],
      },
    ],
  },
  {
    slug: 'paket-ac-mobil',
    href: '/layanan/paket-ac-mobil',
    title: 'Paket AC Mobil',
    description:
      'Spesialis perawatan dan perbaikan sistem pendingin untuk kenyamanan berkendara yang maksimal.',
    image: '/services/service11.webp',
    details:
      'Layanan lengkap untuk memastikan AC mobil Anda selalu dingin dan segar, mulai dari inspeksi, pembersihan, hingga perbaikan komponen.',
    variants: [
      {
        slug: 'super-dingin',
        title: 'PAKET SUPER DINGIN',
        description:
          'Solusi lengkap untuk AC mobil yang lebih dingin dan segar.',
        image: 'https://i.imgur.com/vRDRiA6.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Mencakup inspeksi AC di 20 titik, pengecekan kebocoran selang, cuci evaporator tanpa bongkar, fogging interior, cuci kondensor, dan cuci blower.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 400RB, sekarang hanya IDR 97RB.',
          },
        ],
      },
      {
        slug: 'super-dingin-komplit',
        title: 'PAKET SUPER DINGIN KOMPLIT',
        description:
          'Solusi perawatan AC dan kaki-kaki dengan garansi 30 hari.',
        image: 'https://i.imgur.com/NUqdp8W.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Meliputi 15 titik servis komponen AC, 25 titik inspeksi kaki-kaki, garansi 30 hari, dan spooring 3D gratis.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 1.500K, sekarang hanya IDR 550K.',
          },
        ],
      },
      {
        slug: 'super-menggigil-komplit',
        title: 'PAKET SUPER MENGGIGIL KOMPLIT',
        description:
          'Tingkatkan performa AC Anda dengan 22 titik servis dan gratis spooring 3D.',
        image: 'https://i.imgur.com/7nxFEDe.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Mencakup 22 titik servis komponen AC, 25 titik inspeksi kaki-kaki, garansi 30 hari, dan gratis spooring 3D.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 2.000K, sekarang hanya IDR 750K.',
          },
        ],
      },
      {
        slug: 'super-beku-komplit',
        title: 'PAKET SUPER BEKU KOMPLIT',
        description:
          'Solusi terlengkap untuk AC super dingin dan kaki-kaki prima.',
        image: 'https://i.imgur.com/ichPEr0.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Mencakup 25 titik servis komponen AC, 25 titik inspeksi kaki-kaki, garansi 30 hari, dan gratis spooring 3D.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 3.000K, sekarang hanya IDR 1.350K.',
          },
        ],
      },
    ],
  },
  {
    slug: 'paket-detailing',
    href: '/layanan/paket-detailing',
    title: 'Paket Detailing',
    description:
      'Mengembalikan kilau dan melindungi penampilan mobil Anda secara profesional.',
    image: '/services/service12.webp',
    details:
      'Layanan lengkap untuk merawat dan memproteksi eksterior maupun interior mobil Anda, mengembalikan kondisi mobil seperti baru.',
    variants: [
      {
        slug: 'basic-eksterior-express',
        title: 'PAKET BASIC EKSTERIOR EXPRESS DETAILING',
        description:
          'Paket detailing eksterior cepat untuk mengembalikan kilau mobil Anda secara efisien.',
        image: 'https://i.imgur.com/nRs3GNz.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Mencakup One Step Polish 3-in-1 (compound, wax, finishing), Car Wash Snow, Wheel Dressing, Paint Protection, serta Emblem & Spot Detailing.',
          },
          {
            title: 'Harga Spesial',
            description:
              'Dari Mulai dari IDR 799K, sekarang hanya START FROM IDR 399K.',
          },
        ],
      },
      {
        slug: 'basic-interior-express',
        title: 'PAKET BASIC INTERIOR EXPRESS DETAILING',
        description:
          'Pembersihan interior menyeluruh tanpa bongkar jok untuk interior yang bersih dan segar.',
        image: 'https://i.imgur.com/DJJ9MVb.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Meliputi Car Wash Snow, Deep Interior Cleaning, pembersihan atap, plafon, plastik, karpet, door trim, jok, cuci karpet basah, vacuum, hingga steaming uap.',
          },
          {
            title: 'Harga Spesial',
            description:
              'Dari Mulai dari IDR 799K, sekarang hanya START FROM IDR 399K.',
          },
        ],
      },
      {
        slug: 'cuci-jok-steam',
        title: 'PAKET CUCI SNOW JOK MOBIL',
        description:
          'Fokus pada kebersihan jok mobil Anda untuk hasil bersih maksimal dan wangi.',
        image: 'https://i.imgur.com/tFv8Pr6.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Meliputi Poles Snow Jok, vacuum noda, Spoot Cleaning, Interior Spray, pewangi, dan Steam Uap Jok Mobil.',
          },
          {
            title: 'Harga Spesial',
            description:
              'Dari Mulai dari IDR 700K, sekarang hanya START FROM IDR 350K.',
          },
        ],
      },
      {
        slug: 'engine-detailing',
        title: 'PAKET ENGINE DETAILING',
        description:
          'Perawatan ruang mesin secara detail untuk melindungi dan mengkilapkan hingga ke sudut tersulit.',
        image: 'https://i.imgur.com/h0RBkJr.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Meliputi pembersihan debu, kotoran, noda menempel, dan sisa oli, sekaligus melindungi dan mengkilapkan area ruang mesin.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 700.000, sekarang hanya IDR 350.000.',
          },
        ],
      },
      {
        slug: 'kinclong-eksterior-complete',
        title: 'PAKET KINCLONG EKSTERIOR',
        description:
          'Paket detailing eksterior lengkap untuk hasil maksimal dengan 4 Step Polish.',
        image: 'https://i.imgur.com/NSp6IDo.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Termasuk 4 Step Polish (heavy cut, medium cut, ultra super finish, waxing), Car Wash Snow, Glass Treatment, Wheel Dressing, dan Premium Glass Hydrophobic Protection.',
          },
          {
            title: 'Harga Spesial',
            description:
              'Dari Mulai dari IDR 1.300K, sekarang hanya START FROM IDR 650.000.',
          },
        ],
      },
      {
        slug: 'kinclong-interior-complete',
        title: 'PAKET KINCLONG INTERIOR',
        description:
          'Pembersihan interior super lengkap dengan bongkar jok total untuk menjangkau semua area.',
        image: 'https://i.imgur.com/kSPsWVQ.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Meliputi Deep Interior Cleaning dengan bongkar jok, pembersihan hama & serangga, cleaning & dressing door trim, jok, plastik, karpet, atap, hingga steaming uap.',
          },
          {
            title: 'Harga Spesial',
            description:
              'Dari Mulai dari IDR 1.700K, sekarang hanya START FROM IDR 850.000.',
          },
        ],
      },
      {
        slug: 'komplit-detailing-1',
        title: 'PAKET KOMPLIT DETAILING 1',
        description:
          'Paket kombinasi perawatan interior (tanpa bongkar jok) dan eksterior lengkap.',
        image: 'https://i.imgur.com/8vWyNh2.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Termasuk 4 step polish, wheel dressing, premium glass treatment, hydrophobic protection, engine detailing, dan deep interior cleaning.',
          },
          {
            title: 'Harga Spesial',
            description:
              'Dari Mulai dari IDR 1.700K, sekarang hanya START FROM IDR 900K.',
          },
        ],
      },
      {
        slug: 'komplit-detailing-2',
        title: 'PAKET KOMPLIT DETAILING 2',
        description:
          'Paket detailing terlengkap yang menggabungkan perawatan eksterior dan interior dengan bongkar jok total.',
        image: 'https://i.imgur.com/VivRtz4.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Semua layanan dari paket Komplit 1 ditambah dengan bongkar jok total untuk pembersihan hama dan serangga secara menyeluruh.',
          },
          {
            title: 'Harga Spesial',
            description:
              'Dari Mulai dari IDR 2.700K, sekarang hanya START FROM IDR 1.350K.',
          },
        ],
      },
      {
        slug: 'nano-burn-headlamp',
        title: 'PAKET NANO BURN COATING HEADLAMP',
        description:
          'Mengembalikan kondisi headlamp yang pudar dan kuning menjadi seperti baru.',
        image: 'https://i.imgur.com/PCOKXye.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Meningkatkan keamanan berkendara dengan pencahayaan optimal, melapisi dengan chemical premium, dan bonus poles headlamp.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 800.000, sekarang hanya IDR 399.000.',
          },
        ],
      },
    ],
  },
  {
    slug: 'paket-nano-ceramic-coating',
    href: '/layanan/paket-nano-ceramic-coating',
    title: 'Paket Nano Ceramic Coating',
    description:
      'Proteksi cat superior dengan teknologi nano-ceramic untuk kilau maksimal dan daya tahan jangka panjang.',
    image: '/services/service13.webp',
    details:
      'Layanan coating premium kami memberikan lapisan pelindung hidrofobik yang melindungi cat dari goresan halus, sinar UV, dan kontaminan, menjaga mobil Anda tetap terlihat seperti baru.',
    variants: [
      {
        slug: 'nano-ceramic-1',
        title: 'PAKET NANO CERAMIC COATING 1',
        description:
          'Paket perlindungan cat dasar dengan 3 layer Nano Ceramic Coating untuk kilau maksimal.',
        image: 'https://i.imgur.com/0fWHtJP.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Termasuk detailing interior & eksterior, glass treatment + hydrophobic, glass coat, cuci snow + clay bar, recovery trim, back to black permanent, dan layanan detailing esensial lainnya.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 4.000K, sekarang hanya IDR 1.999K.',
          },
        ],
      },
      {
        slug: 'nano-ceramic-2',
        title: 'PAKET NANO CERAMIC COATING 2',
        description:
          'Paket perlindungan tingkat lanjut ditambah dengan bongkar jok total untuk hasil lebih detail.',
        image: 'https://i.imgur.com/0woLjQd.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Mencakup semua layanan di Paket 1, ditambah dengan bongkar jok total untuk pembersihan hama & serangga, inner fender detailing, dan wheel dressing.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 4.400K, sekarang hanya IDR 2.399K.',
          },
        ],
      },
      {
        slug: 'super-komplit-nano-ceramic',
        title: 'PAKET SUPER KOMPLIT NANO CERAMIC COATING',
        description:
          'Paket proteksi dan detailing paling lengkap untuk kesempurnaan tampilan kendaraan Anda.',
        image: 'https://i.imgur.com/BnsTZeA.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Mencakup semua layanan di Paket 2, ditambah dengan Nano Burn Coating Headlamp, back to black permanent yang lebih mendalam, velg detailing, dan cuci snow jok.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 5.600K, sekarang hanya IDR 2.799K.',
          },
        ],
      },
    ],
  },
  {
    slug: 'paket-anti-karat',
    href: '/layanan/paket-anti-karat',
    title: 'Paket Anti Karat',
    description:
      'Perlindungan total untuk bagian bawah mobil Anda dari ancaman karat dan korosi.',
    image: '/services/service14.webp',
    details:
      'Layanan anti karat kami menggunakan material berkualitas tinggi yang juga berfungsi sebagai peredam suara dan penahan panas, memberikan proteksi lengkap untuk kolong mobil Anda.',
    variants: [
      {
        slug: 'super-hemat-1-karat',
        title: 'PAKET SUPER HEMAT 1',
        description:
          'Paket cuci steril uap komplit untuk kebersihan menyeluruh dari interior hingga eksterior.',
        image: 'https://i.imgur.com/NK2tAUE.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Mencakup cuci steril uap untuk evaporator, interior, eksterior, AC, kondensor, engine bay, ban & velg, serta inspeksi kaki-kaki, AC, dan fogging mobil.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 600.000, sekarang hanya IDR 299.000.',
          },
        ],
      },
      {
        slug: 'super-hemat-2-karat',
        title: 'PAKET SUPER HEMAT 2',
        description:
          'Layanan steamer uap lebih lengkap dengan bongkar jok untuk hasil maksimal.',
        image: 'https://i.imgur.com/wYuUk2p.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Semua layanan di Paket 1 ditambah cuci steril uap dengan bongkar jok dan pembersihan inner fender 4 roda.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 1.000K, sekarang hanya IDR 500.000.',
          },
        ],
      },
      {
        slug: 'combo-pasti-hemat-karat',
        title: 'PAKET COMBO PASTI HEMAT',
        description:
          'Paket lengkap untuk perlindungan kolong mobil dengan teknologi Rust Prevention.',
        image: 'https://i.imgur.com/wSAHStc.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Termasuk detailing, carwash, scrape karat kolong, dan aplikasi Anti Karat Rust Protection+ pada area kolong, doortrim, dan inner fender.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 2.000K, sekarang hanya IDR 999K.',
          },
        ],
      },
      {
        slug: 'triple-combo-1-karat',
        title: 'PAKET TRIPLE COMBO 1',
        description:
          'Paket ultimate yang menggabungkan Anti Karat, Restorasi Kolong, dan Undercarriage Detailing.',
        image: 'https://i.imgur.com/Xrwzox6.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Semua layanan dari Paket Combo Pasti Hemat ditambah proteksi anti karat menyeluruh, infrared rust protection, dan painting metal exhaust.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 3.000K, sekarang hanya IDR 1.500K.',
          },
        ],
      },
      {
        slug: 'triple-combo-2-karat',
        title: 'PAKET TRIPLE COMBO 2',
        description:
          'Kombinasi lengkap antara Undercarriage, Restorasi Kolong, dan Full Detailing.',
        image: 'https://i.imgur.com/6BgfKWn.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Selain proteksi anti karat dan restorasi, mobil Anda juga akan mendapatkan layanan full detailing interior dan eksterior, termasuk glass treatment dan glass coat.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 4.000K, sekarang hanya IDR 1.999K.',
          },
        ],
      },
      {
        slug: 'triple-combo-3-karat',
        title: 'PAKET TRIPLE COMBO 3',
        description:
          'Paket paling premium yang menggabungkan Anti Karat, Restorasi Kolong, dan Nano Ceramic Coating.',
        image: 'https://i.imgur.com/kXcPJsQ.jpeg',
        details: [
          {
            title: 'Detail Pengerjaan',
            description:
              'Dapatkan semua manfaat perlindungan anti karat dan detailing, disempurnakan dengan Nano Ceramic Coating 3 layer untuk proteksi cat dan kilau maksimal.',
          },
          {
            title: 'Harga Spesial',
            description: 'Dari IDR 6.000K, sekarang hanya IDR 2.999K.',
          },
        ],
      },
    ],
  },
];
