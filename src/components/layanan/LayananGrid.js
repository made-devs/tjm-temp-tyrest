import KartuLayanan from "@/components/layanan/KartuLayanan";

export default function LayananGrid({ services }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div key={service.slug} className="service-card-wrapper">
          <KartuLayanan service={service} />
        </div>
      ))}
    </div>
  );
}
