'use client';

import { useLangStore } from '@/store/langStore';

export default function ServicesPage() {
  const { lang } = useLangStore();

  const services = [
    {
      cnTitle: '高端礼品跨国贸易',
      deTitle: 'Internationale Geschenkartikel',
      cnDesc: '面向国际市场的特色礼品出口，满足多样商业文化需求。',
      deDesc: 'Export von hochwertigen Geschenkartikeln für internationale Geschäftsanlässe.',
    },
    {
      cnTitle: '食品进出口',
      deTitle: 'Lebensmittelhandel',
      cnDesc: '专注于高标准食品贸易，保障餐饮行业品质与安全。',
      deDesc: 'Handel mit hochwertigen Lebensmitteln – sicher, geprüft und zuverlässig.',
    },
    {
      cnTitle: '海外建材贸易',
      deTitle: 'Baumaterialien-Export',
      cnDesc: '桥接中欧建材供需，服务工程项目及长期合作客户。',
      deDesc: 'Verbindung von Bauangeboten zwischen Europa und China für Großprojekte.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-center">
      <h1 className="text-3xl font-bold text-[#8B3A3A] mb-10">
        {lang === 'cn' ? '我们的服务' : 'Unsere Dienstleistungen'}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((item, idx) => (
          <div key={idx} className="p-6 border rounded shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold mb-2 text-[#8B3A3A]">
              {lang === 'cn' ? item.cnTitle : item.deTitle}
            </h3>
            <p className="text-gray-700">
              {lang === 'cn' ? item.cnDesc : item.deDesc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
