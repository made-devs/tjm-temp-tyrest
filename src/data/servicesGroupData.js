// Data dikelompokkan berdasarkan brand untuk digunakan di halaman layanan dengan tab.
export const serviceGroups = [
  {
    brand: 'TJM Auto Care',
    description: 'Solusi lengkap untuk mesin, kaki-kaki, dan servis umum.',
    services: [
      {
        slug: 'paket-special',
        href: '/layanan/paket-special',
        title: 'TJM Special Package',
        description:
          'Paket platinum, fuel system, healthy, dan kaki-kaki racksteer hemat.',
        image: '/services/autocare/special1.webp',
      },
      {
        slug: 'paket-member-tahunan',
        href: '/layanan/paket-member-tahunan',
        title: 'Paket Member Tahunan',
        description: 'Member tahunan dengan banyak benefit dan promo gratis.',
        image: '/services/autocare/member1.webp',
      },
      {
        slug: 'paket-super-hemat',
        href: '/layanan/paket-super-hemat',
        title: 'Paket Super Hemat',
        description:
          'Promo terbatas, terlengkap, terhemat, bergaransi 1 bulan.',
        image: '/services/autocare/hemat1.webp',
      },
      {
        slug: 'paket-combo-super-komplit',
        href: '/layanan/paket-combo-super-komplit',
        title: 'Paket Combo Super Komplit',
        description:
          'Paket combo service mobil & service kaki-kaki terlengkap dengan series kombinasi terengkap.',
        image: '/services/autocare/komplit1.webp',
      },
      {
        slug: 'paket-kaki-kaki',
        href: '/layanan/paket-kaki-kaki',
        title: 'Paket Kaki-Kaki',
        description: '93 layanan kaki-kaki mobil terlengkap & termurah.',
        image: '/services/autocare/kaki1.webp',
      },
      {
        slug: 'paket-combo-kaki-kaki',
        href: '/layanan/paket-combo-kaki-kaki',
        title: 'Paket Combo Kaki-Kaki',
        description: 'Perawatan kaki-kaki komplit plus service lainnya',
        image: '/services/autocare/combokaki1.webp',
      },
      {
        slug: 'paket-racksteer-ultimate',
        href: '/layanan/paket-racksteer-ultimate',
        title: 'Paket Racksteer',
        description:
          'Service rack steer, power steering, rebuild, dan promo gratis khusus.',
        image: '/services/autocare/racksteer2.webp',
      },
      {
        slug: 'paket-shockbreaker',
        href: '/layanan/paket-shockbreaker',
        title: 'Paket Shockbreaker',
        description:
          'Service shockbreaker depan & belakang, nitrogen, anti karat, dan lainnya.',
        image: '/services/autocare/shockbreaker1.webp',
      },
      {
        slug: 'paket-steering',
        href: '/layanan/paket-steering',
        title: 'Paket Steering',
        description:
          'Service kaki-kaki dan rekondisi steering terlengkap dan termurah.',
        image: '/services/autocare/steering1.webp',
      },
      {
        slug: 'paket-custom-suspension',
        href: '/layanan/paket-custom-suspension',
        title: 'Paket Custom Suspension',
        description:
          'Custom suspensi ceper, fitting, tune up, dan nitrogen shockbreaker.',
        image: '/services/autocare/suspension1.webp',
      },
      {
        slug: 'paket-diesel',
        href: '/layanan/paket-diesel',
        title: 'Paket Diesel',
        description:
          'Tune up, general check up, service rem, radiator, dan lainnya.',
        image: '/services/autocare/diesel1.webp',
      },
      {
        slug: 'paket-overhaul',
        href: '/layanan/paket-overhaul',
        title: 'Paket Overhaul',
        description:
          'Cegah biaya besar dengan pembersihan kerak & lumpur mesin.',
        image: '/services/autocare/overhaul1.webp',
      },
    ],
  },
  {
    brand: 'TJM AC Mobil',
    description:
      'Spesialis perawatan dan perbaikan sistem pendingin mobil Anda.',
    services: [
      {
        slug: 'paket-ac-series',
        href: '/layanan/paket-ac-series',
        title: 'Paket AC Series',
        description:
          'Layanan lengkap untuk memastikan AC mobil Anda selalu dingin dan segar.',
        image: '/services/ac/acseries1.webp',
      },
      {
        slug: 'paket-triple-combo',
        href: '/layanan/paket-triple-combo',
        title: 'Paket Triple Combo',
        description:
          'Paket lengkap AC, tune up, dan perawatan komprehensif dengan berbagai pilihan layanan premium, full detailing, nano ceramic coating, dan oli komplit untuk performa maksimal kendaraan Anda.',
        image: '/services/ac/triplecombo1.webp',
      },
    ],
  },
  {
    brand: 'TJM Auto Detailing',
    description: 'Mengembalikan kilau dan melindungi penampilan mobil Anda.',
    services: [
      {
        slug: 'paket-detailing-series',
        href: '/layanan/paket-detailing-series',
        title: 'Paket Detailing Series',
        description:
          'Paket detailing lengkap dari eksterior hingga interior dengan berbagai pilihan, mulai dari basic express detailing hingga paket cuci salju premium dengan steam uap untuk hasil maksimal.',
        image: '/services/detailing1.webp',
      },
      {
        slug: 'paket-nano-ceramic-coating',
        href: '/layanan/paket-nano-ceramic-coating',
        title: 'Paket Nano Ceramic Coating',
        description:
          'Paket perlindungan cat premium dengan nano ceramic coating 3 layer, interior & eksterior full detailing, glass treatment, dan berbagai layanan detail lengkap untuk proteksi maksimal kendaraan Anda.',
        image: '/services/detailing/nano1.webp',
      },
      {
        slug: 'paket-pasti-kinclong',
        href: '/layanan/paket-pasti-kinclong',
        title: 'Paket Pasti Kinclong',
        description:
          'Paket detailing premium dengan ultra nano coating, cuci snow, interior & eksterior full detailing, engine detailing, dan berbagai layanan detail lengkap untuk hasil kinclong sempurna.',
        image: '/services/detailing/kinclong1.webp',
      },
    ],
  },
  {
    brand: 'TJM Undercarriage & Rust Protection+',
    description: 'Perlindungan total dari ancaman karat dan korosi.',
    services: [
      {
        slug: 'paket-combo-pasti-hemat',
        href: '/layanan/paket-combo-pasti-hemat',
        title: 'Paket Combo Pasti Hemat',
        description:
          'Paket combo lengkap anti karat dan restorasi kolong dengan detailing kolong mobil, carwash kolong, scrape karat, perlindungan rust, engine detailing, dan inspeksi lengkap dengan harga promo terjangkau.',
        image: '/services/undercarriage/undercarriage1.webp',
      },
      {
        slug: 'paket-super-hemat-undercarriage',
        href: '/layanan/paket-super-hemat-undercarriage',
        title: 'Paket Super Hemat',
        description:
          'Paket super hemat dengan vaporizer steamer UAP komplit untuk pembersihan dan sterilisasi interior, eksterior, AC mobil, dan engine bay dengan teknologi steam terkini.',
        image: '/services/undercarriage/undercarriage2.webp',
      },
      {
        slug: 'paket-triple-combo-undercarriage',
        href: '/layanan/paket-triple-combo-undercarriage',
        title: 'Paket Triple Combo',
        description:
          'Paket triple combo lengkap dengan anti karat, restorasi kolong, dan undercarriage detailing carwash untuk hasil pembersihan dan perlindungan maksimal.',
        image: '/services/undercarriage/undercarriage5.webp',
      },
    ],
  },
];
